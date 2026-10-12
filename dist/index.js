import { ReactiveEffect as e, Teleport as t, Transition as n, computed as r, createBlock as i, createElementBlock as a, createVNode as o, customRef as s, defineComponent as c, effectScope as l, getCurrentInstance as u, getCurrentScope as d, h as f, hasInjectionContext as p, inject as m, isRef as h, markRaw as g, nextTick as _, onActivated as v, onBeforeMount as y, onBeforeUnmount as b, onBeforeUpdate as x, onDeactivated as S, onMounted as C, onScopeDispose as w, onUnmounted as T, onUpdated as E, openBlock as D, provide as O, reactive as k, ref as A, shallowReactive as j, shallowRef as M, toRaw as N, toValue as P, unref as F, watch as I, withCtx as L, withDirectives as R } from "vue";
import z from "vitepress/theme";
import B from "vitepress/dist/client/theme-default/components/VPNavBarSearch.vue";
//#region node_modules/quasar/dist/quasar.client.js
var V = null;
function H() {
	return V === null ? V = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {} : V;
}
typeof __QUASAR_SSR__ != "boolean" && (H().__QUASAR_SSR__ = !1), typeof __QUASAR_SSR_CLIENT__ != "boolean" && (H().__QUASAR_SSR_CLIENT__ = !1), typeof __QUASAR_SSR_PWA__ != "boolean" && (H().__QUASAR_SSR_PWA__ = !1);
function U(e, t, n, r) {
	return Object.defineProperty(e, t, {
		get: n,
		set: r,
		enumerable: !0
	}), e;
}
function ee(e, t) {
	for (let n in t) U(e, n, t[n]);
	return e;
}
var W = A(__QUASAR_SSR_CLIENT__ && (!__QUASAR_SSR_PWA__ || "serverRendered" in document.body.dataset)), G, te = 512;
function K(e) {
	return typeof e == "string" ? e.slice(0, te).toLowerCase() : "";
}
var ne = /(?:^|\s)version\/([\w.]+)/, re = /(?:^|\s)applewebkit\/[\w.]+/, q = /(?:^|\s)safari\/[\w.]+/;
function J(e) {
	let t = ne.exec(e);
	return t !== null && re.test(e) && q.test(e) ? {
		browser: "safari",
		version: t[1]
	} : null;
}
var ie = /(edg|edga|edgios)\/([\w.]+)/, ae = /(opr)[\/]([\w.]+)/, oe = /(vivaldi)[\/]([\w.]+)/, se = /(chrome|crios)[\/]([\w.]+)/, ce = /(firefox|fxios)[\/]([\w.]+)/, le = /(webkit)[\/]([\w.]+)/;
function ue(e, t) {
	let n = ie.exec(e) || ae.exec(e) || oe.exec(e) || se.exec(e);
	if (n === null) {
		let r = J(e);
		if (r !== null) return {
			...r,
			platform: t[0] || ""
		};
		n = ce.exec(e) || le.exec(e) || [];
	}
	return {
		browser: n[5] || n[3] || n[1] || "",
		version: n[4] || n[2] || "0",
		platform: t[0] || ""
	};
}
var de = /(ipad)/, fe = /(ipod)/, pe = /(iphone)/, me = /(android)/, he = /(win)/, ge = /(mac)/, _e = /(linux)/, ve = /(cros)/;
function ye(e) {
	return de.exec(e) || fe.exec(e) || pe.exec(e) || me.exec(e) || he.exec(e) || ge.exec(e) || _e.exec(e) || ve.exec(e) || [];
}
var be = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function xe(e) {
	let t = K(e), n = ue(t, ye(t)), r = {
		mobile: !1,
		desktop: !1,
		cordova: !1,
		capacitor: !1,
		nativeMobile: !1,
		electron: !1,
		bex: !1,
		linux: !1,
		mac: !1,
		win: !1,
		cros: !1,
		chrome: !1,
		firefox: !1,
		opera: !1,
		safari: !1,
		vivaldi: !1,
		edge: !1,
		webkit: !1,
		android: !1,
		ios: !1,
		ipad: !1,
		iphone: !1,
		ipod: !1
	};
	n.browser && (r[n.browser] = !0, r.version = n.version, r.versionNumber = Number.parseInt(n.version, 10)), n.platform && (r[n.platform] = !0);
	let i = r.android || r.ios || r.ipad || r.iphone || r.ipod;
	if (i === !0 || t.includes("mobile") ? r.mobile = !0 : r.desktop = !0, r.edga || r.edgios || r.edg ? (r.edge = !0, n.browser = "edge") : r.crios ? (r.chrome = !0, n.browser = "chrome") : r.fxios && (r.firefox = !0, n.browser = "firefox"), (r.ipod || r.ipad || r.iphone) && (r.ios = !0), r.vivaldi &&= (n.browser = "vivaldi", !0), (r.chrome || r.opr || r.safari || r.vivaldi || r.mobile && !r.ios && !i) && (r.webkit = !0), r.opr && (n.browser = "opera", r.opera = !0), r.name = n.browser, r.platform = n.platform, t.includes("electron")) r.electron = !0;
	else if (document.location.href.includes("-extension://")) r.bex = !0;
	else {
		if (window.Capacitor === void 0 ? (window._cordovaNative !== void 0 || window.cordova !== void 0) && (r.cordova = !0, r.nativeMobile = !0, r.nativeMobileWrapper = "cordova") : (r.capacitor = !0, r.nativeMobile = !0, r.nativeMobileWrapper = "capacitor"), W.value && (G = { is: { ...r } }), be && r.mac && (r.desktop && r.safari || r.nativeMobile && !r.android && !r.ios && !r.ipad)) {
			delete r.mac, delete r.desktop;
			let e = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
			Object.assign(r, {
				mobile: !0,
				ios: !0,
				platform: e,
				[e]: !0
			});
		}
		!r.mobile && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete r.desktop, r.mobile = !0);
	}
	return r;
}
var Se = navigator.userAgent, Ce = {
	has: {
		touch: !1,
		webStorage: !1
	},
	within: { iframe: !1 }
}, Y = {
	userAgent: Se,
	is: xe(Se),
	has: { touch: be },
	within: { iframe: window.self !== window.top }
}, we = { install(e) {
	let { $q: t } = e;
	W.value ? (e.onSSRHydrated.push(() => {
		Object.assign(t.platform, Y), W.value = !1;
	}), t.platform = k(this)) : t.platform = this;
} };
{
	let e;
	U(Y.has, "webStorage", () => {
		if (e !== void 0) return e;
		try {
			if (window.localStorage) return e = !0, !0;
		} catch {}
		return e = !1, !1;
	}), Object.assign(we, Y), W.value && (Object.assign(we, G, Ce), G = null);
}
function X(e) {
	return g(c(e));
}
function Te(e) {
	return g(e);
}
var Ee = (e, t) => {
	let n = k(e);
	for (let r in e) U(t, r, () => n[r], (e) => {
		n[r] = e;
	});
	return t;
}, De = {
	hasPassive: !0,
	passive: { passive: !0 },
	notPassive: { passive: !1 },
	passiveCapture: {
		passive: !0,
		capture: !0
	},
	notPassiveCapture: {
		passive: !1,
		capture: !0
	}
};
function Oe() {}
function ke(e) {
	return e.button === 0;
}
function Ae(e) {
	return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), {
		top: e.clientY,
		left: e.clientX
	};
}
function je(e) {
	e.stopPropagation();
}
function Me(e) {
	e.cancelable !== !1 && e.preventDefault();
}
function Z(e) {
	e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function Ne(e, t) {
	if (e === void 0 || t && e.__dragPrevented) return;
	t ? e.__dragPrevented = !0 : delete e.__dragPrevented;
	let n = t ? (e) => {
		e.__dragPrevented = !0, e.addEventListener("dragstart", Me, De.notPassiveCapture);
	} : (e) => {
		delete e.__dragPrevented, e.removeEventListener("dragstart", Me, De.notPassiveCapture);
	};
	e.querySelectorAll("a, img").forEach(n);
}
function Pe(e, t, n) {
	let r = `__q_${t}_evt`;
	e[r] = [...e[r] ?? [], ...n], n.forEach((t) => {
		t[0].addEventListener(t[1], e[t[2]], De[t[3]]);
	});
}
function Fe(e, t) {
	let n = `__q_${t}_evt`;
	e[n] !== void 0 && (e[n].forEach((t) => {
		t[0].removeEventListener(t[1], e[t[2]], De[t[3]]);
	}), e[n] = void 0);
}
function Ie(e) {
	if (Object(e) === e) {
		let t = e.trailing ?? !0;
		return {
			leading: e.leading,
			trailing: t,
			maxWait: t && typeof e.maxWait == "number" ? e.maxWait : void 0
		};
	}
	return e ? {
		leading: !0,
		trailing: !1
	} : {
		leading: !1,
		trailing: !0
	};
}
function Le(e, t = 250, n) {
	let { leading: r, trailing: i, maxWait: a } = Ie(n), o = null, s = null, c, l = null;
	function u() {
		let t = c, n = l;
		c = void 0, l = null, h.isPending = !1, e.apply(t, n);
	}
	function d() {
		o !== null && (clearTimeout(o), o = null);
	}
	function f() {
		s !== null && (clearTimeout(s), s = null);
	}
	function p() {
		o = null, f(), l !== null && u();
	}
	function m() {
		s = null, d(), l !== null && u();
	}
	function h(...n) {
		let u = o === null;
		d(), o = setTimeout(p, t), u && (a !== void 0 && (s = setTimeout(m, a)), r) ? e.apply(this, n) : i && (c = this, l = n, h.isPending = !0);
	}
	return h.isPending = !1, h.cancel = () => {
		d(), f(), c = void 0, l = null, h.isPending = !1;
	}, h.flush = () => {
		l !== null && (d(), f(), u());
	}, h;
}
var Re = [
	"sm",
	"md",
	"lg",
	"xl"
], { passive: ze } = De, Be = /*#__PURE__*/ Ee({
	width: 0,
	height: 0,
	name: "xs",
	sizes: {
		sm: 600,
		md: 1024,
		lg: 1440,
		xl: 1920
	},
	lt: {
		sm: !0,
		md: !0,
		lg: !0,
		xl: !0
	},
	gt: {
		xs: !1,
		sm: !1,
		md: !1,
		lg: !1
	},
	xs: !0,
	sm: !1,
	md: !1,
	lg: !1,
	xl: !1,
	orientation: {
		type: "portrait-primary",
		angle: 0,
		portrait: !0,
		landscape: !1
	}
}, {
	setSizes: Oe,
	setDebounce: Oe,
	install({ $q: e, onSSRHydrated: t }) {
		if (e.screen = this, this.__installed) {
			e.config.screen !== void 0 && (e.config.screen.bodyClasses ? this.__update(!0) : document.body.classList.remove(`screen--${this.name}`));
			return;
		}
		let { visualViewport: n } = window, r = n || window, i = document.scrollingElement || document.documentElement, a = n === void 0 || Y.is.mobile ? () => [Math.max(window.innerWidth, i.clientWidth), Math.max(window.innerHeight, i.clientHeight)] : () => [n.width * n.scale + window.innerWidth - i.clientWidth, n.height * n.scale + window.innerHeight - i.clientHeight], o = e.config.screen?.bodyClasses === !0;
		this.__update = (e) => {
			let [t, n] = a();
			if (n !== this.height && (this.height = n), t !== this.width) this.width = t;
			else if (e !== !0) return;
			let r = this.sizes;
			this.gt.xs = t >= r.sm, this.gt.sm = t >= r.md, this.gt.md = t >= r.lg, this.gt.lg = t >= r.xl, this.lt.sm = t < r.sm, this.lt.md = t < r.md, this.lt.lg = t < r.lg, this.lt.xl = t < r.xl, this.xs = this.lt.sm, this.sm = this.gt.xs && this.lt.md, this.md = this.gt.sm && this.lt.lg, this.lg = this.gt.md && this.lt.xl, this.xl = this.gt.lg, r = this.xs && "xs" || this.sm && "sm" || this.md && "md" || this.lg && "lg" || "xl", r !== this.name && (o && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${r}`)), this.name = r);
		};
		let s, c = {}, l = 16;
		this.setSizes = (e) => {
			Re.forEach((t) => {
				e[t] !== void 0 && (c[t] = e[t]);
			});
		}, this.setDebounce = (e) => {
			l = e;
		};
		let u = () => {
			let e = getComputedStyle(document.body);
			e.getPropertyValue("--q-size-sm") && Re.forEach((t) => {
				this.sizes[t] = Number.parseInt(e.getPropertyValue(`--q-size-${t}`), 10);
			}), this.setSizes = (e) => {
				Re.forEach((t) => {
					e[t] && (this.sizes[t] = e[t]);
				}), this.__update(!0);
			}, this.setDebounce = (e) => {
				s !== void 0 && (s.flush?.(), r.removeEventListener("resize", s, ze)), s = e > 0 ? Le(this.__update, e) : this.__update, r.addEventListener("resize", s, ze);
			}, this.setDebounce(l), Object.keys(c).length === 0 ? this.__update() : (this.setSizes(c), c = void 0), o && this.name === "xs" && document.body.classList.add("screen--xs");
			let { orientation: t } = window.screen;
			if (t !== void 0) {
				let e = () => {
					let { type: e, angle: n } = t, r = e.startsWith("portrait");
					Object.assign(this.orientation, {
						type: e,
						angle: n,
						portrait: r,
						landscape: !r
					});
				};
				e(), t.addEventListener("change", e, ze);
			}
		};
		W.value ? t.push(u) : u();
	}
}), Ve = "data-dark-auto", Q = /*#__PURE__*/ Ee({
	isActive: !1,
	mode: !1
}, {
	__media: void 0,
	set(e) {
		Q.mode = e, e === "auto" ? (Q.__media === void 0 && (Q.__media = window.matchMedia("(prefers-color-scheme: dark)"), Q.__updateMedia = () => {
			Q.set("auto");
		}, Q.__media.addListener(Q.__updateMedia)), e = Q.__media.matches) : Q.__media !== void 0 && (Q.__media.removeListener(Q.__updateMedia), Q.__media = void 0), Q.isActive = e === !0, document.body.classList.remove(`body--${e === !0 ? "light" : "dark"}`), document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`);
	},
	toggle() {
		Q.set(!Q.isActive);
	},
	install({ $q: e, ssrContext: t, onSSRHydrated: n }) {
		if (e.dark = this, !this.__installed) {
			if (W.value) {
				if (document.body.hasAttribute(Ve)) {
					this.mode = "auto", n.push(() => {
						document.body.removeAttribute(Ve), this.mode === "auto" && this.set("auto");
					});
					return;
				}
				this.set(document.body.classList.contains("body--dark"));
			} else this.set(e.config.dark ?? !1);
		}
	}
});
function He(e, t, n = document.body) {
	if (typeof e != "string") throw TypeError("Expected a string as propName");
	if (typeof t != "string") throw TypeError("Expected a string as value");
	if (!(n instanceof Element)) throw TypeError("Expected a DOM element");
	n.style.setProperty(`--q-${e}`, t);
}
var Ue = !1;
function We(e) {
	Ue = e.isComposing === !0;
}
function Ge(e) {
	return Ue || e !== Object(e) || e.isComposing || e.qKeyEvent;
}
function Ke(e, t) {
	return !Ge(e) && (Array.isArray(t) ? t.includes(e.keyCode) : t === e.keyCode);
}
function qe(e) {
	if (e.ios) return "ios";
	if (e.android) return "android";
}
function Je({ is: e, has: t, within: n }, r) {
	let i = [e.desktop ? "desktop" : "mobile", `${t.touch ? "" : "no-"}touch`];
	if (e.mobile) {
		let t = qe(e);
		t !== void 0 && i.push("platform-" + t);
	}
	if (e.nativeMobile) {
		let t = e.nativeMobileWrapper, n = r[t];
		i.push(t, "native-mobile"), e.ios && (n === void 0 || n.iosStatusBarPadding) ? i.push("q-ios-padding") : e.android && (n === void 0 || n.androidStatusBarPadding !== !1) && i.push("q-safe-area-padding");
	} else e.electron ? i.push("electron") : e.bex && i.push("bex");
	return n.iframe && i.push("within-iframe"), i;
}
function Ye() {
	let { is: e } = Y, t = document.body.className, n = new Set(t.replaceAll(/ {2}/g, " ").split(" "));
	if (!e.nativeMobile && !e.electron && !e.bex) {
		if (e.desktop) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop");
		else if (e.mobile) {
			n.delete("desktop"), n.add("mobile"), n.delete("platform-ios"), n.delete("platform-android");
			let t = qe(e);
			t !== void 0 && n.add(`platform-${t}`);
		}
	}
	Y.has.touch && (n.delete("no-touch"), n.add("touch")), Y.within.iframe && n.add("within-iframe");
	let r = [...n].join(" ");
	t !== r && (document.body.className = r);
}
function Xe(e) {
	for (let t in e) He(t, e[t]);
}
var Ze = { install(e) {
	if (!this.__installed) {
		if (W.value) Ye();
		else {
			let { $q: t } = e;
			t.config.brand !== void 0 && Xe(t.config.brand), document.body.classList.add(...Je(Y, t.config));
		}
		Y.is.ios && document.body.addEventListener("touchstart", Oe), window.addEventListener("keydown", We, !0);
	}
} }, Qe = () => !0;
function $e(e) {
	return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function et(e) {
	return e.startsWith("#") && (e = e.slice(1)), e.startsWith("/") || (e = "/" + e), e.endsWith("/") && (e = e.slice(0, -1)), "#" + e;
}
function tt(e) {
	if (e.backButtonExit === !1) return () => !1;
	if (e.backButtonExit === "*") return Qe;
	let t = ["#/"];
	return Array.isArray(e.backButtonExit) && t.push(...e.backButtonExit.filter($e).map(et)), () => t.includes(window.location.hash);
}
var nt = {
	__history: [],
	add: Oe,
	remove: Oe,
	install({ $q: e }) {
		if (this.__installed) return;
		let { cordova: t, capacitor: n } = Y.is;
		if (!t && !n) return;
		let r = e.config[t ? "cordova" : "capacitor"];
		if (r?.backButton === !1 || n && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
		this.add = (e) => {
			e.condition === void 0 && (e.condition = Qe), this.__history.push(e);
		}, this.remove = (e) => {
			let t = this.__history.indexOf(e);
			t !== -1 && this.__history.splice(t, 1);
		};
		let i = tt({
			backButtonExit: !0,
			...r
		}), a = () => {
			if (this.__history.length !== 0) {
				let e = this.__history.at(-1);
				e.condition() && (this.__history.pop(), e.handler());
			} else i() ? navigator.app.exitApp() : window.history.back();
		};
		t ? document.addEventListener("deviceready", () => {
			document.addEventListener("backbutton", a, !1);
		}) : window.Capacitor.Plugins.App.addListener("backButton", a);
	}
}, rt = {
	isoName: "en-US",
	nativeName: "English (US)",
	label: {
		clear: "Clear",
		ok: "OK",
		cancel: "Cancel",
		close: "Close",
		set: "Set",
		select: "Select",
		reset: "Reset",
		remove: "Remove",
		update: "Update",
		create: "Create",
		search: "Search",
		filter: "Filter",
		refresh: "Refresh",
		minimum: "Minimum",
		maximum: "Maximum",
		range: "Range",
		noValue: "No value",
		resize: "Resize",
		expand: (e) => e ? `Expand "${e}"` : "Expand",
		collapse: (e) => e ? `Collapse "${e}"` : "Collapse"
	},
	date: {
		days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		firstDayOfWeek: 0,
		format24h: !1,
		pluralDay: "days",
		prevMonth: "Previous month",
		nextMonth: "Next month",
		prevYear: "Previous year",
		nextYear: "Next year",
		today: "Today",
		prevRangeYears: (e) => `Previous ${e} years`,
		nextRangeYears: (e) => `Next ${e} years`,
		hour: "Hour",
		minute: "Minute",
		second: "Second",
		now: "Current time"
	},
	table: {
		noData: "No data available",
		noResults: "No matching records found",
		loading: "Loading...",
		selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.",
		recordsPerPage: "Records per page:",
		allRows: "All",
		pagination: (e, t, n) => e + "–" + t + " of " + n,
		columns: "Columns",
		selectAllRows: "Select all rows",
		selectRow: "Select row"
	},
	pagination: {
		label: "Pagination",
		first: "First page",
		prev: "Previous page",
		next: "Next page",
		last: "Last page"
	},
	carousel: {
		prevSlide: "Previous slide",
		nextSlide: "Next slide"
	},
	colorPicker: {
		spectrum: "Spectrum",
		tune: "Tune",
		palette: "Palette",
		value: "Color value",
		hue: "Hue",
		alpha: "Opacity",
		saturation: "Saturation",
		brightness: "Brightness"
	},
	uploader: {
		addFiles: "Pick files",
		upload: "Upload files",
		abort: "Abort upload",
		removeQueued: "Remove queued files",
		removeUploaded: "Remove uploaded files",
		removeFile: "Remove file"
	},
	editor: {
		toolbar: "Editor toolbar",
		url: "URL",
		bold: "Bold",
		italic: "Italic",
		strikethrough: "Strikethrough",
		underline: "Underline",
		unorderedList: "Unordered List",
		orderedList: "Ordered List",
		subscript: "Subscript",
		superscript: "Superscript",
		hyperlink: "Hyperlink",
		toggleFullscreen: "Toggle Fullscreen",
		quote: "Quote",
		left: "Left align",
		center: "Center align",
		right: "Right align",
		justify: "Justify align",
		print: "Print",
		outdent: "Decrease indentation",
		indent: "Increase indentation",
		removeFormat: "Remove formatting",
		formatting: "Formatting",
		fontSize: "Font Size",
		align: "Align",
		hr: "Insert Horizontal Rule",
		undo: "Undo",
		redo: "Redo",
		heading1: "Heading 1",
		heading2: "Heading 2",
		heading3: "Heading 3",
		heading4: "Heading 4",
		heading5: "Heading 5",
		heading6: "Heading 6",
		paragraph: "Paragraph",
		code: "Code",
		size1: "Very small",
		size2: "A bit small",
		size3: "Normal",
		size4: "Medium-large",
		size5: "Big",
		size6: "Very big",
		size7: "Maximum",
		defaultFont: "Default Font",
		viewSource: "View Source"
	},
	tree: {
		noNodes: "No nodes available",
		noResults: "No matching nodes found"
	}
};
function it(e) {
	return e.split(/[-_]/).map((e, t) => t === 0 ? e.toLowerCase() : t > 1 || e.length < 4 ? e.toUpperCase() : e[0].toUpperCase() + e.slice(1).toLowerCase());
}
function at() {
	let e = Array.isArray(navigator.languages) && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
	if (typeof e == "string") return it(e).join("-");
}
function ot(e) {
	try {
		let { language: t, script: n, region: r } = new Intl.Locale(e).maximize();
		return {
			language: t,
			script: n,
			region: r
		};
	} catch {}
}
function st(e, t) {
	if (typeof e != "string" || !Array.isArray(t)) return;
	let n = /* @__PURE__ */ new Map();
	for (let e of t) {
		if (typeof e != "string") continue;
		let t = e.toLowerCase().replaceAll("_", "-");
		n.has(t) || n.set(t, e);
	}
	if (n.size === 0) return;
	let r = it(e), i = [];
	for (let e = r.length; e > 1; e--) i.push(r.slice(0, e).join("-"));
	if (r.length > 2 && r[1].length === 4) {
		let e = [r[0], ...r.slice(2)];
		for (let t = e.length; t > 1; t--) i.push(e.slice(0, t).join("-"));
	}
	i.push(r[0]);
	for (let e of i) {
		let t = n.get(e.toLowerCase());
		if (t !== void 0) return t;
	}
	let a = ot(r.join("-"));
	if (a === void 0) return;
	let o = ot(a.language).region, s;
	for (let [e, t] of n) {
		let n = ot(e);
		if (n === void 0 || n.language !== a.language) continue;
		let r = (n.script === a.script ? 4 : 0) + (n.region === a.region ? 2 : 0) + +(n.region === o), i = e.split("-").length;
		(s === void 0 || r > s.score || r === s.score && i < s.depth) && (s = {
			tag: t,
			score: r,
			depth: i
		});
	}
	return s?.tag;
}
var ct = /*#__PURE__*/ Ee({ __qLang: {} }, {
	getLocale: at,
	getClosestIsoName: st,
	set(e = rt, t) {
		let n = {
			...e,
			rtl: e.rtl === !0,
			getLocale: at,
			getClosestIsoName: st
		};
		if (n.set = ct.set, ct.__langConfig === void 0 || !ct.__langConfig.noHtmlAttrs) {
			let e = document.documentElement;
			e.setAttribute("dir", n.rtl ? "rtl" : "ltr"), e.setAttribute("lang", n.isoName);
		}
		for (let e of Object.keys(ct.__qLang)) e in n || delete ct.__qLang[e];
		Object.assign(ct.__qLang, n);
	},
	install({ $q: e, lang: t, ssrContext: n }) {
		e.lang = ct.__qLang, ct.__langConfig = e.config.lang, this.__installed ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, {
			get: Reflect.get,
			ownKeys(e) {
				return Reflect.ownKeys(e).filter((e) => e !== "set" && e !== "getLocale" && e !== "getClosestIsoName");
			}
		}), this.set(t || rt));
	}
}), lt = {
	name: "material-icons",
	type: {
		positive: "check_circle",
		negative: "warning",
		info: "info",
		warning: "priority_high"
	},
	arrow: {
		up: "arrow_upward",
		right: "arrow_forward",
		down: "arrow_downward",
		left: "arrow_back",
		dropdown: "arrow_drop_down"
	},
	chevron: {
		left: "chevron_left",
		right: "chevron_right"
	},
	colorPicker: {
		spectrum: "gradient",
		tune: "tune",
		palette: "style"
	},
	pullToRefresh: { icon: "refresh" },
	carousel: {
		left: "chevron_left",
		right: "chevron_right",
		up: "keyboard_arrow_up",
		down: "keyboard_arrow_down",
		navigationIcon: "lens"
	},
	chip: {
		remove: "cancel",
		selected: "check"
	},
	datetime: {
		arrowLeft: "chevron_left",
		arrowRight: "chevron_right",
		now: "access_time",
		today: "today"
	},
	editor: {
		bold: "format_bold",
		italic: "format_italic",
		strikethrough: "strikethrough_s",
		underline: "format_underlined",
		unorderedList: "format_list_bulleted",
		orderedList: "format_list_numbered",
		subscript: "vertical_align_bottom",
		superscript: "vertical_align_top",
		hyperlink: "link",
		toggleFullscreen: "fullscreen",
		quote: "format_quote",
		left: "format_align_left",
		center: "format_align_center",
		right: "format_align_right",
		justify: "format_align_justify",
		print: "print",
		outdent: "format_indent_decrease",
		indent: "format_indent_increase",
		removeFormat: "format_clear",
		formatting: "text_format",
		fontSize: "format_size",
		align: "format_align_left",
		hr: "remove",
		undo: "undo",
		redo: "redo",
		heading: "format_size",
		code: "code",
		size: "format_size",
		font: "font_download",
		viewSource: "code"
	},
	expansionItem: {
		icon: "keyboard_arrow_down",
		denseIcon: "arrow_drop_down"
	},
	fab: {
		icon: "add",
		activeIcon: "close"
	},
	field: {
		clear: "cancel",
		error: "error"
	},
	pagination: {
		first: "first_page",
		prev: "keyboard_arrow_left",
		next: "keyboard_arrow_right",
		last: "last_page"
	},
	rating: { icon: "grade" },
	stepper: {
		done: "check",
		active: "edit",
		error: "warning"
	},
	tabs: {
		left: "chevron_left",
		right: "chevron_right",
		up: "keyboard_arrow_up",
		down: "keyboard_arrow_down"
	},
	table: {
		arrowUp: "arrow_upward",
		warning: "warning",
		firstPage: "first_page",
		prevPage: "chevron_left",
		nextPage: "chevron_right",
		lastPage: "last_page"
	},
	tree: { icon: "play_arrow" },
	uploader: {
		done: "done",
		clear: "clear",
		add: "add_box",
		upload: "cloud_upload",
		removeQueue: "clear_all",
		removeUploaded: "done_all"
	}
}, ut = /*#__PURE__*/ Ee({
	iconMapFn: null,
	__qIconSet: {}
}, {
	set(e, t) {
		let n = { ...e };
		n.set = ut.set, Object.assign(ut.__qIconSet, n);
	},
	install({ $q: e, iconSet: t, ssrContext: n }) {
		e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, U(e, "iconMapFn", () => this.iconMapFn, (e) => {
			this.iconMapFn = e;
		}), this.__installed ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, {
			get: Reflect.get,
			ownKeys(e) {
				return Reflect.ownKeys(e).filter((e) => e !== "set");
			}
		}), this.set(t || lt));
	}
}), dt = "_q_l_", ft = "_q_li_", pt = "_q_fo_", mt = "_q_tabs_", ht = "_q_u_";
function gt() {}
function _t(e) {
	return e.constructor === ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
function vt(e, t, n) {
	return typeof e == "function" && e !== n && typeof t == "function" && t !== n;
}
function yt(e, t) {
	if (e === t) return !0;
	if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
		if (e.constructor !== t.constructor) return !1;
		let n, r;
		if (e.constructor === Array) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!yt(e[r], t[r])) return !1;
			return !0;
		}
		if (e.constructor === Map) {
			if (e.size !== t.size) return !1;
			let n = e.entries();
			for (r = n.next(); !r.done;) {
				if (!t.has(r.value[0])) return !1;
				r = n.next();
			}
			for (n = e.entries(), r = n.next(); !r.done;) {
				if (!yt(r.value[1], t.get(r.value[0]))) return !1;
				r = n.next();
			}
			return !0;
		}
		if (e.constructor === Set) {
			if (e.size !== t.size) return !1;
			let n = e.entries();
			for (r = n.next(); !r.done;) {
				if (!t.has(r.value[0])) return !1;
				r = n.next();
			}
			return !0;
		}
		if (e.constructor === ArrayBuffer || e.constructor === DataView) {
			if (e.byteLength !== t.byteLength) return !1;
			e = _t(e), t = _t(t);
		}
		if (ArrayBuffer.isView(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (e[r] !== t[r]) return !1;
			return !0;
		}
		if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
		if (vt(e.valueOf, t.valueOf, Object.prototype.valueOf)) return e.valueOf() === t.valueOf();
		if (vt(e.toString, t.toString, Object.prototype.toString)) return e.toString() === t.toString();
		let i = Object.keys(e).filter((t) => e[t] !== void 0);
		if (n = i.length, n !== Object.keys(t).filter((e) => t[e] !== void 0).length) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!yt(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function bt(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function xt(e) {
	return Object.prototype.toString.call(e) === "[object Date]";
}
function St(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
var Ct = {}, wt = !1;
function Tt() {
	wt = !0;
}
var Et = [
	we,
	Ze,
	Q,
	Be,
	nt,
	ct,
	ut
];
function Dt(e, t) {
	t.forEach((t) => {
		t.install(e), t.__installed = !0;
	});
}
function Ot(e, t, n) {
	e.config.globalProperties.$q = n.$q, e.provide("_q_", n.$q), Dt(n, Et), t.components !== void 0 && Object.values(t.components).forEach((t) => {
		bt(t) && t.name !== void 0 && e.component(t.name, t);
	}), t.directives !== void 0 && Object.values(t.directives).forEach((t) => {
		bt(t) && t.name !== void 0 && e.directive(t.name, t);
	}), t.plugins !== void 0 && Dt(n, Object.values(t.plugins).filter((e) => typeof e.install == "function" && !Et.includes(e))), W.value && (n.$q.onSSRHydrated = () => {
		n.onSSRHydrated.forEach((e) => {
			e();
		}), n.$q.onSSRHydrated = () => {};
	});
}
var kt = function(e, t = {}) {
	let n = { version: "2.35.1" };
	wt ? n.config = t.config || {} : (t.config !== void 0 && Object.assign(Ct, t.config), n.config = { ...Ct }, Tt()), Ot(e, t, {
		parentApp: e,
		$q: n,
		lang: t.lang,
		iconSet: t.iconSet,
		onSSRHydrated: []
	});
};
function At() {
	return u()?.appContext.config.globalProperties.$q ?? m("_q_");
}
var jt = [
	"B",
	"KB",
	"MB",
	"GB",
	"TB",
	"PB"
];
function Mt(e, t = 1) {
	let n = 0;
	for (; Number.parseInt(e, 10) >= 1024 && n < jt.length - 1;) e /= 1024, ++n;
	return `${e.toFixed(t)}${jt[n]}`;
}
function Nt(e, t, n) {
	return n <= t ? t : Math.min(n, Math.max(t, e));
}
function Pt(e, t, n) {
	if (n <= t) return t;
	let r = n - t + 1, i = t + (e - t) % r;
	return i < t && (i = r + i), i === 0 ? 0 : i;
}
function Ft(e, t = 2, n = "0") {
	return e == null ? e : String(e).padStart(t, n);
}
XMLHttpRequest.prototype.open;
var It = {
	xs: 18,
	sm: 24,
	md: 32,
	lg: 38,
	xl: 46
}, Lt = { size: String };
function Rt(e) {
	let t = /* @__PURE__ */ new Map();
	return (n) => {
		if (n === void 0) return null;
		let r = t.get(n);
		return r === void 0 && (t.size > 500 && t.clear(), r = { fontSize: n in e ? `${e[n]}px` : n }, t.set(n, r)), r;
	};
}
var zt = /*#__PURE__*/ Rt(It);
function Bt(e, t) {
	return e === void 0 ? t : e() || t;
}
function Vt(e, t) {
	if (e !== void 0) {
		let t = e();
		if (t != null) return [...t];
	}
	return t;
}
function Ht(e, t) {
	return e === void 0 ? t : t.concat(e());
}
function Ut(e, t) {
	return e === void 0 ? t : t === void 0 ? e() : t.concat(e());
}
var Wt = "0 0 24 24", Gt = {
	"mdi-": "mdi ",
	"icon-": "",
	"fa-": "",
	"bt-": "bt ",
	"eva-": "eva ",
	"iconfont ": "",
	"ti-": "themify-icon ",
	"bi-": "bootstrap-icons ",
	"i-": ""
}, Kt = Object.keys(Gt), qt = {
	o_: "-outlined",
	r_: "-round",
	s_: "-sharp"
}, Jt = {
	sym_o_: "-outlined",
	sym_r_: "-rounded",
	sym_s_: "-sharp"
};
function Yt(e) {
	let t = e.codePointAt(0);
	if (t !== 102 && t !== 108 || e.codePointAt(1) !== 97) return !1;
	let n = e.codePointAt(2);
	return n === 32 || e.codePointAt(3) === 32 && (n === 115 || n === 114 || n === 108 || n === 98 || n === 100 || n === 107);
}
function Xt(e) {
	return e === 32 || e >= 9 && e <= 13 || e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function Zt(e) {
	let t = e.codePointAt(0);
	if (t !== 77 && t !== 109) return !1;
	let n = 1, r = e.codePointAt(n);
	return Xt(r) && (r = e.codePointAt(++n)), (r === 43 || r === 45) && (r = e.codePointAt(++n)), r === 46 && (r = e.codePointAt(++n)), r >= 48 && r <= 57;
}
var Qt = { cls: "" }, $t = { "aria-hidden": "true" };
function en(e, t) {
	if (e.startsWith("img:")) return {
		cls: "",
		img: !0,
		src: e.slice(4)
	};
	if (e.startsWith("svguse:")) {
		let [t, n] = e.split("|");
		return {
			cls: "",
			svguse: !0,
			src: t.slice(7),
			viewBox: n || Wt
		};
	}
	if (e.startsWith("ion-")) return { cls: " ionicons " + (e.startsWith("ion-md") || e.startsWith("ion-ios") || e.startsWith("ion-logo") ? e : `ion-${t ? "ios" : "md"}${e.slice(3)}`) };
	if (e.startsWith("sym_")) {
		let t = Jt[e.slice(0, 6)];
		if (t !== void 0) return {
			cls: " notranslate material-symbols" + t,
			content: e.slice(6),
			ligature: !0
		};
	}
	for (let t of Kt) if (e.startsWith(t)) return { cls: ` ${Gt[t]}${e}` };
	if (Yt(e)) return { cls: " " + e };
	if (Zt(e)) {
		let [t, n] = e.split("|");
		return {
			cls: "",
			svg: !0,
			viewBox: n || Wt,
			nodes: t.split("&&").map((e) => {
				let [t, n, r] = e.split("@@");
				return {
					d: t,
					style: n,
					transform: r
				};
			})
		};
	}
	let n = " notranslate material-icons", r = qt[e.slice(0, 2)];
	return r === void 0 ? {
		cls: n,
		content: e,
		ligature: !0
	} : {
		cls: n + r,
		content: e.slice(2),
		ligature: !0
	};
}
var tn = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new Map();
function rn(e, t) {
	let n = t ? nn : tn, r = n.get(e);
	return r === void 0 && (n.size > 1e3 && n.clear(), r = en(e, t), n.set(e, r)), r;
}
var an = /* @__PURE__ */ new WeakMap();
function on(e, t, n) {
	let r = an.get(e);
	r === void 0 && (r = /* @__PURE__ */ new Map(), an.set(e, r));
	let i = (n === !0 ? "ios;" : "md;") + t, a = r.get(i);
	if (a === void 0) {
		r.size > 1e3 && r.clear();
		let o = e(t);
		if (o === void 0) a = rn(t, n);
		else if (o.icon !== void 0) a = o.icon === "none" || !o.icon ? Qt : rn(o.icon, n);
		else {
			let { cls: e, content: t } = o;
			a = {
				cls: e === void 0 ? "" : " " + e,
				content: t,
				ligature: t !== void 0 && t.trim().length !== 0
			};
		}
		r.set(i, a);
	}
	return a;
}
var sn = /*#__PURE__*/ X({
	name: "QIcon",
	props: {
		...Lt,
		tag: {
			type: String,
			default: "i"
		},
		name: String,
		color: String,
		left: Boolean,
		right: Boolean
	},
	setup(e, { slots: t }) {
		let n = At(), r = n.platform.is.ios, i = null, a = Qt, o = null;
		return () => {
			let s = e.name;
			(s !== i || n.iconMapFn !== o) && (i = s, o = n.iconMapFn, a = s === "none" || !s ? Qt : o === null ? rn(s, r) : on(o, s, r));
			let c = a, l = {
				"aria-hidden": "true",
				class: "q-icon" + (e.left ? " on-left" : "") + (e.right ? " on-right" : "") + (e.color === void 0 ? "" : ` text-${e.color}`) + c.cls
			};
			return e.size !== void 0 && (l.style = zt(e.size)), c.content === void 0 ? c.img ? f(e.tag, l, Ht(t.default, [f("img", { src: c.src })])) : c.svg ? f(e.tag, l, Ht(t.default, [f("svg", { viewBox: c.viewBox }, c.nodes.map((e) => f("path", e)))])) : c.svguse ? f(e.tag, l, Ht(t.default, [f("svg", { viewBox: c.viewBox }, [f("use", { "xlink:href": c.src })])])) : f(e.tag, l, Bt(t.default)) : f(e.tag, l, Ht(t.default, [c.ligature ? f("span", $t, c.content) : c.content]));
		};
	}
});
({ ...Lt });
var $ = { dark: {
	type: Boolean,
	default: null
} };
function cn(e, t) {
	return () => e.dark === null ? t.dark.isActive : e.dark;
}
var ln = /*#__PURE__*/ X({
	name: "QBanner",
	props: {
		...$,
		inlineActions: Boolean,
		dense: Boolean,
		rounded: Boolean
	},
	setup(e, { slots: t }) {
		let n = cn(e, At()), i = r(() => "q-banner row items-center" + (e.dense ? " q-banner--dense" : "") + (n() ? " q-banner--dark q-dark" : "") + (e.rounded ? " rounded-borders" : "")), a = r(() => `q-banner__actions row items-center justify-end col-${e.inlineActions ? "auto" : "all"}`);
		return () => {
			let n = [f("div", { class: "q-banner__avatar col-auto row items-center self-start" }, Bt(t.avatar)), f("div", { class: "q-banner__content col text-body2" }, Bt(t.default))], r = Bt(t.action);
			return r !== void 0 && n.push(f("div", { class: a.value }, r)), f("div", {
				class: i.value + (!e.inlineActions && r !== void 0 ? " q-banner--top-padding" : ""),
				role: "alert"
			}, n);
		};
	}
});
({ ...$ });
var un = {
	left: "start",
	center: "center",
	right: "end",
	between: "between",
	around: "around",
	evenly: "evenly",
	stretch: "stretch"
}, dn = Object.keys(un), fn = { align: {
	type: String,
	validator: (e) => dn.includes(e)
} };
function pn(e) {
	return () => {
		let t = e.align === void 0 ? e.vertical ? "stretch" : "left" : e.align;
		return `${e.vertical ? "items" : "justify"}-${un[t]}`;
	};
}
function mn(e) {
	if (Object(e.$parent) === e.$parent) return e.$parent;
	let { parent: t } = e.$;
	for (; Object(t) === t;) {
		if (Object(t.proxy) === t.proxy) return t.proxy;
		t = t.parent;
	}
}
function hn(e) {
	return e.appContext.config.globalProperties.$router !== void 0;
}
function gn(e) {
	return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function _n(e, t) {
	let n = e === void 0 ? t === null ? null : t.proxy.$el : P(e);
	if (n == null) return null;
	let r = n.$el ?? n;
	return r.nodeType === 1 ? r : null;
}
({ ...fn });
function vn(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function yn(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function bn(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!Array.isArray(i) || i.length !== r.length || r.some((e, t) => e !== i[t])) return !1;
	}
	return !0;
}
function xn(e, t) {
	return Array.isArray(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function Sn(e, t) {
	return Array.isArray(e) ? xn(e, t) : Array.isArray(t) ? xn(t, e) : e === t;
}
function Cn(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (!Sn(e[n], t[n])) return !1;
	return !0;
}
var wn = {
	to: [String, Object],
	replace: Boolean,
	href: String,
	target: String,
	disable: Boolean
}, Tn = {
	...wn,
	exact: Boolean,
	activeClass: {
		type: String,
		default: "q-router-link--active"
	},
	exactActiveClass: {
		type: String,
		default: "q-router-link--exact-active"
	}
}, En = {}, Dn = { value: !1 }, On = { value: null }, kn = { value: "" };
function An({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
	let n = u(), { props: i, proxy: a, emit: o } = n, s = r(() => !i.disable && i.href !== void 0);
	if (!hn(n)) return {
		hasRouterLink: Dn,
		hasHrefLink: s,
		hasLink: s,
		linkTag: r(() => i.type === "a" || s.value ? "a" : i.tag || e || "div"),
		resolvedLink: On,
		linkIsActive: Dn,
		linkIsExactActive: Dn,
		linkClass: kn,
		linkAttrs: r(() => s.value ? {
			href: i.href,
			target: i.target
		} : En),
		getLink: () => null,
		navigateToRouterLink(e) {
			return e.preventDefault(), Promise.resolve(!1);
		},
		navigateOnClick(e) {
			o("click", e);
		}
	};
	let c = r(t ? () => !i.disable && !s.value && i.to !== void 0 && i.to !== null && i.to !== "" : () => !s.value && i.to !== void 0 && i.to !== null && i.to !== ""), l = r(() => c.value ? y(i.to) : null), d = r(() => l.value !== null), f = r(() => s.value || d.value), p = r(() => i.type === "a" || f.value ? "a" : i.tag || e || "div"), m = r(() => s.value ? {
		href: i.href,
		target: i.target
	} : d.value ? {
		href: l.value.href,
		target: i.target
	} : En), h = r(() => {
		if (!d.value) return -1;
		let { matched: e } = l.value, { length: t } = e, n = e[t - 1];
		if (n === void 0) return -1;
		let r = a.$route.matched;
		if (r.length === 0) return -1;
		let i = r.findIndex(yn.bind(null, n));
		if (i !== -1) return i;
		let o = vn(e[t - 2]);
		return t > 1 && vn(n) === o && r.at(-1).path !== o ? r.findIndex(yn.bind(null, e[t - 2])) : i;
	}), g = r(() => d.value && h.value !== -1 && bn(a.$route.params, l.value.params)), _ = r(() => g.value && h.value === a.$route.matched.length - 1 && Cn(a.$route.params, l.value.params)), v = r(() => d.value ? _.value ? ` ${i.exactActiveClass} ${i.activeClass}` : i.exact ? "" : g.value ? ` ${i.activeClass}` : "" : "");
	function y(e) {
		try {
			return a.$router.resolve(e);
		} catch {}
		return null;
	}
	function b(e, { returnRouterError: t, to: n = i.to, replace: r = i.replace } = {}) {
		if (i.disable) return e.preventDefault(), Promise.resolve(!1);
		if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== void 0 && e.button !== 0 || i.target === "_blank") return Promise.resolve(!1);
		e.preventDefault();
		let o = a.$router[r ? "replace" : "push"](n);
		return t ? o : o.then(() => {}).catch(() => {});
	}
	function x(e) {
		if (d.value) {
			let t = (t) => b(e, t);
			o("click", e, t), e.defaultPrevented || t();
		} else o("click", e);
	}
	return {
		hasRouterLink: d,
		hasHrefLink: s,
		hasLink: f,
		linkTag: p,
		resolvedLink: l,
		linkIsActive: g,
		linkIsExactActive: _,
		linkClass: v,
		linkAttrs: m,
		getLink: y,
		navigateToRouterLink: b,
		navigateOnClick: x
	};
}
({ ...Tn });
var jn = {
	size: {
		type: [String, Number],
		default: "1em"
	},
	color: String
};
function Mn(e) {
	return e in It ? `${It[e]}px` : e;
}
function Nn(e, t) {
	return "q-spinner" + (t ? ` q-spinner-${t}` : "") + (e ? ` text-${e}` : "");
}
var Pn = /*#__PURE__*/ X({
	name: "QSpinner",
	props: {
		...jn,
		thickness: {
			type: Number,
			default: 5
		}
	},
	setup(e) {
		return () => {
			let t = Mn(e.size);
			return f("svg", {
				class: Nn(e.color, "mat"),
				width: t,
				height: t,
				viewBox: "0 0 50 50"
			}, [f("circle", {
				class: "path",
				cx: "25",
				cy: "25",
				r: "20",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": e.thickness,
				"stroke-miterlimit": "10"
			})]);
		};
	}
});
function Fn(e, t) {
	let n = e.style;
	for (let e in t) n[e] = t[e];
}
function In(e) {
	if (e == null) return;
	if (typeof e == "string") try {
		return document.querySelector(e) || void 0;
	} catch {
		return;
	}
	let t = F(e);
	if (t) return t.$el || t;
}
function Ln(e, t) {
	if (e == null || e.contains(t)) return !0;
	for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) if (n.contains(t)) return !0;
	return !1;
}
var Rn = 50, zn = 100, Bn = 300, { passive: Vn } = De, Hn = [
	[],
	[["click", Wn], ["keyup", Gn]],
	[
		["pointerdown", Wn],
		["pointercancel", Kn],
		["pointerleave", Kn],
		["keydown", Gn]
	]
];
function Un(e, t, n, r) {
	n.stop && je(e);
	let i = n.color, a = n.center || r === !0, o = document.createElement("span"), s = document.createElement("span"), c = Ae(e), { left: l, top: u, width: d, height: f } = t.getBoundingClientRect(), p = Math.hypot(d, f), m = p / 2, h = `${(d - p) / 2}px`, g = a ? h : `${c.left - l - m}px`, _ = `${(f - p) / 2}px`, v = a ? _ : `${c.top - u - m}px`;
	s.className = "q-ripple__inner", Fn(s, {
		height: `${p}px`,
		width: `${p}px`,
		transform: `translate(${g},${v}) scale(.2)`,
		opacity: 0
	}), o.className = `q-ripple${i ? " text-" + i : ""}`, o.setAttribute("dir", "ltr"), o.append(s), t.append(o);
	let y, b = 0, x = () => {
		o.remove();
		let e = n.ripples.indexOf(w);
		e !== -1 && n.ripples.splice(e, 1);
	}, S = () => {
		b = 2, s.classList.remove("q-ripple__inner--enter"), s.classList.add("q-ripple__inner--leave"), s.style.opacity = 0, y = setTimeout(x, 275);
	}, C = () => {
		b = 1, s.classList.add("q-ripple__inner--enter"), s.style.transform = `translate(${h},${_}) scale(1)`, s.style.opacity = .2, y = setTimeout(S, 250);
	}, w = {
		pointerId: e.type === "pointerdown" ? e.pointerId : null,
		abort() {
			clearTimeout(y), o.remove();
		},
		cancel() {
			w.pointerId = null, b !== 2 && (clearTimeout(y), b === 0 ? x() : S());
		}
	};
	n.ripples.push(w), y = setTimeout(C, e.type === "pointerdown" && e.pointerType === "touch" ? zn : Rn);
}
function Wn(e) {
	if (!e.qSkipRipple) {
		let t = e.currentTarget;
		Un(e, t, t.__qripple, e.qKeyEvent === !0);
	}
}
function Gn(e) {
	let t = e.currentTarget, n = t.__qripple;
	if (!e.qSkipRipple && Ke(e, n.keyCodes)) {
		let r = Date.now();
		r - n.keyTime >= Bn && (n.keyTime = r, Un(e, t, n, !0));
	}
}
function Kn(e) {
	if (e.type === "pointerleave" && e.buttons === 0) return;
	let { ripples: t } = e.currentTarget.__qripple;
	for (let n = t.length - 1; n >= 0; n--) {
		let r = t[n];
		r.pointerId === e.pointerId && r.cancel();
	}
}
function qn(e, t) {
	return e !== t && (e.early !== t.early || e.stop !== t.stop || e.center !== t.center);
}
function Jn(e, { modifiers: t, value: n, arg: r }) {
	let i = {
		...e.cfg,
		...t,
		...n
	}, a = i.keyCodes || 13;
	e.arg = r, e.modifiers = t, e.early = i.early === !0, e.stop = i.stop === !0, e.center = i.center === !0, e.color = i.color || r, e.keyCodes = Array.isArray(a) ? a.flat() : a;
}
function Yn(e, t) {
	let n = t.enabled ? t.early ? 2 : 1 : 0;
	if (n !== t.bound) {
		for (let [n, r] of Hn[t.bound]) e.removeEventListener(n, r, Vn);
		for (let [t, r] of Hn[n]) e.addEventListener(t, r, Vn);
		t.bound = n;
	}
}
var Xn = /*#__PURE__*/ Te({
	name: "ripple",
	beforeMount(e, t) {
		let n = t.instance.$.appContext.config.globalProperties.$q.config || {};
		if (n.ripple === !1) return;
		let r = {
			cfg: n.ripple,
			enabled: t.value !== !1,
			arg: void 0,
			modifiers: void 0,
			early: !1,
			stop: !1,
			center: !1,
			color: void 0,
			keyCodes: 13,
			keyTime: 0,
			bound: 0,
			ripples: []
		};
		Jn(r, t), e.__qripple = r, Yn(e, r);
	},
	updated(e, t) {
		let n = e.__qripple;
		if (n === void 0) return;
		let { value: r, oldValue: i, arg: a, modifiers: o } = t;
		n.enabled = r !== !1, n.enabled && (r !== i || a !== n.arg || qn(o, n.modifiers)) && Jn(n, t), Yn(e, n);
	},
	beforeUnmount(e) {
		let t = e.__qripple;
		t !== void 0 && (t.ripples.forEach((e) => {
			e.abort();
		}), t.enabled = !1, Yn(e, t), e.__qripple = void 0);
	}
}), Zn = {
	none: 0,
	xs: 4,
	sm: 8,
	md: 16,
	lg: 24,
	xl: 32
}, Qn = /*#__PURE__*/ Rt({
	xs: 8,
	sm: 10,
	md: 14,
	lg: 20,
	xl: 24
}), $n = [
	"button",
	"submit",
	"reset"
], er = /[^\s]\/[^\s]/, tr = [
	"flat",
	"outline",
	"push",
	"unelevated"
];
function nr(e, t) {
	return e.flat ? "flat" : e.outline ? "outline" : e.push ? "push" : e.unelevated ? "unelevated" : t;
}
function rr(e) {
	let t = nr(e);
	return t === void 0 ? {} : { [t]: !0 };
}
var ir = {
	...Lt,
	...wn,
	type: {
		type: String,
		default: "button"
	},
	label: [Number, String],
	icon: String,
	iconRight: String,
	...tr.reduce((e, t) => (e[t] = Boolean) && e, {}),
	square: Boolean,
	rounded: Boolean,
	glossy: Boolean,
	size: String,
	fab: Boolean,
	fabMini: Boolean,
	padding: String,
	color: String,
	textColor: String,
	noCaps: Boolean,
	noWrap: Boolean,
	dense: Boolean,
	tabindex: [Number, String],
	ripple: {
		type: [Boolean, Object],
		default: !0
	},
	align: {
		...fn.align,
		default: "center"
	},
	stack: Boolean,
	stretch: Boolean,
	loading: {
		type: Boolean,
		default: null
	},
	disable: Boolean
}, ar = {
	...ir,
	round: Boolean
};
function or(e) {
	let t = pn(e), { hasRouterLink: n, hasLink: i, linkTag: a, linkAttrs: o, navigateOnClick: s } = An({ fallbackTag: "button" }), c = r(() => {
		let t = e.fab || e.fabMini ? {} : Qn(e.size);
		return e.padding === void 0 ? t : {
			...t,
			padding: e.padding.split(/\s+/).map((e) => e in Zn ? Zn[e] + "px" : e).join(" "),
			minWidth: "0",
			minHeight: "0"
		};
	}), l = r(() => e.rounded || e.fab || e.fabMini), u = r(() => !e.disable && !e.loading), d = r(() => u.value ? e.tabindex || 0 : -1), f = r(() => nr(e, "standard")), p = r(() => {
		let t = { tabindex: d.value };
		return i.value ? Object.assign(t, o.value) : $n.includes(e.type) && (t.type = e.type), a.value === "a" ? (e.disable && (t["aria-disabled"] = "true"), t.href === void 0 && (t.role = "button"), !n.value && er.test(e.type) && (t.type = e.type)) : e.disable && (t.disabled = "", t["aria-disabled"] = "true"), e.loading && e.percentage !== void 0 && Object.assign(t, {
			role: "progressbar",
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			"aria-valuenow": e.percentage
		}), t;
	});
	return {
		classes: r(() => {
			let t;
			e.color === void 0 ? e.textColor && (t = `text-${e.textColor}`) : t = e.flat || e.outline ? `text-${e.textColor || e.color}` : `bg-${e.color} text-${e.textColor || "white"}`;
			let n = e.round ? "round" : `rectangle${l.value ? " q-btn--rounded" : e.square ? " q-btn--square" : ""}`;
			return `q-btn--${f.value} q-btn--${n}` + (t === void 0 ? "" : " " + t) + (u.value ? " q-btn--actionable q-focusable q-hoverable" : e.disable ? " disabled" : "") + (e.fab ? " q-btn--fab" : e.fabMini ? " q-btn--fab-mini" : "") + (e.noCaps ? " q-btn--no-uppercase" : "") + (e.dense ? " q-btn--dense" : "") + (e.stretch ? " no-border-radius self-stretch" : "") + (e.glossy ? " glossy" : "") + (e.square ? " q-btn--square" : "");
		}),
		style: c,
		innerClasses: r(() => t() + (e.stack ? " column" : " row") + (e.noWrap ? " no-wrap text-no-wrap" : "") + (e.loading ? " q-btn__content--hidden" : "")),
		attributes: p,
		hasLink: i,
		linkTag: a,
		navigateOnClick: s,
		isActionable: u
	};
}
var { passiveCapture: sr } = De, cr = null, lr = null, ur = null;
function dr(e) {
	Z(e), e.qSkipRipple = !0;
}
var fr = /*#__PURE__*/ X({
	name: "QBtn",
	props: {
		...ar,
		percentage: Number,
		darkPercentage: Boolean,
		onTouchstart: [Function, Array]
	},
	emits: [
		"click",
		"keydown",
		"mousedown",
		"keyup"
	],
	setup(e, { slots: t, emit: i }) {
		let { proxy: a } = u(), o = At(), { classes: s, style: c, innerClasses: l, attributes: d, hasLink: p, linkTag: m, navigateOnClick: h, isActionable: g } = or(e), _ = M(null), v = M(null), y = null, x, S = null, C = null, w = r(() => e.label !== void 0 && e.label !== null && e.label !== ""), T = r(() => e.disable || e.ripple === !1 ? !1 : {
			keyCodes: p.value ? [13, 32] : [13],
			...e.ripple === !0 ? {} : e.ripple
		}), E = r(() => ({ center: e.round })), D = r(() => {
			let t = Math.max(0, Math.min(100, e.percentage));
			return t > 0 ? {
				transition: "transform 0.6s",
				transform: `translateX(${t - 100}%)`
			} : {};
		}), O = r(() => {
			if (e.loading) return {
				onMousedown: dr,
				onTouchstart: dr,
				onClick: dr,
				onKeydown: dr,
				onKeyup: dr
			};
			if (g.value) {
				let t = {
					onClick: A,
					onKeydown: j,
					onMousedown: P
				};
				if (o.platform.has.touch) {
					let n = e.onTouchstart === void 0 ? "Passive" : "";
					t[`onTouchstart${n}`] = N;
				}
				return t;
			}
			return { onClick: Z };
		}), k = r(() => ({
			ref: _,
			class: "q-btn q-btn-item non-selectable no-outline " + s.value,
			style: c.value,
			...d.value,
			...O.value
		}));
		function A(t) {
			if (_.value !== null) {
				if (t !== void 0) {
					if (t.defaultPrevented) return;
					let n = document.activeElement;
					if (e.type === "submit" && n !== document.body && !_.value.contains(n) && !n.contains(_.value)) {
						t.qAvoidFocus || _.value.focus();
						let e = () => {
							C = null, document.removeEventListener("keydown", Z, !0), document.removeEventListener("keyup", e, sr), _.value?.removeEventListener("blur", e, sr);
						};
						C = e, document.addEventListener("keydown", Z, !0), document.addEventListener("keyup", e, sr), _.value.addEventListener("blur", e, sr);
					}
				}
				h(t);
			}
		}
		function j(e) {
			_.value !== null && (i("keydown", e), Ke(e, [13, 32]) && lr !== _.value && (lr !== null && I(), e.defaultPrevented || (e.qAvoidFocus || _.value.focus(), lr = _.value, _.value.classList.add("q-btn--active"), document.addEventListener("keyup", F, !0), _.value.addEventListener("blur", F, sr)), Z(e)));
		}
		function N(e) {
			_.value !== null && (i("touchstart", e), !e.defaultPrevented && (cr !== _.value && (cr !== null && I(), cr = _.value, y = e.target, y.addEventListener("touchcancel", F, sr), y.addEventListener("touchend", F, sr)), x = !0, S !== null && clearTimeout(S), S = setTimeout(() => {
				S = null, x = !1;
			}, 200)));
		}
		function P(e) {
			_.value !== null && (e.qSkipRipple = x === !0, i("mousedown", e), !e.defaultPrevented && ur !== _.value && (ur !== null && I(), ur = _.value, _.value.classList.add("q-btn--active"), document.addEventListener("mouseup", F, sr)));
		}
		function F(e) {
			if (_.value !== null) {
				if (e?.type === "keyup") {
					if (lr === _.value && Ke(e, [13, 32])) {
						let t = new MouseEvent("click", e);
						t.qKeyEvent = !0, e.defaultPrevented && Me(t), e.cancelBubble && je(t), _.value.dispatchEvent(t), Z(e), e.qKeyEvent = !0;
					}
					i("keyup", e);
				}
				I();
			}
		}
		function I(e) {
			C?.();
			let t = v.value;
			!e && (cr === _.value || ur === _.value) && t !== null && t !== document.activeElement && (t.setAttribute("tabindex", -1), t.focus({ preventScroll: !0 })), cr === _.value && (y !== null && (y.removeEventListener("touchcancel", F, sr), y.removeEventListener("touchend", F, sr)), cr = y = null), ur === _.value && (document.removeEventListener("mouseup", F, sr), ur = null), lr === _.value && (document.removeEventListener("keyup", F, !0), _.value?.removeEventListener("blur", F, sr), lr = null), _.value?.classList.remove("q-btn--active");
		}
		return b(() => {
			I(!0);
		}), Object.assign(a, { click: (e) => {
			g.value && A(e);
		} }), () => {
			let r = [];
			e.icon !== void 0 && r.push(f(sn, {
				name: e.icon,
				left: !e.stack && w.value,
				role: "img"
			})), w.value && r.push(f("span", { class: "block" }, [e.label])), r = Ht(t.default, r), e.iconRight !== void 0 && !e.round && r.push(f(sn, {
				name: e.iconRight,
				right: !e.stack && w.value,
				role: "img"
			}));
			let i = [f("span", {
				class: "q-focus-helper",
				ref: v
			})];
			return e.loading && e.percentage !== void 0 && i.push(f("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage ? " q-btn__progress--dark" : "") }, [f("span", {
				class: "q-btn__progress-indicator fit block",
				style: D.value
			})])), i.push(f("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + l.value }, r)), e.loading !== null && i.push(f(n, { name: "q-transition--fade" }, () => e.loading ? [f("span", {
				key: "loading",
				class: "absolute-full flex flex-center"
			}, t.loading === void 0 ? [f(Pn)] : t.loading())] : null)), R(f(m.value, k.value, i), [[
				Xn,
				T.value,
				void 0,
				E.value
			]]);
		};
	}
}), pr = /*#__PURE__*/ X({
	name: "QBtnGroup",
	props: {
		unelevated: Boolean,
		outline: Boolean,
		flat: Boolean,
		rounded: Boolean,
		square: Boolean,
		push: Boolean,
		stretch: Boolean,
		glossy: Boolean,
		spread: Boolean,
		vertical: Boolean
	},
	setup(e, { slots: t }) {
		let n = r(() => {
			let t = [
				"unelevated",
				"outline",
				"flat",
				"rounded",
				"square",
				"push",
				"stretch",
				"glossy"
			].filter((t) => e[t]).map((e) => `q-btn-group--${e}`).join(" ");
			return "q-btn-group no-wrap q-btn-group--" + (e.vertical ? "vertical column" : "horizontal row") + (t.length === 0 ? "" : " " + t) + (e.spread ? " q-btn-group--spread" : " inline");
		});
		return () => f("div", { class: n.value }, Bt(t.default));
	}
});
function mr() {
	if (window.getSelection !== void 0) {
		let e = window.getSelection();
		e.empty === void 0 ? e.removeAllRanges !== void 0 && (e.removeAllRanges(), we.is.mobile || e.addRange(document.createRange())) : e.empty();
	} else document.selection !== void 0 && document.selection.empty();
}
var hr = {
	target: {
		type: [
			Boolean,
			String,
			Element
		],
		default: !0
	},
	noParentEvent: Boolean
}, gr = {
	...hr,
	contextMenu: Boolean
}, _r = {
	application: !0,
	button: !0,
	checkbox: !0,
	columnheader: !0,
	combobox: !0,
	gridcell: !0,
	link: !0,
	listbox: !0,
	menuitem: !0,
	menuitemcheckbox: !0,
	menuitemradio: !0,
	row: !0,
	rowheader: !0,
	switch: !0,
	tab: !0,
	treeitem: !0
}, vr = {
	button: !0,
	image: !0,
	reset: !0,
	submit: !0
}, yr = {
	dialog: !0,
	grid: !0,
	listbox: !0,
	menu: !0,
	tree: !0
};
function br(e) {
	let t = e.getAttribute("role")?.trim();
	if (t) return Object.hasOwn(_r, t.split(/\s+/)[0]);
	let n = e.tagName;
	return n === "BUTTON" || n === "A" && e.hasAttribute("href") || n === "INPUT" && Object.hasOwn(vr, e.type);
}
function xr({ showing: e, avoidEmit: t, configureAnchorEl: n, getPopupRole: r }) {
	let { props: i, proxy: a, emit: o } = u(), s = M(null), c = null, l = !1, d = !1, f = null, p = !1, m = !1, h = { check(e) {
		let t = e.target.closest(i.target);
		t !== null && y(t);
	} };
	function g() {
		m = !0, Pe(h, "pending", [[
			document,
			"pointerover",
			"check",
			"passiveCapture"
		], [
			document,
			"focusin",
			"check",
			"passiveCapture"
		]]);
	}
	function v() {
		m && (m = !1, Fe(h, "pending"));
	}
	function y(e) {
		v(), s.value = e, n(), E();
	}
	function x() {
		if (!m) return !1;
		let e = document.querySelector(i.target);
		return e !== null && (y(e), !0);
	}
	function S(e) {
		return s.value === null && !x() ? !1 : e === void 0 || e.touches === void 0 || e.touches.length <= 1;
	}
	let w = {};
	n === void 0 && (Object.assign(w, {
		hide(e) {
			e?.pointerType !== "touch" && (p = !1, a.hide(e));
		},
		toggle(e) {
			a.toggle(e), e.qAnchorHandled = !0;
		},
		toggleKey(e) {
			Ke(e, 13) && w.toggle(e);
		},
		contextClick(e) {
			p ? (p = !1, Me(e)) : (a.hide(e), Me(e), _(() => {
				a.show(e), e.qAnchorHandled = !0;
			}));
		},
		touchHold(e) {
			if (w.touchHoldCleanup(e), !S(e)) return;
			p = !0, a.hide(e), s.value.classList.add("non-selectable");
			let t = e.target;
			Pe(w, "anchor", [
				[
					t,
					"touchmove",
					"touchHoldCleanup",
					"passive"
				],
				[
					t,
					"touchend",
					"touchHoldCleanup",
					"passive"
				],
				[
					t,
					"touchcancel",
					"touchHoldCleanup",
					"passive"
				]
			]), f = setTimeout(() => {
				f = null, a.show(e), e.qAnchorHandled = !0;
			}, 300);
		},
		touchHoldCleanup(t) {
			s.value.classList.remove("non-selectable"), f !== null && (clearTimeout(f), f = null, p = !1), e.value && t !== void 0 && mr();
		}
	}), I(e, (e) => {
		e || (p = !1);
	}), n = function(e = i.contextMenu) {
		if (i.noParentEvent || s.value === null) return;
		let t = e ? [
			[
				s.value,
				"touchstart",
				"touchHold",
				"passive"
			],
			[
				s.value,
				"pointerdown",
				"hide",
				"passive"
			],
			[
				s.value,
				"contextmenu",
				"contextClick",
				"notPassive"
			]
		] : [[
			s.value,
			"click",
			"toggle",
			"passive"
		], [
			s.value,
			"keyup",
			"toggleKey",
			"passive"
		]];
		!e && i.hover === !0 && t.push([
			s.value,
			"pointerenter",
			"hoverShow",
			"passive"
		], [
			s.value,
			"pointerleave",
			"hoverHide",
			"passive"
		]), Pe(w, "anchor", t);
	});
	function T() {
		Fe(w, "anchor");
	}
	function E() {
		if (r === void 0 || s.value === null || i.contextMenu) return;
		let e = s.value;
		br(e) && (l = !e.hasAttribute("aria-expanded"), d = !e.hasAttribute("aria-haspopup"), (l || d) && (c = e, D()));
	}
	function D() {
		if (c !== null && (l && c.setAttribute("aria-expanded", e.value ? "true" : "false"), d)) {
			let e = r();
			Object.hasOwn(yr, e) ? c.setAttribute("aria-haspopup", e) : c.removeAttribute("aria-haspopup");
		}
	}
	function O() {
		c !== null && (l && c.removeAttribute("aria-expanded"), d && c.removeAttribute("aria-haspopup"), c = null, l = !1, d = !1);
	}
	function k(e) {
		for (s.value = e; s.value.classList.contains("q-anchor--skip");) s.value = s.value.parentNode;
		n();
	}
	function A() {
		if (v(), i.target === !1 || i.target === "" || a.$el.parentNode === null) s.value = null;
		else if (i.target === !0) k(a.$el.parentNode);
		else {
			let e = i.target, t = !1;
			if (typeof i.target == "string") try {
				e = document.querySelector(i.target), t = !0;
			} catch {
				e = void 0;
			}
			e == null ? (s.value = null, t ? (g(), console.warn(`Anchor: target "${i.target}" not found; it gets picked once a matching element is interacted with or the component is shown`)) : console.error(`Anchor: target "${i.target}" not found`)) : (s.value = e.$el || e, n());
		}
		E();
	}
	return I(() => i.contextMenu, (e) => {
		s.value !== null && (T(), n(e), O(), E());
	}), I(() => i.hover, () => {
		s.value !== null && (T(), n());
	}), I(() => i.target, () => {
		s.value !== null && (T(), O()), A();
	}), I(() => i.noParentEvent, (e) => {
		s.value !== null && (e ? T() : n());
	}), r !== void 0 && I(e, D), I(() => i.modelValue, (e) => {
		e === !0 && s.value === null && x();
	}), C(() => {
		A(), !t && i.modelValue && s.value === null && o("update:modelValue", !1);
	}), b(() => {
		f !== null && clearTimeout(f), v(), T(), O();
	}), {
		anchorEl: s,
		canShow: S,
		anchorEvents: w
	};
}
var Sr = {
	modelValue: {
		type: Boolean,
		default: null
	},
	"onUpdate:modelValue": [Function, Array]
}, Cr = [
	"beforeShow",
	"show",
	"beforeHide",
	"hide"
];
function wr({ showing: e, canShow: t, canHide: n, hideOnRouteChange: r, handleShow: i, handleHide: a, handleRouteChange: o, processOnMount: s }) {
	let c = u(), { props: l, emit: d, proxy: f } = c, p;
	function m(t) {
		e.value ? v(t) : h(t);
	}
	function h(e) {
		if (l.disable || e?.qAnchorHandled === !0 || t !== void 0 && !t(e)) return;
		let n = l["onUpdate:modelValue"] !== void 0;
		n && (d("update:modelValue", !0), p = e, _(() => {
			p === e && (p = void 0);
		})), (l.modelValue === null || !n) && g(e);
	}
	function g(t) {
		e.value || (e.value = !0, d("beforeShow", t), i === void 0 ? d("show", t) : i(t));
	}
	function v(e) {
		if (l.disable || n !== void 0 && !n(e)) return;
		let t = l["onUpdate:modelValue"] !== void 0;
		t && (d("update:modelValue", !1), p = e, _(() => {
			p === e && (p = void 0);
		})), (l.modelValue === null || !t) && y(e);
	}
	function y(t) {
		e.value && (e.value = !1, d("beforeHide", t), a === void 0 ? d("hide", t) : a(t));
	}
	function b(t) {
		l.disable && t ? l["onUpdate:modelValue"] !== void 0 && d("update:modelValue", !1) : t === !0 !== e.value && (t ? g : y)(p);
	}
	I(() => l.modelValue, b), r !== void 0 && hn(c) && I(() => f.$route.fullPath, () => {
		r.value && e.value && (o?.(), v());
	}), s && C(() => {
		b(l.modelValue);
	});
	let x = {
		show: h,
		hide: v,
		toggle: m
	};
	return Object.assign(f, x), x;
}
var Tr = [];
function Er(e) {
	return Tr.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function Dr(e, t) {
	do {
		if (e.$options.name === "QMenu") {
			if (e.hide(t), e.$props.separateClosePopup) return mn(e);
		} else if (e.__qPortal) {
			let n = mn(e);
			return n?.$options.name === "QPopupProxy" ? (e.hide(t), n) : e;
		}
		e = mn(e);
	} while (e != null);
}
var Or = [], kr = [], Ar = !1;
function jr(e) {
	Ar = !0, e.focus({ preventScroll: !0 }), Ar = !1;
}
function Mr() {
	return Ar;
}
function Nr(e) {
	kr = kr.filter((t) => t !== e);
}
function Pr(e) {
	Nr(e), kr.push(e);
}
function Fr(e) {
	Nr(e), kr.length === 0 && Or.length !== 0 && (Or.at(-1)(), Or = []);
}
function Ir(e) {
	kr.length === 0 ? e() : Or.push(e);
}
function Lr(e) {
	Or = Or.filter((t) => t !== e);
}
var Rr = [], zr = [], Br = 1, Vr = document.body;
function Hr(e, t, n) {
	let r = document.createElement("div");
	if (r.id = t === void 0 ? e : `q-portal--${t}--${Br++}`, Ct.globalNodes !== void 0) {
		let e = Ct.globalNodes.class;
		e !== void 0 && (r.className = e);
	}
	return (n || Vr).append(r), Rr.push(r), zr.push(t), r;
}
function Ur(e) {
	let t = Rr.indexOf(e);
	t !== -1 && (Rr.splice(t, 1), zr.splice(t, 1)), e.remove();
}
function Wr(e) {
	if (e === Vr) return;
	if (Vr = e, Vr === document.body || zr.reduce((e, t) => t === "dialog" ? e + 1 : e, 0) < 2) {
		Rr.forEach((e) => {
			e.contains(Vr) || Vr.append(e);
		});
		return;
	}
	let t = zr.lastIndexOf("dialog");
	for (let e = 0; e < Rr.length; e++) {
		let n = Rr[e];
		(e === t || zr[e] !== "dialog") && !n.contains(Vr) && Vr.append(n);
	}
}
var Gr = /*#__PURE__*/ X({
	name: "QPortal",
	setup(e, { slots: t }) {
		return () => t.default();
	}
});
function Kr(e) {
	for (e = e.parent; e != null;) {
		if (e.type.name === "QGlobalDialog") return !0;
		if (e.type.name === "QDialog" || e.type.name === "QMenu") return !1;
		e = e.parent;
	}
	return !1;
}
function qr(e) {
	let t = e.parent;
	for (; t != null;) {
		if (t.type.name === "QDialog") {
			let e = t.proxy?.__getAriaModalEl?.();
			if (e != null) return e;
		}
		t = t.parent;
	}
	return null;
}
function Jr(e, n, r, i) {
	let a = A(!1), o = !1, s = null, c = {}, l = i === "dialog" && Kr(e), u = i !== "tooltip", d = !1;
	function p(t) {
		e.vnode.el?.dispatchEvent(new CustomEvent(t, { bubbles: !0 }));
	}
	function m() {
		d && (d = !1, p("popup-hide"));
	}
	function h(t, n) {
		if (t) Fr(c), o = !1;
		else if (o = !0, !a.value) {
			if (!l && s === null) {
				let t = i === "menu" ? qr(e) : null;
				s = Hr(!1, i, t), t !== null && s.classList.add("all-pointer-events");
			}
			a.value = !0, Tr.push(e.proxy), Pr(c), u && !n && (d = !0, p("popup-show"));
		}
	}
	function g(t) {
		if (o = !1, m(), !t) return;
		Fr(c), a.value = !1;
		let n = Tr.indexOf(e.proxy);
		n !== -1 && Tr.splice(n, 1), s !== null && (Ur(s), s = null);
	}
	return b(m), T(() => {
		g(!0);
	}), e.proxy.__qPortal = !0, U(e.proxy, "contentEl", () => n.value), {
		showPortal: h,
		hidePortal: g,
		portalIsActive: a,
		portalIsOpening: () => o,
		renderPortal: () => l ? r() : a.value ? [f(t, { to: s }, f(Gr, r))] : void 0
	};
}
function Yr(e, t) {
	let { proxy: n } = u(), r = null;
	function i(t) {
		r = e.noRefocus || t === !0 ? null : document.activeElement;
	}
	function a(e) {
		r = e || null;
	}
	function o() {
		r = null;
	}
	function s(e) {
		return (e?.type.indexOf("key") === 0 ? r.closest("[tabindex]:not([tabindex^=\"-\"])") : void 0) || r;
	}
	function c(e) {
		if (r === null) return;
		let t = s(e);
		r = null;
		let i = Tr.indexOf(n);
		if (i !== -1) {
			for (let e = Tr.length - 1; e > i; e--) if (Tr[e].__adoptRefocusTarget?.(t, n.contentEl) === !0) return;
		}
		Ir(() => {
			t.isConnected && jr(t);
		});
	}
	function l(e) {
		r !== null && (r.isConnected && jr(s(e)), r = null);
	}
	function d(n, i) {
		return t() ? (!e.noRefocus && (r === null || i?.contains(r) === !0) && (r = n), !0) : !1;
	}
	return {
		captureRefocusTarget: i,
		setRefocusTarget: a,
		clearRefocusTarget: o,
		restoreFocus: c,
		restoreFocusSync: l,
		adoptRefocusTarget: d
	};
}
var Xr = {
	transitionShow: {
		type: String,
		default: "fade"
	},
	transitionHide: {
		type: String,
		default: "fade"
	},
	transitionDuration: {
		type: [String, Number],
		default: 300
	}
}, Zr = /* @__PURE__ */ new Map();
function Qr(e, t = () => {}, n = () => {}) {
	return {
		transitionProps: () => {
			let r = e.transitionShow || t(), i = e.transitionHide || n(), a = `${r}|${i}`, o = Zr.get(a);
			if (o === void 0) {
				Zr.size > 200 && Zr.clear();
				let e = `q-transition--${r}`, t = `q-transition--${i}`;
				o = {
					appear: !0,
					enterFromClass: `${e}-enter-from`,
					enterActiveClass: `${e}-enter-active`,
					enterToClass: `${e}-enter-to`,
					leaveFromClass: `${t}-leave-from`,
					leaveActiveClass: `${t}-leave-active`,
					leaveToClass: `${t}-leave-to`
				}, Zr.set(a, o);
			}
			return o;
		},
		transitionStyle: () => `--q-transition-duration: ${e.transitionDuration}ms`
	};
}
function $r() {
	let e, t = u();
	function n() {
		e = void 0;
	}
	return t !== null && (S(n), b(n)), {
		removeTick: n,
		registerTick(n) {
			e = n, _(() => {
				e === n && ((t === null || !gn(t)) && e(), e = void 0);
			});
		}
	};
}
function ei() {
	let e = A(!1), t = null, n = u();
	function r() {
		t !== null && (clearTimeout(t), t = null, e.value = !1);
	}
	return n !== null && (S(r), b(r)), {
		isTimeoutPending: e,
		removeTimeout: r,
		registerTimeout(i, a) {
			n !== null && gn(n) || (r(), e.value = !0, t = setTimeout(() => {
				t = null, e.value = !1, i();
			}, a));
		}
	};
}
function ti(e) {
	let { registerTimeout: t, removeTimeout: n } = ei(), r = null;
	return S(() => {
		r?.();
	}), {
		registerTimeout: t,
		removeTimeout: n,
		registerTransitionEnd(n) {
			r = () => {
				r = null, n();
			}, t(r, e.transitionDuration);
		}
	};
}
var ni = {
	hover: Boolean,
	hoverDelay: {
		type: Number,
		default: 0
	},
	hoverHideDelay: {
		type: Number,
		default: 150
	}
};
function ri({ props: e, canShow: t, show: n, canHide: r, hide: i }) {
	let { removeTimeout: a, registerTimeout: o } = ei();
	function s(r) {
		e.hover === !0 && r.pointerType !== "touch" && (a(), t(r) && (e.hoverDelay > 0 ? o(() => {
			n(r);
		}, e.hoverDelay) : n(r)));
	}
	function c(t) {
		a(), r(t) && o(() => {
			i(t);
		}, e.hoverHideDelay);
	}
	function l(t) {
		e.hover === !0 && t.pointerType !== "touch" && c(t);
	}
	function u(e) {
		e.pointerType !== "touch" && a();
	}
	return {
		clearHoverTimer: a,
		hoverShow: s,
		hoverHide: l,
		scheduleHoverHide: c,
		onHoverContentEnter: u
	};
}
var ii = [
	"top",
	"center",
	"bottom"
], ai = [
	"left",
	"middle",
	"right",
	"start",
	"end"
], oi = typeof CSS < "u" && navigator.userAgentData?.brands?.some((e) => e.brand === "Chromium") === !0 && CSS.supports("position-anchor: --q") && CSS.supports("justify-self: anchor-center");
function si(e) {
	let t = e.split(" ");
	return t.length === 2 ? ii.includes(t[0]) ? ai.includes(t[1]) ? !0 : (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), !1) : (console.error("Anchor/Self position must start with one of top/center/bottom"), !1) : !1;
}
function ci(e) {
	return !e || e.length === 2 && typeof e[0] == "number" && typeof e[1] == "number";
}
var li = {
	"start#ltr": "left",
	"start#rtl": "right",
	"end#ltr": "right",
	"end#rtl": "left"
};
[
	"left",
	"middle",
	"right"
].forEach((e) => {
	li[`${e}#ltr`] = e, li[`${e}#rtl`] = e;
});
var ui = /* @__PURE__ */ new Map();
function di(e, t) {
	let n = `${e}#${t ? "rtl" : "ltr"}`, r = ui.get(n);
	if (r === void 0) {
		let i = e.split(" ");
		r = {
			vertical: i[0],
			horizontal: li[`${i[1]}#${t ? "rtl" : "ltr"}`]
		}, ui.set(n, r);
	}
	return r;
}
function fi({ el: e, anchorEl: t, anchorOrigin: n, selfOrigin: r, offset: i, cover: a, maxHeight: o, maxWidth: s }) {
	e.style.maxHeight = o || "", e.style.maxWidth = s || "", e.style.visibility = "";
	let { offsetWidth: c, offsetHeight: l } = e, u = getComputedStyle(e), d = t.getBoundingClientRect(), [f, p] = i !== void 0 && a !== !0 ? i : [0, 0], m = {
		top: d.top - p,
		bottom: d.bottom + p,
		center: d.top + (d.bottom - d.top) / 2,
		left: d.left - f,
		right: d.right + f,
		middle: d.left + (d.right - d.left) / 2
	}, { clientWidth: h, clientHeight: g } = document.documentElement, _ = {
		anchorOrigin: n,
		selfOrigin: r,
		maxHeight: null,
		maxWidth: null
	}, v = n.vertical, y = r.vertical, b = n.horizontal, x = r.horizontal, S = !1;
	if (y !== "center") {
		let e = m[v] - (y === "bottom" ? l : 0);
		if (e < 0 || e + l > g) {
			S = !0;
			let [e, t] = v === "center" ? ["center", "center"] : v === y ? ["top", "bottom"] : ["bottom", "top"], n = g - Math.max(0, m[e]), r = Math.min(g, m[t]), i;
			(y === "top" ? n >= r : n > r) ? (v = e, y = "top", i = n) : (v = t, y = "bottom", i = r), _.maxHeight = u.maxHeight === "none" ? `${i}px` : `min(${i}px, ${u.maxHeight})`;
		}
	}
	if (x !== "middle") {
		let e = m[b] - (x === "right" ? c : 0);
		if (e < 0 || e + c > h) {
			S = !0;
			let [e, t] = b === "middle" ? ["middle", "middle"] : b === x ? ["left", "right"] : ["right", "left"], n = h - Math.max(0, m[e]), r = Math.min(h, m[t]), i;
			(x === "left" ? n >= r : n > r) ? (b = e, x = "left", i = n) : (b = t, x = "right", i = r), _.maxWidth = u.maxWidth === "none" ? `${i}px` : `min(${i}px, ${u.maxWidth})`;
		}
	}
	return S && (_.anchorOrigin = {
		vertical: v,
		horizontal: b
	}, _.selfOrigin = {
		vertical: y,
		horizontal: x
	}), _.maxHeight !== null && (e.style.maxHeight = _.maxHeight), _.maxWidth !== null && (e.style.maxWidth = _.maxWidth), _;
}
function pi(e, t) {
	return e === "bottom" || e === "right" ? -t : t;
}
function mi({ el: e, anchorEl: t, point: n, selfOrigin: r, offset: i }) {
	let { offsetWidth: a, offsetHeight: o } = e, s = t.getBoundingClientRect(), { clientWidth: c, clientHeight: l } = document.documentElement, [u = 0, d = 0] = i ?? [], { vertical: f, horizontal: p } = r, m = {
		top: n.top,
		left: n.left
	}, h = !1, g = s.top + n.top + pi(f, d);
	if (f === "center") {
		let e = g - o / 2, t = Math.max(0, Math.min(e, l - o)) - e;
		t !== 0 && (m.top += t, h = !0);
	} else f === "top" && g + o > l ? (f = "bottom", h = !0) : f === "bottom" && g - o < 0 && (f = "top", h = !0);
	let _ = s.left + n.left + pi(p, u);
	if (p === "middle") {
		let e = _ - a / 2, t = Math.max(0, Math.min(e, c - a)) - e;
		t !== 0 && (m.left += t, h = !0);
	} else p === "left" && _ + a > c ? (p = "right", h = !0) : p === "right" && _ - a < 0 && (p = "left", h = !0);
	return h ? {
		selfOrigin: {
			vertical: f,
			horizontal: p
		},
		point: m
	} : null;
}
function hi(e, t, n) {
	e.scrollTop !== t && (e.scrollTop = t), e.scrollLeft !== n && (e.scrollLeft = n);
}
var gi = /* @__PURE__ */ new Map(), _i = 0;
function vi(e) {
	let t = gi.get(e);
	return t === void 0 && (t = {
		name: `--q-pe-${++_i}`,
		count: 0,
		prev: e.style.getPropertyValue("anchor-name")
	}, gi.set(e, t), e.style.setProperty("anchor-name", t.name)), t.count++, t.name;
}
function yi(e) {
	let t = gi.get(e);
	t !== void 0 && (t.count--, t.count === 0 && (gi.delete(e), t.prev === "" ? e.style.removeProperty("anchor-name") : e.style.setProperty("anchor-name", t.prev)));
}
var bi = {
	top: "top",
	center: "center",
	bottom: "bottom",
	left: "left",
	middle: "center",
	right: "right"
};
function xi(e, t) {
	return t === 0 ? `anchor(${e})` : `calc(anchor(${e}) ${t > 0 ? "+" : "-"} ${Math.abs(t)}px)`;
}
function Si(e, { line: t, self: n, offset: r, start: i, end: a, alignProp: o }) {
	if (n === "center" || n === "middle") return t === "center" || t === "middle" ? (e[i] = "0px", e[a] = "0px", e[o] = "anchor-center", !1) : (e[i] = xi(bi[t], 0), !0);
	let s = n === "top" || n === "left", c = t === "center" || t === "middle" ? 0 : (t === "top" || t === "left" ? -1 : 1) * r;
	return s ? e[i] = xi(bi[t], c) : e[a] = xi(bi[t], -c), !1;
}
function Ci({ anchorName: e, anchorOrigin: t, selfOrigin: n, offset: r, point: i, fit: a, cover: o, maxHeight: s, maxWidth: c }) {
	let l = {
		positionAnchor: e,
		top: null,
		right: null,
		bottom: null,
		left: null,
		translate: null,
		alignSelf: null,
		justifySelf: null,
		minWidth: null,
		minHeight: null,
		maxWidth: c || null,
		maxHeight: s || null
	}, u = r !== void 0 && !o ? r[0] : 0, d = r !== void 0 && !o ? r[1] : 0;
	if ((a || o) && (l.minWidth = c == null ? "anchor-size(width)" : `min(anchor-size(width), ${c})`, o && (l.minHeight = s == null ? "anchor-size(height)" : `min(anchor-size(height), ${s})`)), i !== void 0) {
		let e = i.top + pi(n.vertical, d), t = i.left + pi(n.horizontal, u);
		return n.vertical === "bottom" ? l.bottom = xi("top", -e) : l.top = xi("top", e), n.horizontal === "right" ? l.right = xi("left", -t) : l.left = xi("left", t), (n.horizontal === "middle" || n.vertical === "center") && (l.translate = `${n.horizontal === "middle" ? "-50%" : "0px"} ${n.vertical === "center" ? "-50%" : "0px"}`), l;
	}
	let f = Si(l, {
		line: t.vertical,
		self: n.vertical,
		offset: d,
		start: "top",
		end: "bottom",
		alignProp: "alignSelf"
	}), p = Si(l, {
		line: t.horizontal,
		self: n.horizontal,
		offset: u,
		start: "left",
		end: "right",
		alignProp: "justifySelf"
	});
	return (f || p) && (l.translate = `${p ? "-50%" : "0px"} ${f ? "-50%" : "0px"}`), l;
}
function wi(e, { anchorEl: t, innerRef: n, anchorOrigin: i, selfOrigin: a }) {
	let o = null, s = A(""), c = A(null), l = A(null), u = A(null), d = A(!1), f = r(() => {
		if (s.value === "") return "";
		let t = c.value === null ? u.value : null, n = c.value === null ? null : l.value, r = Ci({
			anchorName: s.value,
			anchorOrigin: t === null ? i.value : t.anchorOrigin,
			selfOrigin: n === null ? t === null ? a.value : t.selfOrigin : n.selfOrigin,
			offset: e.offset,
			point: n === null ? c.value ?? void 0 : n.point,
			fit: e.fit,
			cover: e.cover,
			maxHeight: e.maxHeight,
			maxWidth: e.maxWidth
		});
		return t !== null && (t.maxHeight !== null && (r.maxHeight = t.maxHeight), t.maxWidth !== null && (r.maxWidth = t.maxWidth)), d.value || (r.visibility = "hidden"), r;
	}), p = () => {
		o !== t.value && (h(!1), o = t.value, s.value = vi(o));
	}, m = () => {
		if (t.value === null) return;
		p();
		let r = n.value;
		if (r !== null) {
			if (c.value === null) {
				let { scrollTop: n, scrollLeft: o } = r;
				u.value = fi({
					el: r,
					anchorEl: t.value,
					anchorOrigin: i.value,
					selfOrigin: a.value,
					offset: e.offset,
					cover: e.cover,
					maxHeight: e.maxHeight,
					maxWidth: e.maxWidth
				}), hi(r, n, o);
			} else r.style.visibility = "", l.value = mi({
				el: r,
				anchorEl: t.value,
				point: c.value,
				selfOrigin: a.value,
				offset: e.offset
			});
			d.value = !0;
		}
	}, h = (e) => {
		e || (o !== null && (yi(o), o = null), s.value = "");
	};
	return {
		positionStyle: f,
		updatePosition: m,
		handleTick: m,
		releaseAnchor: h,
		setAnchorPoint(e) {
			c.value = e, l.value = null;
		},
		handleShow() {
			c.value = null, l.value = null, u.value = null, d.value = !1, t.value !== null && p();
		}
	};
}
var Ti = /* @__PURE__ */ new Map(), Ei = [];
function Di(e) {
	Ei.push(e);
}
function Oi(e) {
	let t = Ei.indexOf(e);
	t !== -1 && Ei.splice(t, 1);
}
function ki(e) {
	for (let [t, n] of Ti) if (n().contains(e) === !0) return t;
}
function Ai(e, t, n) {
	if (e == null) return !1;
	let r = /* @__PURE__ */ new Set();
	for (let i = ki(t); i !== void 0 && !r.has(i); i = ki(i)) {
		if (n(e, i) === !0) return !0;
		r.add(i);
	}
	return !1;
}
function ji(e, t) {
	return Ai(e, t, Ln);
}
function Mi(e, t) {
	return e.contains(t);
}
function Ni(e, t) {
	return Ai(e, t, Mi);
}
var Pi = /* @__PURE__ */ new Set();
function Fi(e) {
	Pi.forEach((t) => {
		t(e);
	});
}
function Ii(e) {
	document[e]("scroll", Fi, De.passiveCapture), Y.is.ios && (window.visualViewport?.[e]("scroll", Fi, De.passive), window.visualViewport?.[e]("resize", Fi, De.passive));
}
function Li(e) {
	Pi.size === 0 && Ii("addEventListener"), Pi.add(e);
}
function Ri(e) {
	Pi.delete(e) && Pi.size === 0 && Ii("removeEventListener");
}
var zi, Bi;
function Vi({ targetEl: e, anchorEl: t, anchorOrigin: n, selfOrigin: r, offset: i, point: a, fit: o, cover: s, maxHeight: c, maxWidth: l, capHeight: u, capWidth: d, centerShift: f = null }) {
	if (Y.is.ios) {
		let e = document.body.style, { offsetLeft: t = 0, offsetTop: n = 0 } = window.visualViewport ?? {};
		t !== zi && (e.setProperty("--q-pe-left", t + "px"), zi = t), n !== Bi && (e.setProperty("--q-pe-top", n + "px"), Bi = n);
	}
	let p = t.getBoundingClientRect(), m = i !== void 0 && s !== !0, h = m ? i[0] : 0, g = m ? i[1] : 0, _ = {
		visibility: "visible",
		maxHeight: u ?? c,
		maxWidth: d ?? l,
		minWidth: null,
		minHeight: null
	};
	(o === !0 || s === !0) && (_.minWidth = l ? `min(${p.width}px, ${l})` : p.width + "px", s === !0 && (_.minHeight = c ? `min(${p.height}px, ${c})` : p.height + "px")), Object.assign(e.style, _);
	let { offsetWidth: v, offsetHeight: y } = e, { clientWidth: b, clientHeight: x } = document.documentElement, S = {
		top: 0,
		left: 0
	}, C, w;
	if (a !== void 0) C = p.top + a.top + pi(r.vertical, g), w = p.left + a.left + pi(r.horizontal, h);
	else {
		let e = {
			top: p.top - g,
			bottom: p.bottom + g,
			center: p.top + (p.bottom - p.top) / 2,
			left: p.left - h,
			right: p.right + h,
			middle: p.left + (p.right - p.left) / 2
		};
		C = e[n.vertical], w = e[n.horizontal];
	}
	let T = {
		top: "",
		bottom: "",
		left: "",
		right: ""
	}, E = "0", D = "0";
	if (r.vertical === "center") {
		if (a === void 0 && n.vertical === "center") {
			let e = C - y / 2;
			S.top = f === null ? Math.max(0, Math.min(e, x - y)) - e : f.top;
		}
		T.top = C + S.top + "px", D = "-50%";
	} else r.vertical === "bottom" ? T.bottom = x - C + "px" : T.top = C + "px";
	if (r.horizontal === "middle") {
		if (a === void 0 && n.horizontal === "middle") {
			let e = w - v / 2;
			S.left = f === null ? Math.max(0, Math.min(e, b - v)) - e : f.left;
		}
		T.left = w + S.left + "px", E = "-50%";
	} else r.horizontal === "right" ? T.right = b - w + "px" : T.left = w + "px";
	return T.translate = E === "0" && D === "0" ? "" : `${E} ${D}`, Object.assign(e.style, T), S;
}
function Hi(e, t, n) {
	let r = performance.now() + Number(n), i = e(), a = i === null ? null : i.getBoundingClientRect(), o = requestAnimationFrame(function n() {
		if (o = null, i = e(), i === null || !i.isConnected) return;
		let s = i.getBoundingClientRect();
		a !== null && (s.top !== a.top || s.left !== a.left || s.width !== a.width || s.height !== a.height) && t(), a = s, performance.now() < r && (o = requestAnimationFrame(n));
	});
	return () => {
		o !== null && (cancelAnimationFrame(o), o = null);
	};
}
function Ui(e, { anchorEl: t, innerRef: n, showing: r, anchorOrigin: i, selfOrigin: a, trackContent: o }) {
	let s, c, l = null, u = null, d = null, f = null, p = 0, m = () => {
		if (n.value === null || t.value === null) return;
		let r = l === null ? d : null, o = l === null ? null : u;
		f = Vi({
			targetEl: n.value,
			anchorEl: t.value,
			anchorOrigin: r === null ? i.value : r.anchorOrigin,
			selfOrigin: o === null ? r === null ? a.value : r.selfOrigin : o.selfOrigin,
			offset: e.offset,
			point: o === null ? l ?? void 0 : o.point,
			fit: e.fit,
			cover: e.cover,
			maxHeight: e.maxHeight,
			maxWidth: e.maxWidth,
			capHeight: r === null ? null : r.maxHeight,
			capWidth: r === null ? null : r.maxWidth,
			centerShift: f
		});
	}, h = () => {
		let r = n.value;
		if (r === null || t.value === null) return;
		if (r.offsetWidth === 0 || r.offsetHeight === 0) {
			p < 5 && (p++, setTimeout(h, 10));
			return;
		}
		p = 0;
		let { scrollTop: o, scrollLeft: s } = r;
		l === null ? (d = null, f = null, m(), d = fi({
			el: r,
			anchorEl: t.value,
			anchorOrigin: i.value,
			selfOrigin: a.value,
			offset: e.offset,
			cover: e.cover,
			maxHeight: e.maxHeight,
			maxWidth: e.maxWidth
		})) : (u = null, f = null, m(), u = mi({
			el: r,
			anchorEl: t.value,
			point: l,
			selfOrigin: a.value,
			offset: e.offset
		})), f = null, m(), hi(r, o, s);
	}, g = (e) => {
		n.value !== null && (!(e.target instanceof Node) || !n.value.contains(e.target)) && m();
	}, v = () => {
		_(() => {
			requestAnimationFrame(() => {
				r.value && t.value !== null && t.value.isConnected && m();
			});
		});
	};
	return {
		positionStyle: { value: "" },
		track: m,
		updatePosition: h,
		setAnchorPoint(e) {
			l = e, u = null;
		},
		handleShow() {
			l = null, u = null, d = null, f = null, p = 0, Di(v), Li(g);
		},
		handleTick() {
			o && (s?.disconnect(), s = void 0, n.value !== null && (s = new MutationObserver(m), s.observe(n.value, {
				attributes: !1,
				childList: !0,
				characterData: !0,
				subtree: !0
			}))), h(), c = Hi(() => t.value, m, e.transitionDuration);
		},
		releaseAnchor(e) {
			s !== void 0 && (s.disconnect(), s = void 0), c !== void 0 && (c(), c = void 0), Oi(v), e || (Ri(g), l = null, u = null, d = null, f = null);
		}
	};
}
function Wi({ props: e, $q: t, anchorEl: n, innerRef: r, showing: i, anchorOrigin: a, selfOrigin: o, trackContent: s = !1, viaCssAnchor: c = oi }) {
	let l, u = (c ? wi : Ui)(e, {
		anchorEl: n,
		innerRef: r,
		showing: i,
		anchorOrigin: a,
		selfOrigin: o,
		trackContent: s
	});
	return {
		viaCssAnchor: c,
		positionStyle: u.positionStyle,
		updatePosition: u.updatePosition,
		handleTick: u.handleTick,
		track: u.track,
		handleShow(r) {
			if (u.handleShow(), r !== void 0 && n.value !== null) {
				let e = Ae(r);
				if (e.left !== void 0) {
					let { top: t, left: r } = n.value.getBoundingClientRect();
					u.setAnchorPoint({
						left: e.left - r,
						top: e.top - t
					});
				}
			}
			l === void 0 && (l = I([n, () => `${t.screen.width}|${t.screen.height}|${e.self}|${e.anchor}|${t.lang.rtl}`], () => {
				i.value && u.updatePosition();
			}));
		},
		releaseAnchor(e) {
			l !== void 0 && (l(), l = void 0), u.releaseAnchor(e);
		}
	};
}
var Gi = [], Ki;
function qi(e) {
	e.keyCode === 27 && (Ki = !0);
}
function Ji() {
	Ki &&= !1;
}
function Yi(e) {
	Ki && Ke(e, 27) && (Ki = !1, Gi.at(-1)(e));
}
function Xi(e) {
	window[e]("keydown", qi), window[e]("blur", Ji), window[e]("keyup", Yi), Ki = !1;
}
function Zi(e) {
	Gi.push(e), Gi.length === 1 && Xi("addEventListener");
}
function Qi(e) {
	let t = Gi.indexOf(e);
	t !== -1 && (Gi.splice(t, 1), Gi.length === 0 && Xi("removeEventListener"));
}
var $i = [];
function ea(e) {
	$i.at(-1)(e);
}
function ta(e) {
	$i.push(e), $i.length === 1 && document.body.addEventListener("focusin", ea);
}
function na(e) {
	let t = $i.indexOf(e);
	t !== -1 && ($i.splice(t, 1), $i.length === 0 && document.body.removeEventListener("focusin", ea));
}
var ra = null, { notPassiveCapture: ia, passiveCapture: aa } = De, oa = [];
function sa(e) {
	ra !== null && (clearTimeout(ra), ra = null);
	let t = e.target;
	if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events")) return;
	let n = null, r = !1;
	for (let e = Tr.length - 1; e >= 0; e--) {
		let t = Tr[e].$, i = t.type.name;
		if (i !== "QTooltip") {
			if (i === "QDialog") {
				if (t.props.seamless !== !0) {
					if (r === !1) return;
					n = new Set(Tr.slice(e + 1).map((e) => e.contentEl));
					break;
				}
			} else r = !0;
		}
	}
	for (let r = oa.length - 1; r >= 0; r--) {
		let i = oa[r];
		if (n !== null && !n.has(i.innerRef.value)) return;
		if ((i.anchorEl.value === null || !i.anchorEl.value.contains(t) && !Ni(i.anchorEl.value, t)) && (t === document.body || i.innerRef.value !== null && !i.innerRef.value.contains(t) && !Ni(i.innerRef.value, t))) e.qClickOutside = !0, i.onClickOutside(e);
		else return;
	}
}
function ca(e) {
	e.pointerType !== "touch" && (ra !== null && clearTimeout(ra), ra = setTimeout(() => {
		ra = null, sa(e);
	}, 0));
}
function la(e) {
	oa.push(e), oa.length === 1 && (document.addEventListener("pointerdown", ca, aa), document.addEventListener("mousedown", sa, ia), document.addEventListener("touchstart", sa, ia));
}
function ua(e) {
	let t = oa.indexOf(e);
	t !== -1 && (oa.splice(t, 1), oa.length === 0 && (ra !== null && (clearTimeout(ra), ra = null), document.removeEventListener("pointerdown", ca, aa), document.removeEventListener("mousedown", sa, ia), document.removeEventListener("touchstart", sa, ia)));
}
var da = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex^=\"-\"])", fa = /*#__PURE__*/ X({
	name: "QMenu",
	inheritAttrs: !1,
	props: {
		...gr,
		...Sr,
		...$,
		...Xr,
		persistent: Boolean,
		autoClose: Boolean,
		separateClosePopup: Boolean,
		noEscDismiss: Boolean,
		noRouteDismiss: Boolean,
		noRefocus: Boolean,
		noFocus: Boolean,
		fit: Boolean,
		cover: Boolean,
		square: Boolean,
		anchor: {
			type: String,
			validator: si
		},
		self: {
			type: String,
			validator: si
		},
		offset: {
			type: Array,
			validator: ci
		},
		touchPosition: Boolean,
		...ni,
		maxHeight: {
			type: String,
			default: null
		},
		maxWidth: {
			type: String,
			default: null
		}
	},
	emits: [
		...Cr,
		"click",
		"escapeKey"
	],
	setup(e, { slots: t, emit: i, attrs: a }) {
		let o, s = !1, c = u(), { proxy: l } = c, d = At(), p = M(null), m = A(!1), h = r(() => !e.persistent && !e.noRouteDismiss), g = cn(e, d), { registerTick: _, removeTick: v } = $r(), { registerTransitionEnd: y } = ti(e), { transitionProps: x, transitionStyle: S } = Qr(e), { anchorEl: C, canShow: w, anchorEvents: T } = xr({
			showing: m,
			getPopupRole: () => a.role
		}), { show: E, hide: D } = wr({
			showing: m,
			canShow: w,
			canHide(e) {
				return s && L() ? e?.type !== "click" : !0;
			},
			handleShow: ie,
			handleHide: ae,
			handleRouteChange: oe,
			hideOnRouteChange: h,
			processOnMount: !0
		}), { clearHoverTimer: O, hoverShow: k, scheduleHoverHide: j, onHoverContentEnter: N } = ri({
			props: e,
			canShow: () => !m.value,
			show: E,
			canHide: (e) => m.value && !q(e.relatedTarget),
			hide: D
		});
		Object.assign(T, {
			hoverShow: k,
			hoverHide: J
		});
		let { showPortal: P, hidePortal: F, portalIsOpening: L, renderPortal: R } = Jr(c, p, fe, "menu"), { captureRefocusTarget: z, clearRefocusTarget: B, restoreFocus: V, restoreFocusSync: H, adoptRefocusTarget: U } = Yr(e, () => !e.noFocus && !s && L()), ee = {
			anchorEl: C,
			innerRef: p,
			onClickOutside(t) {
				if (!e.persistent && m.value) return D(t), (t.type === "touchstart" || t.target.classList.contains("q-dialog__backdrop")) && Z(t), !0;
			}
		}, W = r(() => di(e.anchor || (e.cover ? "center middle" : "bottom start"), d.lang.rtl)), G = Wi({
			props: e,
			$q: d,
			anchorEl: C,
			innerRef: p,
			showing: m,
			anchorOrigin: W,
			selfOrigin: r(() => e.cover ? W.value : di(e.self || "top start", d.lang.rtl))
		}), te = r(() => "q-menu scroll" + (G.viaCssAnchor ? "" : " q-position-engine") + (e.square ? " q-menu--square" : "") + (g() ? " q-menu--dark q-dark" : "")), K = r(() => e.autoClose ? { onClick: ce } : {}), ne = r(() => m.value && !e.persistent);
		I(ne, (e) => {
			e ? (Zi(ue), la(ee)) : (Qi(ue), ua(ee));
		});
		function re() {
			Ir(() => {
				let e = p.value;
				e && e.contains !== void 0 && !e.contains(document.activeElement) && (e = e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || e.querySelector("[autofocus], [data-autofocus]") || e, e.focus({ preventScroll: !0 }));
			});
		}
		function q(e) {
			if (e == null) return !1;
			if (C.value !== null && C.value.contains(e) || p.value !== null && p.value.contains(e)) return !0;
			let t = Er(e);
			for (; t != null;) {
				if (t === l) return !0;
				t = mn(t);
			}
			return !1;
		}
		function J(e) {
			if (e.pointerType === "touch") return;
			j(e);
			let t = mn(l);
			for (; t != null;) t.$options.name === "QMenu" && t.$props.hover === !0 && t.__qHoverHide?.(e), t = mn(t);
		}
		function ie(t) {
			s = e.hover && t?.type === "pointerenter", O(), z(s), ta(le), P(!1, s), G.handleShow(!s && (e.touchPosition || e.contextMenu) ? t : void 0), !e.noFocus && !s && document.activeElement.blur(), _(() => {
				G.handleTick(), !e.noFocus && !s && re();
			}), y(() => {
				d.platform.is.ios && (o = e.autoClose, p.value.click()), G.viaCssAnchor || G.track(), P(!0), i("show", t);
			});
		}
		function ae(e) {
			s = !1, v(), F(), se(!0), e === void 0 || !e.qClickOutside ? V(e) : B(), y(() => {
				F(!0), G.releaseAnchor(!1), i("hide", e);
			});
		}
		function oe() {
			B();
		}
		function se(e) {
			O(), G.releaseAnchor(e), (e || m.value) && (na(le), ua(ee), Qi(ue)), e || B();
		}
		function ce(e) {
			o ? o = !1 : (Dr(l, e), i("click", e));
		}
		function le(t) {
			ne.value && !e.noFocus && !s && !Ln(p.value, t.target) && !ji(p.value, t.target) && re();
		}
		function ue(t) {
			e.noEscDismiss || (i("escapeKey"), D(t));
		}
		function de(e) {
			if (e.keyCode !== 9 || e.defaultPrevented || !ne.value || p.value === null) return;
			let t = p.value, n = t.querySelectorAll(da), r = n.length === 0 ? null : n[e.shiftKey ? 0 : n.length - 1];
			(r === null || document.activeElement === r || e.shiftKey && document.activeElement === t) && (na(le), H(e), D(e));
		}
		function fe() {
			return f(n, x(), () => m.value ? f("div", {
				...a,
				ref: p,
				tabindex: -1,
				onKeydown: [].concat(a.onKeydown || [], de),
				...e.hover ? {
					onPointerenter: [].concat(a.onPointerenter || [], N),
					onPointerleave: [].concat(a.onPointerleave || [], J)
				} : {},
				class: [te.value, a.class],
				style: [
					a.style,
					S(),
					G.positionStyle.value
				],
				...K.value
			}, Bt(t.default)) : null);
		}
		return b(() => {
			se(!1);
		}), Object.assign(l, {
			focus: re,
			updatePosition: G.updatePosition,
			__adoptRefocusTarget: U
		}), l.__qHoverHide = j, R;
	}
});
function pa() {
	if (typeof crypto > "u") return () => {
		throw Error("[Quasar uid()] Secure RNG not available. Cannot generate collision-resistant UUID.");
	};
	if (crypto.randomUUID) return () => crypto.randomUUID();
	let e = Array.from({ length: 256 }, (e, t) => (t + 256).toString(16).slice(1)), t, n;
	return () => {
		(t === void 0 || n + 16 > 4096) && (n = 0, t = /* @__PURE__ */ new Uint8Array(4096), crypto.getRandomValues(t));
		let r = n;
		return n += 16, t[r + 6] = t[r + 6] & 15 | 64, t[r + 8] = t[r + 8] & 63 | 128, e[t[r]] + e[t[r + 1]] + e[t[r + 2]] + e[t[r + 3]] + "-" + e[t[r + 4]] + e[t[r + 5]] + "-" + e[t[r + 6]] + e[t[r + 7]] + "-" + e[t[r + 8]] + e[t[r + 9]] + "-" + e[t[r + 10]] + e[t[r + 11]] + e[t[r + 12]] + e[t[r + 13]] + e[t[r + 14]] + e[t[r + 15]];
	};
}
var ma = /*#__PURE__*/ pa();
function ha(e) {
	return e ?? null;
}
function ga(e, t) {
	return e ?? (t ? `f_${ma()}` : null);
}
function _a({ getValue: e, required: t = !0 } = {}) {
	if (W.value) {
		let n = A(e === void 0 ? null : ha(e()));
		return t && n.value === null && C(() => {
			n.value = `f_${ma()}`;
		}), e !== void 0 && I(e, (e) => {
			n.value = ga(e, t);
		}), n;
	}
	return e === void 0 ? A(`f_${ma()}`) : r(() => ga(e(), t));
}
var va = Object.keys(ir);
function ya(e) {
	return va.reduce((t, n) => {
		let r = e[n];
		return r !== void 0 && (t[n] = r), t;
	}, {});
}
var ba = /*#__PURE__*/ X({
	name: "QBtnDropdown",
	props: {
		...ir,
		...Xr,
		modelValue: Boolean,
		split: Boolean,
		dropdownIcon: String,
		contentClass: [
			Array,
			String,
			Object
		],
		contentStyle: [
			Array,
			String,
			Object
		],
		cover: Boolean,
		hover: Boolean,
		hoverDelay: Number,
		hoverHideDelay: Number,
		persistent: Boolean,
		noEscDismiss: Boolean,
		noRouteDismiss: Boolean,
		autoClose: Boolean,
		noRefocus: Boolean,
		noFocus: Boolean,
		menuAnchor: {
			type: String,
			default: "bottom end"
		},
		menuSelf: {
			type: String,
			default: "top end"
		},
		menuOffset: Array,
		disableMainBtn: Boolean,
		disableDropdown: Boolean,
		noIconAnimation: Boolean,
		toggleAriaLabel: String,
		toggleAriaHaspopup: String
	},
	emits: [
		"update:modelValue",
		"click",
		"beforeShow",
		"show",
		"beforeHide",
		"hide"
	],
	setup(e, { slots: t, emit: n }) {
		let { proxy: i } = u(), a = At(), o = A(e.modelValue), s = M(null), c = _a(), l = r(() => {
			let t = {
				"aria-expanded": o.value ? "true" : "false",
				"aria-label": e.toggleAriaLabel || a.lang.label[o.value ? "collapse" : "expand"](e.label)
			};
			return e.toggleAriaHaspopup !== void 0 && (t["aria-haspopup"] = e.toggleAriaHaspopup), o.value && !e.disableDropdown && (t["aria-controls"] = c.value), (e.disable || !e.split && e.disableMainBtn || e.disableDropdown) && (t["aria-disabled"] = "true"), t;
		}), d = r(() => "q-btn-dropdown__arrow" + (o.value && !e.noIconAnimation ? " rotate-180" : "") + (e.split ? "" : " q-btn-dropdown__arrow-container")), p = r(() => rr(e)), m = r(() => ya(e));
		I(() => e.modelValue, (e) => {
			s.value?.[e ? "show" : "hide"]();
		}), I(() => e.split, w);
		function h(e) {
			o.value = !0, n("beforeShow", e);
		}
		function g(e) {
			n("show", e), n("update:modelValue", !0);
		}
		function _(e) {
			o.value = !1, n("beforeHide", e);
		}
		function v(e) {
			n("hide", e), n("update:modelValue", !1);
		}
		function y(e) {
			n("click", e);
		}
		function b(e) {
			je(e), w(), n("click", e);
		}
		function x(e) {
			s.value?.toggle(e);
		}
		function S(e) {
			s.value?.show(e);
		}
		function w(e) {
			s.value?.hide(e);
		}
		return Object.assign(i, {
			show: S,
			hide: w,
			toggle: x
		}), C(() => {
			e.modelValue && S();
		}), () => {
			let n = Ht(t.toggle, [f(sn, {
				class: d.value,
				name: e.dropdownIcon || a.iconSet.arrow.dropdown
			})]), r = e.disableDropdown ? null : f(fa, {
				ref: s,
				id: c.value,
				class: e.contentClass,
				style: e.contentStyle,
				cover: e.cover,
				hover: e.hover,
				hoverDelay: e.hoverDelay,
				hoverHideDelay: e.hoverHideDelay,
				fit: !0,
				persistent: e.persistent,
				noEscDismiss: e.noEscDismiss,
				noRouteDismiss: e.noRouteDismiss,
				autoClose: e.autoClose,
				noFocus: e.noFocus,
				noRefocus: e.noRefocus,
				anchor: e.menuAnchor,
				self: e.menuSelf,
				offset: e.menuOffset,
				separateClosePopup: !0,
				transitionShow: e.transitionShow,
				transitionHide: e.transitionHide,
				transitionDuration: e.transitionDuration,
				onBeforeShow: h,
				onShow: g,
				onBeforeHide: _,
				onHide: v
			}, t.default);
			return e.split ? f(pr, {
				class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
				rounded: e.rounded,
				square: e.square,
				...p.value,
				glossy: e.glossy,
				stretch: e.stretch
			}, () => [
				f(fr, {
					class: "q-btn-dropdown--current",
					...m.value,
					disable: e.disable || e.disableMainBtn,
					noWrap: !0,
					round: !1,
					onClick: b
				}, {
					default: t.label,
					loading: t.loading
				}),
				f(fr, {
					class: "q-btn-dropdown__arrow-container",
					...l.value,
					...p.value,
					disable: e.disable || e.disableDropdown,
					rounded: e.rounded,
					color: e.color,
					textColor: e.textColor,
					dense: e.dense,
					size: e.size,
					padding: e.padding,
					ripple: e.ripple
				}, () => n),
				r
			]) : f(fr, {
				class: "q-btn-dropdown q-btn-dropdown--simple",
				...m.value,
				...l.value,
				disable: e.disable || e.disableMainBtn,
				noWrap: !0,
				round: !1,
				onClick: y
			}, {
				default: () => [
					...Bt(t.label, []),
					...n,
					r
				],
				loading: t.loading
			});
		};
	}
}), xa = { name: String };
function Sa(e) {
	return () => ({
		type: "hidden",
		name: e.name,
		value: e.modelValue
	});
}
function Ca(e) {
	return (t, n, r) => {
		t[n](f("input", {
			class: "hidden" + (r || ""),
			...e === void 0 ? void 0 : e()
		}));
	};
}
function wa(e) {
	return () => e.name || e.for;
}
var Ta = /*#__PURE__*/ X({
	name: "QBtnToggle",
	props: {
		...xa,
		modelValue: { required: !0 },
		options: {
			type: Array,
			required: !0,
			validator: (e) => e.every((e) => ("label" in e || "icon" in e || "slot" in e) && "value" in e)
		},
		color: String,
		textColor: String,
		toggleColor: {
			type: String,
			default: "primary"
		},
		toggleTextColor: String,
		outline: Boolean,
		flat: Boolean,
		unelevated: Boolean,
		rounded: Boolean,
		push: Boolean,
		glossy: Boolean,
		size: String,
		padding: String,
		noCaps: Boolean,
		noWrap: Boolean,
		dense: Boolean,
		readonly: Boolean,
		disable: Boolean,
		align: fn.align,
		stack: Boolean,
		stretch: Boolean,
		spread: Boolean,
		vertical: Boolean,
		clearable: Boolean,
		ripple: {
			type: [Boolean, Object],
			default: !0
		}
	},
	emits: [
		"update:modelValue",
		"clear",
		"click"
	],
	setup(e, { slots: t, emit: n }) {
		let i = r(() => e.options.find((t) => t.value === e.modelValue) !== void 0), a = Ca(() => ({
			type: "hidden",
			name: e.name,
			value: e.modelValue
		})), o = r(() => rr(e)), s = r(() => ({
			rounded: e.rounded,
			dense: e.dense,
			...o.value
		})), c = r(() => e.options.map((t, n) => {
			let { attrs: r, value: i, slot: a, ...o } = t;
			return {
				slot: a,
				props: {
					key: n,
					"aria-pressed": i === e.modelValue ? "true" : "false",
					...r,
					...o,
					...s.value,
					disable: e.disable || o.disable === !0,
					color: i === e.modelValue ? u(o, "toggleColor") : u(o, "color"),
					textColor: i === e.modelValue ? u(o, "toggleTextColor") : u(o, "textColor"),
					noCaps: u(o, "noCaps") === !0,
					noWrap: u(o, "noWrap") === !0,
					size: u(o, "size"),
					padding: u(o, "padding"),
					ripple: u(o, "ripple"),
					align: u(o, "align"),
					stack: u(o, "stack") === !0,
					stretch: u(o, "stretch") === !0,
					onClick(e) {
						l(i, t, e);
					}
				}
			};
		}));
		function l(t, r, i) {
			e.readonly || (e.modelValue === t ? e.clearable && (n("update:modelValue", null, null), n("clear")) : n("update:modelValue", t, r), n("click", i));
		}
		function u(t, n) {
			return t[n] === void 0 ? e[n] : t[n];
		}
		function d() {
			let n = c.value.map((e) => f(fr, e.props, e.slot === void 0 ? void 0 : t[e.slot]));
			return e.name !== void 0 && !e.disable && i.value && a(n, "push"), Ht(t.default, n);
		}
		return () => f(pr, {
			class: "q-btn-toggle",
			...o.value,
			rounded: e.rounded,
			stretch: e.stretch,
			glossy: e.glossy,
			spread: e.spread,
			vertical: e.vertical
		}, d);
	}
}), Ea = /*#__PURE__*/ X({
	name: "QCard",
	props: {
		...$,
		tag: {
			type: String,
			default: "div"
		},
		square: Boolean,
		flat: Boolean,
		bordered: Boolean
	},
	setup(e, { slots: t }) {
		let n = cn(e, At()), i = r(() => "q-card" + (n() ? " q-card--dark q-dark" : "") + (e.bordered ? " q-card--bordered" : "") + (e.square ? " q-card--square no-border-radius" : "") + (e.flat ? " q-card--flat no-shadow" : ""));
		return () => f(e.tag, { class: i.value }, Bt(t.default));
	}
});
({ ...fn });
var Da = {
	left: !0,
	right: !0,
	up: !0,
	down: !0,
	horizontal: !0,
	vertical: !0
}, Oa = Object.keys(Da);
Da.all = !0;
function ka(e) {
	let t = {};
	for (let n of Oa) e[n] && (t[n] = !0);
	return Object.keys(t).length === 0 ? Da : (t.horizontal ? t.left = t.right = !0 : t.left && t.right && (t.horizontal = !0), t.vertical ? t.up = t.down = !0 : t.up && t.down && (t.vertical = !0), t.horizontal && t.vertical && (t.all = !0), t);
}
var Aa = ["INPUT", "TEXTAREA"];
function ja(e, t) {
	return t.event === void 0 && e.target !== void 0 && !e.target.draggable && typeof t.handler == "function" && !Aa.includes(e.target.nodeName.toUpperCase()) && (e.qClonedBy === void 0 || !e.qClonedBy.includes(t.uid));
}
var { passive: Ma, passiveCapture: Na, notPassive: Pa, notPassiveCapture: Fa } = De;
function Ia() {
	let e = Object.create(null);
	return {
		getCache: (t, n) => Object.hasOwn(e, t) ? e[t] : e[t] = typeof n == "function" ? n() : n,
		setCache(t, n) {
			e[t] = n;
		},
		hasCache(t) {
			return Object.hasOwn(e, t);
		},
		clearCache(t) {
			t === void 0 ? e = Object.create(null) : delete e[t];
		}
	};
}
var La = {
	name: { required: !0 },
	disable: Boolean
}, Ra = {
	modelValue: { required: !0 },
	animated: Boolean,
	infinite: Boolean,
	swipeable: Boolean,
	vertical: Boolean,
	transitionPrev: String,
	transitionNext: String,
	transitionDuration: {
		type: [String, Number],
		default: 300
	},
	keepAlive: Boolean,
	keepAliveInclude: [
		String,
		Array,
		RegExp
	],
	keepAliveExclude: [
		String,
		Array,
		RegExp
	],
	keepAliveMax: Number
}, za = [
	"update:modelValue",
	"beforeTransition",
	"transition"
], Ba = [
	Element,
	String,
	Object
], Va = [
	null,
	document,
	document.body,
	document.scrollingElement,
	document.documentElement
];
function Ha(e, t) {
	let n = In(t);
	if (n !== void 0 && n !== window && !(n instanceof Element) && !Va.includes(n) && (console.warn("[Quasar] scroll-target: the specified value is not an Element nor a component with a root element; falling back to auto detection"), n = void 0), n === void 0) {
		if (e == null) return window;
		n = e.closest(".scroll,.scroll-y,.overflow-auto");
	}
	return Va.includes(n) ? window : n;
}
function Ua(e) {
	return e === window ? window.scrollY : e.scrollTop;
}
function Wa(e) {
	return e === window ? window.scrollX : e.scrollLeft;
}
var Ga;
function Ka() {
	if (Ga !== void 0) return Ga;
	let e = document.createElement("p"), t = document.createElement("div");
	Fn(e, {
		width: "100%",
		height: "200px"
	}), Fn(t, {
		position: "absolute",
		top: "0px",
		left: "0px",
		visibility: "hidden",
		width: "200px",
		height: "150px",
		overflow: "hidden"
	}), t.append(e), document.body.append(t);
	let n = e.offsetWidth;
	t.style.overflow = "scroll";
	let r = e.offsetWidth;
	return n === r && (r = t.clientWidth), t.remove(), Ga = n - r, Ga;
}
var qa = {
	fullscreen: Boolean,
	noRouteFullscreenExit: Boolean
}, Ja = ["update:fullscreen", "fullscreen"];
({
	...$,
	...Ra,
	...qa
}), [...Ja, ...za], { ...La };
function Ya(e, t) {
	let n = M(null), i = r(() => e.disable ? null : f("span", {
		ref: n,
		class: "no-outline",
		tabindex: -1
	}));
	function a(e) {
		let r = t.value;
		e?.qAvoidFocus !== !0 && r?.getAttribute("aria-hidden") !== "true" && (e?.type.indexOf("key") === 0 ? document.activeElement !== r && r?.contains(document.activeElement) === !0 && r.focus({ preventScroll: !0 }) : n.value !== null && (e === void 0 || r?.contains(e.target) === !0) && n.value.focus({ preventScroll: !0 }));
	}
	return {
		refocusTargetEl: i,
		refocusTarget: a
	};
}
var Xa = /*#__PURE__*/ Rt({
	xs: 30,
	sm: 35,
	md: 40,
	lg: 50,
	xl: 60
}), Za = {
	...$,
	...Lt,
	...xa,
	modelValue: {
		required: !0,
		default: null
	},
	val: {},
	trueValue: { default: !0 },
	falseValue: { default: !1 },
	indeterminateValue: { default: null },
	checkedIcon: String,
	uncheckedIcon: String,
	indeterminateIcon: String,
	toggleOrder: {
		type: String,
		validator: (e) => e === "tf" || e === "ft"
	},
	toggleIndeterminate: Boolean,
	label: String,
	leftLabel: Boolean,
	color: String,
	keepColor: Boolean,
	dense: Boolean,
	disable: Boolean,
	tabindex: [String, Number]
}, Qa = ["update:modelValue"];
function $a(e) {
	(e.keyCode === 13 || e.keyCode === 32) && Z(e);
}
function eo(e, t) {
	let { props: n, slots: i, emit: a, proxy: o } = u(), s = cn(n, At()), c = M(null), { refocusTargetEl: l, refocusTarget: d } = Ya(n, c), p = r(() => n.val !== void 0 && Array.isArray(n.modelValue)), m = r(() => {
		let e = N(n.val);
		return p.value ? n.modelValue.findIndex((t) => N(t) === e) : -1;
	}), h = r(() => p.value ? m.value !== -1 : N(n.modelValue) === N(n.trueValue)), g = r(() => p.value ? m.value === -1 : N(n.modelValue) === N(n.falseValue)), _ = r(() => !h.value && !g.value), v = r(() => n.disable ? -1 : n.tabindex || 0), y = r(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable ? " disabled" : "") + (s() ? ` q-${e}--dark` : "") + (n.dense ? ` q-${e}--dense` : "") + (n.leftLabel ? " reverse" : "")), b = r(() => `q-${e}__inner relative-position non-selectable q-${e}__inner--${h.value ? "truthy" : g.value ? "falsy" : "indet"}${n.color !== void 0 && (n.keepColor || (e === "toggle" ? h.value : !g.value)) ? ` text-${n.color}` : ""}`), x = Ca(() => {
		let e = { type: "checkbox" };
		return n.name !== void 0 && Object.assign(e, {
			".checked": h.value,
			"^checked": h.value ? "checked" : void 0,
			name: n.name,
			value: p.value ? n.val : n.trueValue
		}), e;
	}), S = r(() => {
		let t = {
			tabindex: v.value,
			role: e === "toggle" ? "switch" : "checkbox",
			"aria-label": n.label,
			"aria-checked": _.value ? e === "toggle" ? "false" : "mixed" : h.value ? "true" : "false"
		};
		return n.disable && (t["aria-disabled"] = "true"), t;
	});
	function C(e) {
		e !== void 0 && (Z(e), d(e)), n.disable || a("update:modelValue", w(), e);
	}
	function w() {
		if (p.value) {
			if (h.value) {
				let e = [...n.modelValue];
				return e.splice(m.value, 1), e;
			}
			return [...n.modelValue, n.val];
		}
		if (h.value) {
			if (n.toggleOrder !== "ft" || !n.toggleIndeterminate) return n.falseValue;
		} else if (g.value) {
			if (n.toggleOrder === "ft" || !n.toggleIndeterminate) return n.trueValue;
		} else return n.toggleOrder === "ft" ? n.falseValue : n.trueValue;
		return n.indeterminateValue;
	}
	function T(e) {
		(e.keyCode === 13 || e.keyCode === 32) && C(e);
	}
	let E = t(h, _);
	return Object.assign(o, { toggle: C }), () => {
		let t = E();
		n.disable || x(t, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
		let r = [f("div", {
			class: b.value,
			style: Xa(n.size),
			"aria-hidden": "true"
		}, t)];
		l.value !== null && r.push(l.value);
		let a = n.label === void 0 ? Bt(i.default) : Ht(i.default, [n.label]);
		return a !== void 0 && r.push(f("div", { class: `q-${e}__label q-anchor--skip` }, a)), f("div", {
			ref: c,
			class: y.value,
			...S.value,
			onClick: C,
			onKeydown: $a,
			onKeyup: T
		}, r);
	};
}
var to = () => f("div", {
	key: "svg",
	class: "q-checkbox__bg absolute"
}, [f("svg", {
	class: "q-checkbox__svg fit absolute-full",
	viewBox: "0 0 24 24"
}, [f("path", {
	class: "q-checkbox__truthy",
	fill: "none",
	d: "M1.73,12.91 8.1,19.28 22.79,4.59"
}), f("path", {
	class: "q-checkbox__indet",
	d: "M4,14H20V10H4"
})])]), no = /*#__PURE__*/ X({
	name: "QCheckbox",
	props: Za,
	emits: Qa,
	setup(e) {
		let t = to();
		function n(n, i) {
			let a = r(() => (n.value ? e.checkedIcon : i.value ? e.indeterminateIcon : e.uncheckedIcon) || null);
			return () => a.value === null ? [t] : [f("div", {
				key: "icon",
				class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
			}, [f(sn, {
				class: "q-checkbox__icon",
				name: a.value
			})])];
		}
		return eo("checkbox", n);
	}
});
function ro(e) {
	e.keyCode === 32 && Z(e);
}
var io = /*#__PURE__*/ Rt({
	xs: 8,
	sm: 10,
	md: 14,
	lg: 20,
	xl: 24
}), ao = /*#__PURE__*/ X({
	name: "QChip",
	props: {
		...$,
		...Lt,
		dense: Boolean,
		icon: String,
		iconRight: String,
		iconRemove: String,
		iconSelected: String,
		label: [String, Number],
		color: String,
		textColor: String,
		modelValue: {
			type: Boolean,
			default: !0
		},
		selected: {
			type: Boolean,
			default: null
		},
		square: Boolean,
		outline: Boolean,
		clickable: {
			type: Boolean,
			default: null
		},
		onClick: Function,
		removable: Boolean,
		removeAriaLabel: String,
		tabindex: [String, Number],
		disable: Boolean,
		ripple: {
			type: [Boolean, Object],
			default: !0
		}
	},
	emits: [
		"update:modelValue",
		"update:selected",
		"remove"
	],
	setup(e, { slots: t, emit: n }) {
		let i = At(), a = cn(e, i), o = r(() => e.selected || e.icon !== void 0), s = r(() => e.selected ? e.iconSelected || i.iconSet.chip.selected : e.icon), c = r(() => e.iconRemove || i.iconSet.chip.remove), l = r(() => (e.clickable === null ? e.onClick !== void 0 : e.clickable) || e.selected !== null), u = r(() => !e.disable && l.value), d = r(() => {
			let t = e.outline && e.color || e.textColor;
			return "q-chip row inline no-wrap items-center" + (!e.outline && e.color !== void 0 ? ` bg-${e.color}` : "") + (t ? ` text-${t} q-chip--colored` : "") + (e.disable ? " disabled" : "") + (e.dense ? " q-chip--dense" : "") + (e.outline ? " q-chip--outline" : "") + (e.selected ? " q-chip--selected" : "") + (u.value ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square ? " q-chip--square" : "") + (a() ? " q-chip--dark q-dark" : "");
		}), p = r(() => ({
			chip: e.disable ? {
				role: "button",
				tabindex: -1,
				"aria-disabled": "true"
			} : {
				role: "button",
				tabindex: e.tabindex || 0,
				...e.selected === null ? {} : { "aria-pressed": e.selected ? "true" : "false" }
			},
			remove: {
				role: "button",
				"aria-hidden": "false",
				"aria-label": e.removeAriaLabel || i.lang.label.remove,
				...e.disable ? {
					tabindex: -1,
					"aria-disabled": "true"
				} : { tabindex: e.tabindex || 0 }
			}
		}));
		function m(e) {
			[13, 32].includes(e.keyCode) && (h(e), Z(e));
		}
		function h(t) {
			e.disable || (n("update:selected", !e.selected), n("click", t));
		}
		function g(t) {
			(t.keyCode === void 0 || [13, 32].includes(t.keyCode)) && (Z(t), e.disable || (n("update:modelValue", !1), n("remove")));
		}
		function _() {
			let n = [];
			u.value && n.push(f("div", { class: "q-focus-helper" })), o.value && n.push(f(sn, {
				class: "q-chip__icon q-chip__icon--left",
				name: s.value
			}));
			let r = e.label === void 0 ? void 0 : [f("div", { class: "ellipsis" }, [e.label])];
			return n.push(f("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, Ut(t.default, r))), e.iconRight && n.push(f(sn, {
				class: "q-chip__icon q-chip__icon--right",
				name: e.iconRight
			})), e.removable && n.push(f(sn, {
				class: "q-chip__icon q-chip__icon--remove cursor-pointer",
				name: c.value,
				...p.value.remove,
				onClick: g,
				onKeydown: ro,
				onKeyup: g
			})), n;
		}
		return () => {
			if (!e.modelValue) return;
			let t = { class: d.value };
			return e.size !== void 0 && (t.style = io(e.size)), l.value && Object.assign(t, p.value.chip), u.value && Object.assign(t, {
				onClick: h,
				onKeydown: ro,
				onKeyup: m
			}), R(f("div", t, _()), [[Xn, e.disable || e.ripple === !1 ? !1 : e.ripple]]);
		};
	}
}), oo = {
	...Lt,
	min: {
		type: Number,
		default: 0
	},
	max: {
		type: Number,
		default: 100
	},
	color: String,
	centerColor: String,
	trackColor: String,
	fontSize: String,
	rounded: Boolean,
	thickness: {
		type: Number,
		default: .2,
		validator: (e) => e >= 0 && e <= 1
	},
	angle: {
		type: Number,
		default: 0
	},
	showValue: Boolean,
	reverse: Boolean,
	instantFeedback: Boolean
}, so = 50, co = 100, lo = co * Math.PI, uo = Math.round(lo * 1e3) / 1e3, fo = /*#__PURE__*/ X({
	name: "QCircularProgress",
	props: {
		...oo,
		value: {
			type: Number,
			default: 0
		},
		animationSpeed: {
			type: [String, Number],
			default: 600
		},
		indeterminate: Boolean
	},
	setup(e, { slots: t }) {
		let n = At(), i = r(() => {
			if (e.indeterminate) return null;
			let t = (n.lang.rtl ? -1 : 1) * e.angle;
			return { transform: e.reverse === (n.lang.rtl === !0) ? `rotate(${t - 90}deg)` : `scaleX(-1) rotate(${-90 - t}deg)` };
		}), a = r(() => !e.instantFeedback && !e.indeterminate ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = r(() => co / (1 - e.thickness / 2)), s = r(() => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`), c = r(() => Nt(e.value, e.min, e.max)), l = r(() => e.max - e.min), u = r(() => e.thickness / 2 * o.value), d = r(() => {
			let t = (e.max - c.value) / l.value, n = e.rounded && c.value < e.max && t < .25 ? u.value / 2 * (1 - t / .25) : 0;
			return lo * t + n;
		});
		function p({ thickness: e, offset: t, color: n, cls: r, rounded: i }) {
			return f("circle", {
				class: "q-circular-progress__" + r + (n === void 0 ? "" : ` text-${n}`),
				style: a.value,
				fill: "transparent",
				stroke: "currentColor",
				"stroke-width": e,
				"stroke-dasharray": uo,
				"stroke-dashoffset": t,
				"stroke-linecap": i,
				cx: o.value,
				cy: o.value,
				r: so
			});
		}
		return () => {
			let n = [];
			e.centerColor !== void 0 && e.centerColor !== "transparent" && n.push(f("circle", {
				class: `q-circular-progress__center text-${e.centerColor}`,
				fill: "currentColor",
				r: so - u.value / 2,
				cx: o.value,
				cy: o.value
			})), e.trackColor !== void 0 && e.trackColor !== "transparent" && n.push(p({
				cls: "track",
				thickness: u.value,
				offset: 0,
				color: e.trackColor
			})), n.push(p({
				cls: "circle",
				thickness: u.value,
				offset: d.value,
				color: e.color,
				rounded: e.rounded ? "round" : void 0
			}));
			let r = [f("svg", {
				class: "q-circular-progress__svg",
				style: i.value,
				viewBox: s.value,
				"aria-hidden": "true"
			}, n)];
			return e.showValue && r.push(f("div", {
				class: "q-circular-progress__text absolute-full row flex-center content-center",
				style: { fontSize: e.fontSize }
			}, t.default === void 0 ? [f("div", c.value)] : t.default())), f("div", {
				class: `q-circular-progress q-circular-progress--${e.indeterminate ? "in" : ""}determinate`,
				style: zt(e.size),
				role: "progressbar",
				"aria-valuemin": e.min,
				"aria-valuemax": e.max,
				"aria-valuenow": e.indeterminate ? void 0 : c.value
			}, Ut(t.internal, r));
		};
	}
}), { passive: po, passiveCapture: mo, notPassiveCapture: ho } = De, go = 0;
function _o(e, t, n) {
	let r = Ae(e), i, a = r.left - t.event.x, o = r.top - t.event.y, s = Math.abs(a), c = Math.abs(o), l = t.direction;
	l.horizontal && !l.vertical ? i = a < 0 ? "left" : "right" : !l.horizontal && l.vertical ? i = o < 0 ? "up" : "down" : l.up && o < 0 ? (i = "up", s > c && (l.left && a < 0 ? i = "left" : l.right && a > 0 && (i = "right"))) : l.down && o > 0 ? (i = "down", s > c && (l.left && a < 0 ? i = "left" : l.right && a > 0 && (i = "right"))) : l.left && a < 0 ? (i = "left", s < c && (l.up && o < 0 ? i = "up" : l.down && o > 0 && (i = "down"))) : l.right && a > 0 && (i = "right", s < c && (l.up && o < 0 ? i = "up" : l.down && o > 0 && (i = "down")));
	let u = !1;
	if (i === void 0 && n === !1) {
		if (t.event.isFirst || t.event.lastDir === void 0) return {};
		i = t.event.lastDir, u = !0, i === "left" || i === "right" ? (r.left -= a, s = 0, a = 0) : (r.top -= o, c = 0, o = 0);
	}
	return {
		synthetic: u,
		payload: {
			evt: e,
			touch: t.event.mouse !== !0,
			mouse: t.event.mouse === !0,
			position: r,
			direction: i,
			isFirst: t.event.isFirst,
			isFinal: n === !0,
			duration: Date.now() - t.event.time,
			distance: {
				x: s,
				y: c
			},
			offset: {
				x: a,
				y: o
			},
			delta: {
				x: r.left - t.event.lastX,
				y: r.top - t.event.lastY
			}
		}
	};
}
function vo(e, t, n) {
	t.modifiers = n, t.direction = ka(n), t.stop = n.stop === !0, t.prevent = n.prevent === !0, t.mouseAllDir = n.mouseAllDir === !0 || n.mousealldir === !0, t.preserveCursor = n.preserveCursor === !0 || n.preservecursor === !0;
	let r = n.mouse ? n.mouseCapture || n.mousecapture ? mo : po : null;
	r !== t.mouseOpts && (t.mouseOpts !== null && e.removeEventListener("mousedown", yo, t.mouseOpts), r !== null && e.addEventListener("mousedown", yo, r), t.mouseOpts = r);
	let i = Y.has.touch ? n.capture ? mo : po : null;
	i !== t.touchOpts && (t.touchOpts !== null && e.removeEventListener("touchstart", bo, t.touchOpts), i !== null && e.addEventListener("touchstart", bo, i), t.touchOpts = i);
}
function yo(e) {
	let t = e.currentTarget.__qtouchpan;
	ja(e, t) && ke(e) && (t.target = document, document.addEventListener("mousemove", t, ho), document.addEventListener("mouseup", t, mo), Co(t, e, !0));
}
function bo(e) {
	let t = e.currentTarget.__qtouchpan;
	if (ja(e, t)) {
		let { target: n } = e;
		t.target = n, n.addEventListener("touchmove", t, ho), n.addEventListener("touchcancel", t, mo), n.addEventListener("touchend", t, mo), Co(t, e, !1);
	}
}
function xo(e) {
	e.type === "mousemove" || e.type === "touchmove" ? Eo(this, e) : Do(this, e);
}
function So(e, t, n) {
	n ? Z(t) : (e.stop && je(t), e.prevent && Me(t));
}
function Co(e, t, n) {
	if (Y.is.firefox && Ne(e.el, !0), e.lastEvt = t, n || e.stop) {
		if (!e.direction.all && (!n || !e.mouseAllDir)) {
			let n = t.type.includes("mouse") ? new MouseEvent(t.type, t) : new TouchEvent(t.type, t);
			t.defaultPrevented && Me(n), t.cancelBubble && je(n), Object.assign(n, {
				qKeyEvent: t.qKeyEvent,
				qClickOutside: t.qClickOutside,
				qAnchorHandled: t.qAnchorHandled,
				qClonedBy: t.qClonedBy === void 0 ? [e.uid] : t.qClonedBy.concat(e.uid)
			}), e.initialEvent = {
				target: t.target,
				event: n
			};
		}
		je(t);
	}
	let { left: r, top: i } = Ae(t);
	e.event = {
		x: r,
		y: i,
		time: Date.now(),
		mouse: n,
		detected: !1,
		isFirst: !0,
		isFinal: !1,
		lastX: r,
		lastY: i,
		lastDir: void 0
	};
}
function wo(e, t, n) {
	So(e, t, n), e.styled = !0, e.preserveCursor || (e.cursor = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), n && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), mr();
}
function To(e, t) {
	e.styled = !1, e.cursor !== void 0 && (document.documentElement.style.cursor = e.cursor, e.cursor = void 0), document.body.classList.remove("non-selectable"), t && document.body.classList.remove("no-pointer-events--children");
}
function Eo(e, t) {
	let { event: n } = e;
	if (n === void 0) return;
	let r = Ae(t), i = r.left - n.x, a = r.top - n.y;
	if (i === 0 && a === 0) return;
	e.lastEvt = t;
	let { mouse: o } = n;
	if (n.detected) {
		n.isFirst || So(e, t, o);
		let { payload: r, synthetic: i } = _o(t, e, !1);
		r !== void 0 && (e.handler(r) === !1 ? Do(e, t) : (!e.styled && n.isFirst && wo(e, t, o), n.lastX = r.position.left, n.lastY = r.position.top, n.lastDir = i ? void 0 : r.direction, n.isFirst = !1));
		return;
	}
	let { direction: s } = e;
	if (s.all || o && e.mouseAllDir) {
		wo(e, t, o), n.detected = !0, Eo(e, t);
		return;
	}
	let c = Math.abs(i), l = Math.abs(a);
	c !== l && (s.horizontal && c > l || s.vertical && c < l || s.up && c < l && a < 0 || s.down && c < l && a > 0 || s.left && c > l && i < 0 || s.right && c > l && i > 0 ? (n.detected = !0, Eo(e, t)) : Do(e, t, !0));
}
function Do(e, t, n) {
	let { event: r, target: i } = e;
	if (r === void 0) return;
	let { mouse: a } = r;
	if (a ? (i.removeEventListener("mousemove", e, ho), i.removeEventListener("mouseup", e, mo)) : (i.removeEventListener("touchmove", e, ho), i.removeEventListener("touchcancel", e, mo), i.removeEventListener("touchend", e, mo)), Y.is.firefox && Ne(e.el, !1), n) e.styled && To(e, a), !r.detected && e.initialEvent !== void 0 && e.initialEvent.target.dispatchEvent(e.initialEvent.event);
	else if (r.detected) {
		t === void 0 && (t = e.lastEvt), r.isFirst && e.handler(_o(t, e).payload);
		let { payload: n } = _o(t, e, !0), { handler: i } = e;
		e.styled ? (To(e, a), a ? setTimeout(i, 50, n) : i(n)) : i(n);
	}
	e.event = void 0, e.initialEvent = void 0, e.lastEvt = void 0, e.target = null;
}
var Oo = /*#__PURE__*/ Te({
	name: "touch-pan",
	beforeMount(e, { value: t, modifiers: n }) {
		let r = {
			handleEvent: xo,
			el: e,
			uid: "qvtp_" + go++,
			handler: t,
			modifiers: void 0,
			direction: void 0,
			stop: !1,
			prevent: !1,
			mouseAllDir: !1,
			preserveCursor: !1,
			mouseOpts: null,
			touchOpts: null,
			target: null,
			event: void 0,
			initialEvent: void 0,
			lastEvt: void 0,
			styled: !1,
			cursor: void 0
		};
		e.__qtouchpan = r, vo(e, r, n), r.touchOpts !== null && e.addEventListener("touchmove", Oe, ho);
	},
	updated(e, { oldValue: t, value: n, modifiers: r }) {
		let i = e.__qtouchpan;
		i !== void 0 && (t !== n && (typeof n != "function" && Do(i), i.handler = n), r !== i.modifiers && vo(e, i, r));
	},
	beforeUnmount(e) {
		let t = e.__qtouchpan;
		t !== void 0 && (Do(t), t.mouseOpts !== null && e.removeEventListener("mousedown", yo, t.mouseOpts), t.touchOpts !== null && (e.removeEventListener("touchstart", bo, t.touchOpts), e.removeEventListener("touchmove", Oe, ho)), e.__qtouchpan = void 0);
	}
});
function ko(e) {
	if (e.codePointAt(0) !== 111 || e.codePointAt(1) !== 110) return !1;
	let t = e.codePointAt(2);
	return t >= 65 && t <= 90;
}
function Ao(e, t) {
	let n = Object.keys(e);
	if (n.length !== Object.keys(t).length) return !0;
	for (let r of n) if (e[r] !== t[r] || !(r in t)) return !0;
	return !1;
}
function jo() {
	let e = u(), { attrs: t } = e, n = {
		listeners: A({}),
		attributes: A({})
	};
	function r() {
		let r = {}, i = {};
		for (let e in t) e !== "class" && e !== "style" && !ko(e) && (r[e] = t[e]);
		for (let t in e.vnode.props) ko(t) && (i[t] = e.vnode.props[t]);
		Ao(r, n.attributes.value) && (n.attributes.value = r), Ao(i, n.listeners.value) && (n.listeners.value = i);
	}
	return x(r), r(), n;
}
var Mo = {
	...$,
	...xa,
	min: {
		type: Number,
		default: 0
	},
	max: {
		type: Number,
		default: 100
	},
	innerMin: Number,
	innerMax: Number,
	step: {
		type: Number,
		default: 1,
		validator: (e) => e >= 0
	},
	snap: Boolean,
	vertical: Boolean,
	reverse: Boolean,
	color: String,
	markerLabelsClass: String,
	label: Boolean,
	labelColor: String,
	labelTextColor: String,
	labelAlways: Boolean,
	switchLabelSide: Boolean,
	markers: [Boolean, Number],
	markerLabels: [
		Boolean,
		Array,
		Object,
		Function
	],
	switchMarkerLabelsSide: Boolean,
	trackImg: String,
	trackColor: String,
	innerTrackImg: String,
	innerTrackColor: String,
	selectionColor: String,
	selectionImg: String,
	thumbSize: {
		type: String,
		default: "20px"
	},
	trackSize: {
		type: String,
		default: "4px"
	},
	disable: Boolean,
	readonly: Boolean,
	dense: Boolean,
	tabindex: [String, Number],
	thumbColor: String,
	thumbPath: {
		type: String,
		default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"
	}
};
({ ...Mo });
function No(t) {
	let n = M({
		width: 0,
		height: 0
	}), r = u(), i = null, a = null, o = null, s = 0, c, l = {
		width: -1,
		height: -1
	};
	function d() {
		o !== null && (clearTimeout(o), o = null);
	}
	function f() {
		if (d(), a === null) return;
		let { offsetWidth: e, offsetHeight: t } = i;
		(e !== l.width || t !== l.height) && (l = {
			width: e,
			height: t
		}, n.value = l, c?.(l));
	}
	function p() {
		s > 0 ? o === null && (o = setTimeout(f, s)) : f();
	}
	function m() {
		d(), a !== null && (a.disconnect(), a = null);
	}
	let h = new e(() => {
		let e = P(t) ?? {}, n = _n(e.target, r);
		s = Number(e.debounce) || 0, c = e.onResize, n !== i && (m(), i = n, l = {
			width: -1,
			height: -1
		}), e.disabled === !0 || i === null ? m() : a === null && (a = new ResizeObserver(p), a.observe(i, { box: "border-box" }), f());
	});
	return h.scheduler = () => {
		h.run();
	}, r === null ? h.run() : (C(() => {
		h.run();
	}), b(m)), {
		elementSize: n,
		refreshElementSize: f,
		stopElementSize() {
			m(), i = null, h.stop();
		}
	};
}
function Po(e, t, n) {
	let r = n ? ["left", "right"] : ["top", "bottom"];
	return `absolute-${t ? r[0] : r[1]}${e ? ` text-${e}` : ""}`;
}
function Fo(e, t) {
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
var Io = [
	"left",
	"center",
	"right",
	"justify"
], Lo = /*#__PURE__*/ X({
	name: "QTabs",
	props: {
		modelValue: [Number, String],
		align: {
			type: String,
			default: "center",
			validator: (e) => Io.includes(e)
		},
		breakpoint: {
			type: [String, Number],
			default: 600
		},
		vertical: Boolean,
		shrink: Boolean,
		stretch: Boolean,
		activeClass: String,
		activeColor: String,
		activeBgColor: String,
		indicatorColor: String,
		leftIcon: String,
		rightIcon: String,
		outsideArrows: Boolean,
		mobileArrows: Boolean,
		switchIndicator: Boolean,
		narrowIndicator: Boolean,
		inlineLabel: Boolean,
		noCaps: Boolean,
		dense: Boolean,
		contentClass: String,
		"onUpdate:modelValue": [Function, Array]
	},
	setup(e, { slots: t, emit: n }) {
		let { proxy: i } = u(), a = At(), { registerTick: o } = $r(), { registerTick: s } = $r(), { registerTick: c } = $r(), { registerTimeout: l, removeTimeout: d } = ei(), { registerTimeout: p, removeTimeout: m } = ei(), h = M(null), g = M(null), _ = A(e.modelValue), y = A(!1), x = A(!0), C = A(!1), w = A(!1), T = [], E = A(0), D = A(!1), k = null, j = null, N, P = r(() => ({
			activeClass: e.activeClass,
			activeColor: e.activeColor,
			activeBgColor: e.activeBgColor,
			indicatorClass: Po(e.indicatorColor, e.switchIndicator, e.vertical),
			narrowIndicator: e.narrowIndicator,
			inlineLabel: e.inlineLabel,
			noCaps: e.noCaps
		})), F = r(() => {
			let e = E.value, t = _.value, n = null;
			for (let r = 0; r < e; r++) {
				let e = T[r];
				if (!e.disable.value) {
					if (e.name.value === t) return t;
					n === null && (n = e.name.value);
				}
			}
			return n;
		}), L = r(() => `q-tabs__content--align-${y.value ? "left" : w.value ? "justify" : e.align}`), R = r(() => `q-tabs row no-wrap items-center q-tabs--${y.value ? "" : "not-"}scrollable q-tabs--${e.vertical ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows ? "" : "out"}-arrows` + (e.dense ? " q-tabs--dense" : "") + (e.shrink ? " col-shrink" : "") + (e.stretch ? " self-stretch" : "")), z = r(() => "q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position " + L.value + (e.contentClass === void 0 ? "" : ` ${e.contentClass}`)), B = r(() => e.vertical ? "height" : "width"), V = r(() => !e.vertical && a.lang.rtl === !0);
		I(V, te), I(() => e.modelValue, (e) => {
			H({
				name: e,
				setCurrent: !0,
				skipEmit: !0
			});
		}), I(() => e.outsideArrows, U);
		function H({ name: t, setCurrent: r, skipEmit: i }) {
			_.value !== t && (!i && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", t), (r || e["onUpdate:modelValue"] === void 0) && (W(_.value, t), _.value = t));
		}
		function U() {
			o(() => {
				h.value && ee({
					width: h.value.offsetWidth,
					height: h.value.offsetHeight
				});
			});
		}
		function ee(t) {
			if (g.value === null) return;
			let n = t[B.value], r = Array.prototype.reduce.call(g.value.children, (e, t) => e + t.getBoundingClientRect()[B.value], 0), i = n > 0 && r - n > 1;
			y.value = i, i && s(te), w.value = n < Number.parseInt(e.breakpoint, 10);
		}
		No({
			debounce: 100,
			onResize: ee
		});
		function W(t, n) {
			let r = t != null && t !== "" ? T.find((e) => e.name.value === t) : null, i = n != null && n !== "" ? T.find((e) => e.name.value === n) : null;
			if (ge) ge = !1;
			else if (r && i) {
				let t = r.tabIndicatorRef.value, n = i.tabIndicatorRef.value;
				k !== null && (clearTimeout(k), k = null), t.style.transition = "none", t.style.transform = "none", n.style.transition = "none", n.style.transform = "none";
				let a = t.getBoundingClientRect(), o = n.getBoundingClientRect();
				n.style.transform = e.vertical ? `translateY(${a.top - o.top}px) scaleY(${o.height ? a.height / o.height : 1})` : `translateX(${a.left - o.left}px) scaleX(${o.width ? a.width / o.width : 1})`, c(() => {
					k = setTimeout(() => {
						k = null, n.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", n.style.transform = "none";
					}, 70);
				});
			}
			i && y.value && G(i.rootRef.value);
		}
		function G(t) {
			let { left: n, width: r, top: i, height: a } = g.value.getBoundingClientRect(), o = t.getBoundingClientRect(), s = e.vertical ? o.top - i : o.left - n;
			s < 0 ? (g.value[e.vertical ? "scrollTop" : "scrollLeft"] += Math.floor(s), te()) : (s += e.vertical ? o.height - a : o.width - r, s > 0 && (g.value[e.vertical ? "scrollTop" : "scrollLeft"] += Math.ceil(s), te()));
		}
		function te() {
			let t = g.value;
			if (t === null) return;
			let n = t.getBoundingClientRect(), r = e.vertical ? t.scrollTop : Math.abs(t.scrollLeft);
			V.value ? (x.value = Math.ceil(r + n.width) < t.scrollWidth - 1, C.value = r > 0) : (x.value = r > 0, C.value = e.vertical ? Math.ceil(r + n.height) < t.scrollHeight : Math.ceil(r + n.width) < t.scrollWidth);
		}
		function K(e) {
			j !== null && clearInterval(j), j = setInterval(() => {
				ae(e) && q();
			}, 5);
		}
		function ne() {
			K(V.value ? 2 ** 53 - 1 : 0);
		}
		function re() {
			K(V.value ? 0 : 2 ** 53 - 1);
		}
		function q() {
			j !== null && (clearInterval(j), j = null);
		}
		function J(t, n) {
			let r = Array.prototype.filter.call(g.value.children, (e) => e === n || e.matches?.(".q-tab.q-focusable")), i = r.length;
			if (i === 0) return;
			if (t === 36) return G(r[0]), r[0].focus(), !0;
			if (t === 35) return G(r[i - 1]), r[i - 1].focus(), !0;
			let a = t === (e.vertical ? 38 : 37), o = t === (e.vertical ? 40 : 39), s = a ? -1 : o ? 1 : void 0;
			if (s !== void 0) {
				let t = e.vertical !== !0 && V.value ? -1 : 1, a = (r.indexOf(n) + s * t + i) % i;
				return G(r[a]), r[a].focus({ preventScroll: !0 }), !0;
			}
		}
		let ie = r(() => V.value ? {
			get: (e) => Math.abs(e.scrollLeft),
			set: (e, t) => {
				e.scrollLeft = -t;
			}
		} : e.vertical ? {
			get: (e) => e.scrollTop,
			set: (e, t) => {
				e.scrollTop = t;
			}
		} : {
			get: (e) => e.scrollLeft,
			set: (e, t) => {
				e.scrollLeft = t;
			}
		});
		function ae(e) {
			let t = g.value, { get: n, set: r } = ie.value, i = !1, a = n(t), o = e < a ? -1 : 1;
			return a += o * 5, a < 0 ? (i = !0, a = 0) : (o === -1 && a <= e || o === 1 && a >= e) && (i = !0, a = e), r(t, a), te(), i;
		}
		function oe() {
			let e = null, t = {
				matchedLen: 0,
				queryDiff: 9999,
				hrefLen: 0
			}, n = T.filter((e) => e.routeData?.hasRouterLink.value === !0), { hash: r, query: a } = i.$route, o = Object.keys(a).length;
			for (let i of n) {
				let n = i.routeData.exact.value === !0;
				if (!i.routeData[n ? "linkIsExactActive" : "linkIsActive"].value) continue;
				let { hash: s, query: c, matched: l, href: u } = i.routeData.resolvedLink.value, d = Object.keys(c).length;
				if (n) {
					if (s !== r || d !== o || !Fo(a, c)) continue;
					e = i.name.value;
					break;
				}
				if (s !== "" && s !== r || d !== 0 && !Fo(c, a)) continue;
				let f = {
					matchedLen: l.length,
					queryDiff: o - d,
					hrefLen: u.length - s.length
				};
				if (f.matchedLen > t.matchedLen) e = i.name.value, t = f;
				else if (f.matchedLen === t.matchedLen) {
					if (f.queryDiff < t.queryDiff) e = i.name.value, t = f;
					else if (f.queryDiff !== t.queryDiff) continue;
					f.hrefLen > t.hrefLen && (e = i.name.value, t = f);
				}
			}
			e === null && T.some((e) => e.routeData === void 0 && e.name.value === _.value) ? ge = !1 : H({
				name: e,
				setCurrent: !0
			});
		}
		function se(e) {
			if (d(), !D.value && h.value !== null && e.target && typeof e.target.closest == "function") {
				let t = e.target.closest(".q-tab");
				t && h.value.contains(t) && (D.value = !0, y.value && G(t));
			}
		}
		function ce() {
			l(() => {
				D.value = !1;
			}, 30);
		}
		function le() {
			pe.avoidRouteWatcher === !1 ? p(oe) : m();
		}
		function ue() {
			if (N === void 0) {
				let e = I(() => i.$route.fullPath, le);
				N = () => {
					e(), N = void 0;
				};
			}
		}
		function de(e) {
			T.push(e), E.value++, U(), e.routeData === void 0 || i.$route === void 0 ? p(() => {
				if (y.value) {
					let e = _.value, t = e != null && e !== "" ? T.find((t) => t.name.value === e) : null;
					t && G(t.rootRef.value);
				}
			}) : (ue(), e.routeData.hasRouterLink.value && le());
		}
		function fe(e) {
			T.splice(T.indexOf(e), 1), E.value--, U(), N !== void 0 && e.routeData !== void 0 && (T.every((e) => e.routeData === void 0) && N(), le());
		}
		let pe = {
			currentModel: _,
			tabProps: P,
			hasFocus: D,
			tabStopName: F,
			registerTab: de,
			unregisterTab: fe,
			verifyRouteModel: le,
			updateModel: H,
			onKbdNavigate: J,
			avoidRouteWatcher: !1
		};
		O(mt, pe);
		function me() {
			k !== null && clearTimeout(k), q(), N?.();
		}
		let he = !1, ge = !1;
		return b(me), S(() => {
			he = N !== void 0, me();
		}), v(() => {
			he && (ue(), ge = !0, le()), U();
		}), () => f("div", {
			ref: h,
			class: R.value,
			role: "tablist",
			"aria-orientation": e.vertical ? "vertical" : "horizontal",
			onFocusin: se,
			onFocusout: ce
		}, [
			f("div", {
				ref: g,
				class: z.value,
				onScroll: te
			}, Bt(t.default)),
			f(sn, {
				class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (x.value ? "" : " q-tabs__arrow--faded"),
				name: e.leftIcon || a.iconSet.tabs[e.vertical ? "up" : "left"],
				onMousedownPassive: ne,
				onTouchstartPassive: ne,
				onMouseupPassive: q,
				onMouseleavePassive: q,
				onTouchendPassive: q
			}),
			f(sn, {
				class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (C.value ? "" : " q-tabs__arrow--faded"),
				name: e.rightIcon || a.iconSet.tabs[e.vertical ? "down" : "right"],
				onMousedownPassive: re,
				onTouchstartPassive: re,
				onMouseupPassive: q,
				onMouseleavePassive: q,
				onTouchendPassive: q
			})
		]);
	}
}), Ro = 0, zo = ["click", "keydown"], Bo = {
	icon: String,
	label: [Number, String],
	alert: [Boolean, String],
	alertIcon: String,
	name: {
		type: [Number, String],
		default: () => `t_${Ro++}`
	},
	noCaps: Boolean,
	tabindex: [String, Number],
	disable: Boolean,
	contentClass: String,
	ripple: {
		type: [Boolean, Object],
		default: !0
	}
}, Vo = [13, 32];
function Ho(e, t, n, i) {
	let a = m(mt, gt);
	if (a === gt) return console.error("QTab/QRouteTab component needs to be child of QTabs"), gt;
	let { proxy: o } = u(), s = M(null), c = M(null), l = M(null);
	function d() {
		return e.disable || e.ripple === !1 ? !1 : {
			keyCodes: Vo,
			early: !0,
			...e.ripple === !0 ? {} : e.ripple
		};
	}
	function p(t) {
		let n = a.tabProps.value;
		return "q-tab relative-position self-stretch flex flex-center text-center" + (t ? " q-tab--active" + (n.activeClass ? " " + n.activeClass : "") + (n.activeColor ? ` text-${n.activeColor}` : "") + (n.activeBgColor ? ` bg-${n.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && !n.inlineLabel ? " q-tab--full" : "") + (e.noCaps || n.noCaps ? " q-tab--no-caps" : "") + (e.disable ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (i === void 0 ? "" : i.linkClass.value);
	}
	function h() {
		return "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (a.tabProps.value.inlineLabel ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass === void 0 ? "" : ` ${e.contentClass}`);
	}
	let g = r(() => a.currentModel.value === e.name), _ = r(() => {
		if (e.disable || a.hasFocus.value) return -1;
		let t = a.tabStopName.value;
		return t === null || t === e.name ? e.tabindex || 0 : -1;
	});
	function v(t, r) {
		if (!r && !t?.qAvoidFocus && s.value?.focus({ preventScroll: !0 }), e.disable) i?.hasRouterLink.value === !0 && Z(t);
		else if (i === void 0) a.updateModel({ name: e.name }), n("click", t);
		else if (i.hasRouterLink.value) {
			let r = (n = {}) => {
				let r, o = n.to === void 0 || yt(n.to, e.to) ? a.avoidRouteWatcher = ma() : null;
				return i.navigateToRouterLink(t, {
					...n,
					returnRouterError: !0
				}).catch((e) => {
					r = e;
				}).then((t) => {
					if (o === a.avoidRouteWatcher && (a.avoidRouteWatcher = !1, r === void 0 && (t === void 0 || t.message?.startsWith("Avoided redundant navigation") === !0) && a.updateModel({ name: e.name })), n.returnRouterError) return r === void 0 ? t : Promise.reject(r);
				});
			};
			n("click", t, r), t.defaultPrevented || r();
		} else n("click", t);
	}
	function y(e) {
		n("keydown", e), !e.defaultPrevented && (Ke(e, [13, 32]) ? v(e, !0) : e.keyCode >= 35 && e.keyCode <= 40 && !e.altKey && !e.metaKey && !Ge(e) && a.onKbdNavigate(e.keyCode, o.$el) && Z(e));
	}
	function x() {
		let n = a.tabProps.value, r = n.narrowIndicator, i = [], o = f("div", {
			ref: l,
			class: ["q-tab__indicator", n.indicatorClass]
		});
		e.icon !== void 0 && i.push(f(sn, {
			class: "q-tab__icon",
			name: e.icon
		})), e.label !== void 0 && i.push(f("div", { class: "q-tab__label" }, e.label)), e.alert && i.push(e.alertIcon === void 0 ? f("div", { class: "q-tab__alert" + (e.alert === !0 ? "" : ` text-${e.alert}`) }) : f(sn, {
			class: "q-tab__alert-icon",
			color: e.alert === !0 ? void 0 : e.alert,
			name: e.alertIcon
		})), r && i.push(o);
		let c = [f("div", {
			class: "q-focus-helper",
			tabindex: -1,
			ref: s
		}), f("div", { class: h() }, Ht(t.default, i))];
		return r || c.push(o), c;
	}
	let S = {
		name: r(() => e.name),
		disable: r(() => e.disable),
		rootRef: c,
		tabIndicatorRef: l,
		routeData: i
	};
	b(() => {
		a.unregisterTab(S);
	}), C(() => {
		a.registerTab(S);
	});
	function w(t, n) {
		let r = {
			ref: c,
			class: p(g.value),
			tabindex: _.value,
			role: "tab",
			"aria-selected": g.value ? "true" : "false",
			"aria-disabled": e.disable ? "true" : void 0,
			onClick: v,
			onKeydown: y,
			...n
		};
		return R(f(t, r, x()), [[Xn, d()]]);
	}
	return {
		renderTab: w,
		$tabs: a
	};
}
var Uo = /*#__PURE__*/ X({
	name: "QTab",
	props: Bo,
	emits: zo,
	setup(e, { slots: t, emit: n }) {
		let { renderTab: r } = Ho(e, t, n);
		return () => r("div");
	}
});
({
	...Ra,
	...$
});
var Wo = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, Go = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, Ko = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, qo = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Jo = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0(\.[\d]+)?|1(\.0+)?)\)$/, Yo = /^-?[\d]+\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/, Xo = /^([0-1]?\d|2[0-3]):[0-5]\d$/, Zo = /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/, Qo = /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/, $o = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, es = {
	date: (e) => Yo.test(e),
	time: (e) => Xo.test(e),
	fulltime: (e) => Zo.test(e),
	timeOrFulltime: (e) => Qo.test(e),
	email: (e) => $o.test(e),
	hexColor: (e) => Wo.test(e),
	hexaColor: (e) => Go.test(e),
	hexOrHexaColor: (e) => Ko.test(e),
	rgbColor: (e) => qo.test(e),
	rgbaColor: (e) => Jo.test(e),
	rgbOrRgbaColor: (e) => qo.test(e) || Jo.test(e),
	hexOrRgbColor: (e) => Wo.test(e) || qo.test(e),
	hexaOrRgbaColor: (e) => Go.test(e) || Jo.test(e),
	anyColor: (e) => Ko.test(e) || qo.test(e) || Jo.test(e)
};
({
	...$,
	...xa
});
function ts() {
	let e = A(!W.value);
	return e.value || C(() => {
		e.value = !0;
	}), { isHydrated: e };
}
var ns = [
	-61,
	9,
	38,
	199,
	426,
	686,
	756,
	818,
	1111,
	1181,
	1210,
	1635,
	2060,
	2097,
	2192,
	2262,
	2324,
	2394,
	2456,
	3178
];
function rs(e, t, n) {
	return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), us(ds(e, t, n));
}
function is(e, t, n) {
	return fs(ls(e, t, n));
}
function as(e) {
	return ss(e) === 0;
}
function os(e, t) {
	return t <= 6 ? 31 : t <= 11 || as(e) ? 30 : 29;
}
function ss(e) {
	let t = ns.length, n = ns[0], r, i, a, o, s;
	if (e < n || e >= ns[t - 1]) throw Error("Invalid Jalaali year " + e);
	for (s = 1; s < t && (r = ns[s], i = r - n, !(e < r)); s += 1) n = r;
	return o = e - n, i - o < 6 && (o = o - i + ps(i + 4, 33) * 33), a = ms(ms(o + 1, 33) - 1, 4), a === -1 && (a = 4), a;
}
function cs(e, t) {
	let n = ns.length, r = e + 621, i = -14, a = ns[0], o, s, c, l, u;
	if (e < a || e >= ns[n - 1]) throw Error("Invalid Jalaali year " + e);
	for (u = 1; u < n && (o = ns[u], s = o - a, !(e < o)); u += 1) i = i + ps(s, 33) * 8 + ps(ms(s, 33), 4), a = o;
	l = e - a, i = i + ps(l, 33) * 8 + ps(ms(l, 33) + 3, 4), ms(s, 33) === 4 && s - l === 4 && (i += 1);
	let d = ps(r, 4) - ps((ps(r, 100) + 1) * 3, 4) - 150, f = 20 + i - d;
	return t || (s - l < 6 && (l = l - s + ps(s + 4, 33) * 33), c = ms(ms(l + 1, 33) - 1, 4), c === -1 && (c = 4)), {
		leap: c,
		gy: r,
		march: f
	};
}
function ls(e, t, n) {
	let r = cs(e, !0);
	return ds(r.gy, 3, r.march) + (t - 1) * 31 - ps(t, 7) * (t - 7) + n - 1;
}
function us(e) {
	let t = fs(e).gy, n = t - 621, r, i, a, o = cs(n, !1);
	if (a = e - ds(t, 3, o.march), a >= 0) {
		if (a <= 185) return i = 1 + ps(a, 31), r = ms(a, 31) + 1, {
			jy: n,
			jm: i,
			jd: r
		};
		a -= 186;
	} else --n, a += 179, o.leap === 1 && (a += 1);
	return i = 7 + ps(a, 30), r = ms(a, 30) + 1, {
		jy: n,
		jm: i,
		jd: r
	};
}
function ds(e, t, n) {
	let r = ps((e + ps(t - 8, 6) + 100100) * 1461, 4) + ps(153 * ms(t + 9, 12) + 2, 5) + n - 34840408;
	return r = r - ps(ps(e + 100100 + ps(t - 8, 6), 100) * 3, 4) + 752, r;
}
function fs(e) {
	let t = 4 * e + 139361631;
	t = t + ps(ps(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
	let n = ps(ms(t, 1461), 4) * 5 + 308, r = ps(ms(n, 153), 5) + 1, i = ms(ps(n, 153), 12) + 1;
	return {
		gy: ps(t, 1461) - 100100 + ps(8 - i, 6),
		gm: i,
		gd: r
	};
}
function ps(e, t) {
	return Math.trunc(e / t);
}
function ms(e, t) {
	return e - Math.trunc(e / t) * t;
}
var hs = ["gregorian", "persian"], gs = {
	mask: { type: String },
	locale: Object,
	calendar: {
		type: String,
		validator: (e) => hs.includes(e),
		default: "gregorian"
	},
	landscape: Boolean,
	color: String,
	textColor: String,
	square: Boolean,
	flat: Boolean,
	bordered: Boolean,
	readonly: Boolean,
	disable: Boolean
}, _s = ["update:modelValue"];
function vs(e) {
	return e.year + "/" + Ft(e.month) + "/" + Ft(e.day);
}
function ys(e, t) {
	let n = r(() => !e.disable && !e.readonly), i = r(() => n.value ? 0 : -1), a = r(() => {
		let t = [];
		return e.color !== void 0 && t.push(`bg-${e.color}`), e.textColor !== void 0 && t.push(`text-${e.textColor}`), t.join(" ");
	});
	function o() {
		return {
			formatNumber: t.lang.formatNumber,
			...t.lang.date,
			...e.locale
		};
	}
	function s(t) {
		let n = /* @__PURE__ */ new Date(), r = t ? null : 0;
		if (e.calendar === "persian") {
			let e = rs(n);
			return {
				year: e.jy,
				month: e.jm,
				day: e.jd
			};
		}
		return {
			year: n.getFullYear(),
			month: n.getMonth() + 1,
			day: n.getDate(),
			hour: r,
			minute: r,
			second: r,
			millisecond: r
		};
	}
	return {
		editable: n,
		tabindex: i,
		headerClass: a,
		getLocale: o,
		getCurrentDate: s
	};
}
var bs = 864e5, xs = 36e5, Ss = 6e4, Cs = "YYYY-MM-DDTHH:mm:ss.SSSZ", ws = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|GG(?:GG)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, Ts = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|GG(?:GG)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, Es = /[.*+?^${}()|[\]\\]/g, Ds = /* @__PURE__ */ new Map(), Os = /* @__PURE__ */ new WeakMap(), ks = (e, t) => t.length - e.length;
function As(e) {
	return e.replaceAll(Es, String.raw`\$&`);
}
function js(e) {
	return "(" + [...e].sort(ks).map(As).join("|") + ")";
}
function Ms(e) {
	let t = Os.get(e);
	if (t !== void 0) return t;
	let n = e.days.map((e) => e.slice(0, 2)), r = js(e.days), i = js(n), a = js(e.daysShort), o = js(e.months), s = js(e.monthsShort), c = {
		days: r,
		daysMin: i,
		daysShort: a,
		months: o,
		monthsShort: s,
		daysMinList: n,
		daysMinAreUnique: new Set(n).size === n.length,
		key: [
			r,
			a,
			o,
			s
		].join("|")
	};
	return Os.set(e, c), c;
}
function Ns(e, t) {
	let n = Ms(t), { days: r, daysMin: i, daysShort: a, months: o, monthsShort: s } = n, c = e + "|" + n.key;
	if (Ds.has(c)) return Ds.get(c);
	let l = {}, u = 0, d = e.replace(Ts, (e) => {
		switch (u++, e) {
			case "YY": return l.YY = u, String.raw`(-?\d{1,2})`;
			case "YYYY": return l.YYYY = u, String.raw`(-?\d{1,4})`;
			case "M": return l.M = u, String.raw`(\d{1,2})`;
			case "Mo": return l.M = u++, String.raw`(\d{1,2}(st|nd|rd|th))`;
			case "MM": return l.M = u, String.raw`(\d{2})`;
			case "MMM": return l.MMM = u, s;
			case "MMMM": return l.MMMM = u, o;
			case "D": return l.D = u, String.raw`(\d{1,2})`;
			case "Do": return l.D = u++, String.raw`(\d{1,2}(st|nd|rd|th))`;
			case "DD": return l.D = u, String.raw`(\d{2})`;
			case "H": return l.H = u, String.raw`(\d{1,2})`;
			case "HH": return l.H = u, String.raw`(\d{2})`;
			case "h": return l.h = u, String.raw`(\d{1,2})`;
			case "hh": return l.h = u, String.raw`(\d{2})`;
			case "m": return l.m = u, String.raw`(\d{1,2})`;
			case "mm": return l.m = u, String.raw`(\d{2})`;
			case "s": return l.s = u, String.raw`(\d{1,2})`;
			case "ss": return l.s = u, String.raw`(\d{2})`;
			case "S": return l.S = u, String.raw`(\d{1})`;
			case "SS": return l.S = u, String.raw`(\d{2})`;
			case "SSS": return l.S = u, String.raw`(\d{3})`;
			case "A": return l.A = u, "(AM|PM)";
			case "a": return l.a = u, "(am|pm)";
			case "aa": return l.aa = u, String.raw`(a\.m\.|p\.m\.)`;
			case "dd": return n.daysMinAreUnique && (l.dd = u), i;
			case "ddd": return l.ddd = u, a;
			case "dddd": return l.dddd = u, r;
			case "Q": return String.raw`(\d{1})`;
			case "d": return l.d = u, String.raw`(\d{1})`;
			case "E": return l.E = u, String.raw`(\d{1})`;
			case "do": return l.d = u++, String.raw`(\d{1}(st|nd|rd|th))`;
			case "Qo": return "(1st|2nd|3rd|4th)";
			case "DDD":
			case "DDDD": return String.raw`(\d{1,3})`;
			case "DDDo": return u++, String.raw`(\d{1,3}(st|nd|rd|th))`;
			case "w": return l.w = u, String.raw`(\d{1,2})`;
			case "wo": return l.w = u++, String.raw`(\d{1,2}(st|nd|rd|th))`;
			case "ww": return l.w = u, String.raw`(\d{2})`;
			case "GG": return l.GG = u, String.raw`(-?\d{1,2})`;
			case "GGGG": return l.GGGG = u, String.raw`(-?\d{1,4})`;
			case "Z": return l.Z = u, String.raw`(Z|[+-]\d{2}:\d{2})`;
			case "ZZ": return l.ZZ = u, String.raw`(Z|[+-]\d{2}\d{2})`;
			case "X": return l.X = u, String.raw`(-?\d+)`;
			case "x": return l.x = u, String.raw`(-?\d{4,})`;
			default: return u--, e[0] === "[" && (e = e.slice(1, -1)), As(e);
		}
	}), f = {
		map: l,
		regex: RegExp("^" + d)
	};
	return Ds.size > 100 && Ds.clear(), Ds.set(c, f), f;
}
function Ps(e, t) {
	return e === void 0 ? t === void 0 ? rt.date : t.date : e;
}
function Fs(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), a = r % 60;
	return n + Ft(i) + t + Ft(a);
}
function Is(e, t, n) {
	if (t.E !== void 0) return Number.parseInt(e[t.E], 10);
	if (t.d !== void 0) {
		let n = Number.parseInt(e[t.d], 10);
		return n === 0 ? 7 : n;
	}
	return t.dddd === void 0 ? t.ddd === void 0 ? t.dd === void 0 ? 1 : Ms(n).daysMinList.indexOf(e[t.dd]) || 7 : n.daysShort.indexOf(e[t.ddd]) || 7 : n.days.indexOf(e[t.dddd]) || 7;
}
function Ls(e, t, n) {
	let r = new Date(e, 0, 4), i = new Date(e, 0, 4 - (r.getDay() + 6) % 7 + (t - 1) * 7 + (n - 1));
	return Bs(i) === t ? i : null;
}
function Rs(e, t, n, r, i) {
	let a = {
		year: null,
		month: null,
		day: null,
		hour: null,
		minute: null,
		second: null,
		millisecond: null,
		timezoneOffset: null,
		dateHash: null,
		timeHash: null
	};
	if (i !== void 0 && Object.assign(a, i), e == null || e === "" || typeof e != "string") return a;
	t === void 0 && (t = Cs);
	let o = Ps(n, ct.props), s = o.months, c = o.monthsShort, { regex: l, map: u } = Ns(t, o), d = e.match(l);
	if (d === null) return a;
	let f = "";
	if (u.X !== void 0 || u.x !== void 0) {
		let e = Number.parseInt(d[u.X ?? u.x], 10);
		if (Number.isNaN(e)) return a;
		let t = /* @__PURE__ */ new Date(e * (u.X === void 0 ? 1 : 1e3));
		a.year = t.getFullYear(), a.month = t.getMonth() + 1, a.day = t.getDate(), a.hour = t.getHours(), a.minute = t.getMinutes(), a.second = t.getSeconds(), a.millisecond = t.getMilliseconds();
	} else {
		if (u.YYYY !== void 0) a.year = Number.parseInt(d[u.YYYY], 10);
		else if (u.YY !== void 0) {
			let e = Number.parseInt(d[u.YY], 10);
			a.year = e < 0 ? e : 2e3 + e;
		}
		if (u.M !== void 0) {
			if (a.month = Number.parseInt(d[u.M], 10), a.month < 1 || a.month > 12) return a;
		} else u.MMM === void 0 ? u.MMMM !== void 0 && (a.month = s.indexOf(d[u.MMMM]) + 1) : a.month = c.indexOf(d[u.MMM]) + 1;
		if (u.D !== void 0) {
			if (a.day = Number.parseInt(d[u.D], 10), a.year === null || a.month === null || a.day < 1) return a;
			let e = r === "persian" ? os(a.year, a.month) : new Date(a.year, a.month, 0).getDate();
			if (a.day > e) return a;
		}
		if (u.w !== void 0 && a.day === null) {
			let e = Number.parseInt(d[u.w], 10);
			if (e < 1 || e > 53) return a;
			let t = a.year;
			if (u.GGGG !== void 0) t = Number.parseInt(d[u.GGGG], 10);
			else if (u.GG !== void 0) {
				let e = Number.parseInt(d[u.GG], 10);
				t = e < 0 ? e : 2e3 + e;
			}
			if (t === null) return a;
			let n = Is(d, u, o);
			if (n < 1 || n > 7) return a;
			let r = Ls(t, e, n);
			if (r === null) return a;
			a.year = r.getFullYear(), a.month = r.getMonth() + 1, a.day = r.getDate();
		}
		if (u.H !== void 0) {
			if (a.hour = Number.parseInt(d[u.H], 10), a.hour > 23) return a.hour = null, a;
		} else if (u.h !== void 0) {
			if (a.hour = Number.parseInt(d[u.h], 10), a.hour < 1 || a.hour > 12) return a.hour = null, a;
			a.hour %= 12, (u.A && d[u.A] === "PM" || u.a && d[u.a] === "pm" || u.aa && d[u.aa] === "p.m.") && (a.hour += 12), a.hour %= 24;
		}
		if (u.m !== void 0 && (a.minute = Number.parseInt(d[u.m], 10), a.minute > 59)) return a.minute = null, a;
		if (u.s !== void 0 && (a.second = Number.parseInt(d[u.s], 10), a.second > 59)) return a.second = null, a;
		if (u.S !== void 0 && (a.millisecond = Number.parseInt(d[u.S], 10) * 10 ** (3 - d[u.S].length)), u.Z !== void 0 || u.ZZ !== void 0) {
			if (f = u.Z === void 0 ? d[u.ZZ] : d[u.Z].replace(":", ""), f === "Z") a.timezoneOffset = 0;
			else {
				let e = Number(f.slice(1, 3)), t = Number(f.slice(3, 5));
				if (e > 23 || t > 59) return a;
				a.timezoneOffset = (f[0] === "+" ? -1 : 1) * (60 * e + t);
			}
		}
	}
	return a.dateHash = Ft(a.year, 4) + "/" + Ft(a.month) + "/" + Ft(a.day), a.timeHash = Ft(a.hour) + ":" + Ft(a.minute) + ":" + Ft(a.second) + f, a;
}
function zs(e) {
	let t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
	return t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3), t;
}
function Bs(e) {
	let t = zs(e), n = zs(new Date(t.getFullYear(), 0, 4)), r = t.getTimezoneOffset() - n.getTimezoneOffset();
	t.setMinutes(t.getMinutes() - r);
	let i = (t - n) / (bs * 7);
	return 1 + Math.floor(i);
}
function Vs(e) {
	return zs(e).getFullYear();
}
function Hs(e, t, n) {
	let r = new Date(e), i = `set${n ? "UTC" : ""}`;
	switch (t) {
		case "year":
		case "years": r[`${i}Month`](0);
		case "month":
		case "months": r[`${i}Date`](1);
		case "day":
		case "days":
		case "date": r[`${i}Hours`](0);
		case "hour":
		case "hours": r[`${i}Minutes`](0);
		case "minute":
		case "minutes": r[`${i}Seconds`](0);
		case "second":
		case "seconds": r[`${i}Milliseconds`](0);
	}
	return r;
}
function Us(e, t, n) {
	return (e.getTime() - e.getTimezoneOffset() * Ss - (t.getTime() - t.getTimezoneOffset() * Ss)) / n;
}
function Ws(e, t, n = "days") {
	let r = new Date(e), i = new Date(t);
	switch (n) {
		case "years":
		case "year": return r.getFullYear() - i.getFullYear();
		case "months":
		case "month": return (r.getFullYear() - i.getFullYear()) * 12 + r.getMonth() - i.getMonth();
		case "days":
		case "day":
		case "date": return Us(Hs(r, "day"), Hs(i, "day"), bs);
		case "hours":
		case "hour": return Us(Hs(r, "hour"), Hs(i, "hour"), xs);
		case "minutes":
		case "minute": return Us(Hs(r, "minute"), Hs(i, "minute"), Ss);
		case "seconds":
		case "second": return Us(Hs(r, "second"), Hs(i, "second"), 1e3);
	}
}
function Gs(e) {
	return Ws(e, Hs(e, "year"), "days") + 1;
}
function Ks(e) {
	if (e >= 11 && e <= 13) return `${e}th`;
	switch (e % 10) {
		case 1: return `${e}st`;
		case 2: return `${e}nd`;
		case 3: return `${e}rd`;
	}
	return `${e}th`;
}
var qs = {
	YY(e, t, n) {
		let r = this.YYYY(e, t, n) % 100;
		return r >= 0 ? Ft(r) : "-" + Ft(Math.abs(r));
	},
	YYYY(e, t, n) {
		return n ?? e.getFullYear();
	},
	M(e) {
		return e.getMonth() + 1;
	},
	Mo(e) {
		return Ks(e.getMonth() + 1);
	},
	MM(e) {
		return Ft(e.getMonth() + 1);
	},
	MMM(e, t) {
		return t.monthsShort[e.getMonth()];
	},
	MMMM(e, t) {
		return t.months[e.getMonth()];
	},
	Q(e) {
		return Math.ceil((e.getMonth() + 1) / 3);
	},
	Qo(e) {
		return Ks(this.Q(e));
	},
	D(e) {
		return e.getDate();
	},
	Do(e) {
		return Ks(e.getDate());
	},
	DD(e) {
		return Ft(e.getDate());
	},
	DDD(e) {
		return Gs(e);
	},
	DDDo(e) {
		return Ks(Gs(e));
	},
	DDDD(e) {
		return Ft(Gs(e), 3);
	},
	d(e) {
		return e.getDay();
	},
	do(e) {
		return Ks(e.getDay());
	},
	dd(e, t) {
		return t.days[e.getDay()].slice(0, 2);
	},
	ddd(e, t) {
		return t.daysShort[e.getDay()];
	},
	dddd(e, t) {
		return t.days[e.getDay()];
	},
	E(e) {
		return e.getDay() || 7;
	},
	w(e) {
		return Bs(e);
	},
	wo(e) {
		return Ks(Bs(e));
	},
	ww(e) {
		return Ft(Bs(e));
	},
	GG(e, t, n) {
		let r = this.GGGG(e, t, n) % 100;
		return r >= 0 ? Ft(r) : "-" + Ft(Math.abs(r));
	},
	GGGG(e, t, n) {
		return n ?? Vs(e);
	},
	H(e) {
		return e.getHours();
	},
	HH(e) {
		return Ft(e.getHours());
	},
	h(e) {
		let t = e.getHours();
		return t === 0 ? 12 : t > 12 ? t % 12 : t;
	},
	hh(e) {
		return Ft(this.h(e));
	},
	m(e) {
		return e.getMinutes();
	},
	mm(e) {
		return Ft(e.getMinutes());
	},
	s(e) {
		return e.getSeconds();
	},
	ss(e) {
		return Ft(e.getSeconds());
	},
	S(e) {
		return Math.floor(e.getMilliseconds() / 100);
	},
	SS(e) {
		return Ft(Math.floor(e.getMilliseconds() / 10));
	},
	SSS(e) {
		return Ft(e.getMilliseconds(), 3);
	},
	A(e) {
		return e.getHours() < 12 ? "AM" : "PM";
	},
	a(e) {
		return e.getHours() < 12 ? "am" : "pm";
	},
	aa(e) {
		return e.getHours() < 12 ? "a.m." : "p.m.";
	},
	Z(e, t, n, r) {
		return Fs(r ?? e.getTimezoneOffset(), ":");
	},
	ZZ(e, t, n, r) {
		return Fs(r ?? e.getTimezoneOffset());
	},
	X(e) {
		return Math.floor(e.getTime() / 1e3);
	},
	x(e) {
		return e.getTime();
	}
}, Js = /* @__PURE__ */ new Map();
function Ys(e) {
	let t = [], n = 0;
	return e.replace(ws, (r, i, a) => {
		a > n && t.push(e.slice(n, a)), n = a + r.length, t.push(r in qs ? qs[r] : i === void 0 ? r : i.split(String.raw`\]`).join("]"));
	}), n < e.length && t.push(e.slice(n)), t;
}
function Xs(e, t, n, r, i) {
	if (e !== 0 && !e || e === Infinity || e === -Infinity) return;
	let a = new Date(e);
	if (Number.isNaN(a.getTime())) return;
	t === void 0 && (t = Cs);
	let o = Ps(n, ct.props), s = Js.get(t);
	s === void 0 && (Js.size > 100 && Js.clear(), s = Ys(t), Js.set(t, s));
	let c = "";
	for (let e of s) c += typeof e == "function" ? e.call(qs, a, o, r, i) : e;
	return c;
}
var Zs = 20, Qs = [
	"Calendar",
	"Years",
	"Months"
], $s = (e) => Qs.includes(e), ec = /^-?[\d]+\/[0-1]\d$/, tc = (e) => ec.test(e), nc = " — ";
function rc(e) {
	return e.year + "/" + Ft(e.month);
}
function ic(e) {
	e.keyCode === 32 && Z(e);
}
function ac(e) {
	return {
		year: e.year,
		month: e.month,
		day: e.day
	};
}
var oc = /*#__PURE__*/ X({
	name: "QDate",
	props: {
		...gs,
		...xa,
		...$,
		modelValue: {
			required: !0,
			default: null,
			validator: (e) => typeof e == "string" || Array.isArray(e) || Object(e) === e || e === null
		},
		multiple: Boolean,
		range: Boolean,
		title: String,
		subtitle: String,
		mask: {
			...gs.mask,
			default: "YYYY/MM/DD"
		},
		defaultYearMonth: {
			type: String,
			validator: tc
		},
		yearsInMonthView: Boolean,
		events: [Array, Function],
		eventColor: [String, Function],
		emitImmediately: Boolean,
		options: [Array, Function],
		navigationMinYearMonth: {
			type: String,
			validator: tc
		},
		navigationMaxYearMonth: {
			type: String,
			validator: tc
		},
		noUnset: Boolean,
		firstDayOfWeek: [String, Number],
		todayBtn: Boolean,
		minimal: Boolean,
		defaultView: {
			type: String,
			default: "Calendar",
			validator: $s
		}
	},
	emits: [
		..._s,
		"rangeStart",
		"rangeEnd",
		"navigation"
	],
	setup(e, { slots: t, emit: i }) {
		let { proxy: a } = u(), o = At(), s = cn(e, o), { getCache: c } = Ia(), { isHydrated: l } = ts(), { tabindex: d, headerClass: p, getLocale: m, getCurrentDate: h } = ys(e, o), g, v = Ca(Sa(e)), y = M(null), b = M(null), x = A(ke()), S = A(m());
		function C(e) {
			let t = String(e);
			return S.value.formatNumber?.(t) ?? t;
		}
		let w = A(null), T = null, E = r(() => ke()), D = r(() => m()), O = r(() => h()), k = A(je(x.value, S.value)), j = A(e.defaultView), N = r(() => o.lang.rtl ? "right" : "left"), P = A(N.value), F = A(N.value), L = k.value.year, R = A(L - L % Zs - (L < 0 ? Zs : 0)), z = A(null), B = r(() => {
			let t = e.landscape ? "landscape" : "portrait";
			return `q-date q-date--${t} q-date--${t}-${e.minimal ? "minimal" : "standard"}` + (s() ? " q-date--dark q-dark" : "") + (e.bordered ? " q-date--bordered" : "") + (e.square ? " q-date--square no-border-radius" : "") + (e.flat ? " q-date--flat no-shadow" : "") + (e.disable ? " disabled" : e.readonly ? " q-date--readonly" : "");
		}), V = r(() => e.color || "primary"), H = r(() => e.textColor || "white"), U = r(() => e.emitImmediately && !e.multiple && !e.range), ee = r(() => Array.isArray(e.modelValue) ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), W = r(() => ee.value.filter((e) => typeof e == "string").map((e) => Ae(e, x.value, S.value)).filter((e) => e.dateHash !== null && e.day !== null && e.month !== null && e.year !== null)), G = r(() => {
			let e = (e) => Ae(e, x.value, S.value);
			return ee.value.filter((e) => bt(e) && e.from !== void 0 && e.to !== void 0).map((t) => ({
				from: e(t.from),
				to: e(t.to)
			})).filter((e) => e.from.dateHash !== null && e.to.dateHash !== null && e.from.dateHash < e.to.dateHash);
		}), te = r(() => e.calendar === "persian" ? (e) => {
			let t = is(e.year, e.month, e.day);
			return new Date(t.gy, t.gm - 1, t.gd);
		} : (e) => new Date(e.year, e.month - 1, e.day)), K = r(() => e.calendar === "persian" ? vs : (e, t, n) => Xs(new Date(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond), t === void 0 ? x.value : t, n === void 0 ? S.value : n, e.year, e.timezoneOffset)), ne = r(() => W.value.length + G.value.reduce((e, t) => e + 1 + Ws(te.value(t.to), te.value(t.from)), 0)), re = r(() => {
			if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
			if (z.value !== null) {
				let e = z.value.init, t = te.value(e);
				return S.value.daysShort[t.getDay()] + ", " + S.value.monthsShort[e.month - 1] + " " + C(e.day) + " — ?";
			}
			if (ne.value === 0) return nc;
			if (ne.value > 1) return `${C(ne.value)} ${S.value.pluralDay}`;
			let t = W.value[0], n = te.value(t);
			return Number.isNaN(n.valueOf()) ? nc : S.value.headerTitle === void 0 ? S.value.daysShort[n.getDay()] + ", " + S.value.monthsShort[t.month - 1] + " " + C(t.day) : S.value.headerTitle(n, t);
		}), q = r(() => [...W.value, ...G.value.map((e) => e.from)].sort((e, t) => e.year - t.year || e.month - t.month)[0]), J = r(() => [...W.value, ...G.value.map((e) => e.to)].sort((e, t) => t.year - e.year || t.month - e.month)[0]), ie = r(() => {
			if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
			if (ne.value === 0) return nc;
			if (ne.value > 1) {
				let e = q.value, t = J.value, n = S.value.monthsShort;
				return n[e.month - 1] + (e.year === t.year ? e.month === t.month ? "" : nc + n[t.month - 1] : " " + C(e.year) + nc + n[t.month - 1] + " ") + " " + C(t.year);
			}
			return C(W.value[0].year);
		}), ae = r(() => {
			let e = [o.iconSet.datetime.arrowLeft, o.iconSet.datetime.arrowRight];
			return o.lang.rtl ? e.reverse() : e;
		}), oe = r(() => e.firstDayOfWeek === void 0 ? S.value.firstDayOfWeek : Number(e.firstDayOfWeek)), se = r(() => {
			let e = S.value.daysShort, t = oe.value;
			return t > 0 ? [...e.slice(t, 7), ...e.slice(0, t)] : e;
		}), ce = r(() => {
			let t = k.value;
			return e.calendar === "persian" ? os(t.year, t.month) : new Date(t.year, t.month, 0).getDate();
		}), le = r(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), ue = r(() => {
			if (e.navigationMinYearMonth === void 0) return null;
			let t = e.navigationMinYearMonth.split("/");
			return {
				year: Number.parseInt(t[0], 10),
				month: Number.parseInt(t[1], 10)
			};
		}), de = r(() => {
			if (e.navigationMaxYearMonth === void 0) return null;
			let t = e.navigationMaxYearMonth.split("/");
			return {
				year: Number.parseInt(t[0], 10),
				month: Number.parseInt(t[1], 10)
			};
		}), fe = r(() => {
			let e = {
				month: {
					prev: !0,
					next: !0
				},
				year: {
					prev: !0,
					next: !0
				}
			};
			return ue.value !== null && ue.value.year >= k.value.year && (e.year.prev = !1, ue.value.year === k.value.year && ue.value.month >= k.value.month && (e.month.prev = !1)), de.value !== null && de.value.year <= k.value.year && (e.year.next = !1, de.value.year === k.value.year && de.value.month <= k.value.month && (e.month.next = !1)), e;
		}), pe = r(() => {
			let e = {};
			return W.value.forEach((t) => {
				let n = rc(t);
				e[n] === void 0 && (e[n] = []), e[n].push(t.day);
			}), e;
		}), me = r(() => {
			let e = {};
			return G.value.forEach((t) => {
				let n = rc(t.from), r = rc(t.to);
				if (e[n] === void 0 && (e[n] = []), e[n].push({
					from: t.from.day,
					to: n === r ? t.to.day : void 0,
					range: t
				}), n < r) {
					let n, { year: i, month: a } = t.from, o = a < 12 ? {
						year: i,
						month: a + 1
					} : {
						year: i + 1,
						month: 1
					};
					for (; (n = rc(o)) <= r;) e[n] === void 0 && (e[n] = []), e[n].push({
						from: void 0,
						to: n === r ? t.to.day : void 0,
						range: t
					}), o.month++, o.month > 12 && (o.year++, o.month = 1);
				}
			}), e;
		}), he = r(() => {
			if (z.value === null) return;
			let { init: e, initHash: t, final: n, finalHash: r } = z.value, [i, a] = t <= r ? [e, n] : [n, e], o = rc(i), s = rc(a);
			if (o !== ge.value && s !== ge.value) return;
			let c = {};
			return o === ge.value ? (c.from = i.day, c.includeFrom = !0) : c.from = 1, s === ge.value ? (c.to = a.day, c.includeTo = !0) : c.to = ce.value, c;
		}), ge = r(() => rc(k.value)), _e = r(() => {
			let t = {};
			if (e.options === void 0) {
				for (let e = 1; e <= ce.value; e++) t[e] = !0;
				return t;
			}
			let n = typeof e.options == "function" ? e.options : (t) => e.options.includes(t);
			for (let e = 1; e <= ce.value; e++) {
				let r = ge.value + "/" + Ft(e);
				t[e] = n(r);
			}
			return t;
		}), ve = r(() => {
			let t = {};
			if (e.events === void 0) for (let e = 1; e <= ce.value; e++) t[e] = !1;
			else {
				let n = typeof e.events == "function" ? e.events : (t) => e.events.includes(t);
				for (let e = 1; e <= ce.value; e++) {
					let r = ge.value + "/" + Ft(e);
					if (n(r)) {
						let n = le.value(r);
						t[e] = "q-date__event" + (n ? ` bg-${n}` : "");
					} else t[e] = !1;
				}
			}
			return t;
		}), ye = r(() => {
			let t, n, { year: r, month: i } = k.value;
			if (e.calendar !== "persian") t = new Date(r, i - 1, 1), n = new Date(r, i - 1, 0).getDate();
			else {
				let e = is(r, i, 1);
				t = new Date(e.gy, e.gm - 1, e.gd);
				let a = i - 1, o = r;
				a === 0 && (a = 12, o--), n = os(o, a);
			}
			return {
				days: t.getDay() - oe.value - 1,
				endDay: n
			};
		}), be = r(() => {
			let e = [], { days: t, endDay: n } = ye.value, r = t < 0 ? t + 7 : t;
			if (r < 6) for (let t = n - r; t <= n; t++) e.push({
				i: t,
				fill: !0
			});
			let i = e.length;
			for (let t = 1; t <= ce.value; t++) {
				let n = {
					i: t,
					event: ve.value[t],
					classes: []
				};
				_e.value[t] && (n.in = !0, n.flat = !0), e.push(n);
			}
			if (pe.value[ge.value] !== void 0 && pe.value[ge.value].forEach((t) => {
				let n = i + t - 1;
				Object.assign(e[n], {
					selected: !0,
					unelevated: !0,
					flat: !1,
					color: V.value,
					textColor: H.value
				});
			}), me.value[ge.value] !== void 0 && me.value[ge.value].forEach((t) => {
				if (t.from !== void 0) {
					let n = i + t.from - 1, r = i + (t.to || ce.value) - 1;
					for (let i = n; i <= r; i++) Object.assign(e[i], {
						range: t.range,
						unelevated: !0,
						color: V.value,
						textColor: H.value
					});
					Object.assign(e[n], {
						rangeFrom: !0,
						flat: !1
					}), t.to !== void 0 && Object.assign(e[r], {
						rangeTo: !0,
						flat: !1
					});
				} else if (t.to !== void 0) {
					let n = i + t.to - 1;
					for (let r = i; r <= n; r++) Object.assign(e[r], {
						range: t.range,
						unelevated: !0,
						color: V.value,
						textColor: H.value
					});
					Object.assign(e[n], {
						flat: !1,
						rangeTo: !0
					});
				} else {
					let n = i + ce.value - 1;
					for (let r = i; r <= n; r++) Object.assign(e[r], {
						range: t.range,
						unelevated: !0,
						color: V.value,
						textColor: H.value
					});
				}
			}), he.value !== void 0) {
				let t = i + he.value.from - 1, n = i + he.value.to - 1;
				for (let r = t; r <= n; r++) e[r].color = V.value, e[r].editRange = !0;
				he.value.includeFrom && (e[t].editRangeFrom = !0), he.value.includeTo && (e[n].editRangeTo = !0);
			}
			l.value && k.value.year === O.value.year && k.value.month === O.value.month && (e[i + O.value.day - 1].today = !0);
			let a = e.length % 7;
			if (a > 0) {
				let t = 7 - a;
				for (let n = 1; n <= t; n++) e.push({
					i: n,
					fill: !0
				});
			}
			return e.forEach((e) => {
				let t = "q-date__calendar-item ";
				e.fill ? t += "q-date__calendar-item--fill" : (t += `q-date__calendar-item--${e.in ? "in" : "out"}`, e.range !== void 0 && (t += ` q-date__range${e.rangeTo ? "-to" : e.rangeFrom ? "-from" : ""}`), e.editRange && (t += ` q-date__edit-range${e.editRangeFrom ? "-from" : ""}${e.editRangeTo ? "-to" : ""}`), (e.range !== void 0 || e.editRange) && (t += ` text-${e.color}`)), e.classes = t;
			}), e;
		}), xe = r(() => be.value.filter((e) => e.in === !0).map((e) => e.i)), Se = r(() => be.value.findIndex((e) => e.fill !== !0)), Ce = r(() => {
			let e = xe.value;
			if (e.length === 0) return null;
			if (w.value !== null && e.includes(w.value)) return w.value;
			let t = be.value.find((e) => e.in === !0 && (e.selected === !0 || e.rangeFrom === !0)) ?? be.value.find((e) => e.in === !0 && e.today === !0);
			return t === void 0 ? e[0] : t.i;
		}), Y = r(() => e.disable ? { "aria-disabled": "true" } : {});
		I(() => e.modelValue, (e) => {
			if (g === JSON.stringify(e)) g = 0;
			else {
				let e = je(x.value, S.value);
				Re(e.year, e.month, e);
			}
		}), I(j, () => {
			y.value !== null && a.$el.contains(document.activeElement) && y.value.focus({ preventScroll: !0 });
		}), I(() => k.value.year + "|" + k.value.month, () => {
			i("navigation", {
				year: k.value.year,
				month: k.value.month
			});
		}), I(E, (e) => {
			We(e, S.value, "mask"), x.value = e;
		}), I(D, (e) => {
			We(x.value, e, "locale"), S.value = e;
		}), I(ge, () => {
			if (T !== null) {
				let e = T <= 0 ? ce.value + T : Math.min(T, ce.value), t = T <= 0 ? -1 : 1;
				T = null;
				let n = Ze(Math.max(1, e), t) ?? Ze(Math.max(1, e), -t);
				n !== null && Qe(n);
			} else w.value = null;
		}, { flush: "post" });
		function we(e) {
			g = JSON.stringify(e);
		}
		function X() {
			let { year: e, month: t, day: n } = O.value, r = {
				...k.value,
				year: e,
				month: t,
				day: n
			}, i = pe.value[rc(r)];
			(i === void 0 || !i.includes(r.day)) && He(r), De(r.year, r.month);
		}
		function Te(e) {
			$s(e) && (j.value = e);
		}
		function Ee(e, t) {
			["month", "year"].includes(e) && (e === "month" ? Ne : Pe)(t ? -1 : 1);
		}
		function De(e, t) {
			j.value = "Calendar", Re(e, t);
		}
		function Oe(t, n) {
			if (!e.range || !t) {
				z.value = null;
				return;
			}
			let r = {
				...k.value,
				...t
			}, i = n === void 0 ? r : {
				...k.value,
				...n
			};
			z.value = {
				init: r,
				initHash: vs(r),
				final: i,
				finalHash: vs(i)
			}, De(r.year, r.month);
		}
		function ke() {
			return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
		}
		function Ae(t, n, r) {
			return Rs(t, n, r, e.calendar, {
				hour: 0,
				minute: 0,
				second: 0,
				millisecond: 0
			});
		}
		function je(t, n) {
			let r = Array.isArray(e.modelValue) ? e.modelValue : e.modelValue ? [e.modelValue] : [];
			if (r.length === 0) return Me();
			let i = r.at(-1), a = Ae(i.from === void 0 ? i : i.from, t, n);
			return a.dateHash === null ? Me() : a;
		}
		function Me() {
			let t, n;
			if (e.defaultYearMonth !== void 0) {
				let r = e.defaultYearMonth.split("/");
				t = Number.parseInt(r[0], 10), n = Number.parseInt(r[1], 10);
			} else {
				let e = O.value === void 0 ? h() : O.value;
				t = e.year, n = e.month;
			}
			return {
				year: t,
				month: n,
				day: 1,
				hour: 0,
				minute: 0,
				second: 0,
				millisecond: 0,
				dateHash: t + "/" + Ft(n) + "/01"
			};
		}
		function Ne(e) {
			let t = k.value.year, n = Number(k.value.month) + e;
			n === 13 ? (n = 1, t++) : n === 0 && (n = 12, t--), Re(t, n), U.value && Be("month");
		}
		function Pe(e) {
			Re(Number(k.value.year) + e, k.value.month), U.value && Be("year");
		}
		function Fe(t) {
			Re(t, k.value.month), j.value = e.defaultView === "Years" ? "Months" : "Calendar", U.value && Be("year");
		}
		function Ie(e) {
			Re(k.value.year, e), j.value = "Calendar", U.value && Be("month");
		}
		function Le(e, t) {
			(pe.value[t]?.includes(e.day) === !0 ? Ue : He)(e);
		}
		function Re(e, t, n) {
			if (ue.value !== null && e <= ue.value.year && ((t < ue.value.month || e < ue.value.year) && (t = ue.value.month), e = ue.value.year), de.value !== null && e >= de.value.year && ((t > de.value.month || e > de.value.year) && (t = de.value.month), e = de.value.year), n !== void 0) {
				let { hour: e, minute: t, second: r, millisecond: i, timezoneOffset: a, timeHash: o } = n;
				Object.assign(k.value, {
					hour: e,
					minute: t,
					second: r,
					millisecond: i,
					timezoneOffset: a,
					timeHash: o
				});
			}
			let r = e + "/" + Ft(t) + "/01";
			r !== k.value.dateHash && (P.value = k.value.dateHash < r == (o.lang.rtl !== !0) ? "left" : "right", e !== k.value.year && (F.value = P.value), _(() => {
				R.value = e - e % Zs - (e < 0 ? Zs : 0), Object.assign(k.value, {
					year: e,
					month: t,
					day: 1,
					dateHash: r
				});
			}));
		}
		function ze(t, n, r) {
			let a = t !== null && t.length === 1 && !e.multiple ? t[0] : t, { reason: o, details: s } = Ve(n, r);
			we(a), i("update:modelValue", a, o, s);
		}
		function Be(t) {
			let n = W.value[0] !== void 0 && W.value[0].dateHash !== null ? { ...W.value[0] } : { ...k.value };
			_(() => {
				n.year = k.value.year, n.month = k.value.month;
				let r = e.calendar === "persian" ? os(n.year, n.month) : new Date(n.year, n.month, 0).getDate();
				n.day = Math.min(Math.max(1, n.day), r);
				let a = Q(n), { details: o } = Ve("", n);
				we(a), i("update:modelValue", a, t, o);
			});
		}
		function Ve(e, t) {
			return t.from === void 0 ? {
				reason: `${e}-day`,
				details: ac(t)
			} : {
				reason: `${e}-range`,
				details: {
					...ac(t.target),
					from: ac(t.from),
					to: ac(t.to)
				}
			};
		}
		function Q(e, t, n) {
			return e.from === void 0 ? K.value(e, t, n) : {
				from: K.value(e.from, t, n),
				to: K.value(e.to, t, n)
			};
		}
		function He(t) {
			let n;
			if (e.multiple) {
				if (t.from !== void 0) {
					let e = vs(t.from), r = vs(t.to), i = W.value.filter((t) => t.dateHash < e || t.dateHash > r), a = G.value.filter(({ from: t, to: n }) => n.dateHash < e || t.dateHash > r);
					n = [
						...i,
						...a,
						t
					].map((e) => Q(e));
				} else n = [...ee.value, Q(t)];
			} else n = Q(t);
			ze(n, "add", t);
		}
		function Ue(t) {
			if (e.noUnset) return;
			let n = null;
			if (e.multiple && Array.isArray(e.modelValue)) {
				let r = Q(t);
				n = t.from === void 0 ? e.modelValue.filter((e) => e !== r) : e.modelValue.filter((e) => e.from === void 0 || e.from !== r.from && e.to !== r.to), n.length === 0 && (n = null);
			}
			ze(n, "remove", t);
		}
		function We(t, n, r) {
			let a = [...W.value, ...G.value].map((e) => Q(e, t, n)).filter((e) => e.from === void 0 ? e.dateHash !== null : e.from.dateHash !== null && e.to.dateHash !== null), o = (e.multiple ? a : a[0]) || null;
			we(o), i("update:modelValue", o, r);
		}
		function Ge() {
			if (!e.minimal) return f("div", { class: "q-date__header " + p.value }, [f("div", { class: "relative-position" }, [f(n, { name: "q-transition--fade" }, () => f("div", {
				key: "h-yr-" + ie.value,
				class: "q-date__header-subtitle q-date__header-link " + (j.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"),
				tabindex: d.value,
				role: "button",
				"aria-pressed": j.value === "Years" ? "true" : "false",
				...c("vY", {
					onClick() {
						j.value = "Years";
					},
					onKeydown: ic,
					onKeyup(e) {
						[13, 32].includes(e.keyCode) && (j.value = "Years", Z(e));
					}
				})
			}, [ie.value]))]), f("div", { class: "q-date__header-title relative-position flex no-wrap" }, [f("div", { class: "relative-position col" }, [f(n, { name: "q-transition--fade" }, () => f("div", {
				key: "h-sub" + re.value,
				class: "q-date__header-title-label q-date__header-link " + (j.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"),
				tabindex: d.value,
				role: "button",
				"aria-pressed": j.value === "Calendar" ? "true" : "false",
				...c("vC", {
					onClick() {
						j.value = "Calendar";
					},
					onKeydown: ic,
					onKeyup(e) {
						[13, 32].includes(e.keyCode) && (j.value = "Calendar", Z(e));
					}
				})
			}, [re.value]))]), e.todayBtn ? f(fr, {
				class: "q-date__header-today self-start",
				icon: o.iconSet.datetime.today,
				"aria-label": o.lang.date.today,
				flat: !0,
				size: "sm",
				round: !0,
				tabindex: d.value,
				onClick: X
			}) : null])]);
		}
		function Ke({ label: e, type: t, key: r, dir: i, goTo: a, boundaries: s, cls: l }) {
			return [
				f("div", { class: "row items-center q-date__arrow" }, [f(fr, {
					round: !0,
					dense: !0,
					size: "sm",
					flat: !0,
					icon: ae.value[0],
					"aria-label": t === "Years" ? o.lang.date.prevYear : o.lang.date.prevMonth,
					tabindex: d.value,
					disable: !s.prev,
					...c("go-#" + t, { onClick() {
						a(-1);
					} })
				})]),
				f("div", { class: "relative-position overflow-hidden flex flex-center" + l }, [f(n, { name: "q-transition--jump-" + i }, () => f("div", { key: r }, [f(fr, {
					flat: !0,
					dense: !0,
					noCaps: !0,
					label: e,
					tabindex: d.value,
					...c("view#" + t, { onClick: () => {
						j.value = t;
					} })
				})]))]),
				f("div", { class: "row items-center q-date__arrow" }, [f(fr, {
					round: !0,
					dense: !0,
					size: "sm",
					flat: !0,
					icon: ae.value[1],
					"aria-label": t === "Years" ? o.lang.date.nextYear : o.lang.date.nextMonth,
					tabindex: d.value,
					disable: !s.next,
					...c("go+#" + t, { onClick() {
						a(1);
					} })
				})])
			];
		}
		let qe = {
			Calendar: () => [f("div", {
				key: "calendar-view",
				class: "q-date__view q-date__calendar"
			}, [
				f("div", { class: "q-date__navigation row items-center no-wrap" }, [...Ke({
					label: S.value.months[k.value.month - 1],
					type: "Months",
					key: k.value.month,
					dir: P.value,
					goTo: Ne,
					boundaries: fe.value.month,
					cls: " col"
				}), ...Ke({
					label: C(k.value.year),
					type: "Years",
					key: k.value.year,
					dir: F.value,
					goTo: Pe,
					boundaries: fe.value.year,
					cls: ""
				})]),
				f("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, se.value.map((e) => f("div", { class: "q-date__calendar-item" }, [f("div", e)]))),
				f("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [f(n, { name: "q-transition--slide-" + P.value }, () => f("div", {
					key: ge.value,
					class: "q-date__calendar-days fit"
				}, be.value.map((e) => f("div", { class: e.classes }, [e.in ? f(fr, {
					class: e.today ? "q-date__today" : "",
					dense: !0,
					flat: e.flat,
					unelevated: e.unelevated,
					color: e.color,
					textColor: e.textColor,
					label: C(e.i),
					tabindex: e.i === Ce.value ? d.value : -1,
					ref: e.i === Ce.value ? b : void 0,
					"aria-label": `${C(e.i)} ${S.value.months[k.value.month - 1]} ${C(k.value.year)}`,
					"aria-pressed": e.selected === !0 || e.range !== void 0 ? "true" : "false",
					"aria-current": e.today === !0 ? "date" : void 0,
					...c("day#" + e.i, {
						onClick: () => {
							Je(e.i);
						},
						onMouseover: () => {
							Ye(e.i);
						},
						onFocus: () => {
							Xe(e.i);
						},
						onKeydown: (t) => {
							et(t, e.i);
						}
					})
				}, e.event ? () => f("div", { class: e.event }) : null) : f("div", C(e.i))]))))])
			])],
			Months() {
				let t = l.value && k.value.year === O.value.year, n = (e) => ue.value !== null && k.value.year === ue.value.year && ue.value.month > e || de.value !== null && k.value.year === de.value.year && de.value.month < e, r = S.value.monthsShort.map((e, r) => {
					let i = k.value.month === r + 1;
					return f("div", { class: "q-date__months-item flex flex-center" }, [f(fr, {
						class: t && O.value.month === r + 1 ? "q-date__today" : null,
						flat: !i,
						label: e,
						"aria-label": S.value.months[r],
						unelevated: i,
						color: i ? V.value : null,
						textColor: i ? H.value : null,
						tabindex: d.value,
						disable: n(r + 1),
						...c("month#" + r, { onClick: () => {
							Ie(r + 1);
						} })
					})]);
				});
				return e.yearsInMonthView && r.unshift(f("div", { class: "row no-wrap full-width" }, [Ke({
					label: C(k.value.year),
					type: "Years",
					key: k.value.year,
					dir: F.value,
					goTo: Pe,
					boundaries: fe.value.year,
					cls: " col"
				})])), f("div", {
					key: "months-view",
					class: "q-date__view q-date__months flex flex-center"
				}, r);
			},
			Years() {
				let e = R.value, t = e + Zs, n = [], r = (e) => ue.value !== null && ue.value.year > e || de.value !== null && de.value.year < e;
				for (let i = e; i <= t; i++) {
					let e = k.value.year === i;
					n.push(f("div", { class: "q-date__years-item flex flex-center" }, [f(fr, {
						key: "yr" + i,
						class: l.value && O.value.year === i ? "q-date__today" : null,
						flat: !e,
						label: C(i),
						dense: !0,
						unelevated: e,
						color: e ? V.value : null,
						textColor: e ? H.value : null,
						tabindex: d.value,
						disable: r(i),
						...c("yr#" + i, { onClick: () => {
							Fe(i);
						} })
					})]));
				}
				return f("div", { class: "q-date__view q-date__years flex flex-center" }, [
					f("div", { class: "col-auto" }, [f(fr, {
						round: !0,
						dense: !0,
						flat: !0,
						icon: ae.value[0],
						"aria-label": o.lang.date.prevRangeYears(Zs),
						tabindex: d.value,
						disable: r(e),
						...c("y-", { onClick: () => {
							R.value -= Zs;
						} })
					})]),
					f("div", { class: "q-date__years-content col self-stretch row items-center" }, n),
					f("div", { class: "col-auto" }, [f(fr, {
						round: !0,
						dense: !0,
						flat: !0,
						icon: ae.value[1],
						"aria-label": o.lang.date.nextRangeYears(Zs),
						tabindex: d.value,
						disable: r(t),
						...c("y+", { onClick: () => {
							R.value += Zs;
						} })
					})])
				]);
			}
		};
		function Je(t) {
			let n = {
				...k.value,
				day: t
			};
			if (!e.range) Le(n, ge.value);
			else if (z.value === null) {
				let r = be.value.find((e) => !e.fill && e.i === t);
				if (!e.noUnset && r.range !== void 0) {
					Ue({
						target: n,
						from: r.range.from,
						to: r.range.to
					});
					return;
				}
				if (r.selected) {
					Ue(n);
					return;
				}
				let a = vs(n);
				z.value = {
					init: n,
					initHash: a,
					final: n,
					finalHash: a
				}, i("rangeStart", ac(n));
			} else {
				let e = z.value.initHash, t = vs(n), r = e <= t ? {
					from: z.value.init,
					to: n
				} : {
					from: n,
					to: z.value.init
				};
				z.value = null, He(e === t ? n : {
					target: n,
					...r
				}), i("rangeEnd", {
					from: ac(r.from),
					to: ac(r.to)
				});
			}
		}
		function Ye(e) {
			if (z.value !== null) {
				let t = {
					...k.value,
					day: e
				};
				Object.assign(z.value, {
					final: t,
					finalHash: vs(t)
				});
			}
		}
		function Xe(e) {
			w.value = e, Ye(e);
		}
		function Ze(e, t) {
			let n = e;
			for (; n >= 1 && n <= ce.value;) {
				if (xe.value.includes(n)) return n;
				n += t;
			}
			return null;
		}
		function Qe(e) {
			w.value = e, _(() => {
				b.value?.$el?.focus();
			});
		}
		function $e(e, t) {
			fe.value.month[e === -1 ? "prev" : "next"] && (T = t, Ne(e));
		}
		function et(e, t) {
			let { keyCode: n } = e;
			if (n === 33 || n === 34) {
				Z(e);
				let r = n === 33 ? -1 : 1;
				e.shiftKey ? fe.value.year[r === -1 ? "prev" : "next"] && (T = t, Pe(r)) : $e(r, t);
				return;
			}
			if (n < 35 || n > 40) return;
			if (Z(e), n === 36 || n === 35) {
				let e = (Se.value + t - 1) % 7, r, i;
				n === 36 ? (r = t - e, i = 1) : (r = t + 6 - e, i = -1);
				let a = Ze(Math.min(Math.max(r, 1), ce.value), i);
				a !== null && Qe(a);
				return;
			}
			let r, i;
			if (n === 38 || n === 40 ? (r = n === 38 ? -1 : 1, i = t + 7 * r) : (r = (n === 37 ? -1 : 1) * (o.lang.rtl === !0 ? -1 : 1), i = t + r), i >= 1 && i <= ce.value) {
				let e = Ze(i, r);
				if (e !== null) {
					Qe(e);
					return;
				}
				i = r === 1 ? ce.value + 1 : 0;
			}
			$e(r, i <= 0 ? i : i - ce.value);
		}
		return Object.assign(a, {
			setToday: X,
			setView: Te,
			offsetCalendar: Ee,
			setCalendarTo: De,
			setEditingRange: Oe
		}), () => {
			let r = [f("div", { class: "q-date__content col relative-position" }, [f(n, { name: "q-transition--fade" }, qe[j.value])])], i = Bt(t.default);
			return i !== void 0 && r.push(f("div", { class: "q-date__actions" }, i)), e.name !== void 0 && !e.disable && v(r, "push"), f("div", {
				class: B.value,
				...Y.value
			}, [Ge(), f("div", {
				ref: y,
				class: "q-date__main col column",
				tabindex: -1
			}, r)]);
		};
	}
});
function sc(e, t, n) {
	let r;
	function i() {
		r !== void 0 && (nt.remove(r), r = void 0);
	}
	return b(() => {
		e.value && i();
	}), {
		removeFromHistory: i,
		addToHistory() {
			r = {
				condition: () => n.value,
				handler: t
			}, nt.add(r);
		}
	};
}
var cc = 0, lc, uc, dc, fc = !1, pc, mc, hc = !1, gc, _c = null, vc = /* @__PURE__ */ new Set();
function yc(e) {
	vc.add(e);
}
function bc(e) {
	vc.delete(e);
}
function xc(e) {
	fc || (fc = !0, requestAnimationFrame(() => {
		fc = !1;
		let { height: t, scale: n } = e.target;
		if (Math.abs(n - 1) > .01) return;
		let { clientHeight: r, scrollTop: i } = document.scrollingElement;
		(dc === void 0 || t !== window.innerHeight) && (dc = r - t, document.scrollingElement.scrollTop = i), i > dc && (document.scrollingElement.scrollTop -= Math.ceil((i - dc) / 8));
	}));
}
function Sc(e) {
	let t = document.body;
	if (e === "add") {
		lc = Wa(window), uc = Ua(window), gc = window.location.pathname, hc = Y.is.ios;
		let e = ["q-document--prevent-scroll"];
		hc ? (pc = t.style.left, mc = t.style.top, t.style.left = `-${lc}px`, t.style.top = `-${uc}px`, e.push("q-document--pin-body")) : (e.push("q-document--clip-scroll"), window.innerWidth - document.documentElement.clientWidth > 0 && e.push("q-document--reserve-scrollbar")), document.documentElement.classList.add(...e), document.qScrollPrevented = !0, hc && (window.scrollTo(0, 0), window.visualViewport?.addEventListener("resize", xc, De.passiveCapture), window.visualViewport?.addEventListener("scroll", xc, De.passiveCapture), window.scrollTo(0, 0));
	} else hc && (window.visualViewport?.removeEventListener("resize", xc, De.passiveCapture), window.visualViewport?.removeEventListener("scroll", xc, De.passiveCapture)), document.documentElement.classList.remove("q-document--prevent-scroll", "q-document--clip-scroll", "q-document--reserve-scrollbar", "q-document--pin-body"), document.qScrollPrevented = !1, hc && (t.style.left = pc, t.style.top = mc), hc && window.location.pathname === gc && (Wa(window) !== lc || Ua(window) !== uc) ? window.scrollTo(lc, uc) : vc.forEach((e) => {
		e();
	}), dc = void 0;
}
function Cc(e) {
	let t = "add";
	if (e === !0) {
		if (cc++, _c !== null) {
			clearTimeout(_c), _c = null;
			return;
		}
		if (cc > 1) return;
	} else {
		if (cc === 0 || (cc--, cc > 0)) return;
		if (t = "remove", hc && Y.is.nativeMobile) {
			_c !== null && clearTimeout(_c), _c = setTimeout(() => {
				Sc(t), _c = null;
			}, 100);
			return;
		}
	}
	Sc(t);
}
function wc() {
	let e;
	return { preventBodyScroll(t) {
		t !== e && (e !== void 0 || t) && (e = t, Cc(t));
	} };
}
var Tc = 0, Ec = {
	standard: "fixed-full flex-center",
	top: "fixed-top justify-center",
	bottom: "fixed-bottom justify-center",
	right: "fixed-right items-center",
	left: "fixed-left items-center"
}, Dc = {
	standard: ["scale", "scale"],
	top: ["slide-down", "slide-up"],
	bottom: ["slide-up", "slide-down"],
	right: ["slide-left", "slide-right"],
	left: ["slide-right", "slide-left"]
}, Oc = /*#__PURE__*/ X({
	name: "QDialog",
	inheritAttrs: !1,
	props: {
		...Sr,
		...Xr,
		transitionShow: String,
		transitionHide: String,
		persistent: Boolean,
		autoClose: Boolean,
		allowFocusOutside: Boolean,
		noEscDismiss: Boolean,
		noBackdropDismiss: Boolean,
		noRouteDismiss: Boolean,
		noRefocus: Boolean,
		noFocus: Boolean,
		noShake: Boolean,
		seamless: Boolean,
		maximized: Boolean,
		fullWidth: Boolean,
		fullHeight: Boolean,
		square: Boolean,
		backdropFilter: String,
		position: {
			type: String,
			default: "standard",
			validator: (e) => [
				"standard",
				"top",
				"bottom",
				"left",
				"right"
			].includes(e)
		}
	},
	emits: [
		...Cr,
		"shake",
		"click",
		"escapeKey"
	],
	setup(e, { slots: t, emit: i, attrs: a }) {
		let o = u(), s = At(), c = M(null), l = M(null), d = A(!1), p = A(!1), m = A(null), h = null, g = !1, _ = !1, v = !1, y = r(() => !e.persistent && !e.noRouteDismiss && !e.seamless), { preventBodyScroll: x } = wc(), { registerTransitionEnd: S } = ti(e), { registerTick: C, removeTick: w } = $r(), { transitionProps: T, transitionStyle: E } = Qr(e, () => Dc[e.position][0], () => Dc[e.position][1]), D = r(() => E() + (e.backdropFilter === void 0 ? "" : `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`)), { showPortal: O, hidePortal: k, portalIsOpening: j, renderPortal: N } = Jr(o, l, fe, "dialog"), { captureRefocusTarget: P, setRefocusTarget: F, clearRefocusTarget: L, restoreFocus: R, adoptRefocusTarget: z } = Yr(e, () => !e.noFocus && j()), { hide: B } = wr({
			showing: d,
			hideOnRouteChange: y,
			handleShow: re,
			handleHide: q,
			handleRouteChange: J,
			processOnMount: !0
		}), { addToHistory: V, removeFromHistory: H } = sc(d, B, y), U = r(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${Ec[e.position]}` + (p.value ? " q-dialog__inner--animating" : "") + (m.value === null ? "" : " q-dialog__inner--keyboard") + (e.fullWidth ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight ? " q-dialog__inner--fullheight" : "") + (e.square ? " q-dialog__inner--square" : "")), ee = r(() => d.value && !e.seamless), W = r(() => e.autoClose ? { onClick: le } : {}), G = r(() => `q-dialog fullscreen no-pointer-events q-dialog--${ee.value ? "modal" : "seamless"}`);
		I(() => e.maximized, (e) => {
			d.value && ce(e);
		}), I(ee, (e) => {
			x(e), e ? (ta(de), Zi(oe)) : (na(de), Qi(oe));
		});
		function te() {
			let { offsetTop: e, height: t, scale: n } = window.visualViewport, { innerHeight: r } = window;
			if (Math.abs(n - 1) > .01 || r - t < 1) {
				m.value = null;
				return;
			}
			let i = Math.round(e), a = Math.round(r - e - t), o = m.value;
			(o === null || o.top !== i || o.bottom !== a) && (m.value = {
				top: i,
				bottom: a,
				height: Math.round(t)
			});
		}
		function K(e) {
			let t = e ? "addEventListener" : "removeEventListener";
			v = e, window.visualViewport?.[t]("resize", te, De.passive), window.visualViewport?.[t]("scroll", te, De.passive), e && window.visualViewport !== void 0 ? te() : m.value = null;
		}
		function ne() {
			let t = m.value;
			return t === null ? E() : `${E()};--q-dialog-viewport-height:${t.height}px` + (e.position === "bottom" ? "" : `;top:${t.top}px`) + (e.position === "top" ? "" : `;bottom:${t.bottom}px`);
		}
		function re(t) {
			V(), P(), ce(e.maximized), O(), p.value = !0, s.platform.is.ios && K(!0), e.noFocus ? w() : (document.activeElement?.blur(), C(ie)), S(() => {
				if (s.platform.is.ios) {
					if (!e.seamless && document.activeElement) {
						let { top: e, bottom: t } = document.activeElement.getBoundingClientRect(), { innerHeight: n } = window, r = window.visualViewport?.height ?? n;
						e > 0 && t > r / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - r, t >= n ? Infinity : Math.ceil(document.scrollingElement.scrollTop + t - r / 2))), document.activeElement.scrollIntoView();
					}
					_ = !0, l.value.click(), _ = !1;
				}
				O(!0), p.value = !1, i("show", t);
			});
		}
		function q(e) {
			w(), H(), se(!0), p.value = !0, k(), R(e), S(() => {
				k(!0), p.value = !1, i("hide", e);
			});
		}
		function J() {
			L();
		}
		function ie(e) {
			Ir(() => {
				let t = l.value;
				if (t !== null && t.contains !== void 0) {
					if (e !== void 0) {
						let n = t.querySelector(e);
						if (n !== null) {
							n.focus({ preventScroll: !0 });
							return;
						}
					}
					t.contains(document.activeElement) || (t = t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || t.querySelector("[autofocus], [data-autofocus]") || t, t.focus({ preventScroll: !0 }));
				}
			});
		}
		function ae(e) {
			e && typeof e.focus == "function" ? e.focus({ preventScroll: !0 }) : ie(), i("shake");
			let t = l.value;
			t !== null && (t.classList.remove("q-animate--scale"), t.classList.add("q-animate--scale"), h !== null && clearTimeout(h), h = setTimeout(() => {
				h = null, l.value !== null && (t.classList.remove("q-animate--scale"), ie());
			}, 170));
		}
		function oe(t) {
			e.seamless || (e.persistent || e.noEscDismiss ? !e.maximized && !e.noShake && ae() : (i("escapeKey"), B(t)));
		}
		function se(t) {
			h !== null && (clearTimeout(h), h = null), (t || d.value) && (ce(!1), v && K(!1), e.seamless || (x(!1), na(de), Qi(oe))), t || L();
		}
		function ce(e) {
			e ? g ||= (Tc < 1 && document.body.classList.add("q-body--dialog"), Tc++, !0) : g &&= (Tc < 2 && document.body.classList.remove("q-body--dialog"), Tc--, !1);
		}
		function le(e) {
			_ || (B(e), i("click", e));
		}
		function ue(t) {
			t.button === 0 && (!e.persistent && !e.noBackdropDismiss ? B(t) : e.noShake || ae());
		}
		function de(t) {
			!e.allowFocusOutside && !j() && !Ln(l.value, t.target) && !ji(l.value, t.target) && ie("[tabindex]:not([tabindex=\"-1\"])");
		}
		Object.assign(o.proxy, {
			focus: ie,
			shake: ae,
			__updateRefocusTarget: F,
			__adoptRefocusTarget: z,
			__getAriaModalEl: () => ee.value ? c.value : null
		}), b(se);
		function fe() {
			return f("div", {
				ref: c,
				role: "dialog",
				"aria-modal": ee.value ? "true" : "false",
				...a,
				class: [G.value, a.class]
			}, [f(n, {
				name: "q-transition--fade",
				appear: !0
			}, () => ee.value ? f("div", {
				class: "q-dialog__backdrop fixed-full",
				style: D.value,
				"aria-hidden": "true",
				onMousedown: ue
			}) : null), f(n, T(), () => d.value ? f("div", {
				ref: l,
				class: U.value,
				style: ne(),
				tabindex: -1,
				...W.value
			}, Bt(t.default)) : null)]);
		}
		return N;
	}
}), kc = 150;
function Ac(e, t) {
	e.value !== t && (e.value = t);
}
var jc = /*#__PURE__*/ X({
	name: "QDrawer",
	inheritAttrs: !1,
	props: {
		...Sr,
		...$,
		side: {
			type: String,
			default: "left",
			validator: (e) => ["left", "right"].includes(e)
		},
		width: {
			type: Number,
			default: 300
		},
		mini: Boolean,
		miniToOverlay: Boolean,
		miniWidth: {
			type: Number,
			default: 57
		},
		noMiniAnimation: Boolean,
		breakpoint: {
			type: Number,
			default: 1023
		},
		showIfAbove: Boolean,
		behavior: {
			type: String,
			validator: (e) => [
				"default",
				"desktop",
				"mobile"
			].includes(e),
			default: "default"
		},
		bordered: Boolean,
		elevated: Boolean,
		overlay: Boolean,
		persistent: Boolean,
		noSwipeOpen: Boolean,
		noSwipeClose: Boolean,
		noSwipeBackdrop: Boolean
	},
	emits: [
		...Cr,
		"onLayout",
		"miniState",
		"escapeKey",
		"pan"
	],
	setup(e, { slots: t, emit: n, attrs: i }) {
		let a = u(), o = At(), s = cn(e, o), { preventBodyScroll: c } = wc(), { registerTimeout: l, removeTimeout: d } = ei(), p = m(dt, gt);
		if (p === gt) return console.error("QDrawer needs to be child of QLayout"), gt;
		let h, g = null, v, y = A(e.behavior === "mobile" || e.behavior !== "desktop" && p.totalWidth.value <= e.breakpoint), x = r(() => e.mini && !y.value), S = r(() => x.value ? e.miniWidth : e.width), w = r(() => e.overlay || e.miniToOverlay || p.view.value.includes(H.value ? "R" : "L") || o.platform.is.ios && p.isContainer.value), T = A(e.showIfAbove && !y.value || e.modelValue === !0), E = r(() => !e.overlay && T.value && !y.value), D = r(() => e.overlay && T.value && !y.value), O = r(() => !e.persistent && (y.value || D.value));
		function k(e, t) {
			if (P(), e !== !1 && p.animate(), pe(0), y.value) {
				let e = p.instances[K.value];
				e?.belowBreakpoint.value && e.hide(!1), me(1), p.isContainer.value || c(!0);
			} else me(0), e !== !1 && he(!1);
			l(() => {
				e !== !1 && he(!0), t || n("show", e);
			}, kc);
		}
		function j(e, t) {
			F(), e !== !1 && p.animate(), me(0), pe(U.value * S.value), ye(), t ? d() : l(() => {
				n("hide", e);
			}, kc);
		}
		let { show: M, hide: N } = wr({
			showing: T,
			hideOnRouteChange: O,
			handleShow: k,
			handleHide: j
		}), { addToHistory: P, removeFromHistory: F } = sc(T, N, O), L = r(() => T.value && O.value);
		function z(e) {
			n("escapeKey"), N(e);
		}
		function B(e) {
			e ? Zi(z) : Qi(z);
		}
		let V = {
			belowBreakpoint: y,
			hide: N
		}, H = r(() => e.side === "right"), U = r(() => (o.lang.rtl ? -1 : 1) * (H.value ? 1 : -1)), ee = A(0), W = A(!1), G = A(!1), te = A(S.value * U.value), K = r(() => H.value ? "left" : "right"), ne = r(() => T.value && !y.value && !e.overlay ? e.miniToOverlay ? e.miniWidth : S.value : 0), re = r(() => "fullscreen q-drawer__backdrop" + (!T.value && !W.value ? " hidden" : "")), q = r(() => ({ backgroundColor: `rgba(0,0,0,${ee.value * .4})` })), J = r(() => H.value ? p.rows.value.top[2] === "r" : p.rows.value.top[0] === "l"), ie = r(() => H.value ? p.rows.value.bottom[2] === "r" : p.rows.value.bottom[0] === "l"), ae = r(() => {
			let e = {};
			return p.header.space && !J.value && (w.value ? e.top = `${p.header.offset}px` : p.header.space && (e.top = `${p.header.size}px`)), p.footer.space && !ie.value && (w.value ? e.bottom = `${p.footer.offset}px` : p.footer.space && (e.bottom = `${p.footer.size}px`)), e;
		}), oe = r(() => {
			let e = {
				"--q-drawer-width": `${S.value}px`,
				transform: `translateX(${te.value}px)`
			};
			return y.value ? e : Object.assign(e, ae.value);
		}), se = r(() => "q-drawer__content fit " + (p.isContainer.value ? "overflow-auto" : "scroll")), ce = r(() => `q-drawer q-drawer--${e.side}` + (G.value ? " q-drawer--mini-animate" : "") + (e.bordered ? " q-drawer--bordered" : "") + (s() ? " q-drawer--dark q-dark" : "") + (W.value ? " no-transition" : T.value ? "" : " q-layout--prevent-focus") + (y.value ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${x.value ? "mini" : "standard"}` + (w.value || !E.value ? " fixed" : "") + (e.overlay || e.miniToOverlay ? " q-drawer--on-top" : "") + (J.value ? " q-drawer--top-padding" : ""))), le = r(() => [[
			Oo,
			_e,
			void 0,
			{
				[o.lang.rtl ? e.side : K.value]: !0,
				mouse: !0,
				prevent: !0
			}
		]]), ue = r(() => {
			let t = o.lang.rtl ? K.value : e.side;
			return [[
				Oo,
				y.value && !e.noSwipeClose ? ve : void 0,
				void 0,
				{
					[t]: !0,
					mouse: !0
				}
			]];
		}), de = r(() => {
			let t = o.lang.rtl ? K.value : e.side;
			return [[
				Oo,
				T.value && !e.noSwipeBackdrop ? ve : void 0,
				void 0,
				{
					[t]: !0,
					mouse: !0,
					mouseAllDir: !0,
					prevent: !0
				}
			]];
		});
		function fe() {
			Ac(y, e.behavior === "mobile" || e.behavior !== "desktop" && p.totalWidth.value <= e.breakpoint);
		}
		I(y, (t) => {
			t ? (h = T.value, T.value && N(!1)) : T.value ? (pe(0), me(0), ye()) : !e.overlay && e.behavior !== "mobile" && h !== !1 && M(!1);
		}), I(() => e.side, (e, t) => {
			p.instances[t] === V && (p.instances[t] = void 0, p[t].space = !1, p[t].offset = 0), p.instances[e] = V, p[e].size = S.value, p[e].space = E.value, p[e].offset = ne.value;
		}), I(p.totalWidth, () => {
			(p.isContainer.value || !document.qScrollPrevented) && fe();
		}), I(() => e.behavior + e.breakpoint, fe), I(p.isContainer, (e) => {
			T.value && c(!e), e && fe();
		}), I(p.scrollbarWidth, () => {
			pe(T.value ? 0 : void 0);
		}), I(ne, (e) => {
			be("offset", e);
		}), I(E, (e) => {
			n("onLayout", e), be("space", e);
		}), I(H, () => {
			pe();
		}), I(S, (t) => {
			pe(), xe(e.miniToOverlay, t);
		}), I(() => e.miniToOverlay, (e) => {
			xe(e, S.value);
		}), I(() => o.lang.rtl, () => {
			pe();
		}), I(() => e.mini, () => {
			e.noMiniAnimation || e.modelValue && (ge(), p.animate());
		}), I(x, (e) => {
			n("miniState", e);
		});
		function pe(e) {
			e === void 0 ? _(() => {
				e = T.value ? 0 : S.value, pe(U.value * e);
			}) : (p.isContainer.value && H.value && (y.value || Math.abs(e) === S.value) && (e += U.value * p.scrollbarWidth.value), te.value = e);
		}
		function me(e) {
			ee.value = e;
		}
		function he(e) {
			let t = e ? "remove" : p.isContainer.value ? "" : "add";
			t !== "" && document.body.classList[t]("q-body--drawer-toggle");
		}
		function ge() {
			g !== null && clearTimeout(g), a.proxy && a.proxy.$el && a.proxy.$el.classList.add("q-drawer--mini-animate"), G.value = !0, g = setTimeout(() => {
				g = null, G.value = !1, a?.proxy?.$el?.classList.remove("q-drawer--mini-animate");
			}, 150);
		}
		function _e(e) {
			if (T.value) return;
			let t = S.value, r = Nt(e.distance.x, 0, t);
			e.isFinal ? (r >= Math.min(75, t) ? (M(), n("pan", {
				type: "open",
				stage: "end"
			})) : (p.animate(), me(0), pe(U.value * t), n("pan", {
				type: "open",
				stage: "cancel"
			})), W.value = !1) : (pe((o.lang.rtl ? !H.value : H.value) ? Math.max(t - r, 0) : Math.min(0, r - t)), me(Nt(r / t, 0, 1)), e.isFirst && (W.value = !0, n("pan", {
				type: "open",
				stage: "start"
			})));
		}
		function ve(t) {
			if (!T.value) return;
			let r = S.value, i = t.direction === e.side, a = (o.lang.rtl ? !i : i) ? Nt(t.distance.x, 0, r) : 0;
			t.isFinal ? (Math.abs(a) < Math.min(75, r) ? (p.animate(), me(1), pe(0), n("pan", {
				type: "close",
				stage: "cancel"
			})) : (N(), n("pan", {
				type: "close",
				stage: "end"
			})), W.value = !1) : (pe(U.value * a), me(Nt(1 - a / r, 0, 1)), t.isFirst && (W.value = !0, n("pan", {
				type: "close",
				stage: "start"
			})));
		}
		function ye() {
			c(!1), he(!0);
		}
		function be(t, n) {
			p.update(e.side, t, n);
		}
		function xe(t, n) {
			be("size", t ? e.miniWidth : n);
		}
		return p.instances[e.side] = V, xe(e.miniToOverlay, S.value), be("space", E.value), be("offset", ne.value), e.showIfAbove && !e.modelValue && T.value && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", !0), C(() => {
			n("onLayout", E.value), n("miniState", x.value), I(L, B, { immediate: !0 }), h = e.showIfAbove;
			let t = () => {
				(T.value ? k : j)(!1, !0);
			};
			p.totalWidth.value === 0 ? v = I(p.totalWidth, () => {
				v(), v = void 0, !T.value && e.showIfAbove && !y.value ? M(!1) : t();
			}) : _(t);
		}), b(() => {
			v?.(), Qi(z), g !== null && (clearTimeout(g), g = null), T.value && ye(), p.instances[e.side] === V && (p.instances[e.side] = void 0, be("size", 0), be("offset", 0), be("space", !1));
		}), () => {
			let n = [];
			y.value && (e.noSwipeOpen || n.push(R(f("div", {
				key: "open",
				class: `q-drawer__opener fixed-${e.side}`,
				"aria-hidden": "true"
			}), le.value)), n.push(R(f("div", {
				ref: "backdrop",
				class: re.value,
				style: q.value,
				"aria-hidden": "true",
				onClick: N
			}), de.value)));
			let r = {}, a = {};
			for (let e in i) e === "role" || e.startsWith("aria-") ? r[e] = i[e] : a[e] = i[e];
			let o = x.value && t.mini !== void 0, s = [f("div", {
				...a,
				key: String(o),
				class: [se.value, i.class]
			}, o ? t.mini() : Bt(t.default))];
			return e.elevated && T.value && s.push(f("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), n.push(R(f("aside", {
				ref: "content",
				class: ce.value,
				style: oe.value,
				...r
			}, s), ue.value)), f("div", { class: "q-drawer-container" }, n);
		};
	}
}), Mc = 0, Nc = 100, Pc = 4;
function Fc(e) {
	return e.pointerType === "touch" || e.pointerType === "pen" && e.buttons !== 0;
}
var Ic = /*#__PURE__*/ X({
	name: "QTooltip",
	inheritAttrs: !1,
	props: {
		...hr,
		...Sr,
		...Xr,
		maxHeight: {
			type: String,
			default: null
		},
		maxWidth: {
			type: String,
			default: null
		},
		transitionShow: {
			...Xr.transitionShow,
			default: "jump-down"
		},
		transitionHide: {
			...Xr.transitionHide,
			default: "jump-up"
		},
		anchor: {
			type: String,
			default: "bottom middle",
			validator: si
		},
		self: {
			type: String,
			default: "top middle",
			validator: si
		},
		offset: {
			type: Array,
			default: () => [14, 14],
			validator: ci
		},
		cursorPosition: Boolean,
		delay: {
			type: Number,
			default: 0
		},
		hideDelay: {
			type: Number,
			default: 0
		},
		persistent: Boolean
	},
	emits: [...Cr],
	setup(e, { slots: t, emit: i, attrs: a }) {
		let o, s = !1, c = null, l = null, d, p = u(), m = At(), h = M(null), g = A(!1), _ = _a();
		function v() {
			return a.id || _.value;
		}
		let y = r(() => di(e.anchor, m.lang.rtl)), x = r(() => di(e.self, m.lang.rtl)), S = r(() => !e.persistent), { registerTimeout: C, registerTransitionEnd: w } = ti(e), { transitionProps: T, transitionStyle: E } = Qr(e), { anchorEl: D, canShow: O, anchorEvents: k } = xr({
			showing: g,
			configureAnchorEl: J
		}), { show: j, hide: N } = wr({
			showing: g,
			canShow: O,
			handleShow: V,
			handleHide: H,
			hideOnRouteChange: S,
			processOnMount: !0
		});
		Object.assign(k, {
			delayShow: ee,
			delayHide: ne,
			onFocusin: re,
			onPointerdown: K,
			onCursorMove: G
		});
		let { showPortal: P, hidePortal: F, renderPortal: L } = Jr(p, h, ce, "tooltip"), { registerTick: R, removeTick: z } = $r(), B = Wi({
			props: e,
			$q: m,
			anchorEl: D,
			innerRef: h,
			showing: g,
			anchorOrigin: y,
			selfOrigin: x,
			trackContent: !0
		});
		I(() => (e.modelValue === null || e["onUpdate:modelValue"]) && g.value === !0 && e.persistent !== !0, (e) => {
			(e === !0 ? Zi : Qi)(q);
		});
		function V(t) {
			Fe(k, "cursorTemp"), P(), ae(), B.handleShow(e.cursorPosition ? t : void 0), R(B.handleTick), w(() => {
				P(!0), i("show", t);
			});
		}
		function H(e) {
			z(), F(), U(!0), w(() => {
				F(!0), B.releaseAnchor(!1), i("hide", e);
			});
		}
		function U(e) {
			B.releaseAnchor(e), Qi(q), c = null, Fe(k, "tooltipTemp"), Fe(k, "cursorTemp"), oe(), ie(!1);
		}
		function ee(t) {
			if (t.pointerType === "touch" && t.isPrimary === !1) return;
			let n = Fc(t);
			if (n && te(t), e.cursorPosition && !n) {
				let e = Ae(t);
				if (e.left !== void 0) {
					l = e, Pe(k, "cursorTemp", [[
						D.value,
						"pointermove",
						"onCursorMove",
						"passive"
					]]), W(t);
					return;
				}
			}
			C(() => {
				j(t);
			}, e.delay);
		}
		function W(t) {
			C(() => {
				j(t);
			}, Math.max(e.delay, Nc));
		}
		function G(e) {
			let t = Ae(e);
			Math.abs(t.left - l.left) <= Pc && Math.abs(t.top - l.top) <= Pc || (l = t, W(e));
		}
		function te(e) {
			c = e.pointerType, o !== void 0 && (clearTimeout(o), o = void 0), mr(), ie(!0);
			let t = D.value, n = [
				"touchmove",
				"touchcancel",
				"touchend",
				"click"
			].map((e) => [
				t,
				e,
				"delayHide",
				"passiveCapture"
			]);
			Pe(k, "tooltipTemp", n);
		}
		function K(e) {
			e.pointerType === "pen" && c === null && te(e);
		}
		function ne(t) {
			if ((t.pointerType !== "touch" || t.isPrimary !== !1) && !(t.type === "focusout" && D.value !== null && D.value.contains(t.relatedTarget))) {
				if (Fe(k, "cursorTemp"), c !== null) {
					let e = c === "pen" && (t.type === "click" || t.type === "touchend");
					if (c = null, Fe(k, "tooltipTemp"), mr(), o = setTimeout(() => {
						o = void 0, ie(!1);
					}, 10), e) return;
				}
				C(() => {
					N(t);
				}, e.hideDelay);
			}
		}
		function re(e) {
			let t = e.target;
			t && !Mr() && t.matches(":focus-visible") && ee(e);
		}
		function q(e) {
			N(e);
		}
		function J() {
			if (e.noParentEvent || D.value === null) return;
			let t = [
				[
					D.value,
					"pointerenter",
					"delayShow",
					"passive"
				],
				[
					D.value,
					"pointerdown",
					"onPointerdown",
					"passive"
				],
				[
					D.value,
					"pointerleave",
					"delayHide",
					"passive"
				],
				[
					D.value,
					"focusin",
					"onFocusin",
					"passive"
				],
				[
					D.value,
					"focusout",
					"delayHide",
					"passive"
				]
			];
			Pe(k, "anchor", t);
		}
		function ie(e) {
			s !== e && (s = e, Mc += e ? 1 : -1, document.body.classList.toggle("non-selectable", Mc > 0), !e && o !== void 0 && (clearTimeout(o), o = void 0));
		}
		function ae() {
			let e = D.value, t = v();
			if (e === null || t === void 0) return;
			let n = (e.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
			d = {
				el: e,
				id: t,
				added: !n.includes(t)
			}, d.added && (n.push(t), e.setAttribute("aria-describedby", n.join(" ")));
		}
		function oe() {
			if (d?.added === !0) {
				let { el: e, id: t } = d, n = (e.getAttribute("aria-describedby") || "").split(/\s+/).filter((e) => e !== "" && e !== t);
				n.length === 0 ? e.removeAttribute("aria-describedby") : e.setAttribute("aria-describedby", n.join(" "));
			}
			d = void 0;
		}
		function se() {
			return g.value ? f("div", {
				...a,
				id: v(),
				ref: h,
				class: ["q-tooltip q-tooltip--style no-pointer-events" + (B.viaCssAnchor ? "" : " q-position-engine"), a.class],
				style: [
					a.style,
					E(),
					B.positionStyle.value
				],
				role: "tooltip"
			}, Bt(t.default)) : null;
		}
		function ce() {
			return f(n, T(), se);
		}
		return b(() => {
			U(!1);
		}), Object.assign(p.proxy, { updatePosition: B.updatePosition }), L;
	}
}), Lc = /*#__PURE__*/ X({
	name: "QItem",
	props: {
		...$,
		...Tn,
		tag: {
			type: String,
			default: "div"
		},
		active: {
			type: Boolean,
			default: null
		},
		clickable: {
			type: Boolean,
			default: null
		},
		onClick: Function,
		dense: Boolean,
		insetLevel: Number,
		role: String,
		tabindex: [String, Number],
		focused: Boolean,
		manualFocus: Boolean
	},
	emits: ["keyup"],
	setup(e, { slots: t, emit: n }) {
		let i = At(), a = cn(e, i), { hasLink: o, linkAttrs: s, linkClass: c, linkTag: l, navigateOnClick: u } = An(), d = M(null), p = M(null), h = r(() => (e.clickable === null ? e.onClick !== void 0 : e.clickable) || o.value || e.tag === "label"), g = r(() => !e.disable && h.value), _ = m(ft, null), v = r(() => {
			if (e.role !== void 0) return e.role;
			let t = _ === null ? null : _.value;
			if (t === "menu" || t === "menubar") return h.value ? "menuitem" : void 0;
			if (!o.value) return g.value ? "button" : t === "list" ? "listitem" : void 0;
		}), y = r(() => "q-item q-item-type row no-wrap" + (e.dense ? " q-item--dense" : "") + (a() ? " q-item--dark" : "") + (o.value && e.active === null ? c.value : e.active ? ` q-item--active${e.activeClass === void 0 ? "" : ` ${e.activeClass}`}` : "") + (e.disable ? " disabled" : "") + (g.value ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused ? " q-manual-focusable--focused" : "") : "")), b = r(() => e.insetLevel === void 0 ? null : { ["padding" + (i.lang.rtl ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
		function x(e) {
			g.value && (p.value !== null && !e.qAvoidFocus && (!e.qKeyEvent && document.activeElement === d.value ? p.value.focus({ preventScroll: !0 }) : document.activeElement === p.value && d.value.focus({ preventScroll: !0 })), u(e));
		}
		function S(e) {
			if (g.value && Ke(e, [13, 32])) {
				Z(e), e.qKeyEvent = !0;
				let t = new MouseEvent("click", e);
				t.qKeyEvent = !0, d.value.dispatchEvent(t);
			}
			n("keyup", e);
		}
		function C(e) {
			g.value && e.keyCode === 32 && Z(e);
		}
		function w() {
			let e = Vt(t.default, []);
			return g.value && e.unshift(f("div", {
				class: "q-focus-helper",
				tabindex: -1,
				ref: p
			})), e;
		}
		return () => {
			let t = {
				ref: d,
				class: y.value,
				style: b.value,
				role: v.value,
				onKeyup: S
			};
			return g.value ? (t.onClick = x, t.onKeydown = C, t.tabindex = e.tabindex || "0", Object.assign(t, s.value)) : h.value && (t["aria-disabled"] = "true"), f(l.value, t, w());
		};
	}
}), Rc = /*#__PURE__*/ X({
	name: "QItemSection",
	props: {
		avatar: Boolean,
		thumbnail: Boolean,
		side: Boolean,
		top: Boolean,
		noWrap: Boolean
	},
	setup(e, { slots: t }) {
		let n = r(() => `q-item__section column q-item__section--${e.avatar || e.side || e.thumbnail ? "side" : "main"}` + (e.top ? " q-item__section--top justify-start" : " justify-center") + (e.avatar ? " q-item__section--avatar" : "") + (e.thumbnail ? " q-item__section--thumbnail" : "") + (e.noWrap ? " q-item__section--nowrap" : ""));
		return () => f("div", { class: n.value }, Bt(t.default));
	}
});
new Set([
	"Boolean",
	"Number",
	"String",
	"Function",
	"Array",
	"Date",
	"RegExp"
].map((e) => "[object " + e + "]")), {
	...$,
	...qa
}, [...Ja];
var zc = /*#__PURE__*/ X({
	name: "QItemLabel",
	props: {
		overline: Boolean,
		caption: Boolean,
		header: Boolean,
		lines: [Number, String]
	},
	setup(e, { slots: t }) {
		let n = r(() => Number.parseInt(e.lines, 10)), i = r(() => "q-item__label" + (e.overline ? " q-item__label--overline text-overline" : "") + (e.caption ? " q-item__label--caption text-caption" : "") + (e.header ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), a = r(() => e.lines !== void 0 && n.value > 1 ? {
			overflow: "hidden",
			display: "-webkit-box",
			"-webkit-box-orient": "vertical",
			"-webkit-line-clamp": n.value
		} : null);
		return () => f("div", {
			style: a.value,
			class: i.value
		}, Bt(t.default));
	}
}), Bc = {
	true: "inset",
	item: "item-inset",
	"item-thumbnail": "item-thumbnail-inset"
}, Vc = {
	xs: 2,
	sm: 4,
	md: 8,
	lg: 16,
	xl: 24
}, Hc = /*#__PURE__*/ X({
	name: "QSeparator",
	props: {
		...$,
		spaced: [Boolean, String],
		inset: [Boolean, String],
		vertical: Boolean,
		color: String,
		size: String
	},
	setup(e) {
		let t = cn(e, At()), n = r(() => e.vertical ? "vertical" : "horizontal"), i = r(() => ` q-separator--${n.value}`), a = r(() => e.inset ? `${i.value}-${Bc[e.inset]}` : ""), o = r(() => `q-separator${i.value}${a.value}` + (e.color === void 0 ? "" : ` bg-${e.color}`) + (t() ? " q-separator--dark" : "")), s = r(() => {
			let t = {};
			if (e.size !== void 0 && (t[e.vertical ? "width" : "height"] = e.size), e.spaced) {
				let n = e.spaced === !0 ? `${Vc.md}px` : e.spaced in Vc ? `${Vc[e.spaced]}px` : e.spaced, r = e.vertical ? ["Left", "Right"] : ["Top", "Bottom"];
				t[`margin${r[0]}`] = t[`margin${r[1]}`] = n;
			}
			return t;
		});
		return () => f("hr", {
			class: o.value,
			style: s.value,
			"aria-orientation": n.value
		});
	}
}), Uc = () => {}, Wc = "cubic-bezier(.25, .8, .50, 1)", Gc = "calc-size(auto, size)", Kc = [{ height: "0px" }, { height: Gc }], qc = [{ height: Gc }, { height: "0px" }], Jc = typeof CSS < "u" && CSS.supports("height", Gc) ? Yc : Xc;
function Yc(e, t = Uc) {
	let n = null, r, i, a = null;
	function o() {
		a !== null && (clearTimeout(a), a = null), n?.cancel(), n = null;
	}
	function s() {
		o(), r?.(), r = null;
	}
	function c(e, n) {
		e.style.overflowY = null, s(), n !== i && t(n);
	}
	function l(t, o, s, l) {
		let u = e(), d = n !== null && n.effect.target === t;
		n === null ? i = s === "show" ? "hide" : "show" : (d || r?.(), clearTimeout(a)), r = o, u <= 0 ? c(t, s) : (d ? n.reverse() : (n?.cancel(), t.style.overflowY = "hidden", n = t.animate(l, {
			duration: u,
			easing: Wc,
			fill: "forwards"
		})), n.onfinish = () => {
			c(t, s);
		}, a = setTimeout(n.onfinish, u * 1.1));
	}
	function u(e, t) {
		l(e, t, "show", Kc);
	}
	function d(e, t) {
		l(e, t, "hide", qc);
	}
	return b(() => {
		n !== null && s();
	}), {
		onEnter: u,
		onLeave: d
	};
}
function Xc(e, t = Uc) {
	let n = !1, r, i, a = null, o, s;
	function c() {
		n = !1, a !== null && (clearTimeout(a), a = null), i?.removeEventListener("transitionend", o), o = null;
	}
	function l() {
		c(), r?.(), r = null;
	}
	function u(e) {
		i !== e && r?.(), r = null, c();
	}
	function d(t, i, a) {
		return i !== void 0 && (t.style.height = `${i}px`), t.style.transition = `height ${e()}ms ${Wc}`, n = !0, r = a, t.scrollHeight;
	}
	function f(e, n) {
		e.style.overflowY = null, e.style.height = null, e.style.transition = null, l(), n !== s && t(n);
	}
	function p(t, c) {
		let l = 0, p = n, m = e();
		if (p ? u(t) : s = "hide", i = t, m <= 0) {
			r = c, f(t, "show");
			return;
		}
		p ? l = t.offsetHeight === t.scrollHeight ? 0 : void 0 : t.style.overflowY = "hidden";
		let h = d(t, l, c);
		t.style.height = `${h}px`, o = (e) => {
			(Object(e) !== e || e.target === t) && f(t, "show");
		}, t.addEventListener("transitionend", o), a = setTimeout(o, m * 1.1);
	}
	function m(t, c) {
		let l, p = n, m = e();
		p ? u(t) : s = "show", i = t, m <= 0 ? (r = c, f(t, "hide")) : (p === !1 && (t.style.overflowY = "hidden", l = t.scrollHeight), d(t, l, c), t.style.height = 0, o = (e) => {
			(Object(e) !== e || e.target === t) && f(t, "hide");
		}, t.addEventListener("transitionend", o), a = setTimeout(o, m * 1.1));
	}
	return b(() => {
		n && l();
	}), {
		onEnter: p,
		onLeave: m
	};
}
var Zc = /*#__PURE__*/ j({});
function Qc(e) {
	e.keyCode === 32 && Z(e);
}
var $c = Object.keys(Tn), el = /*#__PURE__*/ X({
	name: "QExpansionItem",
	props: {
		...Tn,
		...Sr,
		...$,
		icon: String,
		label: String,
		labelLines: [Number, String],
		caption: String,
		captionLines: [Number, String],
		dense: Boolean,
		toggleAriaLabel: String,
		expandIcon: String,
		expandedIcon: String,
		expandIconClass: [
			Array,
			String,
			Object
		],
		duration: {
			type: Number,
			default: 300
		},
		headerInsetLevel: Number,
		contentInsetLevel: Number,
		expandSeparator: Boolean,
		defaultOpened: Boolean,
		hideExpandIcon: Boolean,
		expandIconToggle: Boolean,
		switchToggleSide: Boolean,
		denseToggle: Boolean,
		group: String,
		popup: Boolean,
		headerStyle: [
			Array,
			String,
			Object
		],
		headerClass: [
			Array,
			String,
			Object
		]
	},
	emits: [
		...Cr,
		"click",
		"afterShow",
		"afterHide"
	],
	setup(e, { slots: t, emit: n }) {
		let i = At(), a = cn(e, i), o = A(e.modelValue === null ? e.defaultOpened : e.modelValue), s = M(null), c = M(null), l = _a(), { show: u, hide: d, toggle: p } = wr({ showing: o }), m = A(!o.value), { onEnter: h, onLeave: g } = Jc(() => e.duration, F), v, y, x = r(() => `q-expansion-item q-item-type q-expansion-item--${o.value ? "expanded" : "collapsed"} q-expansion-item--${e.popup ? "popup" : "standard"}`), S = r(() => {
			let t = m.value ? { display: "none" } : {};
			if (e.contentInsetLevel !== void 0) {
				let n = i.lang.rtl ? "Right" : "Left";
				t["padding" + n] = e.contentInsetLevel * 56 + "px";
			}
			return t;
		}), C = r(() => !e.disable && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), w = r(() => {
			let t = {};
			return $c.forEach((n) => {
				t[n] = e[n];
			}), t;
		}), T = r(() => C.value || !e.expandIconToggle), E = r(() => e.expandedIcon !== void 0 && o.value ? e.expandedIcon : e.expandIcon || i.iconSet.expansionItem[e.denseToggle ? "denseIcon" : "icon"]), D = r(() => !e.disable && (C.value || e.expandIconToggle)), O = r(() => ({
			expanded: o.value,
			detailsId: l.value,
			toggle: p,
			show: u,
			hide: d
		})), k = r(() => {
			let t = e.toggleAriaLabel === void 0 ? i.lang.label[o.value ? "collapse" : "expand"](e.label) : e.toggleAriaLabel;
			return {
				role: "button",
				"aria-expanded": o.value ? "true" : "false",
				"aria-controls": l.value,
				"aria-label": t
			};
		});
		I(() => e.group, (e) => {
			y?.(), e !== void 0 && z();
		});
		function j(e) {
			C.value || p(e), n("click", e);
		}
		function N(e) {
			[13, 32].includes(e.keyCode) && P(e, !0);
		}
		function P(e, t) {
			!t && !e.qAvoidFocus && s.value?.focus({ preventScroll: !0 }), p(e), Z(e);
		}
		function F(e) {
			n(e === "show" ? "afterShow" : "afterHide");
		}
		function L() {
			m.value = !0;
		}
		function R() {
			c.value !== null && h(c.value);
		}
		I(o, (e) => {
			e ? m.value ? (m.value = !1, _(R)) : R() : c.value === null ? (L(), F("hide")) : g(c.value, L);
		});
		function z() {
			v === void 0 && (v = ma()), o.value && (Zc[e.group] = v);
			let t = I(o, (t) => {
				t ? Zc[e.group] = v : Zc[e.group] === v && delete Zc[e.group];
			}), n = I(() => Zc[e.group], (e, t) => {
				t === v && e !== void 0 && e !== v && d();
			});
			y = () => {
				t(), n(), Zc[e.group] === v && delete Zc[e.group], y = void 0;
			};
		}
		function B() {
			let t = {
				class: [`q-expansion-item__toggle-section${e.switchToggleSide ? " q-expansion-item__toggle-section--switched" : ""} q-focusable relative-position cursor-pointer${e.denseToggle && e.switchToggleSide ? " items-end" : ""}`, e.expandIconClass],
				side: !0
			}, n = [f(sn, {
				class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && o.value ? " q-expansion-item__toggle-icon--rotated" : ""),
				name: E.value
			})];
			return D.value && (Object.assign(t, {
				tabindex: 0,
				...k.value,
				onClick: P,
				onKeydown: Qc,
				onKeyup: N
			}), n.unshift(f("div", {
				ref: s,
				class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
				tabindex: -1
			}))), f(Rc, t, () => n);
		}
		function V() {
			let n;
			return t.header === void 0 ? (n = [f(Rc, () => [f(zc, { lines: e.labelLines }, () => e.label || ""), e.caption ? f(zc, {
				lines: e.captionLines,
				caption: !0
			}, () => e.caption) : null])], e.icon && n[e.switchToggleSide ? "push" : "unshift"](f(Rc, {
				class: "q-expansion-item__icon-section",
				avatar: !0
			}, () => f(sn, { name: e.icon })))) : n = [t.header(O.value)].flat(), !e.disable && !e.hideExpandIcon && n[e.switchToggleSide ? "unshift" : "push"](B()), n;
		}
		function H() {
			let t = {
				ref: "item",
				style: e.headerStyle,
				class: e.headerClass,
				dark: a(),
				disable: e.disable,
				dense: e.dense,
				insetLevel: e.headerInsetLevel
			};
			return T.value && (t.clickable = !0, t.onClick = j, Object.assign(t, C.value ? w.value : k.value)), f(Lc, t, V);
		}
		function U() {
			let n = [H(), f("div", {
				ref: c,
				class: "q-expansion-item__content relative-position",
				style: S.value,
				id: l.value
			}, Bt(t.default))];
			return e.expandSeparator && n.push(f(Hc, {
				class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
				dark: a()
			}), f(Hc, {
				class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
				dark: a()
			})), n;
		}
		return e.group !== void 0 && z(), b(() => {
			y?.();
		}), () => f("div", { class: x.value }, [f("div", { class: "q-expansion-item__container relative-position" }, U())]);
	}
}), tl = [
	"top",
	"right",
	"bottom",
	"left"
], nl = {
	type: {
		type: String,
		default: "a"
	},
	outline: Boolean,
	push: Boolean,
	flat: Boolean,
	unelevated: Boolean,
	color: String,
	textColor: String,
	glossy: Boolean,
	square: Boolean,
	padding: String,
	label: {
		type: [String, Number],
		default: ""
	},
	labelPosition: {
		type: String,
		default: "right",
		validator: (e) => tl.includes(e)
	},
	externalLabel: Boolean,
	hideLabel: { type: Boolean },
	labelClass: [
		Array,
		String,
		Object
	],
	labelStyle: [
		Array,
		String,
		Object
	],
	disable: Boolean,
	tabindex: [Number, String]
}, rl = ["label"];
Object.keys(nl).filter((e) => !rl.includes(e) && fr.props[e] !== void 0), {
	...nl,
	...Sr
}, { ...nl.hideLabel }, { ...ni }, { ...nl };
function il({ validate: e, resetValidation: t, requiresQForm: n }) {
	let r = m(pt, !1);
	if (r !== !1) {
		let { props: n, proxy: i } = u();
		Object.assign(i, {
			validate: e,
			resetValidation: t
		}), I(() => n.disable, (e) => {
			e ? (typeof t == "function" && t(), r.unbindComponent(i)) : r.bindComponent(i);
		}), C(() => {
			n.disable || r.bindComponent(i);
		}), b(() => {
			n.disable || r.unbindComponent(i);
		});
	} else n && console.error("Parent QForm not found on useFormChild()!");
}
var al = [
	!0,
	!1,
	"ondemand"
], ol = {
	modelValue: {},
	error: {
		type: Boolean,
		default: null
	},
	errorMessage: String,
	noErrorIcon: Boolean,
	rules: Array,
	reactiveRules: Boolean,
	lazyRules: {
		type: [Boolean, String],
		default: !1,
		validator: (e) => al.includes(e)
	}
};
function sl(e, t) {
	let { props: n, proxy: i } = u(), a = A(!1), o = A(null), s = A(!1);
	il({
		validate: y,
		resetValidation: v
	});
	let c = 0, l, d = !1, f = !1, p = r(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), m = r(() => !n.disable && p.value && !t.value), h = r(() => n.error === !0 || a.value), g = r(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : o.value);
	I(() => n.modelValue, () => {
		s.value = !0, m.value && (n.lazyRules === !1 || n.lazyRules === !0 && a.value) && x();
	});
	function _() {
		n.lazyRules !== "ondemand" && m.value && s.value && x();
	}
	I(() => n.reactiveRules, (e) => {
		e ? l === void 0 && (l = I(() => n.rules, _, {
			immediate: !0,
			deep: !0
		})) : l !== void 0 && (l(), l = void 0);
	}, { immediate: !0 }), I(() => n.lazyRules, _), I(e, (e) => {
		e ? s.value = !0 : n.lazyRules !== "ondemand" && (m.value ? x() : !n.disable && p.value && t.value && (f = !0));
	});
	function v() {
		c++, t.value = !1, s.value = !1, a.value = !1, o.value = null, f = !1, x.cancel();
	}
	function y(e = n.modelValue) {
		if (n.disable || !p.value) return !0;
		let r = ++c, i = n.modelValue;
		f = !1;
		let l = () => {
			let e = f;
			f = !1, !d && n.modelValue !== i && m.value && n.lazyRules !== "ondemand" && (n.lazyRules === !1 || a.value || e) && x();
		}, u = t.value ? () => {} : () => {
			s.value = !0;
		}, h = (e, n) => {
			e && u(), a.value = e, o.value = n || null, t.value = !1;
		}, g = [];
		for (let t = 0; t < n.rules.length; t++) {
			let r = n.rules[t], i;
			if (typeof r == "function" ? i = r(e, es) : typeof r == "string" && (es[r] === void 0 ? (console.error(`Unknown validation pattern rule: "${r}"`), i = !1) : i = es[r](e)), i === !1 || typeof i == "string") return h(!0, i), !1;
			i !== !0 && i !== void 0 && g.push(i);
		}
		return g.length === 0 ? (h(!1), !0) : (t.value = !0, Promise.all(g).then((e) => {
			if (e === void 0 || !Array.isArray(e) || e.length === 0) return r === c && (h(!1), l()), !0;
			let t = e.find((e) => e === !1 || typeof e == "string");
			return r === c && (h(t !== void 0, t), l()), t === void 0;
		}, (e) => (r === c && (console.error(e), h(!0), l()), !1)));
	}
	let x = Le(y, 0);
	return b(() => {
		d = !0, l?.(), x.cancel();
	}), Object.assign(i, {
		resetValidation: v,
		validate: y
	}), U(i, "hasError", () => h.value), {
		isDirtyModel: s,
		hasRules: p,
		hasError: h,
		errorMessage: g,
		validate: y,
		resetValidation: v
	};
}
function cl(e) {
	return e != null && String(e).length !== 0;
}
var ll = {
	...$,
	...ol,
	label: String,
	stackLabel: Boolean,
	hint: String,
	hideHint: Boolean,
	prefix: String,
	suffix: String,
	labelColor: String,
	color: String,
	bgColor: String,
	filled: Boolean,
	outlined: Boolean,
	borderless: Boolean,
	standout: [Boolean, String],
	square: Boolean,
	loading: Boolean,
	labelSlot: Boolean,
	bottomSlots: Boolean,
	hideBottomSpace: Boolean,
	rounded: Boolean,
	dense: Boolean,
	itemAligned: Boolean,
	counter: Boolean,
	clearable: Boolean,
	clearIcon: String,
	disable: Boolean,
	readonly: Boolean,
	autofocus: Boolean,
	for: String
}, ul = {
	...ll,
	maxlength: [Number, String]
}, dl = [
	"update:modelValue",
	"clear",
	"focus",
	"blur"
];
function fl({ requiredForAttr: e = !0, tagProp: t, changeEvent: n = !1 } = {}) {
	let { props: i } = u(), a = cn(i, At()), o = _a({
		required: e,
		getValue: () => i.for
	});
	return {
		requiredForAttr: e,
		changeEvent: n,
		tag: t ? { get value() {
			return i.tag;
		} } : { value: "label" },
		isDark: a,
		editable: r(() => !i.disable && !i.readonly),
		innerLoading: A(!1),
		focused: A(!1),
		hasPopupOpen: !1,
		splitAttrs: jo(),
		targetUid: o,
		rootRef: M(null),
		targetRef: M(null),
		controlRef: M(null)
	};
}
var pl = {
	class: "q-field__prepend q-field__marginal row no-wrap items-center",
	key: "prepend",
	onClick: Me
}, ml = {
	class: "q-field__append q-field__marginal row no-wrap items-center",
	key: "append",
	onClick: Me
}, hl = "input:not([disabled]):not([type=\"hidden\"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), a[href], [tabindex]:not([disabled]), [contenteditable]:not([contenteditable=\"false\"])", gl = { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, _l = { class: "q-field__prefix no-pointer-events row items-center" }, vl = { class: "q-field__suffix no-pointer-events row items-center" }, yl = { class: "q-field__inner relative-position col self-stretch" }, bl = {
	class: "q-field__before q-field__marginal row no-wrap items-center",
	onClick: Me
}, xl = {
	class: "q-field__after q-field__marginal row no-wrap items-center",
	onClick: Me
}, Sl = {};
function Cl(e, t) {
	return t.focused.value && typeof e.standout == "string" && e.standout.length !== 0;
}
function wl(e, t) {
	return t === null ? null : f("div", {
		key: e,
		class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
	}, t);
}
function Tl(e) {
	let { props: t, emit: n, slots: i, attrs: a, proxy: o } = u(), s = At(), c = null;
	e.hasValue === void 0 && (e.hasValue = r(() => cl(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (e) => {
		n("update:modelValue", e);
	}), e.controlEvents === void 0 && (e.controlEvents = {
		onFocusin: F,
		onFocusout: I,
		onPopupShow: L,
		onPopupHide: R
	}), Object.assign(e, {
		clearValue: z,
		onControlFocusin: F,
		onControlFocusout: I,
		focus: M
	}), e.computedCounter === void 0 && (e.computedCounter = r(() => {
		if (t.counter) {
			let e = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? String(t.modelValue).length : Array.isArray(t.modelValue) ? t.modelValue.length : 0, n = t.maxlength === void 0 ? t.maxValues : t.maxlength;
			return e + (n === void 0 ? "" : " / " + n);
		}
	}));
	let { isDirtyModel: l, hasRules: d, hasError: p, errorMessage: m, resetValidation: h } = sl(e.focused, e.innerLoading), g = r(() => p.value && e.targetUid.value ? `${e.targetUid.value}_error` : void 0);
	function y(e) {
		if (p.value !== !0) return Sl;
		let n = { "aria-invalid": "true" };
		return g.value !== void 0 && (!t.hideBottomSpace || t.counter || i.counter !== void 0 || m.value !== null || i.error !== void 0) && (n["aria-errormessage"] = e?.["aria-errormessage"] === void 0 ? g.value : e["aria-errormessage"], n["aria-describedby"] = e?.["aria-describedby"] === void 0 ? g.value : `${e["aria-describedby"]} ${g.value}`), n;
	}
	Object.assign(e, {
		hasError: p,
		errorMessage: m,
		errorMessageId: g,
		getErrorAriaAttrs: y
	});
	let x = e.floatingLabel === void 0 ? r(() => t.stackLabel || e.focused.value || e.hasValue.value) : r(() => t.stackLabel || e.focused.value || e.floatingLabel.value), w = r(() => t.bottomSlots || t.hint !== void 0 || d.value || t.counter || t.error !== null), T = r(() => "q-field row no-wrap items-start q-field--" + (t.filled ? "filled" : t.outlined ? "outlined" : t.borderless ? "borderless" : t.standout ? "standout" : "standard") + (e.fieldClass === void 0 ? "" : ` ${e.fieldClass.value}`) + (t.rounded ? " q-field--rounded" : "") + (t.square ? " q-field--square" : "") + (x.value ? " q-field--float" : "") + (D.value ? " q-field--labeled" : "") + (t.dense ? " q-field--dense" : "") + (t.itemAligned ? " q-field--item-aligned q-item-type" : "") + (e.isDark() ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value ? " q-field--focused" : "") + (p.value ? " q-field--error" : Cl(t, e) ? " q-field--standout-custom" : "") + (p.value || e.focused.value ? " q-field--highlighted" : "") + (!t.hideBottomSpace && w.value ? " q-field--with-bottom" : "") + (t.disable ? " q-field--disabled" : t.readonly ? " q-field--readonly" : "")), E = r(() => "q-field__control relative-position row no-wrap" + (t.bgColor === void 0 ? "" : ` bg-${t.bgColor}`) + (p.value ? " text-negative" : Cl(t, e) ? ` ${t.standout}` : t.color === void 0 ? "" : ` text-${t.color}`)), D = r(() => t.labelSlot || t.label !== void 0), O = r(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && !p.value ? ` text-${t.labelColor}` : "")), k = r(() => U({
		id: e.targetUid.value,
		editable: e.editable.value,
		focused: e.focused.value,
		floatingLabel: x.value,
		modelValue: t.modelValue,
		emitValue: e.emitValue,
		ariaInvalid: p.value === !0 ? "true" : void 0,
		ariaDescribedby: g.value,
		ariaErrormessage: g.value
	}, "field", () => e.rootRef.value)), A = r(() => {
		let n = {};
		return e.targetUid.value && (n.for = e.targetUid.value), t.disable && (n["aria-disabled"] = "true"), n;
	});
	function j() {
		let t = document.activeElement, n = e.targetRef?.value;
		n && (t === null || t.id !== e.targetUid.value) && (n.hasAttribute("tabindex") || (n = n.querySelector("[tabindex]")), n !== t && n?.focus({ preventScroll: !0 }));
	}
	function M() {
		Ir(j);
	}
	function N(t) {
		let n = t.target, r = e.targetUid.value === null ? null : document.getElementById(e.targetUid.value);
		if (!(r !== null && n.contains(r) && (r.focus({ preventScroll: !0 }), document.activeElement === r))) {
			for (let e of n.querySelectorAll(hl)) if (e.focus({ preventScroll: !0 }), document.activeElement === e) return;
		}
	}
	function P() {
		Lr(j);
		let t = document.activeElement;
		t !== null && e.rootRef.value.contains(t) && t.blur();
	}
	function F(r) {
		c !== null && (clearTimeout(c), c = null), !t.disable && !e.focused.value && (e.focused.value = !0, n("focus", r));
	}
	function I(t, r) {
		c !== null && clearTimeout(c), c = setTimeout(() => {
			c = null, !(document.hasFocus() && (e.hasPopupOpen || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement))) && (e.focused.value && (e.focused.value = !1, n("blur", t)), r?.());
		}, 0);
	}
	function L(t) {
		e.hasPopupOpen = !0, F(t);
	}
	function R(t) {
		e.hasPopupOpen = !1, I(t);
	}
	function z(r) {
		Z(r), s.platform.is.mobile ? e.rootRef.value.contains(document.activeElement) && document.activeElement.blur() : (e.targetRef?.value || e.rootRef.value).focus(), t.type === "file" && (e.inputRef.value.value = null), e.onClear?.(), n("update:modelValue", null), e.changeEvent && n("change", null), n("clear", t.modelValue), _(() => {
			let e = l.value;
			h(), l.value = e;
		});
	}
	function B(e) {
		[13, 32].includes(e.keyCode) && z(e);
	}
	function V() {
		let n = [];
		i.prepend !== void 0 && n.push(f("div", pl, i.prepend())), n.push(f("div", gl, H())), p.value && !t.noErrorIcon && n.push(wl("error", [f(sn, {
			name: s.iconSet.field.error,
			color: "negative"
		})]));
		let r = t.loading || e.innerLoading.value ? i.loading === void 0 ? e.shouldHideLoadingIndicator?.() ? null : [f(Pn, { color: t.color })] : i.loading() : null;
		return r === null ? t.clearable && e.hasValue.value && e.editable.value && n.push(wl("inner-clearable-append", [f(sn, {
			class: "q-field__focusable-action",
			name: t.clearIcon || s.iconSet.field.clear,
			tabindex: 0,
			role: "button",
			"aria-hidden": "false",
			"aria-label": s.lang.label.clear,
			onKeyup: B,
			onClick: z
		})])) : n.push(wl("inner-loading-append", r)), i.append !== void 0 && n.push(f("div", ml, i.append())), e.getInnerAppend !== void 0 && n.push(wl("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && n.push(e.getControlChild()), n;
	}
	function H() {
		let n = [];
		return t.prefix !== void 0 && t.prefix !== null && n.push(f("div", _l, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value && n.push(e.getShadowControl()), D.value && n.push(f("div", { class: O.value }, Bt(i.label, t.label))), e.getControl === void 0 ? i.rawControl === void 0 ? i.control !== void 0 && n.push(f("div", {
			ref: e.targetRef,
			class: "q-field__native row",
			tabindex: -1,
			...e.splitAttrs.attributes.value,
			"data-autofocus": t.autofocus || void 0,
			onFocus: N
		}, i.control(k.value))) : n.push(i.rawControl()) : n.push(e.getControl()), t.suffix !== void 0 && t.suffix !== null && n.push(f("div", vl, t.suffix)), n.concat(Bt(i.default));
	}
	let ee = null, W = !1;
	function G() {
		let n, r;
		p.value ? m.value === null ? (n = Bt(i.error), r = "q--slot-error") : (n = [f("div", { role: "alert" }, m.value)], r = `q--slot-error-${m.value}`) : (!t.hideHint || e.focused.value) && (t.hint === void 0 ? (n = Bt(i.hint), r = "q--slot-hint") : (n = [f("div", t.hint)], r = `q--slot-hint-${t.hint}`));
		let a = t.counter || i.counter !== void 0;
		if (!t.hideBottomSpace || a || n !== void 0) return r !== ee && (W = ee !== null, ee = r), f("div", {
			class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace ? "stale" : "animated"),
			onClick: Me
		}, [f("div", {
			key: r,
			id: p.value === !0 ? g.value : void 0,
			class: "q-field__messages col" + (W && !t.hideBottomSpace ? " q-field__messages--animated" : "")
		}, n), a ? f("div", { class: "q-field__counter" }, i.counter === void 0 ? e.computedCounter.value : i.counter()) : null]);
	}
	let te = !1;
	return S(() => {
		te = !0;
	}), v(() => {
		te && t.autofocus && o.focus();
	}), t.autofocus && C(() => {
		o.focus();
	}), b(() => {
		c !== null && clearTimeout(c);
	}), Object.assign(o, {
		focus: M,
		blur: P
	}), function() {
		let n = e.getControl === void 0 && i.control === void 0 ? {
			...e.splitAttrs.attributes.value,
			"data-autofocus": t.autofocus || void 0,
			...A.value
		} : A.value;
		return f(e.tag.value, {
			ref: e.rootRef,
			class: [T.value, a.class],
			style: a.style,
			...n
		}, [
			i.before === void 0 ? null : f("div", bl, i.before()),
			f("div", yl, [f("div", {
				ref: e.controlRef,
				class: E.value,
				tabindex: -1,
				...e.controlEvents
			}, V()), w.value ? G() : null]),
			i.after === void 0 ? null : f("div", xl, i.after())
		]);
	};
}
var El = /*#__PURE__*/ X({
	name: "QField",
	inheritAttrs: !1,
	props: {
		...ul,
		tag: {
			type: String,
			default: "label"
		}
	},
	emits: dl,
	setup() {
		return Tl(fl({ tagProp: !0 }));
	}
});
function Dl(e, t, n, r) {
	let i = [];
	return e.forEach((e) => {
		r(e) ? i.push(e) : t.push({
			failedPropValidation: n,
			file: e
		});
	}), i;
}
function Ol(e) {
	return e.split(",").map((e) => (e = e.trim(), e === "*" ? "*/" : (e.endsWith("/*") && (e = e.slice(0, -1)), e.toUpperCase())));
}
function kl(e, t, n = [], r = !1) {
	let i = [...e], a = [], o = () => ({
		files: i,
		rejected: a
	});
	if (t.accept !== void 0) {
		let e = Ol(t.accept);
		if (!e.includes("*/") && (i = Dl(i, a, "accept", (t) => e.some((e) => (e.endsWith("/") ? t.type.toUpperCase().startsWith(e) : t.type.toUpperCase() === e) || t.name.toUpperCase().endsWith(e))), i.length === 0)) return o();
	}
	if (t.maxFileSize !== void 0) {
		let e = Number.parseInt(t.maxFileSize, 10);
		if (i = Dl(i, a, "max-file-size", (t) => t.size <= e), i.length === 0) return o();
	}
	if (t.multiple !== !0 && i.length !== 0 && (i = [i[0]]), i.forEach((e) => {
		e.__key = JSON.stringify([
			e.webkitRelativePath,
			e.lastModified,
			e.name,
			e.size
		]);
	}), r) {
		let e = new Set(n.map((e) => e.__key));
		i = Dl(i, a, "duplicate", (t) => !e.has(t.__key) && (e.add(t.__key), !0));
	}
	if (i.length === 0) return o();
	if (t.maxTotalSize !== void 0) {
		let e = Number.parseInt(t.maxTotalSize, 10), s = r ? n.reduce((e, t) => e + t.size, 0) : 0;
		if (i = Dl(i, a, "max-total-size", (t) => {
			let n = s + t.size;
			return n > e ? !1 : (s = n, !0);
		}), i.length === 0) return o();
	}
	if (typeof t.filter == "function") {
		let e = t.filter(i);
		i = Dl(i, a, "filter", (t) => e.includes(t));
	}
	if (t.maxFiles !== void 0) {
		let e = Number.parseInt(t.maxFiles, 10), o = r ? n.length : 0;
		i = Dl(i, a, "max-files", () => (o++, o <= e));
	}
	return o();
}
var Al = [
	"dragenter",
	"dragover",
	"dragleave",
	"drop"
];
function jl(t) {
	let n = A(!1), r = M([]), i = M([]);
	function a() {
		r.value = [], i.value = [];
	}
	let o = u(), s = null, c = null;
	function l() {
		return P(t) ?? {};
	}
	function d(e, t) {
		n.value !== e && (n.value = e, l()[e ? "onEnter" : "onLeave"]?.(t));
	}
	function f(e) {
		Z(e), d(!0, e);
	}
	function p(e) {
		e.dataTransfer.dropEffect = "copy", Z(e), d(!0, e);
	}
	function m(e) {
		Z(e), (e.relatedTarget !== null || !Y.is.safari ? s.contains(e.relatedTarget) : document.elementsFromPoint(e.clientX, e.clientY).includes(s)) || d(!1, e);
	}
	function h(e) {
		Z(e), d(!1, e);
		let t = l(), { files: n, rejected: a } = kl(e.dataTransfer.files, t);
		i.value = a, a.length !== 0 && t.onRejected?.(a), n.length !== 0 && (r.value = n), t.onDrop?.(n, e);
	}
	let g = [
		f,
		p,
		m,
		h
	];
	function _() {
		s !== null && (Al.forEach((e, t) => {
			s.removeEventListener(e, g[t]);
		}), s = null), n.value = !1;
	}
	let v = new e(() => {
		let e = l(), t = _n(e.target, o);
		e.disabled === !0 || t === null || t === c ? _() : (c = null, t !== s && (_(), s = t, Al.forEach((e, t) => {
			s.addEventListener(e, g[t]);
		})));
	});
	return v.scheduler = () => {
		v.run();
	}, o === null ? v.run() : (C(() => {
		v.run();
	}), b(() => {
		_(), v.stop();
	})), {
		isOverDropZone: n,
		acceptedDropZoneFiles: r,
		rejectedDropZoneFiles: i,
		resetDropZone: a,
		stopDropZone() {
			c = s, _();
		}
	};
}
var Ml = {
	multiple: Boolean,
	accept: String,
	capture: String,
	maxFileSize: [Number, String],
	maxTotalSize: [Number, String],
	maxFiles: [Number, String],
	filter: Function
}, Nl = ["rejected"];
function Pl({ editable: e, dropTarget: t, canDrop: n, getFileInput: r, addFilesToQueue: i }) {
	let { props: a, emit: o, proxy: s } = u(), { isOverDropZone: c } = jl(() => ({
		target: t,
		disabled: !n.value,
		multiple: !0,
		onDrop(e) {
			e.length !== 0 && i(null, e);
		}
	}));
	function l(t) {
		if (e.value) {
			if (t !== Object(t) && (t = { target: null }), t.target?.matches("input[type=\"file\"]") === !0) t.clientX === 0 && t.clientY === 0 && je(t);
			else {
				let e = r();
				e !== t.target && e?.click(t);
			}
		}
	}
	function d(t) {
		e.value && t && i(null, t);
	}
	function p(e, t, n, r) {
		let { files: i, rejected: s } = kl(t || e.target.files, a, n, r);
		if (s.length !== 0 && o("rejected", s), i.length !== 0) return i;
	}
	function m(e) {
		if (c.value) return f("div", { class: `q-${e}__dnd absolute-full` });
	}
	return Object.assign(s, {
		pickFiles: l,
		addFiles: d
	}), {
		pickFiles: l,
		addFiles: d,
		dnd: c,
		processFiles: p,
		getDndNode: m
	};
}
function Fl(e, t) {
	function n() {
		let t = e.modelValue;
		try {
			let e = new DataTransfer();
			return Object(t) === t && ("length" in t ? [...t] : [t]).forEach((t) => {
				e.items.add(t);
			}), { files: e.files };
		} catch {
			return { files: void 0 };
		}
	}
	return r(t ? () => {
		if (e.type === "file") return n();
	} : n);
}
({
	...ll,
	...xa,
	...Ml
}), [...dl, ...Nl];
function Il(e, t) {
	e.value !== t && (e.value = t);
}
var Ll = /*#__PURE__*/ X({
	name: "QHeader",
	props: {
		modelValue: {
			type: Boolean,
			default: !0
		},
		reveal: Boolean,
		revealOffset: {
			type: Number,
			default: 250
		},
		bordered: Boolean,
		elevated: Boolean,
		heightHint: {
			type: [String, Number],
			default: 50
		}
	},
	emits: ["reveal", "focusin"],
	setup(e, { slots: t, emit: n }) {
		let i = At(), a = m(dt, gt);
		if (a === gt) return console.error("QHeader needs to be child of QLayout"), gt;
		let o = A(Number.parseInt(e.heightHint, 10)), s = A(!0), c = r(() => e.reveal || a.view.value.includes("H") || i.platform.is.ios && a.isContainer.value), l = r(() => {
			if (!e.modelValue) return 0;
			if (c.value) return s.value ? o.value : 0;
			let t = o.value - a.scroll.value.position;
			return Math.max(t, 0);
		}), u = r(() => !e.modelValue || c.value && !s.value), d = r(() => e.modelValue && u.value && e.reveal), p = r(() => "q-header q-layout__section--marginal " + (c.value ? "fixed" : "absolute") + "-top" + (e.bordered ? " q-header--bordered" : "") + (u.value ? " q-header--hidden" : "") + (e.modelValue ? "" : " q-layout--prevent-focus")), h = r(() => {
			let e = a.rows.value.top, t = {};
			return e[0] === "l" && a.left.space && (t[i.lang.rtl ? "right" : "left"] = `${a.left.size}px`), e[2] === "r" && a.right.space && (t[i.lang.rtl ? "left" : "right"] = `${a.right.size}px`), t;
		});
		function g(e, t) {
			a.update("header", e, t);
		}
		No({
			debounce: 0,
			onResize({ height: e }) {
				Il(o, e), g("size", e);
			}
		});
		function _(e) {
			d.value && Il(s, !0), n("focusin", e);
		}
		I(() => e.modelValue, (e) => {
			g("space", e), Il(s, !0), a.animate();
		}), I(l, (e) => {
			g("offset", e);
		}), I(() => e.reveal, (t) => {
			t || Il(s, e.modelValue);
		}), I(s, (e) => {
			a.animate(), n("reveal", e);
		}), I(a.scroll, (t) => {
			e.reveal && Il(s, t.direction === "up" || t.position <= e.revealOffset || t.position - t.inflectionPoint < 100);
		});
		let v = {};
		return a.instances.header = v, e.modelValue && g("size", o.value), g("space", e.modelValue), g("offset", l.value), b(() => {
			a.instances.header === v && (a.instances.header = void 0, g("size", 0), g("offset", 0), g("space", !1));
		}), () => {
			let n = Vt(t.default, []);
			return e.elevated && n.push(f("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), f("header", {
				class: p.value,
				style: h.value,
				onFocusin: _
			}, n);
		};
	}
}), Rl = { ratio: [String, Number] };
({ ...Rl }), {
	...$,
	...Xr
};
var zl = {
	date: "####/##/##",
	datetime: "####/##/## ##:##",
	time: "##:##",
	fulltime: "##:##:##",
	phone: "(###) ### - ####",
	card: "#### #### #### ####"
}, Bl = {
	"[\\d]": (e) => {
		let t = e.codePointAt(0);
		return t > 47 && t < 58;
	},
	"[a-zA-Z]": (e) => {
		let t = e.codePointAt(0);
		return t > 64 && t < 91 || t > 96 && t < 123;
	},
	"[0-9a-zA-Z]": (e) => {
		let t = e.codePointAt(0);
		return t > 47 && t < 58 || t > 64 && t < 91 || t > 96 && t < 123;
	}
}, { tokenMap: Vl, tokenKeys: Hl } = /*#__PURE__*/ Ul({
	"#": {
		pattern: "[\\d]",
		negate: "[^\\d]"
	},
	S: {
		pattern: "[a-zA-Z]",
		negate: "[^a-zA-Z]"
	},
	N: {
		pattern: "[0-9a-zA-Z]",
		negate: "[^0-9a-zA-Z]"
	},
	A: {
		pattern: "[a-zA-Z]",
		negate: "[^a-zA-Z]",
		transform: (e) => e.toLocaleUpperCase()
	},
	a: {
		pattern: "[a-zA-Z]",
		negate: "[^a-zA-Z]",
		transform: (e) => e.toLocaleLowerCase()
	},
	X: {
		pattern: "[0-9a-zA-Z]",
		negate: "[^0-9a-zA-Z]",
		transform: (e) => e.toLocaleUpperCase()
	},
	x: {
		pattern: "[0-9a-zA-Z]",
		negate: "[^0-9a-zA-Z]",
		transform: (e) => e.toLocaleLowerCase()
	}
});
function Ul(e) {
	let t = Object.keys(e), n = {};
	return t.forEach((t) => {
		let r = e[t], i;
		if (Object.hasOwn(Bl, r.pattern)) i = Bl[r.pattern];
		else {
			let e = new RegExp(r.pattern);
			i = (t) => e.test(t);
		}
		n[t] = {
			...r,
			test: i
		};
	}), {
		tokenMap: n,
		tokenKeys: t
	};
}
function Wl(e) {
	return RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + e.join("") + "])|(.)", "g");
}
var Gl = [
	"insertText",
	"deleteContentBackward",
	"deleteContentForward",
	"deleteWordBackward",
	"deleteWordForward",
	"deleteByCut"
], Kl = /[.*+?^${}()|[\]\\]/g, ql = /*#__PURE__*/ Wl(Hl), Jl = String.fromCodePoint(1), Yl = {
	mask: String,
	reverseFillMask: Boolean,
	fillMask: [Boolean, String],
	unmaskedValue: Boolean,
	maskTokens: Object
};
function Xl(e, t, n, i, a) {
	let o, s, c, l, u, d, f, p = r(() => {
		if (e.maskTokens === void 0 || e.maskTokens === null) return {
			tokenMap: Vl,
			tokenRegexMask: ql
		};
		let { tokenMap: t } = Ul(e.maskTokens), n = {
			...Vl,
			...t
		};
		return {
			tokenMap: n,
			tokenRegexMask: Wl(Object.keys(n))
		};
	}), m = A(null), h = A(v());
	function g() {
		return e.autogrow || [
			"textarea",
			"text",
			"search",
			"url",
			"tel",
			"password"
		].includes(e.type);
	}
	I(() => e.type + e.autogrow, b), I(() => e.mask, (n) => {
		if (n !== void 0) C(h.value, !0);
		else {
			let n = M(m.value ? N(h.value, f) : h.value);
			b(), e.modelValue !== n && t("update:modelValue", n);
		}
	}), I(() => e.fillMask + e.reverseFillMask, () => {
		m.value && C(h.value, !0);
	}), I(() => e.unmaskedValue, () => {
		m.value && C(h.value);
	}), I(() => e.maskTokens, () => {
		m.value && C(h.value, !0);
	}, { deep: !0 });
	function v() {
		if (b(), m.value) {
			let t = O(M(e.modelValue));
			return f = t.length, e.fillMask === !1 ? t : P(t);
		}
		return f = 0, e.modelValue;
	}
	function y(e) {
		if (e < o.length) return o.slice(-e);
		let t = "", n = o, r = n.indexOf(Jl);
		if (r !== -1) {
			for (let r = e - n.length; r > 0; r--) t += Jl;
			n = n.slice(0, r) + t + n.slice(r);
		}
		return n;
	}
	function b() {
		if (m.value = e.mask !== void 0 && e.mask.length !== 0 && g(), !m.value) {
			l = void 0, o = "", s = "";
			return;
		}
		let t = zl[e.mask] === void 0 ? e.mask : zl[e.mask], n = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", r = n.replace(Kl, String.raw`\$&`), i = [], a = [], u = [], d = e.reverseFillMask, f = "", h = "";
		t.replace(p.value.tokenRegexMask, (e, t, n, r, o) => {
			if (r !== void 0) {
				let e = p.value.tokenMap[r];
				u.push(e), h = e.negate, d &&= (a.push({
					c: e,
					overflow: !0
				}), !1), a.push({ c: e });
			} else {
				if (n !== void 0) f = "\\" + (n === "\\" ? "" : n), u.push(n);
				else {
					let e = t === void 0 ? o : t;
					f = e === "\\" ? String.raw`\\\\` : e.replace(Kl, String.raw`\\$&`), u.push(e);
				}
				i.push("([^" + f + "]+)?" + f + "?");
			}
		});
		let _ = [...new Set(u.filter((e) => typeof e != "string").map(({ pattern: e }) => e))], v = RegExp("^" + i.join("") + "(" + (f === "" ? "." : "[^" + f + "]") + "+)?" + (f === "" ? "" : "[" + f + "]*") + "$"), y = a.length - 1, b = _.length === 1 ? h : "(?:" + _.map((e) => "(?!" + e + ")").join("") + String.raw`[\s\S])`, x = ({ c: e, overflow: t }) => t === !0 ? "(?:" + b + "+)?(" + e.pattern + "+)?(?:" + b + "+)?(" + e.pattern + "+)?" : "(?:" + b + "+)?(" + e.pattern + ")?", S = a.map((t, n) => {
			let i = x(t);
			return n === 0 && e.reverseFillMask ? RegExp("^" + r + "*" + i) : RegExp(n === y ? "^" + i + "(" + (h === "" ? "." : h) + "+)?" + (e.reverseFillMask ? "$" : r + "*") : "^" + i);
		});
		c = u, l = (t) => {
			let n = v.exec(e.reverseFillMask ? t : t.slice(0, u.length + 1));
			n !== null && (t = n.slice(1).join(""));
			let r = [], i = S.length;
			for (let e = 0, n = t; e < i; e++) {
				let t = S[e].exec(n);
				if (t === null) break;
				n = n.slice(t.shift().length), r.push(...t);
			}
			return r.length === 0 ? t : r.join("");
		}, o = u.map((e) => typeof e == "string" ? e : Jl).join(""), s = o.split(Jl).join(n);
	}
	function x(t, n) {
		let r = t.length, i = e.reverseFillMask ? y(r) : o, a = e.reverseFillMask ? c.length - r : 0, s = e.reverseFillMask ? 0 : Math.min(n, r), l = e.reverseFillMask ? r - n : r;
		return (e) => {
			if (i[e] !== Jl || e >= s && e < l) return !1;
			let n = c[a + e];
			return n === void 0 || typeof n == "string" || n.test(t[e]);
		};
	}
	function S(e, t, n) {
		let r = x(e, n), i = 0;
		for (let e = 0; e < t; e++) r(e) && i++;
		return i;
	}
	function C(t, r, c) {
		let l = i.value, d = l?.selectionEnd ?? 0, p = l === null ? 0 : l.value.length - d, m = r !== !0 && typeof h.value == "string" && Gl.includes(c) ? j(h.value, f, t, c) : M(t), g;
		r === !0 && l !== null && o.length !== 0 && (g = S(l.value, d, f)), r === !0 && b();
		let v = O(m, r), y = e.fillMask === !1 ? v : P(v), x = v.length, C = h.value !== y, w = C || x !== f;
		f = x;
		let E = e.fillMask !== !1 && x === 0;
		l !== null && l.value !== y && (l.value = y), C && (h.value = y), l !== null && document.activeElement === l && _(() => {
			if (E) {
				let t = e.reverseFillMask ? s.length : 0;
				l.setSelectionRange(t, t, "forward");
			} else if (g !== void 0) {
				let e = 0, t = 0;
				for (; e < y.length && t < g;) t = S(y, e + 1, x), e++;
				l.setSelectionRange(e, e, "forward");
			} else if (c === "insertFromPaste" && !e.reverseFillMask) {
				let e = l.selectionEnd, t = d - 1;
				for (let n = u; n <= t && n < e; n++) o[n] !== Jl && t++;
				T.right(l, t);
			} else if (["deleteContentBackward", "deleteContentForward"].includes(c)) {
				let t = e.reverseFillMask ? d === 0 ? +(y.length > v.length) : Math.max(0, y.length - (E ? 0 : Math.min(v.length, p) + 1)) + 1 : d;
				l.setSelectionRange(t, t, "forward");
			} else if (e.reverseFillMask) {
				if (w) {
					let e = Math.max(0, y.length - (E ? 0 : Math.min(v.length, p + 1)));
					e === 1 && d === 1 ? l.setSelectionRange(e, e, "forward") : T.rightReverse(l, e);
				} else {
					let e = y.length - p;
					l.setSelectionRange(e, e, "backward");
				}
			} else if (w) {
				let e = Math.max(0, o.indexOf(Jl), Math.min(v.length, d) - 1);
				T.right(l, e);
			} else {
				let e = d - 1;
				T.right(l, e);
			}
		});
		let D = e.unmaskedValue ? M(v) : y;
		String(e.modelValue) !== D && (e.modelValue !== null || D !== "") ? n(D, !0) : a !== void 0 && a();
	}
	function w(e, t, n) {
		let r = O(M(e.value));
		t = Math.max(0, o.indexOf(Jl), Math.min(r.length, t)), u = t, e.setSelectionRange(t, n, "forward");
	}
	let T = {
		left(e, t) {
			let n = !o.slice(t - 1).includes(Jl), r = Math.max(0, t - 1);
			for (; r >= 0; r--) if (o[r] === Jl) {
				t = r, n && t++;
				break;
			}
			if (r < 0 && o[t] !== void 0 && o[t] !== Jl) return T.right(e, 0);
			t >= 0 && e.setSelectionRange(t, t, "backward");
		},
		right(e, t) {
			let n = e.value.length, r = Math.min(n, t + 1);
			for (; r <= n; r++) if (o[r] === Jl) {
				t = r;
				break;
			} else o[r - 1] === Jl && (t = r);
			if (r > n && o[t - 1] !== void 0 && o[t - 1] !== Jl) return T.left(e, n);
			e.setSelectionRange(t, t, "forward");
		},
		leftReverse(e, t) {
			let n = y(e.value.length), r = Math.max(0, t - 1);
			for (; r >= 0; r--) if (n[r - 1] === Jl) {
				t = r;
				break;
			} else if (n[r] === Jl && (t = r, r === 0)) break;
			if (r < 0 && n[t] !== void 0 && n[t] !== Jl) return T.rightReverse(e, 0);
			t >= 0 && e.setSelectionRange(t, t, "backward");
		},
		rightReverse(e, t) {
			let n = e.value.length, r = y(n), i = !r.slice(0, t + 1).includes(Jl), a = Math.min(n, t + 1);
			for (; a <= n; a++) if (r[a - 1] === Jl) {
				t = a, t > 0 && i && t--;
				break;
			}
			if (a > n && r[t - 1] !== void 0 && r[t - 1] !== Jl) return T.leftReverse(e, n);
			e.setSelectionRange(t, t, "forward");
		}
	};
	function E(e) {
		t("click", e), d = void 0;
	}
	function D(n) {
		if (t("keydown", n), n.defaultPrevented || n.altKey || Ge(n)) return;
		let r = i.value, a = r.selectionStart, o = r.selectionEnd;
		if (n.shiftKey || (d = void 0), n.keyCode === 37 || n.keyCode === 39) {
			n.shiftKey && d === void 0 && (d = r.selectionDirection === "forward" ? a : o);
			let t = T[(n.keyCode === 39 ? "right" : "left") + (e.reverseFillMask ? "Reverse" : "")];
			if (n.preventDefault(), t(r, d === a ? o : a), n.shiftKey) {
				let e = r.selectionStart;
				r.setSelectionRange(Math.min(d, e), Math.max(d, e), "forward");
			}
		} else n.keyCode === 8 && !e.reverseFillMask && a === o ? (T.left(r, a), r.setSelectionRange(r.selectionStart, o, "backward")) : n.keyCode === 46 && e.reverseFillMask && a === o && (T.rightReverse(r, o), r.setSelectionRange(a, r.selectionEnd, "forward"));
	}
	function O(t, n) {
		if (t == null || t === "") return "";
		if (e.reverseFillMask) return k(t, n);
		let r = c, i = 0, a = "";
		for (let e = 0; e < r.length; e++) {
			let o = t[i], s = r[e];
			if (typeof s == "string") a += s, n === !0 && o === s && i++;
			else if (o !== void 0 && s.test(o)) a += s.transform === void 0 ? o : s.transform(o), i++;
			else return a;
		}
		return a;
	}
	function k(e, t) {
		let n = c, r = o.indexOf(Jl), i = e.length - 1, a = "", s = "";
		for (let o = n.length - 1; o >= 0 && i !== -1; o--) {
			let c = n[o], l = e[i];
			if (typeof c == "string") s = c + s, t === !0 && l === c && i--;
			else if (l !== void 0 && c.test(l)) {
				a = s + a, s = "";
				do
					a = (c.transform === void 0 ? l : c.transform(l)) + a, i--, l = e[i];
				while (r === o && l !== void 0 && c.test(l));
			} else return a;
		}
		return a;
	}
	function j(t, n, r, i) {
		let a = t.length, o = r.length, s = Math.min(a, o), l = 0;
		for (; l < s && t[l] === r[l];) l++;
		let u = 0;
		for (; u < s - l && t[a - 1 - u] === r[o - 1 - u];) u++;
		let d = x(t, n), f = "", p = "";
		for (let e = 0; e < l; e++) d(e) && (f += t[e]);
		for (let e = a - u; e < a; e++) d(e) && (p += t[e]);
		let m = "", h = r.slice(l, o - u);
		if (h.length !== 0) {
			if (e.reverseFillMask) for (let e of h) c.some((t) => typeof t != "string" && t.test(e)) && (m += e);
			else {
				let e = c.filter((e) => typeof e != "string"), t = f.length;
				for (let n of h) e[t] !== void 0 && e[t].test(n) && (m += n, t++);
			}
		} else if (!e.reverseFillMask && l + u < a) {
			let e = !1;
			for (let t = l; t < a - u; t++) if (d(t)) {
				e = !0;
				break;
			}
			e || (i === "deleteContentForward" ? p = p.slice(1) : f = f.slice(0, -1));
		}
		return f + m + p;
	}
	function M(e) {
		return typeof e != "string" || l === void 0 ? typeof e == "number" ? l(String(e)) : e : l(e);
	}
	function N(t, n) {
		return n >= t.length ? t : e.reverseFillMask ? t.slice(t.length - n) : t.slice(0, n);
	}
	function P(t) {
		return s.length - t.length <= 0 ? t : e.reverseFillMask && t.length !== 0 ? s.slice(0, -t.length) + t : t + s.slice(t.length);
	}
	return {
		innerValue: h,
		hasMask: m,
		moveCursorForPaste: w,
		updateMaskValue: C,
		onMaskedKeydown: D,
		onMaskedClick: E
	};
}
var Zl = typeof CSS > "u" || CSS.supports("field-sizing", "content") ? void 0 : Ql;
function Ql(e, t, n, r) {
	let i = null;
	function a() {
		i !== null && (cancelAnimationFrame(i), i = null);
	}
	function o() {
		i === null && (i = requestAnimationFrame(() => {
			i = null;
			let e = n.value;
			if (e !== null) {
				let t = e.parentNode.style, { scrollTop: n } = e, { overflowY: i, maxHeight: a } = r.platform.is.firefox ? {} : window.getComputedStyle(e), o = i !== void 0 && i !== "scroll";
				o && (e.style.overflowY = "hidden"), t.marginBottom = e.scrollHeight - 1 + "px", e.style.height = "1px", e.style.height = e.scrollHeight + "px", o && (e.style.overflowY = Number.parseInt(a, 10) < e.scrollHeight ? "auto" : "hidden"), t.marginBottom = "", e.scrollTop = n;
			}
		}));
	}
	return I(() => e.autogrow, (e) => {
		if (e) _(o);
		else if (n.value !== null) {
			a();
			let { style: e } = n.value;
			e.overflowY = "", e.height = t.rows > 0 ? "auto" : "";
		}
	}), I(() => e.dense, () => {
		e.autogrow && _(o);
	}), C(() => {
		e.autogrow && o();
	}), b(a), o;
}
var $l = /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFF9F\u4E00-\u9FAF\u3400-\u4DBF]/, eu = /[\u4E00-\u9FFF\u3400-\u4DBF\u{20000}-\u{2A6DF}\u{2A700}-\u{2B73F}\u{2B740}-\u{2B81F}\u{2B820}-\u{2CEAF}\uF900-\uFAFF\u3300-\u33FF\uFE30-\uFE4F\uF900-\uFAFF\u{2F800}-\u{2FA1F}]/u, tu = /[\u3131-\u314E\u314F-\u3163\uAC00-\uD7A3]/, nu = /[a-z0-9_ -]$/i;
function ru(e) {
	return function(t) {
		if (t.type === "compositionend" || t.type === "change") {
			if (!t.target.qComposing) return;
			t.target.qComposing = !1, e(t);
		} else t.type === "compositionupdate" && !t.target.qComposing && typeof t.data == "string" && (Y.is.firefox ? !nu.test(t.data) : $l.test(t.data) || eu.test(t.data) || tu.test(t.data)) && (t.target.qComposing = !0);
	};
}
var iu = /*#__PURE__*/ X({
	name: "QInput",
	inheritAttrs: !1,
	props: {
		...ul,
		...Yl,
		...xa,
		modelValue: [
			String,
			Number,
			FileList
		],
		modelModifiers: Object,
		shadowText: String,
		type: {
			type: String,
			default: "text"
		},
		debounce: [String, Number],
		autogrow: Boolean,
		inputClass: [
			Array,
			String,
			Object
		],
		inputStyle: [
			Array,
			String,
			Object
		]
	},
	emits: [
		...dl,
		"paste",
		"change",
		"keydown",
		"click",
		"animationend"
	],
	setup(e, { emit: t, attrs: n }) {
		let { proxy: i } = u(), a = At(), o = {}, s = NaN, c = !1, l = !1, d = null, p, m = M(null), h = wa(e), { innerValue: g, hasMask: v, moveCursorForPaste: y, updateMaskValue: x, onMaskedKeydown: S, onMaskedClick: C } = Xl(e, t, ee, m, () => {
			W(), delete o.value;
		}), w = Fl(e, !0), T = r(() => cl(g.value)), E = ru(V);
		function D(e) {
			v.value && e.type === "compositionstart" ? e.target.qComposing = !0 : E(e);
		}
		let O = fl({ changeEvent: !0 }), k = r(() => e.type === "textarea" || e.autogrow), A = Zl?.(e, n, m, a), j = r(() => k.value || [
			"text",
			"search",
			"url",
			"tel",
			"password"
		].includes(e.type)), N = r(() => {
			let t = {
				...O.splitAttrs.listeners.value,
				onInput: V,
				onPaste: B,
				onChange: te,
				onBlur: K,
				onFocus: je
			};
			return t.onCompositionstart = t.onCompositionupdate = t.onCompositionend = D, v.value && (t.onKeydown = S, t.onClick = C), A && e.autogrow && (t.onAnimationend = H), t;
		}), P = r(() => {
			let t = {
				tabindex: 0,
				"data-autofocus": e.autofocus || void 0,
				rows: e.type === "textarea" ? 6 : void 0,
				"aria-label": e.label,
				name: h(),
				...O.splitAttrs.attributes.value,
				id: O.targetUid.value,
				maxlength: e.maxlength,
				disabled: e.disable,
				readonly: e.readonly
			};
			return k.value || (t.type = e.type), e.autogrow && (t.rows = 1), t;
		});
		I(() => e.type, () => {
			m.value && (m.value.value = e.modelValue);
		}), I(() => e.modelValue, (t) => {
			if (p !== void 0 && (W(), c = !1, l = !1, delete o.value), v.value) {
				if (l && (l = !1, String(t) === s)) return;
				x(t);
			} else g.value !== t && (g.value = t, e.type === "number" && Object.hasOwn(o, "value") && (c ? c = !1 : delete o.value), e.modelModifiers?.trim === !0 && Object.hasOwn(o, "value") && (typeof o.value != "string" || o.value.trim() !== t) && delete o.value);
			A && e.autogrow && _(A);
		});
		function F() {
			let e = document.activeElement;
			m.value !== null && m.value !== e && (e === null || e.id !== O.targetUid.value) && m.value.focus({ preventScroll: !0 });
		}
		function L() {
			Ir(F);
		}
		function R() {
			Lr(F);
			let e = document.activeElement;
			e !== null && O.rootRef.value.contains(e) && e.blur();
		}
		function z() {
			m.value?.select();
		}
		function B(n) {
			if (v.value && e.reverseFillMask !== !0) {
				let e = n.target;
				y(e, e.selectionStart, e.selectionEnd);
			}
			t("paste", n);
		}
		function V(n) {
			if (!n || !n.target) return;
			if (e.type === "file") {
				t("update:modelValue", n.target.files);
				return;
			}
			let r = n.target.value;
			if (n.target.qComposing) o.value = r;
			else {
				if (v.value) x(r, !1, n.inputType);
				else if (e.modelModifiers?.trim === !0 && (o.value = r), ee(r), j.value && n.target === document.activeElement) {
					let { selectionStart: e, selectionEnd: t } = n.target;
					e !== void 0 && t !== void 0 && _(() => {
						n.target === document.activeElement && r.indexOf(n.target.value) === 0 && n.target.setSelectionRange(e, t);
					});
				}
				A && e.autogrow && A();
			}
		}
		function H(e) {
			t("animationend", e), A();
		}
		function ee(n, r) {
			p = () => {
				d = null, e.type !== "number" && (e.modelModifiers?.trim !== !0 || v.value) && Object.hasOwn(o, "value") && delete o.value, e.modelValue !== n && s !== n && (s = n, r === !0 && (l = !0), t("update:modelValue", n), _(() => {
					s === n && (s = NaN);
				})), p = void 0;
			}, e.type === "number" && (c = !0, o.value = n);
			let i = () => {
				v.value ? delete o.value : o.value = n;
			};
			e.modelModifiers?.lazy === !0 ? i() : e.debounce === void 0 ? p() : (d !== null && clearTimeout(d), i(), d = setTimeout(p, e.debounce));
		}
		function W() {
			d !== null && (clearTimeout(d), d = null), p = void 0;
		}
		function G() {
			W(), c = !1, l = !1, delete o.value;
		}
		function te(e) {
			D(e), d !== null && (clearTimeout(d), d = null), p?.(), t("change", e.target.value);
		}
		function K(t) {
			t !== void 0 && je(t), d !== null && (clearTimeout(d), d = null), p?.(), c = !1, l = !1, delete o.value, e.type !== "file" && setTimeout(() => {
				m.value !== null && (m.value.value = g.value === void 0 ? "" : g.value);
			}, 0);
		}
		function ne() {
			return Object.hasOwn(o, "value") ? o.value : g.value === void 0 ? "" : g.value;
		}
		b(() => {
			K();
		}), Object.assign(O, {
			innerValue: g,
			fieldClass: r(() => `q-${k.value ? "textarea" : "input"}` + (e.autogrow ? " q-textarea--autogrow" : "")),
			hasShadow: r(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0),
			inputRef: m,
			emitValue: ee,
			onClear: G,
			hasValue: T,
			floatingLabel: r(() => T.value && (e.type !== "number" || Number.isFinite(Number(g.value))) || cl(e.displayValue)),
			getControl: () => {
				let t = P.value;
				return f(k.value ? "textarea" : "input", {
					ref: m,
					class: ["q-field__native q-placeholder", e.inputClass],
					style: e.inputStyle,
					...t,
					...O.getErrorAriaAttrs(t),
					...N.value,
					...e.type === "file" ? w.value : { value: ne() }
				});
			},
			getShadowControl: () => f("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (k.value ? "" : " text-no-wrap") }, [f("span", { class: "invisible" }, ne()), f("span", e.shadowText)])
		});
		let re = Tl(O);
		return Object.assign(i, {
			focus: L,
			blur: R,
			select: z,
			getNativeElement: () => m.value
		}), U(i, "nativeEl", () => m.value), re;
	}
}), au = ["ul", "ol"], ou = /*#__PURE__*/ X({
	name: "QList",
	props: {
		...$,
		bordered: Boolean,
		dense: Boolean,
		separator: Boolean,
		padding: Boolean,
		role: String,
		tag: {
			type: String,
			default: "div"
		}
	},
	setup(e, { slots: t }) {
		let n = cn(e, At()), i = r(() => e.role === void 0 ? au.includes(e.tag) ? null : "list" : e.role);
		O(ft, r(() => e.role === void 0 ? "list" : e.role));
		let a = r(() => "q-list" + (e.bordered ? " q-list--bordered" : "") + (e.dense ? " q-list--dense" : "") + (e.separator ? " q-list--separator" : "") + (n() ? " q-list--dark" : "") + (e.padding ? " q-list--padding" : ""));
		return () => f(e.tag, {
			class: a.value,
			role: i.value
		}, Bt(t.default));
	}
});
Object.keys(oo), {
	...xa,
	...oo
};
var { passive: su } = De;
function cu(t) {
	let n = M({
		top: 0,
		left: 0
	}), r = A("down"), i = A(!1), a = M({
		top: 0,
		left: 0
	}), o = M({
		top: 0,
		left: 0
	}), s = {
		scrollPosition: n,
		scrollDirection: r,
		scrollDirectionChanged: i,
		scrollDelta: a,
		scrollInflectionPoint: o
	}, c = u(), l = c !== null || p() ? At() : void 0, d = null, f = !1, m = null, h = "vertical", g, _, v, y = 0, x = 0, S = "down", w = {
		top: 0,
		left: 0
	};
	function T() {
		m !== null && (m(), m = null);
	}
	function E() {
		if (T(), d === null) return;
		let e = Math.max(0, Ua(d)), t = Wa(d), s = e - y, c = t - x;
		if (h === "vertical" && s === 0 || h === "horizontal" && c === 0 || s === 0 && c === 0) return;
		let l = Math.abs(s) >= Math.abs(c) ? s < 0 ? "up" : "down" : c < 0 ? "left" : "right", u = S !== l, f = {
			top: e,
			left: t
		}, p = {
			top: s,
			left: c
		};
		y = e, x = t, n.value = f, a.value = p, i.value = u, u && (S = l, w = f, r.value = l, o.value = f), v?.({
			position: f,
			direction: l,
			directionChanged: u,
			delta: p,
			inflectionPoint: w
		});
	}
	function D() {
		if (g === 0) E();
		else if (m === null) {
			if (g === void 0) {
				let e = requestAnimationFrame(E);
				m = () => {
					cancelAnimationFrame(e);
				};
			} else {
				let e = setTimeout(E, g);
				m = () => {
					clearTimeout(e);
				};
			}
		}
	}
	function O() {
		T(), f &&= (d.removeEventListener("scroll", D, su), !1);
	}
	let k = new e(() => {
		let e = P(t) ?? {}, s = P(e.scrollTarget), u = _n(e.target, c), p = s == null ? u === null ? null : Ha(u) : Ha(u, s);
		h = e.axis ?? "vertical", g = e.debounce === void 0 || e.debounce === null ? void 0 : Number(e.debounce) || 0, v = e.onScroll, p !== d && (O(), d = p, (y !== 0 || x !== 0) && (y = x = 0, n.value = {
			top: y,
			left: x
		}, a.value = {
			top: y,
			left: x
		}), S !== "down" && (S = "down", r.value = S), i.value &&= !1, (w.top !== 0 || w.left !== 0) && (w = {
			top: 0,
			left: 0
		}, o.value = w));
		let m = l?.lang.rtl === !0, b = _ !== void 0 && _ !== m;
		_ = m, e.disabled === !0 || d === null ? O() : f ? b && E() : (d.addEventListener("scroll", D, su), f = !0, E());
	});
	return k.scheduler = () => {
		k.run();
	}, c === null ? k.run() : (C(() => {
		k.run();
	}), b(O)), {
		...s,
		refreshScroll: E,
		stopScroll() {
			O(), d = null, k.stop();
		}
	};
}
var lu = /^(h|l)h(h|r) lpr (f|l)f(f|r)$/, uu = /*#__PURE__*/ X({
	name: "QLayout",
	props: {
		container: Boolean,
		view: {
			type: String,
			default: "hhh lpr fff",
			validator: (e) => lu.test(e.toLowerCase())
		},
		onScroll: Function,
		onScrollHeight: Function,
		onResize: Function
	},
	setup(e, { slots: t, emit: n }) {
		let i = At(), a = M(null), o = M(null), s = () => e.container ? o.value : a.value, c = A(i.screen.height), l = A(e.container ? 0 : i.screen.width), u = A({
			position: 0,
			direction: "down",
			inflectionPoint: 0
		}), d = A(0), p = A(W.value ? 0 : Ka()), m = r(() => "q-layout q-layout--" + (e.container ? "containerized" : "standard")), h = r(() => e.container ? null : { minHeight: i.screen.height + "px" }), g = r(() => p.value === 0 ? null : { [i.lang.rtl ? "left" : "right"]: `${p.value}px` }), _ = r(() => p.value === 0 ? null : {
			[i.lang.rtl ? "right" : "left"]: 0,
			[i.lang.rtl ? "left" : "right"]: `-${p.value}px`,
			width: `calc(100% + ${p.value}px)`
		}), v = null;
		function y(t) {
			let n = {
				position: t.position.top,
				direction: t.direction,
				directionChanged: t.directionChanged,
				inflectionPoint: t.inflectionPoint.top,
				delta: t.delta.top
			};
			e.container || !document.qScrollPrevented ? (v = null, b(n)) : v = n;
		}
		function b(t) {
			u.value = t, e.onScroll !== void 0 && n("scroll", t);
		}
		function x(t) {
			let { height: r, width: i } = t, a = !1;
			c.value !== r && (a = !0, c.value = r, e.onScrollHeight !== void 0 && n("scrollHeight", r), C()), l.value !== i && (a = !0, l.value = i), a && e.onResize !== void 0 && n("resize", t);
		}
		function S({ height: e }) {
			d.value !== e && (d.value = e, C());
		}
		function C() {
			if (e.container) {
				let e = c.value > d.value ? Ka() : 0;
				p.value !== e && (p.value = e);
			}
		}
		cu({
			target: s,
			onScroll: y
		}), No({
			target: s,
			debounce: 100,
			onResize: x
		}), No(() => ({
			target: a,
			debounce: 100,
			disabled: e.container !== !0,
			onResize: S
		}));
		let w = null, E = {
			instances: {},
			view: r(() => e.view),
			isContainer: r(() => e.container),
			rootRef: a,
			height: c,
			containerHeight: d,
			scrollbarWidth: p,
			totalWidth: r(() => e.container ? l.value + p.value : i.screen.width),
			rows: r(() => {
				let t = e.view.toLowerCase().split(" ");
				return {
					top: [...t[0]],
					middle: [...t[1]],
					bottom: [...t[2]]
				};
			}),
			header: k({
				size: 0,
				offset: 0,
				space: !1
			}),
			right: k({
				size: 300,
				offset: 0,
				space: !1
			}),
			footer: k({
				size: 0,
				offset: 0,
				space: !1
			}),
			left: k({
				size: 300,
				offset: 0,
				space: !1
			}),
			scroll: u,
			animate() {
				w === null ? document.body.classList.add("q-body--layout-animate") : clearTimeout(w), w = setTimeout(() => {
					w = null, document.body.classList.remove("q-body--layout-animate");
				}, 155);
			},
			update(e, t, n) {
				E[e][t] = n;
			}
		};
		O(dt, E);
		{
			let e = () => {
				if (v !== null) {
					let e = v;
					v = null, b(e);
				}
			};
			yc(e), T(() => {
				bc(e);
			});
		}
		if (Ka() > 0) {
			let t = null, n = document.documentElement, r = () => {
				t = null, n.classList.remove("hide-scrollbar");
			}, a = () => {
				if (t === null) {
					if (n.scrollHeight > i.screen.height) return;
					n.classList.add("hide-scrollbar");
				} else clearTimeout(t);
				t = setTimeout(r, 300);
			}, o = (e) => {
				t !== null && e === "remove" && (clearTimeout(t), r()), window[`${e}EventListener`]("resize", a);
			};
			I(() => e.container ? "remove" : "add", o), e.container || o("add"), T(() => {
				o("remove");
			});
		}
		return () => {
			let n = f("div", {
				class: m.value,
				style: h.value,
				ref: e.container ? o : a,
				tabindex: -1
			}, Bt(t.default));
			return e.container ? f("div", {
				class: "q-layout-container overflow-hidden",
				ref: a
			}, [f("div", {
				class: "absolute-full",
				style: g.value
			}, [f("div", {
				class: "scroll",
				style: _.value
			}, [n])])]) : n;
		};
	}
});
({
	...$,
	...Lt
}), { ...$ };
var du = () => f("svg", {
	key: "svg",
	class: "q-radio__bg absolute non-selectable",
	viewBox: "0 0 24 24"
}, [f("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), f("path", {
	class: "q-radio__check",
	d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
})]);
function fu(e) {
	(e.keyCode === 13 || e.keyCode === 32) && Z(e);
}
var pu = /*#__PURE__*/ X({
	name: "QRadio",
	props: {
		...$,
		...Lt,
		...xa,
		modelValue: { required: !0 },
		val: { required: !0 },
		label: String,
		leftLabel: Boolean,
		checkedIcon: String,
		uncheckedIcon: String,
		color: String,
		keepColor: Boolean,
		dense: Boolean,
		disable: Boolean,
		tabindex: [String, Number]
	},
	emits: ["update:modelValue"],
	setup(e, { slots: t, emit: n }) {
		let { proxy: i } = u(), a = cn(e, At()), o = M(null), { refocusTargetEl: s, refocusTarget: c } = Ya(e, o), l = r(() => N(e.modelValue) === N(e.val)), d = r(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable ? " disabled" : "") + (a() ? " q-radio--dark" : "") + (e.dense ? " q-radio--dense" : "") + (e.leftLabel ? " reverse" : "")), p = r(() => {
			let t = e.color !== void 0 && (e.keepColor || l.value) ? ` text-${e.color}` : "";
			return `q-radio__inner relative-position q-radio__inner--${l.value ? "truthy" : "falsy"}${t}`;
		}), m = r(() => (l.value ? e.checkedIcon : e.uncheckedIcon) || null), h = r(() => e.disable ? -1 : e.tabindex || 0), g = Ca(() => {
			let t = { type: "radio" };
			return e.name !== void 0 && Object.assign(t, {
				".checked": l.value,
				"^checked": l.value ? "checked" : void 0,
				name: e.name,
				value: e.val
			}), t;
		});
		function _(t) {
			t !== void 0 && (Z(t), c(t)), !e.disable && !l.value && n("update:modelValue", e.val, t);
		}
		function v(e) {
			(e.keyCode === 13 || e.keyCode === 32) && _(e);
		}
		Object.assign(i, { set: _ });
		let y = du();
		return () => {
			let n = m.value === null ? [y] : [f("div", {
				key: "icon",
				class: "q-radio__icon-container absolute-full flex flex-center no-wrap"
			}, [f(sn, {
				class: "q-radio__icon",
				name: m.value
			})])];
			e.disable || g(n, "unshift", " q-radio__native q-ma-none q-pa-none");
			let r = [f("div", {
				class: p.value,
				style: Xa(e.size),
				"aria-hidden": "true"
			}, n)];
			s.value !== null && r.push(s.value);
			let i = e.label === void 0 ? Bt(t.default) : Ht(t.default, [e.label]);
			return i !== void 0 && r.push(f("div", { class: "q-radio__label q-anchor--skip" }, i)), f("div", {
				ref: o,
				class: d.value,
				tabindex: h.value,
				role: "radio",
				"aria-label": e.label,
				"aria-checked": l.value ? "true" : "false",
				"aria-disabled": e.disable ? "true" : void 0,
				onClick: _,
				onKeydown: fu,
				onKeyup: v
			}, r);
		};
	}
}), mu = /*#__PURE__*/ X({
	name: "QToggle",
	props: {
		...Za,
		icon: String,
		iconColor: String
	},
	emits: Qa,
	setup(e) {
		function t(t, n) {
			let i = r(() => (t.value ? e.checkedIcon : n.value ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), a = r(() => t.value ? e.iconColor : null);
			return () => [f("div", { class: "q-toggle__track" }), f("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, i.value === void 0 ? void 0 : [f(sn, {
				name: i.value,
				color: a.value
			})])];
		}
		return eo("toggle", t);
	}
});
({ ...$ });
var hu = {
	position: {
		type: String,
		default: "bottom-right",
		validator: (e) => [
			"top-right",
			"top-left",
			"bottom-right",
			"bottom-left",
			"top",
			"right",
			"bottom",
			"left"
		].includes(e)
	},
	offset: {
		type: Array,
		validator: (e) => e.length === 2
	},
	expand: Boolean
};
({ ...hu }), { ...hu.offset }, { ...$ };
var { passive: gu } = De;
({ ...gr }), { ...Mo }, {
	...Lt,
	...xa
}, { ...$ };
var _u = 1e3, vu = [
	"start",
	"center",
	"end",
	"start-force",
	"center-force",
	"end-force"
], yu = Array.prototype.filter, bu = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? Oe : function(e, t) {
	e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
		if (e === null) return;
		e._qOverflowAnimationFrame = void 0;
		let n = e.children || [];
		yu.call(n, (e) => e.dataset && e.dataset.qVsAnchor !== void 0).forEach((e) => {
			delete e.dataset.qVsAnchor;
		});
		let r = n[t];
		r?.dataset && (r.dataset.qVsAnchor = "");
	}));
};
function xu(e, t) {
	return e + t;
}
function Su(e, t, n, r, i, a, o, s) {
	let c = e === window ? document.scrollingElement || document.documentElement : e, l = i ? "width" : "height", u = {
		scrollStart: 0,
		scrollViewSize: -o - s,
		scrollMaxSize: 0,
		offsetStart: -o,
		offsetEnd: -s
	};
	if (i ? (e === window ? (u.scrollStart = window.scrollX, u.scrollViewSize += document.documentElement.clientWidth) : (u.scrollStart = c.scrollLeft, u.scrollViewSize += c.clientWidth), u.scrollMaxSize = c.scrollWidth, a && (u.scrollStart = -u.scrollStart)) : (e === window ? (u.scrollStart = window.scrollY, u.scrollViewSize += document.documentElement.clientHeight) : (u.scrollStart = c.scrollTop, u.scrollViewSize += c.clientHeight), u.scrollMaxSize = c.scrollHeight), n !== null) for (let e = n.previousElementSibling; e !== null; e = e.previousElementSibling) e.classList.contains("q-virtual-scroll--skip") || (u.offsetStart += e.getBoundingClientRect()[l]);
	if (r !== null) for (let e = r.nextElementSibling; e !== null; e = e.nextElementSibling) e.classList.contains("q-virtual-scroll--skip") || (u.offsetEnd += e.getBoundingClientRect()[l]);
	if (t !== e) {
		let n = c.getBoundingClientRect(), r = t.getBoundingClientRect();
		i ? (u.offsetStart += r.left - n.left, u.offsetEnd -= r.width) : (u.offsetStart += r.top - n.top, u.offsetEnd -= r.height), e !== window && (u.offsetStart += u.scrollStart), u.offsetEnd += u.scrollMaxSize - u.offsetStart;
	}
	return u;
}
function Cu(e, t, n, r) {
	if (t === "end" && (t = (e === window ? document.body : e)[n ? "scrollWidth" : "scrollHeight"]), e === window) {
		let e, i;
		n ? (r && (t = -t), e = t, i = window.scrollY) : (e = window.scrollX, i = t), window.scrollTo({
			left: e,
			top: i,
			behavior: "instant"
		});
	} else n ? (r && (t = -t), e.scrollTo({
		left: t,
		behavior: "instant"
	})) : e.scrollTo({
		top: t,
		behavior: "instant"
	});
}
function wu(e, t, n, r) {
	if (n >= r) return 0;
	let i = t.length, a = Math.floor(n / _u), o = Math.floor((r - 1) / _u) + 1, s = 0;
	for (let t = a; t < o; t++) s += e[t];
	if (n % _u !== 0) for (let e = a * _u; e < n; e++) s -= t[e];
	if (r % _u !== 0 && r !== i) {
		let e = Math.min(o * _u, i);
		for (let n = r; n < e; n++) s -= t[n];
	}
	return s;
}
var Tu = {
	virtualScrollSliceSize: {
		type: [Number, String],
		default: 10
	},
	virtualScrollSliceRatioBefore: {
		type: [Number, String],
		default: 1
	},
	virtualScrollSliceRatioAfter: {
		type: [Number, String],
		default: 1
	},
	virtualScrollItemSize: {
		type: [Number, String],
		default: 24
	},
	virtualScrollStickySizeStart: {
		type: [Number, String],
		default: 0
	},
	virtualScrollStickySizeEnd: {
		type: [Number, String],
		default: 0
	},
	tableColspan: [Number, String]
}, Eu = Object.keys(Tu), Du = {
	virtualScrollHorizontal: Boolean,
	onVirtualScroll: Function,
	...Tu
};
function Ou({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: i }) {
	let { props: a, emit: o, proxy: s } = u(), c = At(), l, d, p, m = [], h, g = A(0), x = A(0), C = A({}), w = M(null), T = M(null), E = M(null), D = A({
		from: 0,
		to: 0
	}), O = r(() => a.tableColspan === void 0 ? 100 : a.tableColspan);
	i === void 0 && (i = r(() => a.virtualScrollItemSize));
	let k = r(() => i.value + ";" + a.virtualScrollHorizontal), j = r(() => k.value + ";" + a.virtualScrollSliceRatioBefore + ";" + a.virtualScrollSliceRatioAfter);
	I(j, () => {
		H();
	}), I(k, N);
	function N() {
		V(d, !0);
	}
	function P(e) {
		V(e === void 0 ? d : e);
	}
	function F(r, i) {
		let o = t();
		if (o == null || o.nodeType === 8) return;
		W.cancel();
		let s = Su(o, n(), w.value, T.value, a.virtualScrollHorizontal, c.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd);
		p !== s.scrollViewSize && H(s.scrollViewSize), R(o, s, Math.min(e.value - 1, Math.max(0, Number.parseInt(r, 10) || 0)), 0, vu.includes(i) ? i : d !== -1 && r > d ? "end" : "start");
	}
	function L() {
		let r = t();
		if (r == null || r.nodeType === 8) return;
		let i = Su(r, n(), w.value, T.value, a.virtualScrollHorizontal, c.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd), o = e.value - 1, s = i.scrollMaxSize - i.offsetStart - i.offsetEnd - x.value;
		if (l === i.scrollStart) return;
		if (i.scrollMaxSize <= 0) {
			R(r, i, 0, 0);
			return;
		}
		p !== i.scrollViewSize && H(i.scrollViewSize), z(D.value.from);
		let u = Math.floor(i.scrollMaxSize - Math.max(i.scrollViewSize, i.offsetEnd) - Math.min(h[o], i.scrollViewSize / 2));
		if (u > 0 && Math.ceil(i.scrollStart) >= u) {
			R(r, i, o, i.scrollMaxSize - i.offsetEnd - m.reduce(xu, 0));
			return;
		}
		let d = 0, f = i.scrollStart - i.offsetStart, _ = f;
		if (f <= s && f + i.scrollViewSize >= g.value) f -= g.value, d = D.value.from, _ = f;
		else for (let e = 0; f >= m[e] && d < o; e++) f -= m[e], d += _u;
		for (; f > 0 && d < o;) f -= h[d], f > -i.scrollViewSize ? (d++, _ = f) : _ = h[d] + f;
		R(r, i, d, _);
	}
	function R(t, n, r, i, o) {
		let s = typeof o == "string" && o.includes("-force"), u = s ? o.replace("-force", "") : o, d = u === void 0 ? "start" : u, f = Math.max(0, r - C.value[d]), p = f + C.value.total;
		p > e.value && (p = e.value, f = Math.max(0, p - C.value.total)), l = n.scrollStart;
		let _ = f !== D.value.from || p !== D.value.to;
		if (!_ && u === void 0) {
			ee(r);
			return;
		}
		let { activeElement: v } = document, y = E.value;
		_ && y !== null && y !== v && y.contains(v) && (y.addEventListener("focusout", B), setTimeout(() => {
			y?.removeEventListener("focusout", B);
		}, 0)), bu(y, r - f);
		let b = u === void 0 ? 0 : h.slice(f, r).reduce(xu, 0);
		if (_) {
			let t = p >= D.value.from && f <= D.value.to ? D.value.to : p;
			D.value = {
				from: f,
				to: t
			}, g.value = wu(m, h, 0, f), x.value = wu(m, h, p, e.value), requestAnimationFrame(() => {
				D.value.to !== p && l === n.scrollStart && (D.value = {
					from: D.value.from,
					to: p
				}, x.value = wu(m, h, p, e.value));
			});
		}
		requestAnimationFrame(() => {
			if (l !== n.scrollStart) return;
			_ && z(f);
			let e = h.slice(f, r).reduce(xu, 0), o = e + n.offsetStart + g.value, d = o + h[r], p = o + i;
			if (u !== void 0) {
				let t = e - b, i = n.scrollStart + t;
				p = !s && i < o && d < i + n.scrollViewSize ? i : u === "end" ? d - n.scrollViewSize : o - (u === "start" ? 0 : Math.round((n.scrollViewSize - h[r]) / 2));
			}
			l = p, Cu(t, p, a.virtualScrollHorizontal, c.lang.rtl), ee(r);
		});
	}
	function z(e) {
		let t = E.value;
		if (t) {
			let n = yu.call(t.children, (e) => e.classList && !e.classList.contains("q-virtual-scroll--skip")), r = n.length, i = a.virtualScrollHorizontal ? (e) => e.getBoundingClientRect().width : (e) => e.getBoundingClientRect().height, o = e, s, c;
			for (let e = 0; e < r;) {
				for (s = i(n[e]), e++; e < r && n[e].classList.contains("q-virtual-scroll--with-prev");) s += i(n[e]), e++;
				c = s - h[o], c !== 0 && (h[o] += c, m[Math.floor(o / _u)] += c), o++;
			}
		}
	}
	function B() {
		E.value?.focus({ preventScroll: !0 });
	}
	function V(t, n) {
		let r = Number(i.value);
		(n || !Array.isArray(h)) && (h = []);
		let a = h.length;
		h.length = e.value;
		for (let t = e.value - 1; t >= a; t--) h[t] = r;
		let o = Math.floor((e.value - 1) / _u);
		m = [];
		for (let t = 0; t <= o; t++) {
			let n = 0, r = Math.min((t + 1) * _u, e.value);
			for (let e = t * _u; e < r; e++) n += h[e];
			m.push(n);
		}
		d = -1, l = void 0, g.value = wu(m, h, 0, D.value.from), x.value = wu(m, h, D.value.to, e.value), t >= 0 ? (z(D.value.from), _(() => {
			F(t);
		})) : W();
	}
	function H(e) {
		if (e === void 0 && typeof window < "u") {
			let r = t();
			r != null && r.nodeType !== 8 && (e = Su(r, n(), w.value, T.value, a.virtualScrollHorizontal, c.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd).scrollViewSize);
		}
		p = e;
		let r = Number.parseFloat(a.virtualScrollSliceRatioBefore) || 0, o = Number.parseFloat(a.virtualScrollSliceRatioAfter) || 0, s = 1 + r + o, l = e === void 0 || e <= 0 ? 1 : Math.ceil(e / i.value), u = Math.max(1, l, Math.ceil((a.virtualScrollSliceSize > 0 ? a.virtualScrollSliceSize : 10) / s));
		C.value = {
			total: Math.ceil(u * s),
			start: Math.ceil(u * r),
			center: Math.ceil(u * (.5 + r)),
			end: Math.ceil(u * (1 + r)),
			view: l
		};
	}
	function U(e, t, n) {
		let r = a.virtualScrollHorizontal ? "width" : "height", o = { ["--q-virtual-scroll-item-" + r]: i.value + "px" };
		return [
			e === "tbody" ? f(e, {
				class: "q-virtual-scroll__padding",
				key: "before",
				ref: w,
				"aria-hidden": "true"
			}, [f("tr", [f("td", {
				style: {
					[r]: `${g.value}px`,
					...o
				},
				colspan: O.value
			})])]) : f(e, {
				class: "q-virtual-scroll__padding",
				key: "before",
				ref: w,
				"aria-hidden": "true",
				style: {
					[r]: `${g.value}px`,
					...o
				}
			}),
			f(e, {
				class: "q-virtual-scroll__content",
				key: "content",
				ref: E,
				tabindex: -1,
				...n
			}, t.flat()),
			e === "tbody" ? f(e, {
				class: "q-virtual-scroll__padding",
				key: "after",
				ref: T,
				"aria-hidden": "true"
			}, [f("tr", [f("td", {
				style: {
					[r]: `${x.value}px`,
					...o
				},
				colspan: O.value
			})])]) : f(e, {
				class: "q-virtual-scroll__padding",
				key: "after",
				ref: T,
				"aria-hidden": "true",
				style: {
					[r]: `${x.value}px`,
					...o
				}
			})
		];
	}
	function ee(e) {
		d !== e && (a.onVirtualScroll !== void 0 && o("virtualScroll", {
			index: e,
			from: D.value.from,
			to: D.value.to - 1,
			direction: e < d ? "decrease" : "increase",
			ref: s
		}), d = e);
	}
	H();
	{
		let t = Math.min(e.value, C.value.total), n = Number(i.value);
		D.value = {
			from: 0,
			to: t
		}, x.value = Number.isFinite(n) ? Math.max(0, (e.value - t) * n) : 0;
	}
	let W = Le(L, c.platform.is.ios ? 120 : 35);
	y(() => {
		H();
	});
	let G = !1;
	return S(() => {
		G = !0;
	}), v(() => {
		if (!G) return;
		let e = t();
		l !== void 0 && e != null && e.nodeType !== 8 ? Cu(e, l, a.virtualScrollHorizontal, c.lang.rtl) : F(d);
	}), __QUASAR_SSR__ || b(() => {
		W.cancel();
	}), Object.assign(s, {
		scrollTo: F,
		reset: N,
		refresh: P
	}), {
		virtualScrollSliceRange: D,
		virtualScrollSliceSizeComputed: C,
		setVirtualScrollSize: H,
		onVirtualScrollEvt: W,
		localResetVirtualScroll: V,
		padVirtualScroll: U,
		scrollTo: F,
		reset: N,
		refresh: P
	};
}
var ku = (e) => [
	"add",
	"add-unique",
	"toggle"
].includes(e), Au = ".*+?^${}()|[]\\", ju = Object.keys(ul);
function Mu(e, t) {
	if (typeof e == "function") return e;
	let n = e === void 0 ? t : e;
	return (e) => typeof e == "object" && e && n in e ? e[n] : e;
}
var Nu = /*#__PURE__*/ X({
	name: "QSelect",
	inheritAttrs: !1,
	props: {
		...Du,
		...xa,
		...ul,
		modelValue: { required: !0 },
		multiple: Boolean,
		displayValue: [String, Number],
		displayValueHtml: Boolean,
		dropdownIcon: String,
		options: {
			type: Array,
			default: () => []
		},
		optionValue: [Function, String],
		optionLabel: [Function, String],
		optionDisable: [Function, String],
		hideSelected: Boolean,
		hideDropdownIcon: Boolean,
		hideDialogClose: Boolean,
		fillInput: Boolean,
		maxValues: [Number, String],
		optionsDense: Boolean,
		optionsDark: {
			type: Boolean,
			default: null
		},
		optionsSelectedClass: String,
		optionsHtml: Boolean,
		optionsCover: Boolean,
		noOptionLabel: String,
		menuShrink: Boolean,
		menuAnchor: String,
		menuSelf: String,
		menuOffset: Array,
		popupContentClass: String,
		popupContentStyle: [
			String,
			Array,
			Object
		],
		popupNoRouteDismiss: Boolean,
		useInput: Boolean,
		useChips: Boolean,
		noChipRemove: Boolean,
		newValueMode: {
			type: String,
			validator: ku
		},
		mapOptions: Boolean,
		emitValue: Boolean,
		noOptionPrefetch: Boolean,
		disableTabSelection: Boolean,
		inputDebounce: {
			type: [Number, String],
			default: 500
		},
		inputClass: [
			Array,
			String,
			Object
		],
		inputStyle: [
			Array,
			String,
			Object
		],
		tabindex: {
			type: [String, Number],
			default: 0
		},
		autocomplete: String,
		transitionShow: {},
		transitionHide: {},
		transitionDuration: {},
		behavior: {
			type: String,
			validator: (e) => [
				"default",
				"menu",
				"dialog"
			].includes(e),
			default: "default"
		},
		...ni,
		virtualScrollItemSize: Du.virtualScrollItemSize.type,
		onNewValue: Function,
		onFilter: Function
	},
	emits: [
		...dl,
		"add",
		"remove",
		"inputValue",
		"keyup",
		"keypress",
		"keydown",
		"popupShow",
		"popupHide",
		"filterAbort"
	],
	setup(e, { slots: t, emit: n }) {
		let { proxy: i } = u(), a = At(), o = A(!1), s = A(!1), c = A(-1), l = A(""), d = A(!1), p = A(!1), m = null, h = null, g = !1, v = 0, y, S = !1, w, T, D = !1, O = null, k, j, N, P, F = M(null), L = M(null), R = M(null), z = M(null), B = M(null), V = wa(e), H = ru(Je), U = r(() => Array.isArray(e.options) ? e.options.length : 0), { virtualScrollSliceRange: ee, virtualScrollSliceSizeComputed: W, localResetVirtualScroll: G, padVirtualScroll: te, onVirtualScrollEvt: K, scrollTo: ne, setVirtualScrollSize: re } = Ou({
			virtualScrollLength: U,
			getVirtualScrollTarget: He,
			getVirtualScrollEl: Q,
			virtualScrollItemSizeComputed: r(() => e.virtualScrollItemSize === void 0 ? e.optionsDense ? 24 : 48 : e.virtualScrollItemSize)
		}), q = fl(), J = r(() => {
			let t = e.mapOptions && !e.multiple, n = e.modelValue !== void 0 && (e.modelValue !== null || t) ? e.multiple && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
			if (e.mapOptions && Array.isArray(e.options)) {
				let r = e.mapOptions && y !== void 0 ? y : [], i = n.map((e) => Fe(e, r));
				return e.modelValue === null && t ? i.filter((e) => e !== null) : i;
			}
			return n;
		}), ie = r(() => {
			let t = {};
			return ju.forEach((n) => {
				let r = e[n];
				r !== void 0 && (t[n] = r);
			}), t;
		}), ae = r(() => e.optionsDark === null ? q.isDark() : e.optionsDark), oe = r(() => cl(J.value)), se = r(() => {
			let t = "q-field__input q-placeholder col";
			return e.hideSelected || J.value.length === 0 ? [t, e.inputClass] : (t += " q-field__input--padding", e.inputClass === void 0 ? t : [t, e.inputClass]);
		}), ce = r(() => (e.virtualScrollHorizontal ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), le = r(() => U.value === 0);
		function ue() {
			return t["no-option"] !== void 0 || e.noOptionLabel !== void 0;
		}
		let de = r(() => J.value.map((e) => Y.value(e)).join(", ")), fe = r(() => e.displayValue === void 0 ? de.value : e.displayValue), pe = r(() => e.optionsHtml ? () => !0 : (e) => e?.html === !0), me = r(() => e.displayValueHtml || e.displayValue === void 0 && (e.optionsHtml || J.value.some(pe.value))), he = r(() => q.focused.value ? e.tabindex : -1), ge = r(() => {
			let t = {
				tabindex: e.disable === !0 ? void 0 : e.tabindex,
				role: "combobox",
				"aria-label": e.label,
				"aria-readonly": e.readonly ? "true" : "false",
				"aria-autocomplete": e.useInput ? "list" : "none",
				"aria-expanded": o.value ? "true" : "false"
			};
			return o.value && !le.value && (t["aria-controls"] = `${q.targetUid.value}_lb`), c.value >= 0 && (t["aria-activedescendant"] = `${q.targetUid.value}_${c.value}`), t;
		}), _e = r(() => ({
			id: `${q.targetUid.value}_lb`,
			role: "listbox",
			"aria-multiselectable": e.multiple ? "true" : "false"
		})), ve = r(() => J.value.map((e, t) => ({
			index: t,
			opt: e,
			html: pe.value(e),
			selected: !0,
			removeAtIndex: Oe,
			toggleOption: Ae,
			tabindex: he.value
		}))), ye = r(() => {
			if (U.value === 0) return [];
			let { from: t, to: n } = ee.value;
			return e.options.slice(t, n).map((n, r) => {
				let i = we.value(n) === !0, a = Ie(n), s = t + r, l = {
					clickable: !0,
					active: a,
					activeClass: Se.value,
					manualFocus: !0,
					focused: !1,
					disable: i,
					tabindex: -1,
					dense: e.optionsDense,
					dark: ae.value,
					role: "option",
					"aria-selected": a ? "true" : "false",
					"aria-setsize": U.value,
					"aria-posinset": s + 1,
					id: `${q.targetUid.value}_${s}`,
					onClick: () => {
						Ae(n);
					}
				};
				return i || (c.value === s && (l.focused = !0), l.onPointermove = (e) => {
					e.pointerType !== "touch" && o.value && Ne(s);
				}), {
					index: s,
					opt: n,
					html: pe.value(n),
					label: Y.value(n),
					selected: l.active,
					focused: l.focused,
					toggleOption: Ae,
					setOptionIndex: Ne,
					itemProps: l
				};
			});
		}), be = r(() => e.dropdownIcon === void 0 ? a.iconSet.arrow.dropdown : e.dropdownIcon), xe = r(() => !e.optionsCover && !e.outlined && !e.standout && !e.borderless && !e.rounded), Se = r(() => e.optionsSelectedClass === void 0 ? e.color === void 0 ? "" : `text-${e.color}` : e.optionsSelectedClass), Ce = r(() => Mu(e.optionValue, "value")), Y = r(() => Mu(e.optionLabel, "label")), we = r(() => Mu(e.optionDisable, "disable")), X = r(() => J.value.map(Ce.value)), Te = r(() => {
			let e = {
				onInput: Je,
				onChange: H,
				onKeydown: Ve,
				onKeyup: ze,
				onKeypress: Be,
				onFocus: Le,
				onClick(e) {
					w && je(e);
				}
			};
			return e.onCompositionstart = e.onCompositionupdate = e.onCompositionend = H, e;
		});
		I(J, (t) => {
			y = t, e.useInput && e.fillInput && !e.multiple && !q.innerLoading.value && (!s.value && !o.value || !oe.value) && (T || _t(), (s.value || o.value) && Ze("")), S && Qe() && (S = !1);
		}, { immediate: !0 }), I(() => e.fillInput, _t), I(o, vt), I(U, bt);
		function Ee(t) {
			return e.emitValue ? Ce.value(t) : t;
		}
		function De(t) {
			if (t !== -1 && t < J.value.length) {
				if (e.multiple) {
					let r = [...e.modelValue];
					n("remove", {
						index: t,
						value: r.splice(t, 1)[0]
					}), n("update:modelValue", r);
				} else n("update:modelValue", null);
			}
		}
		function Oe(e) {
			De(e), q.focus();
		}
		function ke(t, r) {
			let i = Ee(t);
			if (!e.multiple) {
				e.fillInput && Xe(Y.value(t), !0, !0), n("update:modelValue", i);
				return;
			}
			if (J.value.length === 0) {
				n("add", {
					index: 0,
					value: i
				}), n("update:modelValue", e.multiple ? [i] : i);
				return;
			}
			if (r && Ie(t) || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
			let a = [...e.modelValue];
			n("add", {
				index: a.length,
				value: i
			}), a.push(i), n("update:modelValue", a);
		}
		function Ae(t, r) {
			if (!q.editable.value || t === void 0 || we.value(t) === !0) return;
			let i = Ce.value(t);
			if (!e.multiple) {
				let a = !r && s.value;
				r || (Xe(e.fillInput ? Y.value(t) : "", !0, !0), gt()), a || L.value?.focus(), (J.value.length === 0 || !yt(Ce.value(J.value[0]), i)) && n("update:modelValue", e.emitValue ? i : t);
				return;
			}
			if ((!w || d.value) && q.focus(), Le(), J.value.length === 0) {
				let r = e.emitValue ? i : t;
				n("add", {
					index: 0,
					value: r
				}), n("update:modelValue", e.multiple ? [r] : r);
				return;
			}
			let a = [...e.modelValue], o = X.value.findIndex((e) => yt(e, i));
			if (o !== -1) n("remove", {
				index: o,
				value: a.splice(o, 1)[0]
			});
			else {
				if (e.maxValues !== void 0 && a.length >= e.maxValues) return;
				let r = e.emitValue ? i : t;
				n("add", {
					index: a.length,
					value: r
				}), a.push(r);
			}
			n("update:modelValue", a);
		}
		function Ne(e) {
			let t = e !== -1 && e < U.value ? e : -1;
			c.value !== t && (c.value = t, D = !1);
		}
		function Pe(t = 1, n) {
			if (o.value) {
				let r = c.value;
				do
					r = Pt(r + t, -1, U.value - 1);
				while (r !== -1 && r !== c.value && we.value(e.options[r]) === !0);
				c.value !== r && (Ne(r), ne(r), !n && e.useInput && e.fillInput && Ye(r >= 0 ? Y.value(e.options[r]) : k, !0));
			}
		}
		function Fe(t, n) {
			let r = (e) => yt(Ce.value(e), t);
			return e.options.find(r) || n.find(r) || t;
		}
		function Ie(e) {
			let t = Ce.value(e);
			return X.value.find((e) => yt(e, t)) !== void 0;
		}
		function Le(t) {
			e.useInput && L.value !== null && (t === void 0 || L.value === t.target && t.target.value === de.value) && L.value.select();
		}
		function Re(e) {
			Ke(e, 27) && o.value && (je(e), gt(e), _t()), n("keyup", e);
		}
		function ze(t) {
			let { value: n } = t.target;
			if (t.keyCode !== void 0) Re(t);
			else if (t.target.value = "", m !== null && (clearTimeout(m), m = null), h !== null && (clearTimeout(h), h = null), _t(), typeof n == "string" && n.length !== 0) {
				let t = n.toLocaleLowerCase(), r = (n) => {
					let r = e.options.find((e) => String(n.value(e)).toLocaleLowerCase() === t);
					return r !== void 0 && (J.value.includes(r) ? gt() : Ae(r), !0);
				}, i = (e) => {
					!r(Ce) && !e && !r(Y) && Ze(n, !0, () => i(!0));
				};
				i();
			} else q.clearValue(t);
		}
		function Be(e) {
			n("keypress", e);
		}
		function Ve(t) {
			if (n("keydown", t), t.defaultPrevented || Ge(t)) return;
			let r = l.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), i = !t.shiftKey && !e.disableTabSelection && !e.multiple && (c.value !== -1 || r);
			if (t.keyCode === 27) {
				Me(t);
				return;
			}
			if (t.keyCode === 9 && !i) {
				ct(t);
				return;
			}
			if (t.target === void 0 || t.target.id !== q.targetUid.value || !q.editable.value) return;
			if ((t.keyCode === 40 || t.keyCode === 38) && !q.innerLoading.value && !o.value) {
				Z(t), ht(t);
				return;
			}
			if (t.keyCode === 8 && (e.useChips && !e.noChipRemove || e.clearable) && !e.hideSelected && l.value.length === 0) {
				(e.clearable || we.value(J.value.at(-1)) !== !0) && (e.multiple && Array.isArray(e.modelValue) ? De(e.modelValue.length - 1) : !e.multiple && e.modelValue !== null && n("update:modelValue", null));
				return;
			}
			(t.keyCode === 35 || t.keyCode === 36) && (typeof l.value != "string" || l.value.length === 0) && (Z(t), c.value = -1, Pe(t.keyCode === 36 ? 1 : -1, e.multiple)), (t.keyCode === 33 || t.keyCode === 34) && W.value !== void 0 && (Z(t), c.value = Math.max(-1, Math.min(U.value, c.value + (t.keyCode === 33 ? -1 : 1) * W.value.view)), Pe(t.keyCode === 33 ? 1 : -1, e.multiple)), (t.keyCode === 38 || t.keyCode === 40) && (Z(t), Pe(t.keyCode === 38 ? -1 : 1, e.multiple));
			let a = U.value;
			if ((N === void 0 || P < Date.now()) && (N = ""), a > 0 && !e.useInput && t.key !== void 0 && t.key.length === 1 && !t.altKey && !t.ctrlKey && !t.metaKey && (t.keyCode !== 32 || N.length !== 0)) {
				o.value || ht(t);
				let n = t.key.toLocaleLowerCase(), r = N.length === 1 && N[0] === n;
				P = Date.now() + 1500, r || (Z(t), N += n);
				let i = RegExp("^" + [...N].map((e) => Au.includes(e) ? "\\" + e : e).join(".*"), "i"), s = c.value;
				if (r || s < 0 || !i.test(Y.value(e.options[s]))) do
					s = Pt(s + 1, -1, a - 1);
				while (s !== c.value && (we.value(e.options[s]) === !0 || !i.test(Y.value(e.options[s]))));
				c.value !== s && _(() => {
					Ne(s), ne(s), s >= 0 && e.useInput && e.fillInput && Ye(Y.value(e.options[s]), !0);
				});
			} else if (t.keyCode === 13 || t.keyCode === 32 && !e.useInput && N === "" || t.keyCode === 9 && i) {
				if (t.keyCode !== 9 && Z(t), c.value !== -1 && c.value < a && !(r && T && D)) Ae(e.options[c.value]);
				else {
					if (r) {
						let t = (t, n) => {
							if (n) {
								if (!ku(n)) return;
							} else n = e.newValueMode;
							Xe("", !e.multiple, !0), t != null && ((n === "toggle" ? Ae : ke)(t, n === "add-unique"), e.multiple || (L.value?.focus(), gt()));
						};
						if (e.onNewValue === void 0 ? t(l.value) : n("newValue", l.value, t), !e.multiple) return;
					}
					o.value ? ct(t) : q.innerLoading.value || ht(t);
				}
			}
		}
		function Q() {
			return w ? B.value : R.value !== null && R.value.contentEl !== null ? R.value.contentEl : void 0;
		}
		function He() {
			return Q();
		}
		function Ue() {
			return e.hideSelected ? [] : t["selected-item"] === void 0 ? t.selected === void 0 ? e.useChips ? ve.value.map((t, n) => f(ao, {
				key: "option-" + n,
				removable: !e.noChipRemove && q.editable.value && we.value(t.opt) !== !0,
				dense: !0,
				textColor: e.color,
				tabindex: he.value,
				onRemove() {
					t.removeAtIndex(n);
				}
			}, () => f("span", {
				class: "ellipsis",
				[t.html ? "innerHTML" : "textContent"]: Y.value(t.opt)
			}))) : [f("span", {
				class: "q-select__selected-value ellipsis",
				[me.value ? "innerHTML" : "textContent"]: fe.value
			})] : [t.selected()].flat() : ve.value.map((e) => t["selected-item"](e));
		}
		function We() {
			if (le.value) return t["no-option"] === void 0 ? e.noOptionLabel === void 0 ? void 0 : [f(Lc, () => f(Rc, { class: "text-grey" }, () => f(zc, () => e.noOptionLabel)))] : t["no-option"]({ inputValue: l.value });
			let n = t.option === void 0 ? (e) => f(Lc, {
				key: e.index,
				...e.itemProps
			}, () => f(Rc, () => f(zc, () => f("span", { [e.html ? "innerHTML" : "textContent"]: e.label })))) : t.option, r = te("div", ye.value.map(n), _e.value);
			return t["before-options"] !== void 0 && (r = [t["before-options"](), ...r].flat()), Ht(t["after-options"], r);
		}
		function qe(t, n) {
			let r = n ? {
				...ge.value,
				...q.splitAttrs.attributes.value
			} : void 0, i = {
				ref: n ? L : void 0,
				key: "i_t",
				class: se.value,
				style: e.inputStyle,
				value: l.value === void 0 ? "" : l.value,
				type: "search",
				...r,
				id: n ? q.targetUid.value : void 0,
				maxlength: e.maxlength,
				autocomplete: e.autocomplete,
				"data-autofocus": t === !0 || e.autofocus || void 0,
				disabled: e.disable,
				readonly: e.readonly,
				...Te.value
			};
			return n && Object.assign(i, q.getErrorAriaAttrs(i)), !t && w && (Array.isArray(i.class) ? i.class = [...i.class, "no-pointer-events"] : i.class += " no-pointer-events"), f("input", i);
		}
		function Je(t) {
			m !== null && (clearTimeout(m), m = null), h !== null && (clearTimeout(h), h = null), !t?.target?.qComposing && (Ye(t.target.value || ""), T = !0, k = l.value, !q.focused.value && (!w || d.value) && q.focus(), e.onFilter !== void 0 && (w && !s.value ? ht(t) : m = setTimeout(() => {
				m = null, Ze(l.value);
			}, e.inputDebounce)));
		}
		function Ye(t, r) {
			l.value !== t && (h !== null && (clearTimeout(h), h = null), l.value = t, r || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", t) : h = setTimeout(() => {
				h = null, n("inputValue", t);
			}, e.inputDebounce));
		}
		function Xe(t, n, r) {
			T = r !== !0, e.useInput && (Ye(t, !0), (n || T) && (k = t), n || Ze(t));
		}
		function Ze(t, r, a) {
			if (e.onFilter === void 0 || !r && !q.focused.value && !g) return;
			q.innerLoading.value ? n("filterAbort") : (q.innerLoading.value = !0, p.value = !0), t !== "" && !e.multiple && J.value.length !== 0 && !T && t === Y.value(J.value[0]) && (t = "");
			let s = setTimeout(() => {
				o.value &&= !1;
			}, 10);
			O !== null && clearTimeout(O), O = s, n("filter", t, (e, t) => {
				(r || q.focused.value || g) && O === s && (clearTimeout(O), typeof e == "function" && e(), p.value = !1, _(() => {
					q.innerLoading.value = !1, q.editable.value && (r ? o.value && gt() : o.value ? vt(!0) : o.value = !0), typeof t == "function" && _(() => {
						t(i);
					}), typeof a == "function" && _(() => {
						a(i);
					});
				}));
			}, () => {
				(r || q.focused.value || g) && O === s && (clearTimeout(O), q.innerLoading.value = !1, p.value = !1), o.value &&= !1;
			});
		}
		function Qe() {
			return U.value !== 0 || J.value.every((e) => typeof e == "object" && !!e) ? !1 : (Ze("", !0, _t), !0);
		}
		function $e() {
			return f(fa, {
				ref: R,
				class: ce.value,
				style: e.popupContentStyle,
				modelValue: o.value,
				fit: !e.menuShrink,
				cover: e.optionsCover && !le.value && !e.useInput,
				anchor: e.menuAnchor,
				self: e.menuSelf,
				offset: e.menuOffset,
				dark: ae.value,
				noParentEvent: !0,
				noRefocus: !0,
				noFocus: !0,
				noRouteDismiss: e.popupNoRouteDismiss,
				square: xe.value,
				transitionShow: e.transitionShow,
				transitionHide: e.transitionHide,
				transitionDuration: e.transitionDuration,
				separateClosePopup: !0,
				onScrollPassive: K,
				onBeforeShow: St,
				onBeforeHide: et,
				onShow: tt,
				...e.hover ? {
					onPointerenter: pt,
					onPointerleave: ft
				} : {}
			}, We);
		}
		function et(e) {
			Ct(e), ct();
		}
		function tt() {
			re();
		}
		function nt(e) {
			je(e), L.value?.focus(), d.value = !0, a.platform.is.ios && window.scrollTo(window.scrollX, 0);
		}
		function rt(e) {
			je(e), _(() => {
				d.value = !1;
			});
		}
		function it() {
			let n = [f(El, {
				class: `col-auto ${q.fieldClass.value}`,
				...ie.value,
				for: q.targetUid.value,
				dark: ae.value,
				square: !0,
				loading: p.value,
				itemAligned: !1,
				filled: !0,
				stackLabel: l.value.length !== 0,
				...q.splitAttrs.listeners.value,
				onFocus: nt,
				onBlur: rt
			}, {
				...t,
				rawControl: () => q.getControl(!0),
				before: void 0,
				after: void 0,
				append: e.hideDialogClose ? t.append : () => {
					let n = f("button", {
						class: "q-select__dialog-close" + (e.color === void 0 ? "" : ` text-${e.color}`),
						type: "button",
						tabindex: 0,
						onClick: gt
					}, a.lang.label.close);
					return t.append === void 0 ? [n] : [...t.append(), n];
				}
			})];
			return o.value && n.push(f("div", {
				ref: B,
				class: ce.value + " scroll",
				style: e.popupContentStyle,
				onClick: Me,
				onScrollPassive: K
			}, We())), f(Oc, {
				ref: z,
				modelValue: s.value,
				position: e.useInput ? "top" : void 0,
				noFocus: !0,
				transitionShow: j,
				transitionHide: e.transitionHide,
				transitionDuration: e.transitionDuration,
				noRouteDismiss: e.popupNoRouteDismiss,
				onBeforeShow: St,
				onBeforeHide: at,
				onHide: ot,
				onShow: st
			}, () => f("div", { class: "q-select__dialog" + (ae.value ? " q-select__dialog--dark q-dark" : "") + (d.value ? " q-select__dialog--focused" : "") }, n));
		}
		function at(t) {
			if (Ct(t), z.value !== null) {
				let n = !a.platform.is.mobile || !e.useInput || t !== void 0 && (t.type.indexOf("key") === 0 || t.type === "click" && t.detail === 0) ? q.rootRef.value.querySelector(".q-field__native > .q-select__focus-target, .q-field__native > .q-field__input") : null;
				z.value.__updateRefocusTarget(n);
			}
			q.focused.value = !1;
		}
		function ot(e) {
			gt(), q.focused.value || n("blur", e), _t();
		}
		function st() {
			let e = document.activeElement;
			(e === null || e.id !== q.targetUid.value) && L.value !== null && L.value !== e && L.value.focus(), re();
		}
		function ct(e) {
			s.value || (ut(), g = !1, c.value = -1, o.value && (e !== void 0 && (e.qSelectHandled = !0), o.value = !1, R.value?.hide(e)), q.focused.value || (O !== null && (clearTimeout(O), O = null), q.innerLoading.value && (n("filterAbort"), q.innerLoading.value = !1, p.value = !1)));
		}
		function lt(e) {
			if (e == null) return !1;
			let t = R.value === null ? null : R.value.contentEl;
			if (q.controlRef.value !== null && q.controlRef.value.contains(e) || t !== null && t.contains(e)) return !0;
			let n = Er(e);
			for (; n != null;) {
				if (n === i) return !0;
				n = mn(n);
			}
			return !1;
		}
		let { clearHoverTimer: ut, hoverShow: dt, hoverHide: ft, onHoverContentEnter: pt } = ri({
			props: e,
			canShow: () => !w && !g && !o.value && q.editable.value,
			show: mt,
			canHide: (e) => g && !lt(e.relatedTarget),
			hide: gt
		});
		function mt(t) {
			(e.onFilter !== void 0 || !le.value || ue()) && (g = !0, v = Date.now(), t.qSelectHandled = !0, e.onFilter === void 0 ? (o.value = !0, R.value?.show(t)) : Ze(l.value));
		}
		function ht(t) {
			q.editable.value && (ut(), g = !1, t !== void 0 && (t.qSelectHandled = !0), w ? (q.onControlFocusin(t), q.focus(), s.value = !0, z.value?.show(t), _(() => {
				q.focus();
			})) : q.focus(), e.onFilter === void 0 ? (!le.value || ue()) && (o.value = !0, R.value?.show(t)) : Ze(l.value));
		}
		function gt(e) {
			s.value && (e !== void 0 && (e.qSelectHandled = !0), s.value = !1, z.value?.hide(e)), ct(e);
		}
		function _t() {
			e.useInput && Xe(!e.multiple && e.fillInput && J.value.length !== 0 ? Y.value(J.value[0]) ?? "" : "", !0, !0);
		}
		function vt(t) {
			let n = -1;
			if (t) {
				if (J.value.length !== 0) {
					let t = Ce.value(J.value[0]);
					n = e.options.findIndex((e) => yt(Ce.value(e), t));
				}
				G(n);
			}
			Ne(n), D = n !== -1;
		}
		function bt(e, t) {
			o.value && !q.innerLoading.value && (G(-1, !0), _(() => {
				o.value && !q.innerLoading.value && (e > t ? G() : vt(!0));
			}));
		}
		function xt() {
			s.value || R.value?.updatePosition();
		}
		function St(e) {
			e !== void 0 && e.qSelectHandled !== !0 && je(e), n("popupShow", e), q.hasPopupOpen = !0, g || q.onControlFocusin(e);
		}
		function Ct(e) {
			e !== void 0 && e.qSelectHandled !== !0 && je(e), n("popupHide", e), q.hasPopupOpen = !1, q.onControlFocusout(e, _t);
		}
		function wt() {
			w = !a.platform.is.mobile && e.behavior !== "dialog" ? !1 : e.behavior !== "menu" && (!e.useInput || ue() || e.onFilter !== void 0 || !le.value), j = a.platform.is.ios && w && e.useInput ? "fade" : e.transitionShow;
		}
		return x(wt), E(xt), !e.noOptionPrefetch && e.mapOptions && e.onFilter !== void 0 && C(() => {
			S = !Qe();
		}), wt(), b(() => {
			m !== null && clearTimeout(m), h !== null && clearTimeout(h);
		}), Object.assign(i, {
			showPopup: ht,
			hidePopup: gt,
			removeAtIndex: De,
			add: ke,
			toggleOption: Ae,
			getOptionIndex: () => c.value,
			setOptionIndex: Ne,
			moveOptionSelection: Pe,
			filter: Ze,
			updateMenuPosition: xt,
			updateInputValue: Xe,
			isOptionSelected: Ie,
			getEmittingOptionValue: Ee,
			isOptionDisabled: (...e) => we.value(...e) === !0,
			getOptionValue: (...e) => Ce.value(...e),
			getOptionLabel: (...e) => Y.value(...e)
		}), Object.assign(q, {
			innerValue: J,
			fieldClass: r(() => `q-select q-field--auto-height q-select--with${e.useInput ? "" : "out"}-input q-select--with${e.useChips ? "" : "out"}-chips q-select--${e.multiple ? "multiple" : "single"}`),
			inputRef: F,
			targetRef: L,
			hasValue: oe,
			showPopup: ht,
			floatingLabel: r(() => !e.hideSelected && oe.value || typeof l.value == "number" || l.value.length !== 0 || cl(e.displayValue)),
			getControlChild: () => {
				if (q.editable.value && (s.value || !le.value || ue())) return w ? it() : $e();
				q.hasPopupOpen &&= !1;
			},
			controlEvents: {
				onFocusin(e) {
					ut(), g = !1, q.onControlFocusin(e);
				},
				onFocusout(e) {
					q.onControlFocusout(e, () => {
						_t(), ct(e);
					});
				},
				onClick(t) {
					if (Me(t), !w && o.value) {
						if (g && Date.now() - v < (e.transitionDuration === void 0 ? 300 : Number(e.transitionDuration))) {
							g = !1, q.focus();
							return;
						}
						ct(t), L.value?.focus();
					} else ht(t);
				},
				onPointerenter: dt,
				onPointerleave: ft
			},
			getControl: (t) => {
				let n = Ue(), r = t === !0 || !s.value || !w;
				if (e.useInput) n.push(qe(t, r));
				else {
					let i = r ? {
						...ge.value,
						...q.splitAttrs.attributes.value
					} : void 0, a = {
						ref: r ? L : void 0,
						key: "d_t",
						class: "q-select__focus-target",
						value: fe.value,
						readonly: !0,
						"data-autofocus": t === !0 || e.autofocus || void 0,
						...i,
						disabled: e.disable,
						id: r ? q.targetUid.value : void 0,
						onKeydown: Ve,
						onKeyup: Re,
						onKeypress: Be
					};
					r && Object.assign(a, q.getErrorAriaAttrs(a)), n.push(f("input", a)), r && q.editable.value && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && n.push(f("input", {
						class: "q-select__autocomplete-input",
						autocomplete: e.autocomplete,
						tabindex: -1,
						onKeyup: ze
					}));
				}
				if (!e.disable) {
					let t = V();
					if (t !== void 0) {
						let r = X.value.map((e) => f("option", {
							value: e,
							selected: !0
						}));
						n.push(f("select", {
							class: "hidden",
							name: t,
							multiple: e.multiple
						}, r));
					}
				}
				return f("div", {
					class: "q-field__native row items-center",
					...q.splitAttrs.listeners.value
				}, n);
			},
			shouldHideLoadingIndicator: () => e.hideDropdownIcon === !0,
			getInnerAppend: () => !e.loading && !p.value && !e.hideDropdownIcon ? [f(sn, {
				class: "q-select__dropdown-icon" + (o.value ? " rotate-180" : ""),
				name: be.value
			})] : null
		}), Tl(q);
	}
});
({ ...$ }), { ...$ }, { ...$ }, { ...La }, {
	...$,
	...Ra
}, { ...Du };
var Pu = {
	sortMethod: Function,
	binaryStateSort: Boolean,
	columnSortOrder: {
		type: String,
		validator: (e) => e === "ad" || e === "da",
		default: "ad"
	}
}, Fu = {
	filter: [String, Object],
	filterMethod: Function
}, Iu = {
	pagination: Object,
	rowsPerPageOptions: {
		type: Array,
		default: () => [
			5,
			7,
			10,
			15,
			20,
			25,
			50,
			0
		]
	},
	"onUpdate:pagination": [Function, Array]
}, Lu = {
	selection: {
		type: String,
		default: "none",
		validator: (e) => [
			"single",
			"multiple",
			"none"
		].includes(e)
	},
	selected: {
		type: Array,
		default: () => []
	}
}, Ru = ["update:selected", "selection"], zu = { expanded: Array }, Bu = ["update:expanded"], Vu = { visibleColumns: Array }, Hu = {};
Eu.forEach((e) => {
	Hu[e] = {};
}), { ...Hu }, {
	...$,
	...qa,
	...Vu,
	...Fu,
	...Iu,
	...zu,
	...Lu,
	...Pu
}, [
	...Ja,
	...Bu,
	...Ru
], {
	...Tn,
	...Bo
}, {
	...$,
	...xa,
	...gs
}, { ...gs.mask }, { ...$ };
var Uu = [
	"none",
	"strict",
	"leaf",
	"leaf-filtered"
], Wu = Symbol("QTree"), Gu = { display: "none" }, Ku = X({
	name: "QTreeNode",
	props: { node: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = m(Wu), n = t.useCollapsible(e);
		return () => t.renderNode(e.node, n);
	}
});
function qu(e) {
	let t = /* @__PURE__ */ new Map(), n = new Set(e());
	return I(e, (e) => {
		let r = new Set(e);
		n.forEach((e) => {
			if (!r.has(e)) {
				let n = t.get(e);
				n !== void 0 && (n.value = !1);
			}
		}), r.forEach((e) => {
			if (!n.has(e)) {
				let n = t.get(e);
				n !== void 0 && (n.value = !0);
			}
		}), n = r;
	}, { flush: "sync" }), {
		has(e) {
			let r = t.get(e);
			return r === void 0 && (r = A(n.has(e)), t.set(e, r)), r.value;
		},
		prune(e) {
			t.forEach((n, r) => {
				e.has(r) || t.delete(r);
			});
		}
	};
}
function Ju(e, t) {
	if (e.depth === 0) return [];
	let n = e.lines.map((e) => f("div", { class: "q-tree__vguide" + (e ? " q-tree__vguide--line" : "") }));
	return n.push(f("div", { class: "q-tree__vguide" + (t ? " q-tree__vguide--connector" : "") + (e.cont ? " q-tree__vguide--line" : "") })), n;
}
function Yu(e) {
	if (e.icon !== void 0) return f(sn, {
		class: "q-tree__icon q-mr-sm",
		name: e.icon,
		color: e.iconColor
	});
	let t = e.img || e.avatar;
	if (t) return f("img", {
		class: `q-tree__${e.img ? "img" : "avatar"} q-mr-sm`,
		src: t
	});
}
var Xu = /*#__PURE__*/ X({
	name: "QTree",
	props: {
		...$,
		nodes: {
			type: Array,
			required: !0
		},
		nodeKey: {
			type: String,
			required: !0
		},
		labelKey: {
			type: String,
			default: "label"
		},
		childrenKey: {
			type: String,
			default: "children"
		},
		dense: Boolean,
		color: String,
		controlColor: String,
		textColor: String,
		selectedColor: String,
		icon: String,
		tickStrategy: {
			type: String,
			default: "none",
			validator: (e) => Uu.includes(e)
		},
		ticked: Array,
		expanded: Array,
		selected: {},
		noSelectionUnset: Boolean,
		defaultExpandAll: Boolean,
		accordion: Boolean,
		filter: String,
		filterMethod: Function,
		duration: {
			type: Number,
			default: 300
		},
		noConnectors: Boolean,
		noTransition: Boolean,
		virtualScroll: Boolean,
		virtualScrollTarget: Ba,
		virtualScrollItemSize: Du.virtualScrollItemSize.type,
		virtualScrollSliceSize: Du.virtualScrollSliceSize,
		virtualScrollSliceRatioBefore: Du.virtualScrollSliceRatioBefore,
		virtualScrollSliceRatioAfter: Du.virtualScrollSliceRatioAfter,
		virtualScrollStickySizeStart: Du.virtualScrollStickySizeStart,
		virtualScrollStickySizeEnd: Du.virtualScrollStickySizeEnd,
		onVirtualScroll: Function,
		noNodesLabel: String,
		noResultsLabel: String
	},
	emits: [
		"update:expanded",
		"update:ticked",
		"update:selected",
		"lazyLoad",
		"afterShow",
		"afterHide"
	],
	setup(e, { slots: t, emit: n }) {
		let { proxy: i } = u(), a = At(), o = cn(e, a), s = A({}), c = A(e.ticked || []), l = A(e.expanded || []), d = r(() => new Set(l.value)), p = null, m = null, h = /* @__PURE__ */ new Set(), g = {}, y = {}, x = r(() => `q-tree q-tree--${e.dense ? "dense" : "standard"}` + (e.noConnectors ? " q-tree--no-connectors" : "") + (o() ? " q-tree--dark" : "") + (e.color === void 0 ? "" : ` text-${e.color}`)), w = A(e.selected !== void 0);
		I(() => e.selected !== void 0, (e) => {
			w.value = e;
		}, { flush: "sync" });
		let T = r(() => e.icon || a.iconSet.tree.icon), E = r(() => e.controlColor || e.color), D = r(() => e.textColor === void 0 ? "" : ` text-${e.textColor}`), k = r(() => {
			let t = e.selectedColor || e.color;
			return t ? ` text-${t}` : "";
		}), j = r(() => e.filterMethod === void 0 ? (t, n) => {
			let r = n.toLowerCase();
			return t[e.labelKey] && t[e.labelKey].toLowerCase().includes(r);
		} : e.filterMethod), N = r(() => {
			let t = /* @__PURE__ */ new Map(), n = [], r = (n, i, a) => {
				let o = n.tickStrategy || (a === null ? e.tickStrategy : a.tickStrategy), c = n[e.nodeKey], l = n[e.childrenKey], u = Array.isArray(l) && l.length !== 0, d = o === "strict", f = n.lazy;
				f === !0 && s.value[c] !== void 0 && Array.isArray(l) && (f = s.value[c]);
				let p = {
					key: c,
					node: n,
					parentKey: i,
					childKeys: [],
					isParent: u,
					lazy: f,
					disabled: n.disabled,
					expandable: !n.disabled && n.expandable !== !1,
					selectableBase: n.selectable !== !1,
					tickableBase: !n.disabled && n.tickable !== !1,
					noTickBase: n.noTick === !0 || !d && f && f !== "loaded",
					tickStrategy: o,
					hasTicking: o !== "none",
					strictTicking: d,
					leafFilteredTicking: o === "leaf-filtered",
					leafTicking: o === "leaf" || o === "leaf-filtered"
				};
				return t.set(c, p), u && l.forEach((e) => {
					p.childKeys.push(r(e, c, p).key);
				}), p;
			};
			return e.nodes.forEach((e) => {
				n.push(r(e, null, null).key);
			}), {
				map: t,
				rootKeys: n
			};
		}), P = r(() => {
			if (!e.filter) return null;
			let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = (i) => {
				let a = i[e.nodeKey], o = !!j.value(i, e.filter);
				return o && t.add(a), Array.isArray(i[e.childrenKey]) && i[e.childrenKey].forEach((e) => {
					r(e) && (o = !0);
				}), o && n.add(a), o;
			};
			return e.nodes.forEach(r), {
				own: t,
				visible: n
			};
		});
		function F(e) {
			let t = P.value;
			return t === null || t.visible.has(e);
		}
		let L = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), V = qu(() => c.value), H = qu(() => l.value), ee = qu(() => e.selected !== void 0 && e.selected !== null ? [e.selected] : []);
		function W(e) {
			let t = L.get(e);
			return t === void 0 && (t = r(() => {
				let t = N.value.map.get(e);
				return t === void 0 || !t.tickableBase ? !1 : !t.leafTicking || t.parentKey === null || W(t.parentKey).value;
			}), L.set(e, t)), t;
		}
		function G(e) {
			let t = R.get(e);
			if (t === void 0) {
				let n;
				t = r(() => {
					let t = N.value.map.get(e);
					if (t === void 0) {
						n = void 0;
						return;
					}
					let r = t.noTickBase, i = W(e).value, a = t.strictTicking || !t.isParent ? V.has(e) : !1, o, s;
					if (t.isParent) {
						let n = t.childKeys.map((e) => G(e).value), c = P.value, l = c === null || c.visible.has(e);
						if (c !== null && c.own.has(e) && r !== !0 && t.disabled !== !0 && i && t.leafFilteredTicking && t.childKeys.every((e, t) => !c.visible.has(e) || n[t].noTick === !0 || !n[t].tickable) && (i = !1), l && (r !== !0 && !t.strictTicking && n.every((e) => e.noTick) && (r = !0), t.leafTicking)) {
							if (a = !1, o = n.some((e) => e.indeterminate === !0), i &&= n.some((e) => e.tickable), !o) {
								let e = n.reduce((e, t) => t.ticked ? e + 1 : e, 0);
								e === n.length ? a = !0 : e > 0 && (o = !0);
							}
							o && (s = n.every((e) => !e.tickable || !e.ticked));
						}
					}
					return n !== void 0 && n.noTick === r && n.tickable === i && n.ticked === a && n.indeterminate === o && n.indeterminateNextState === s || (n = {
						noTick: r,
						tickable: i,
						ticked: a,
						indeterminate: o,
						indeterminateNextState: s
					}), n;
				}), R.set(e, t);
			}
			return t;
		}
		function te(e) {
			let t = z.get(e);
			if (t === void 0) {
				let n, i, a;
				t = r(() => {
					let t = N.value.map.get(e);
					if (t === void 0) {
						n = i = a = void 0;
						return;
					}
					let r = G(e).value, o = P.value, s = !t.disabled && w.value && t.selectableBase, c = !t.disabled && (s || t.expandable && (t.isParent || t.lazy === !0)), l = o === null || o.visible.has(e), u = ee.has(e) && s, d = t.isParent ? H.has(e) : !1, f = t.isParent && (o === null || t.childKeys.some((e) => o.visible.has(e)));
					return n !== void 0 && i === t && a === r && n.link === c && n.matchesFilter === l && n.selected === u && n.selectable === s && n.expanded === d && n.hasVisibleChildren === f || (i = t, a = r, n = {
						key: e,
						isParent: t.isParent,
						lazy: t.lazy,
						disabled: t.disabled,
						link: c,
						matchesFilter: l,
						selected: u,
						selectable: s,
						expanded: d,
						expandable: t.expandable,
						noTick: r.noTick,
						tickable: r.tickable,
						tickStrategy: t.tickStrategy,
						hasTicking: t.hasTicking,
						strictTicking: t.strictTicking,
						leafFilteredTicking: t.leafFilteredTicking,
						leafTicking: t.leafTicking,
						ticked: r.ticked,
						indeterminate: r.indeterminate,
						indeterminateNextState: r.indeterminateNextState,
						hasVisibleChildren: f
					}), n;
				}), z.set(e, t);
			}
			return t;
		}
		function K(e) {
			return te(e).value;
		}
		function ne(e) {
			let t = B.get(e);
			return t === void 0 && (t = r(() => F(e)), B.set(e, t)), t;
		}
		I(N, ({ map: e }) => {
			let t = (t) => {
				t.forEach((n, r) => {
					e.has(r) || t.delete(r);
				});
			};
			t(L), t(R), t(z), t(B), V.prune(e), H.prune(e), ee.prune(e), h.forEach((t) => {
				e.has(t) || h.delete(t);
			});
		}, { flush: "post" });
		let re = r(() => {
			let e = [], { map: t, rootKeys: n } = N.value, r = P.value, i = d.value, a = (n, o, s, c) => {
				let l = r === null ? n : n.filter((e) => r.visible.has(e)), u = l.length - 1;
				l.forEach((n, r) => {
					let l = t.get(n), d = r < u;
					e.push({
						key: n,
						node: l.node,
						depth: o,
						lines: s,
						cont: d,
						posinset: r + 1,
						setsize: u + 1,
						parentDisabled: c
					}), l.isParent && i.has(n) && a(l.childKeys, o + 1, o === 0 ? s : [...s, d], c || l.disabled === !0);
				});
			};
			return a(n, 0, [], !1), e;
		}), q = r(() => e.virtualScroll ? re.value.length : 0), J = r(() => e.virtualScrollItemSize === void 0 ? e.dense ? 23 : 35 : e.virtualScrollItemSize), ie = M(null), ae;
		function oe() {
			return ie.value;
		}
		function se() {
			return ae;
		}
		let { virtualScrollSliceRange: ce, localResetVirtualScroll: le, padVirtualScroll: ue, onVirtualScrollEvt: de, scrollTo: fe } = Ou({
			virtualScrollLength: q,
			getVirtualScrollTarget: se,
			getVirtualScrollEl: oe,
			virtualScrollItemSizeComputed: J
		});
		function pe() {
			e.virtualScroll && ie.value !== null && (ae = Ha(ie.value, e.virtualScrollTarget), ae.addEventListener("scroll", de, De.passive));
		}
		function me() {
			ae !== void 0 && (ae.removeEventListener("scroll", de, De.passive), ae = void 0);
		}
		I(q, () => {
			e.virtualScroll && le();
		}), I(() => e.virtualScroll, (e) => {
			me(), e && (le(), _(pe));
		}), I(() => e.virtualScrollTarget, () => {
			me(), pe();
		}), C(pe), v(pe), S(me), b(me);
		let he = r(() => {
			let e = [], { map: t, rootKeys: n } = N.value, r = P.value, i = (n) => {
				if (r !== null && !r.visible.has(n)) return;
				e.push(n);
				let a = t.get(n);
				a.isParent && d.value.has(n) && a.childKeys.forEach(i);
			};
			return n.forEach(i), e;
		});
		function ge() {
			let t = he.value;
			return p !== null && t.includes(p) ? p : e.selected !== void 0 && e.selected !== null && t.includes(e.selected) && K(e.selected)?.selected === !0 ? e.selected : t[0];
		}
		function _e(e) {
			e !== m && (m != null && y[m]?.setAttribute("tabindex", -1), y[e]?.setAttribute("tabindex", 0), m = e);
		}
		I(() => e.ticked, (e) => {
			c.value = e;
		}), I(() => e.expanded, (e) => {
			l.value = e;
		});
		function ve(t) {
			let n = (r, i) => {
				if (r || !i) return r;
				if (Array.isArray(i)) return i.reduce(n, r);
				if (i[e.nodeKey] === t) return i;
				if (i[e.childrenKey]) return n(null, i[e.childrenKey]);
			};
			return n(null, e.nodes);
		}
		function ye(e) {
			let { map: t } = N.value, n = t.get(e);
			return n !== void 0 && n.parentKey !== null ? t.get(n.parentKey).node : void 0;
		}
		function be(e) {
			let { map: t } = N.value;
			return e.map((e) => t.get(e)?.node);
		}
		function xe() {
			return be(c.value);
		}
		function Se() {
			let e = [];
			return N.value.map.forEach((t, n) => {
				t.isParent && t.leafTicking && G(n).value.indeterminate === !0 && e.push(t.node);
			}), e;
		}
		function Ce() {
			return be(l.value);
		}
		function Y(e) {
			return e ? K(e)?.expanded === !0 : !1;
		}
		function we() {
			e.expanded === void 0 ? l.value = [] : n("update:expanded", []);
		}
		function X() {
			let t = [], r = (n) => {
				n[e.childrenKey] && n[e.childrenKey].length !== 0 && n.expandable !== !1 && n.disabled !== !0 && (t.push(n[e.nodeKey]), n[e.childrenKey].forEach(r));
			};
			e.nodes.forEach(r), e.expanded === void 0 ? l.value = t : n("update:expanded", t);
		}
		function Te(t, r, i = ve(t), a = K(t)) {
			if (a.disabled !== !0) {
				if (a.lazy && a.lazy !== "loaded") {
					if (a.lazy === "loading") return;
					s.value[t] = "loading", Array.isArray(i[e.childrenKey]) || (i[e.childrenKey] = []), n("lazyLoad", {
						node: i,
						key: t,
						done: (n) => {
							s.value[t] = "loaded", i[e.childrenKey] = Array.isArray(n) ? n : [], _(() => {
								K(t)?.isParent === !0 && Ee(t, !0);
							});
						},
						fail: () => {
							delete s.value[t], i[e.childrenKey].length === 0 && delete i[e.childrenKey];
						}
					});
				} else a.isParent && a.expandable && Ee(t, r);
			}
		}
		function Ee(t, r) {
			let i = l.value, a = e.expanded !== void 0;
			if (a && (i = [...i]), r) {
				let n = e.accordion ? N.value.map.get(t) : void 0;
				if (n !== void 0) {
					let { map: e } = N.value, r = [];
					n.parentKey === null ? N.value.rootKeys.forEach((e) => {
						e !== t && r.push(e);
					}) : e.get(n.parentKey).childKeys.forEach((n) => {
						n !== t && e.get(n).expandable && r.push(n);
					}), r.length !== 0 && (i = i.filter((e) => !r.includes(e)));
				}
				i = [...i, t].filter((e, t, n) => n.indexOf(e) === t);
			} else i = i.filter((e) => e !== t);
			a ? n("update:expanded", i) : l.value = i;
		}
		function Oe(e) {
			return e ? K(e)?.ticked === !0 : !1;
		}
		function ke(e) {
			return e ? K(e)?.indeterminate === !0 : !1;
		}
		function Ae(e) {
			let t = e ? K(e) : void 0;
			return t === void 0 ? !1 : t.indeterminate === !0 ? null : t.ticked;
		}
		function je(t, r) {
			let i = c.value, a = e.ticked !== void 0;
			a && (i = [...i]), i = r ? [...i, ...t].filter((e, t, n) => n.indexOf(e) === t) : i.filter((e) => !t.includes(e)), a ? n("update:ticked", i) : c.value = i;
		}
		function Me(t, n, r) {
			let a = {
				tree: i,
				node: t,
				key: r,
				color: e.color,
				dark: o()
			};
			return U(a, "expanded", () => n.expanded, (e) => {
				e !== n.expanded && Te(r, e);
			}), U(a, "ticked", () => n.ticked, (e) => {
				e !== n.ticked && je([r], e);
			}), U(a, "indeterminate", () => n.indeterminate === !0), a;
		}
		function Ne(t) {
			return (e.filter ? t.filter((t) => ne(t[e.nodeKey]).value) : t).map((t) => f(Ku, {
				key: t[e.nodeKey],
				node: t
			}));
		}
		function Pe(e) {
			n(e === "show" ? "afterShow" : "afterHide");
		}
		function Fe(t) {
			let n = M(null), i = r(() => te(t.node[e.nodeKey]).value?.expanded === !0), a = A(!i.value), { onEnter: o, onLeave: s } = Jc(() => e.duration, Pe);
			function c() {
				a.value = !0;
			}
			function l() {
				n.value !== null && o(n.value);
			}
			return I(i, (t) => {
				e.noTransition ? a.value = !t : t ? a.value ? (a.value = !1, _(l)) : l() : n.value === null ? c() : s(n.value, c);
			}), {
				elRef: n,
				hidden: a
			};
		}
		function Ie(t, n, r, i, a, s, c) {
			return f("div", {
				class: "q-tree__node-header relative-position row no-wrap items-center q-focusable" + (n.link ? " q-tree__node--link q-hoverable" : "") + (n.selected ? " q-tree__node--selected" : "") + (n.disabled === !0 ? " q-tree__node--disabled" : ""),
				ref: (e) => {
					e === null ? delete y[r] : y[r] = e;
				},
				tabindex: r === m ? 0 : -1,
				"aria-expanded": i ? n.expanded ? "true" : "false" : null,
				"aria-selected": n.selectable ? n.selected ? "true" : "false" : null,
				"aria-checked": n.hasTicking && n.noTick !== !0 ? n.indeterminate === !0 ? "mixed" : n.ticked ? "true" : "false" : null,
				"aria-disabled": n.disabled === !0 ? "true" : null,
				role: "treeitem",
				...c,
				onFocus() {
					p = r, _e(r);
				},
				onClick: (e) => {
					We(t, r, e);
				},
				onKeydown(e) {
					e.target === e.currentTarget && Ge(e) !== !0 && (e.keyCode === 13 ? We(t, r, e, !0) : e.keyCode === 32 ? n.hasTicking && n.noTick !== !0 && n.tickable ? (Z(e), qe(r, !n.ticked)) : Ke(t, r, e, !0) : Ue(r, e.keyCode) && Z(e));
				}
			}, [
				f("div", {
					class: "q-focus-helper",
					tabindex: -1,
					ref: (e) => {
						e === null ? delete g[r] : g[r] = e;
					}
				}),
				n.lazy === "loading" ? f(Pn, {
					class: "q-tree__spinner",
					color: E.value
				}) : i ? f(sn, {
					class: "q-tree__arrow" + (n.expanded ? " q-tree__arrow--rotate" : ""),
					name: T.value,
					onClick(e) {
						Ke(t, r, e);
					}
				}) : null,
				n.hasTicking && n.noTick !== !0 ? f(no, {
					class: "q-tree__tickbox",
					modelValue: n.indeterminate === !0 ? null : n.ticked,
					color: E.value,
					dark: o(),
					dense: !0,
					keepColor: !0,
					disable: !n.tickable,
					tabindex: -1,
					"aria-hidden": "true",
					onMousedown(e) {
						e.preventDefault(), p = r, _e(r), Ve(r);
					},
					"onUpdate:modelValue": (e) => {
						qe(r, e);
					}
				}) : null,
				f("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (n.selected ? k.value : D.value) }, [s ? s(a) : [Yu(t), f("div", t[e.labelKey])]])
			]);
		}
		function Le(n, r) {
			let i = n[e.nodeKey], a = te(i).value, o = n.header && t[`header-${n.header}`] || t["default-header"];
			if (a === void 0) return null;
			a.expanded && h.add(i);
			let s = a.expanded || e.noTransition !== !0 && h.has(i), c = a.isParent && s ? Ne(n[e.childrenKey]) : [], l = a.hasVisibleChildren || a.lazy && a.lazy !== "loaded", u = n.body && t[`body-${n.body}`] || t["default-body"], d = o !== void 0 || u !== void 0 ? Me(n, a, i) : null;
			return u !== void 0 && (u = f("div", { class: "q-tree__node-body relative-position" }, [f("div", { class: D.value }, [u(d)])])), f("div", {
				key: i,
				class: `q-tree__node relative-position q-tree__node--${l ? "parent" : "child"}`
			}, [Ie(n, a, i, l, d, o), l ? e.noTransition ? a.expanded ? f("div", {
				class: "q-tree__node-collapsible" + D.value,
				key: `${i}__q`
			}, [u, f("div", {
				class: "q-tree__children" + (a.disabled === !0 ? " q-tree__node--disabled" : ""),
				role: "group"
			}, c)]) : null : s ? f("div", {
				ref: r.elRef,
				class: "q-tree__node-collapsible" + D.value,
				style: r.hidden.value ? Gu : null,
				key: `${i}__q`
			}, [u, f("div", {
				class: "q-tree__children" + (a.disabled === !0 ? " q-tree__node--disabled" : ""),
				role: "group"
			}, c)]) : null : u]);
		}
		function Re(e) {
			let { key: n, node: r, depth: i } = e, a = te(n).value;
			if (a === void 0) return null;
			let o = a.hasVisibleChildren || a.lazy && a.lazy !== "loaded", s = r.header && t[`header-${r.header}`] || t["default-header"], c = r.body && t[`body-${r.body}`] || t["default-body"], l = s !== void 0 || c !== void 0 ? Me(r, a, n) : null;
			return c = c !== void 0 && (!a.isParent || a.expanded) ? f("div", { class: "q-tree__vnode-body row no-wrap items-stretch" }, [...Ju(e, !1), f("div", { class: "q-tree__node-body relative-position" }, [f("div", { class: D.value }, [c(l)])])]) : null, f("div", {
				key: n,
				class: `q-tree__vnode q-tree__vnode--${o ? "parent" : "child"}` + (i === 0 ? " q-tree__vnode--root" : "") + (a.disabled === !0 || e.parentDisabled ? " q-tree__node--disabled" : "")
			}, [f("div", { class: "q-tree__vnode-header row no-wrap items-stretch" }, [...Ju(e, !0), Ie(r, a, n, o, l, s, {
				"aria-level": i + 1,
				"aria-setsize": e.setsize,
				"aria-posinset": e.posinset
			})]), c]);
		}
		function ze() {
			let t = re.value, n;
			if (t.length === 0) n = e.filter ? e.noResultsLabel || a.lang.tree.noResults : e.noNodesLabel || a.lang.tree.noNodes;
			else {
				let { from: e, to: r } = ce.value, i = t.slice(e, r), a = ge();
				i.length !== 0 && (a === void 0 || !i.some((e) => e.key === a)) && (a = i[0].key), _e(a), n = ue("div", i.map(Re), { role: "tree" });
			}
			return f("div", {
				class: x.value + " q-tree--virtual q-virtual-scroll q-virtual-scroll--vertical" + (e.virtualScrollTarget === void 0 ? " scroll" : ""),
				ref: ie
			}, n);
		}
		function Be(t, n) {
			if (e.virtualScroll) {
				let e = re.value.findIndex((e) => e.key === t);
				e !== -1 && fe(e, n);
			}
		}
		function Ve(e) {
			g[e]?.focus({ preventScroll: !0 });
		}
		function Q(t) {
			if (t !== void 0) {
				p = t, _e(t);
				let n = y[t];
				if (n !== void 0) n.focus();
				else if (e.virtualScroll) {
					let e = re.value.findIndex((e) => e.key === t);
					e !== -1 && (fe(e), _(() => {
						requestAnimationFrame(() => {
							requestAnimationFrame(() => {
								y[t]?.focus();
							});
						});
					}));
				}
			}
		}
		function He(e) {
			return e.find(F);
		}
		function Ue(e, t) {
			let n = K(e);
			if (n === void 0) return !1;
			let r = he.value, i = r.indexOf(e);
			if (t === 36) return Q(r[0]), !0;
			if (t === 35) return Q(r.at(-1)), !0;
			if (t === 38) return Q(r[i - 1]), !0;
			if (t === 40) return Q(r[i + 1]), !0;
			if (t === 39) return !n.isParent && !n.lazy || (n.expanded ? Q(He(N.value.map.get(e).childKeys)) : Te(e, !0)), !0;
			if (t === 37) {
				if (n.expanded) Te(e, !1);
				else {
					let t = N.value.map.get(e).parentKey;
					Q(t === null ? void 0 : t);
				}
				return !0;
			}
			return !1;
		}
		function We(t, r, i, a) {
			let o = K(r);
			o !== void 0 && o.disabled !== !0 && (p = r, _e(r), a !== !0 && o.selectable && Ve(r), w.value && o.selectable ? e.noSelectionUnset ? r !== e.selected && n("update:selected", r === void 0 ? null : r) : n("update:selected", r === e.selected ? null : r) : Ke(t, r, i, a), typeof t.handler == "function" && t.handler(t));
		}
		function Ke(e, t, n, r) {
			n !== void 0 && Z(n);
			let i = K(t);
			i !== void 0 && i.disabled !== !0 && (p = t, _e(t), r !== !0 && i.selectable && Ve(t), Te(t, !i.expanded, e, i));
		}
		function qe(e, t) {
			let n = K(e);
			if (n !== void 0) {
				if (n.indeterminate === !0 && (t = n.indeterminateNextState), n.strictTicking) je([e], t);
				else if (n.leafTicking) {
					let n = [], { map: r } = N.value, i = (e) => {
						let a = K(e);
						a.isParent ? (t !== !0 && a.noTick !== !0 && a.tickable && n.push(e), a.leafTicking && r.get(e).childKeys.forEach(i)) : a.noTick !== !0 && a.tickable && (!a.leafFilteredTicking || a.matchesFilter) && n.push(e);
					};
					i(e), je(n, t);
				}
			}
		}
		return e.defaultExpandAll && X(), e.virtualScroll && le(), O(Wu, {
			renderNode: Le,
			useCollapsible: Fe
		}), Object.assign(i, {
			getNodeByKey: ve,
			getParentNode: ye,
			getTickedNodes: xe,
			getIndeterminateNodes: Se,
			getExpandedNodes: Ce,
			isExpanded: Y,
			collapseAll: we,
			expandAll: X,
			setExpanded: Te,
			isTicked: Oe,
			isIndeterminate: ke,
			getTickState: Ae,
			setTicked: je,
			scrollTo: Be
		}), () => {
			if (e.virtualScroll) return ze();
			_e(ge());
			let t = Ne(e.nodes);
			return f("div", {
				class: x.value,
				role: "tree"
			}, t.length === 0 ? e.filter ? e.noResultsLabel || a.lang.tree.noResults : e.noNodesLabel || a.lang.tree.noNodes : t);
		};
	}
});
function Zu(e) {
	return (e * 100).toFixed(2) + "%";
}
var Qu = {
	...$,
	...Ml,
	label: String,
	color: String,
	textColor: String,
	square: Boolean,
	flat: Boolean,
	bordered: Boolean,
	noThumbnails: Boolean,
	thumbnailFit: {
		type: String,
		default: "cover"
	},
	autoUpload: Boolean,
	hideUploadBtn: Boolean,
	disable: Boolean,
	readonly: Boolean
}, $u = [
	...Nl,
	"start",
	"finish",
	"added",
	"removed"
];
function ed(e, t) {
	let n = u(), { props: i, slots: a, emit: o, proxy: s } = n, c = At(), l = cn(i, c);
	function d(e, t, n) {
		e.__status = t, t === "idle" ? (e.__uploaded = 0, e.__progress = 0, e.__sizeLabel = Mt(e.size), e.__progressLabel = "0.00%") : (t === "failed" || (e.__uploaded = t === "uploaded" ? e.size : n, e.__progress = t === "uploaded" ? 1 : e.size === 0 ? 0 : Math.min(.9999, e.__uploaded / e.size), e.__progressLabel = Zu(e.__progress)), s.$forceUpdate());
	}
	let p = r(() => !i.disable && !i.readonly), m = M(null), g = M(null), _ = {
		files: A([]),
		queuedFiles: A([]),
		uploadedFiles: A([]),
		uploadedSize: A(0),
		updateFileStatus: d,
		isAlive: () => !gn(n)
	}, v = r(() => Number.parseInt(i.maxFiles, 10)), y = r(() => Number.parseInt(i.maxTotalSize, 10)), x = A(0), S = r(() => p.value && !_.isUploading.value && (i.multiple || _.queuedFiles.value.length === 0) && (i.maxFiles === void 0 || _.files.value.length < v.value) && (i.maxTotalSize === void 0 || x.value < y.value)), { pickFiles: C, addFiles: w, dnd: T, processFiles: E, getDndNode: D } = Pl({
		editable: p,
		dropTarget: m,
		canDrop: S,
		getFileInput: G,
		addFilesToQueue: te
	});
	Object.assign(_, e({
		props: i,
		slots: a,
		emit: o,
		helpers: _,
		exposeApi: (e) => {
			Object.assign(_, e);
		}
	})), _.isBusy === void 0 && (_.isBusy = A(!1));
	let k = r(() => x.value === 0 ? 0 : _.uploadedSize.value / x.value), j = r(() => Zu(k.value)), N = r(() => Mt(x.value)), P = r(() => p.value && !_.isBusy.value && !_.isUploading.value && _.queuedFiles.value.length !== 0);
	O(ht, q);
	let F = r(() => "q-uploader column no-wrap" + (l() ? " q-uploader--dark q-dark" : "") + (i.bordered ? " q-uploader--bordered" : "") + (i.square ? " q-uploader--square no-border-radius" : "") + (i.flat ? " q-uploader--flat no-shadow" : "") + (i.disable ? " disabled q-uploader--disable" : "") + (T.value ? " q-uploader--dnd" : "")), L = r(() => "q-uploader__header" + (i.color === void 0 ? "" : ` bg-${i.color}`) + (i.textColor === void 0 ? "" : ` text-${i.textColor}`));
	I(_.isUploading, (e, t) => {
		!t && e ? o("start") : t && !e && o("finish");
	});
	function R() {
		i.disable || (_.abort(), _.uploadedSize.value = 0, x.value = 0, W(), _.files.value = [], _.queuedFiles.value = [], _.uploadedFiles.value = []);
	}
	function z() {
		i.disable || V(["uploaded"], ({ size: e }) => {
			_.uploadedSize.value -= e, x.value -= e, _.uploadedFiles.value = [];
		});
	}
	function B() {
		V(["idle", "failed"], ({ size: e }) => {
			x.value -= e, _.queuedFiles.value = [];
		});
	}
	function V(e, t) {
		if (i.disable) return;
		let n = {
			files: [],
			size: 0
		}, r = _.files.value.filter((t) => !e.includes(t.__status) || (n.size += t.size, n.files.push(t), t.__img !== void 0 && window.URL.revokeObjectURL(t.__img.src), !1));
		n.files.length !== 0 && (_.files.value = r, t(n), o("removed", n.files));
	}
	function H(e) {
		if (i.disable) return;
		let t = e.__status === "uploading";
		e.__status === "uploaded" ? (_.uploadedSize.value -= e.size, x.value -= e.size, _.uploadedFiles.value = _.uploadedFiles.value.filter((t) => t.__key !== e.__key)) : x.value -= e.size, _.files.value = _.files.value.filter((t) => t.__key !== e.__key || (t.__img !== void 0 && window.URL.revokeObjectURL(t.__img.src), !1)), _.queuedFiles.value = _.queuedFiles.value.filter((t) => t.__key !== e.__key), t && e.__abort(), o("removed", [e]);
	}
	function W() {
		_.files.value.forEach((e) => {
			e.__img !== void 0 && window.URL.revokeObjectURL(e.__img.src);
		});
	}
	function G() {
		return g.value || m.value.getElementsByClassName("q-uploader__input")[0];
	}
	function te(e, t) {
		let n = E(e, t, _.files.value, !0), r = G();
		r != null && (r.value = ""), n !== void 0 && (n.forEach((e) => {
			if (_.updateFileStatus(e, "idle"), x.value += e.size, !i.noThumbnails && e.type.toUpperCase().startsWith("IMAGE")) {
				let t = new Image();
				t.src = window.URL.createObjectURL(e), e.__img = t;
			}
		}), _.files.value.push(...n), _.queuedFiles.value.push(...n), o("added", n), i.autoUpload && _.upload());
	}
	function K() {
		P.value && _.upload();
	}
	let ne = {
		add: "addFiles",
		upload: "upload",
		clear: "abort",
		removeQueue: "removeQueued",
		removeUploaded: "removeUploaded"
	};
	function re(e, t, n) {
		if (e) {
			let e = {
				type: "a",
				key: t,
				icon: c.iconSet.uploader[t],
				flat: !0,
				dense: !0,
				"aria-label": c.lang.uploader?.[ne[t]]
			}, r;
			return t === "add" ? (e.onClick = C, r = q) : e.onClick = n, f(fr, e, r);
		}
	}
	function q() {
		return f("input", {
			ref: g,
			class: "q-uploader__input overflow-hidden absolute-full",
			tabindex: -1,
			type: "file",
			"aria-label": c.lang.uploader?.addFiles,
			title: "",
			accept: i.accept,
			multiple: i.multiple ? "multiple" : void 0,
			capture: i.capture,
			onMousedown: je,
			onClick: C,
			onChange: te
		});
	}
	function J() {
		return a.header === void 0 ? [f("div", { class: "q-uploader__header-content column" }, [f("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [
			re(_.queuedFiles.value.length !== 0, "removeQueue", B),
			re(_.uploadedFiles.value.length !== 0, "removeUploaded", z),
			_.isUploading.value ? f(Pn, { class: "q-uploader__spinner" }) : null,
			f("div", { class: "col column justify-center" }, [i.label === void 0 ? null : f("div", { class: "q-uploader__title" }, [i.label]), f("div", { class: "q-uploader__subtitle" }, [N.value + " / " + j.value])]),
			re(S.value, "add"),
			re(!i.hideUploadBtn && P.value, "upload", _.upload),
			re(_.isUploading.value, "clear", _.abort)
		])])] : a.header(ae);
	}
	function ie() {
		return a.list === void 0 ? _.files.value.map((e) => f("div", {
			key: e.__key,
			class: "q-uploader__file relative-position" + (!i.noThumbnails && e.__img !== void 0 ? " q-uploader__file--img" : "") + (e.__status === "failed" ? " q-uploader__file--failed" : e.__status === "uploaded" ? " q-uploader__file--uploaded" : ""),
			style: !i.noThumbnails && e.__img !== void 0 ? {
				backgroundImage: "url(\"" + e.__img.src + "\")",
				backgroundSize: i.thumbnailFit
			} : null
		}, [f("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [
			e.__status === "failed" ? f(sn, {
				class: "q-uploader__file-status",
				name: c.iconSet.type.negative,
				color: "negative"
			}) : null,
			f("div", { class: "q-uploader__file-header-content col" }, [f("div", { class: "q-uploader__title" }, [e.name]), f("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [e.__sizeLabel + " / " + e.__progressLabel])]),
			e.__status === "uploading" ? f(fo, {
				value: e.__progress,
				min: 0,
				max: 1,
				indeterminate: e.__progress === 0
			}) : f(fr, {
				round: !0,
				dense: !0,
				flat: !0,
				icon: c.iconSet.uploader[e.__status === "uploaded" ? "done" : "clear"],
				"aria-label": c.lang.uploader?.removeFile,
				onClick: () => {
					H(e);
				}
			})
		])])) : a.list(ae);
	}
	b(() => {
		_.isUploading.value && _.abort(), _.files.value.length !== 0 && W();
	});
	let ae = {};
	for (let e in _) h(_[e]) ? U(ae, e, () => _[e].value) : ae[e] = _[e];
	return Object.assign(ae, {
		upload: K,
		reset: R,
		removeUploadedFiles: z,
		removeQueuedFiles: B,
		removeFile: H,
		pickFiles: C,
		addFiles: w
	}), ee(ae, {
		canAddFiles: () => S.value,
		canUpload: () => P.value,
		uploadSizeLabel: () => N.value,
		uploadProgressLabel: () => j.value
	}), t({
		..._,
		upload: K,
		reset: R,
		removeUploadedFiles: z,
		removeQueuedFiles: B,
		removeFile: H,
		pickFiles: C,
		addFiles: w,
		canAddFiles: S,
		canUpload: P,
		uploadSizeLabel: N,
		uploadProgressLabel: j
	}), () => {
		let e = [
			f("div", { class: L.value }, J()),
			f("div", { class: "q-uploader__list scroll" }, ie()),
			D("uploader")
		];
		return _.isBusy.value && e.push(f("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [f(Pn)])), f("div", {
			ref: m,
			class: F.value
		}, e);
	};
}
var td = () => !0;
function nd(e) {
	let t = {};
	return e.forEach((e) => {
		t[e] = td;
	}), t;
}
var rd = /*#__PURE__*/ nd($u);
function id({ name: e, props: t, emits: n, injectPlugin: r }) {
	return X({
		name: e,
		props: {
			...Qu,
			...t
		},
		emits: bt(n) ? {
			...rd,
			...n
		} : [...$u, ...n],
		setup(e, { expose: t }) {
			return ed(r, t);
		}
	});
}
function ad(e) {
	return typeof e == "function" ? e : () => e;
}
var od = "QUploader", sd = {
	url: [Function, String],
	method: {
		type: [Function, String],
		default: "POST"
	},
	fieldName: {
		type: [Function, String],
		default: () => (e) => e.name
	},
	headers: [Function, Array],
	formFields: [Function, Array],
	withCredentials: [Function, Boolean],
	sendRaw: [Function, Boolean],
	batch: [Function, Boolean],
	factory: Function
}, cd = [
	"factoryFailed",
	"uploaded",
	"failed",
	"uploading"
];
function ld({ props: e, emit: t, helpers: n }) {
	let i = A([]), a = A([]), o = A(0), s = /* @__PURE__ */ new WeakSet(), c = r(() => ({
		url: ad(e.url),
		method: ad(e.method),
		headers: ad(e.headers),
		formFields: ad(e.formFields),
		fieldName: ad(e.fieldName),
		withCredentials: ad(e.withCredentials),
		sendRaw: ad(e.sendRaw),
		batch: ad(e.batch)
	})), l = r(() => o.value > 0), u = r(() => a.value.length !== 0), d = (e) => e.filter((e) => n.files.value.includes(e));
	function f() {
		i.value.forEach((e) => {
			e.abort();
		}), a.value.forEach((e) => {
			s.add(e);
		});
	}
	function p() {
		let e = [...n.queuedFiles.value];
		n.queuedFiles.value = [], c.value.batch(e) ? m(e) : e.forEach((e) => {
			m([e]);
		});
	}
	function m(r) {
		o.value++;
		let i = (e, i) => {
			if (i !== void 0 && (a.value = a.value.filter((e) => e !== i)), n.isAlive()) {
				let i = d(r);
				i.length !== 0 && (n.queuedFiles.value.push(...i), i.forEach((e) => {
					n.updateFileStatus(e, "failed");
				}), t("factoryFailed", e, i));
			}
			o.value--;
		};
		if (typeof e.factory != "function") {
			l({});
			return;
		}
		let c;
		try {
			c = e.factory(r);
		} catch (e) {
			i(e);
			return;
		}
		Object(c) === c ? typeof c.catch == "function" && typeof c.then == "function" ? (a.value.push(c), c.then((e) => {
			s.has(c) ? i(/* @__PURE__ */ Error("Aborted"), c) : Object(e) === e ? (a.value = a.value.filter((e) => e !== c), n.isAlive() ? l(e) : o.value--) : i(/* @__PURE__ */ Error("QUploader: factory() does not return properly"), c);
		}).catch((e) => {
			i(e, c);
		})) : l(c) : i(/* @__PURE__ */ Error("QUploader: factory() does not return properly"));
		function l(e) {
			let t = d(r);
			if (t.length === 0) o.value--;
			else try {
				h(t, e);
			} catch (e) {
				i(e);
			}
		}
	}
	function h(e, r) {
		let a = new FormData(), s = new XMLHttpRequest(), l = (e, t) => r[e] === void 0 ? c.value[e](t) : ad(r[e])(t), u = l("url", e);
		if (!u) {
			console.error("q-uploader: invalid or no URL specified"), n.queuedFiles.value.push(...e), e.forEach((e) => {
				n.updateFileStatus(e, "failed");
			}), t("failed", {
				files: e,
				xhr: s
			}), o.value--;
			return;
		}
		let f = l("formFields", e);
		f !== void 0 && f.forEach((e) => {
			a.append(e.name, e.value);
		});
		let p = 0, m = 0, h = 0, g = 0, _;
		s.upload.addEventListener("progress", (t) => {
			if (_) return;
			let r = Math.min(g, t.loaded);
			n.uploadedSize.value += r - h, h = r;
			let i = h - m;
			for (let t = p; i > 0 && t < e.length; t++) {
				let r = e[t];
				if (i >= r.size) i -= r.size, p++, m += r.size, n.updateFileStatus(r, "uploading", r.size);
				else {
					n.updateFileStatus(r, "uploading", i);
					return;
				}
			}
		}, !1), s.addEventListener("readystatechange", () => {
			if (!(s.readyState < 4)) {
				if (s.status && s.status < 400) {
					let r = d(e), i = r.reduce((e, t) => e + t.size, 0);
					n.uploadedSize.value += i - h, r.length !== 0 && (n.uploadedFiles.value.push(...r), r.forEach((e) => {
						n.updateFileStatus(e, "uploaded");
					}), t("uploaded", {
						files: r,
						xhr: s
					}));
				} else {
					_ = !0, n.uploadedSize.value -= h;
					let r = d(e);
					r.length !== 0 && (n.queuedFiles.value.push(...r), r.forEach((e) => {
						n.updateFileStatus(e, "failed");
					}), t("failed", {
						files: r,
						xhr: s
					}));
				}
				o.value--, i.value = i.value.filter((e) => e !== s);
			}
		}), s.open(l("method", e), u), l("withCredentials", e) === !0 && (s.withCredentials = !0);
		let v = l("headers", e);
		v !== void 0 && v.forEach((e) => {
			s.setRequestHeader(e.name, e.value);
		});
		let y = l("sendRaw", e);
		e.forEach((e) => {
			n.updateFileStatus(e, "uploading", 0), y !== !0 && a.append(l("fieldName", e), e, e.name), e.xhr = s, e.__abort = () => {
				s.abort();
			}, g += e.size;
		}), t("uploading", {
			files: e,
			xhr: s
		}), i.value.push(s), y === !0 ? s.send(new Blob(e)) : s.send(a);
	}
	return {
		isUploading: l,
		isBusy: u,
		abort: f,
		upload: p
	};
}
var ud = /*#__PURE__*/ id({
	name: od,
	props: sd,
	emits: cd,
	injectPlugin: ld
});
({ ...Rl });
var { passive: dd, passiveCapture: fd, notPassiveCapture: pd } = De, { passive: md, passiveCapture: hd, notPassive: gd, notPassiveCapture: _d } = De;
Y.is.mobile && (Y.is.nativeMobile || Y.is.safari || Y.is.webkit || Y.is.vivaldi);
function vd(e) {
	Object.assign(xd, {
		request: e,
		exit: e,
		toggle: e
	});
}
function yd() {
	let e = xd.activeEl = xd.isActive ? document.fullscreenElement : null;
	Wr(e === null || e === document.documentElement ? document.body : e);
}
function bd() {
	xd.isActive = !xd.isActive, yd();
}
var xd = /*#__PURE__*/ Ee({
	isActive: !1,
	activeEl: null
}, {
	isCapable: !1,
	install({ $q: e }) {
		e.fullscreen = this;
	}
});
xd.isCapable = document.documentElement.requestFullscreen !== void 0, xd.isCapable ? (Object.assign(xd, {
	request(e) {
		let t = e || document.documentElement, { activeEl: n } = xd;
		return t === n ? Promise.resolve() : (n !== null && t.contains(n) ? xd.exit() : Promise.resolve()).finally(() => t.requestFullscreen());
	},
	exit() {
		return xd.isActive ? document.exitFullscreen() : Promise.resolve();
	},
	toggle(e) {
		return xd.isActive ? xd.exit() : xd.request(e);
	}
}), xd.isActive = !!document.fullscreenElement, xd.isActive && yd(), document.addEventListener("fullscreenchange", bd)) : vd(() => Promise.reject(/* @__PURE__ */ Error("Not capable"))), { ...Object.fromEntries([
	"effectiveType",
	"downlink",
	"rtt",
	"saveData"
].map((e) => [e, void 0])) };
var Sd = /*#__PURE__*/ Ee({ appVisible: !0 }, { install({ $q: e }) {
	U(e, "appVisible", () => this.appVisible);
} });
document.addEventListener("visibilitychange", () => {
	Sd.appVisible = !document.hidden;
}, !1);
function Cd(e) {
	Object.assign(Ad, {
		request: e,
		release: e,
		toggle: e
	});
}
var wd = null, Td = null, Ed = !1;
function Dd() {
	wd = null, Ad.isActive = !1;
}
function Od() {
	return Td === null && (Td = navigator.wakeLock.request("screen").then((e) => {
		if (Td = null, !Ed) return e.release();
		wd = e, Ad.isActive = !0, e.addEventListener("release", Dd, { once: !0 });
	}, (e) => {
		throw Td = null, e;
	})), Td;
}
var kd = navigator.wakeLock !== void 0, Ad = /*#__PURE__*/ Ee({
	isCapable: !1,
	isActive: !1
}, { install({ $q: e, onSSRHydrated: t }) {
	if (e.wakeLock = this, this.__installed || !kd) return;
	let n = () => {
		this.isCapable = !0;
	};
	W.value ? t.push(n) : n();
} });
kd ? (Object.assign(Ad, {
	request() {
		return Ed = !0, wd === null ? Od().catch((e) => {
			throw wd === null && (Ed = !1), e;
		}) : Promise.resolve();
	},
	release() {
		return Ed = !1, wd === null ? Promise.resolve() : wd.release();
	},
	toggle() {
		return Ad.isActive ? Ad.release() : Ad.request();
	}
}), document.addEventListener("visibilitychange", () => {
	Ed && wd === null && !document.hidden && Od().catch(() => {});
}, !1)) : Cd(() => Promise.reject(/* @__PURE__ */ Error("Not capable"))), { ...$ };
function jd(e) {
	return encodeURIComponent(e === Object(e) ? JSON.stringify(e) : String(e));
}
function Md(e) {
	if (e === "") return e;
	e.indexOf("\"") === 0 && (e = e.slice(1, -1).replaceAll(String.raw`\"`, "\"").replaceAll(String.raw`\\`, "\\"));
	try {
		e = decodeURIComponent(e.replaceAll("+", " "));
	} catch {
		return;
	}
	try {
		let t = JSON.parse(e);
		(t === Object(t) || Array.isArray(t)) && (e = t);
	} catch {}
	return e;
}
var Nd = /(\d+)([dhms])/g, Pd = {
	d: 86400,
	h: 3600,
	m: 60,
	s: 1
};
function Fd(e) {
	let t = 0, n = !1, r = e.matchAll(Nd);
	for (let e of r) {
		n = !0;
		let r = Number.parseInt(e[1], 10), i = e[2];
		t += r * Pd[i];
	}
	if (n) return t;
	let i = Date.parse(e);
	return Number.isNaN(i) ? void 0 : Math.round((i - Date.now()) / 1e3);
}
function Id(e, t, n = {}, r) {
	let i, a = !1;
	if (n.expires !== void 0) {
		if (Number.isFinite(n.expires)) i = Math.round(n.expires * 86400);
		else if (n.expires instanceof Date) {
			let e = n.expires.getTime();
			Number.isFinite(e) && (i = Math.round((e - Date.now()) / 1e3));
		} else typeof n.expires == "string" && (i = Fd(n.expires));
		i !== void 0 && (a = i <= 0);
	}
	let o = `${encodeURIComponent(e)}=${jd(t)}`, s = [
		o,
		i === void 0 ? "" : `; Max-Age=${i}`,
		n.path ? `; Path=${n.path}` : "",
		n.domain ? `; Domain=${n.domain}` : "",
		n.sameSite ? `; SameSite=${n.sameSite}` : "",
		n.httpOnly ? "; HttpOnly" : "",
		n.secure ? "; Secure" : "",
		n.other ? `; ${n.other}` : ""
	].join("");
	if (r) {
		r.req.qCookies ? r.req.qCookies.push(s) : r.req.qCookies = [s], r.res.setHeader("Set-Cookie", r.req.qCookies);
		let t = encodeURIComponent(e), n = r.req.headers.cookie ? r.req.headers.cookie.split("; ").filter((e) => e.split("=", 1)[0] !== t) : [];
		r.req.headers.cookie = (a ? n : [o, ...n]).join("; ");
	} else document.cookie = s;
}
function Ld(e, t) {
	let n = t ? t.req.headers : document, r = n.cookie ? n.cookie.split("; ") : [], i = r.length, a = e ? null : {}, o = 0, s, c, l;
	for (; o < i; o++) {
		s = r[o].split("=");
		try {
			c = decodeURIComponent(s.shift());
		} catch {
			continue;
		}
		if (l = s.join("="), !e) {
			if (c !== "__proto__" && !Object.hasOwn(a, c)) {
				let e = Md(l);
				e !== void 0 && (a[c] = e);
			}
		} else if (e === c) {
			a = Md(l) ?? null;
			break;
		}
	}
	return a;
}
function Rd(e, t, n) {
	Id(e, "", {
		expires: -1,
		...t
	}, n);
}
function zd(e, t) {
	return Ld(e, t) !== null;
}
function Bd() {
	return null;
}
function Vd(e) {
	let { default: t = Bd, deep: n = !0, disabled: r, ...i } = e ?? {};
	return {
		getDefault: t,
		deep: n,
		disabled: r,
		cookieOpts: i
	};
}
function Hd(e) {
	let t = /* @__PURE__ */ new Map();
	function n(e, n, r) {
		t.get(e)?.forEach((e) => {
			e !== r && e(n);
		});
	}
	function r(e) {
		let r = /* @__PURE__ */ new Set();
		for (let t of [...e.changed, ...e.deleted]) try {
			r.add(decodeURIComponent(t.name));
		} catch {}
		r.forEach((e) => {
			t.has(e) && n(e, Ld(e));
		});
	}
	function i(n, i) {
		let a = t.get(n);
		a === void 0 && (t.size === 0 && e === void 0 && window.cookieStore?.addEventListener("change", r), a = /* @__PURE__ */ new Set(), t.set(n, a)), a.add(i);
	}
	function a(n, i) {
		let a = t.get(n);
		a?.delete(i) && a.size === 0 && (t.delete(n), t.size === 0 && e === void 0 && window.cookieStore?.removeEventListener("change", r));
	}
	function o(t, r) {
		let { getDefault: o, deep: c, disabled: u, cookieOpts: f } = Vd(r), { expires: p, ...m } = f, h = o(), g = null, _ = !1, v, y = s((e, t) => (v = t, {
			get() {
				return e(), c && (bt(h) || Array.isArray(h)) ? k(h) : h;
			},
			set(e) {
				b(e ?? o()), x();
			}
		}));
		function b(e) {
			h = e, v();
		}
		function x() {
			if (!_) return;
			let r = h === null ? null : jd(h);
			if (r !== g) {
				if (r === null) Rd(t, m, e), g = null;
				else {
					Id(t, h, f, e);
					let n = Ld(t, e);
					g = n === null ? null : jd(n), b(n);
				}
				n(t, h, S);
			}
		}
		function S(n) {
			n === null && (n = Ld(t, e));
			let r = n === null ? null : jd(n);
			r !== g && (g = r, b(n === null ? o() : n), x());
		}
		function C() {
			let n = Ld(t, e);
			n === null ? g = null : (g = jd(n), b(n)), e === void 0 && x();
		}
		let T = l(!0);
		return T.run(() => {
			I(() => P(u) !== !0, (e) => {
				e ? (_ = !0, i(t, S), C()) : _ && (_ = !1, a(t, S));
			}, { immediate: !0 }), c && e === void 0 && I(y, x, { deep: !0 });
		}), y.stop = () => {
			T.stop(), _ && (_ = !1, a(t, S));
		}, d() !== void 0 && w(y.stop), y;
	}
	return {
		get: (t) => Ld(t, e),
		set: (t, r, i) => {
			Id(t, r, i, e), n(t, Ld(t, e));
		},
		has: (t) => zd(t, e),
		remove: (t, r) => {
			Rd(t, r, e), n(t, null);
		},
		getAll: () => Ld(null, e),
		useCookie: o
	};
}
var Ud = { install({ $q: e, ssrContext: t }) {
	e.cookies = this;
} };
__QUASAR_SSR__ && (Ud.parseSSR = (e) => {
	if (e !== void 0) return Hd(e);
}), Object.assign(Ud, Hd()), nd(["ok", "hide"]), { ...$ }, M(null), String.raw`\u003C`, String.raw`\u003E`, String.raw`\u0026`, String.raw`\u2028`, String.raw`\u2029`;
function Wd(e) {
	return xt(e) ? "__q_date|" + e.getTime() : St(e) ? "__q_expr|/" + e.source + "/" + e.flags : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
}
var Gd = /^-?\d+$/;
function Kd(e) {
	if (e.length < 9) return e;
	let t = e.slice(0, 8), n = e.slice(9);
	switch (t) {
		case "__q_date": return new Date(Gd.test(n) ? Number.parseInt(n, 10) : n);
		case "__q_expr":
			if (n.startsWith("/")) {
				let e = n.lastIndexOf("/");
				return new RegExp(n.slice(1, e), n.slice(e + 1));
			}
			return new RegExp(n);
		case "__q_numb": return Number(n);
		case "__q_bool": return n === "1";
		case "__q_strn": return String(n);
		case "__q_objt": return JSON.parse(n);
		default: return e;
	}
}
function qd() {
	return null;
}
function Jd(e) {
	return {
		getDefault: e?.default ?? qd,
		deep: e?.deep !== !1,
		disabled: e?.disabled,
		onError: e?.onError
	};
}
function Yd(e) {
	return bt(e) || Array.isArray(e);
}
function Xd(e, t) {
	let { getDefault: n, deep: r } = Jd(t), i = n(), a = s((e, t) => ({
		get() {
			return e(), r && Yd(i) ? k(i) : i;
		},
		set(e) {
			i = e ?? n(), t();
		}
	}));
	return a.stop = Oe, a;
}
function Zd() {
	return {
		has: () => !1,
		hasItem: () => !1,
		getLength: () => 0,
		getItem: () => null,
		getIndex: () => null,
		getKey: () => null,
		getAll: () => ({}),
		getAllKeys: () => [],
		set: Oe,
		setItem: Oe,
		remove: Oe,
		removeItem: Oe,
		clear: Oe,
		isEmpty: () => !0,
		useStorage: Xd
	};
}
function Qd(e) {
	let t = window[e + "Storage"], n = (e) => {
		let n = t.getItem(e);
		return n === null ? null : Kd(n);
	}, r = /* @__PURE__ */ new Map();
	function i(e, t, n, i, a) {
		r.get(e)?.forEach((e) => {
			e !== i && e(t, n, a);
		});
	}
	function a() {
		r.forEach((e) => {
			e.forEach((e) => {
				e(null, null);
			});
		});
	}
	function o(e) {
		if (e.storageArea === t) {
			if (e.key === null) a();
			else if (r.has(e.key)) {
				let t = e.newValue, n = null;
				try {
					t !== null && (n = Kd(t));
				} catch (n) {
					i(e.key, null, t, void 0, n);
					return;
				}
				i(e.key, n, t);
			}
		}
	}
	function c(e, t) {
		let n = r.get(e);
		n === void 0 && (r.size === 0 && window.addEventListener("storage", o), n = /* @__PURE__ */ new Set(), r.set(e, n)), n.add(t);
	}
	function u(e, t) {
		let n = r.get(e);
		n?.delete(t) && n.size === 0 && (r.delete(e), r.size === 0 && window.removeEventListener("storage", o));
	}
	let f = (e) => t.getItem(e) !== null, p = (e) => {
		t.removeItem(e), i(e, null, null);
	}, m = (e, a) => {
		if (a == null) p(e);
		else if (t.setItem(e, Wd(a)), r.has(e)) {
			let t = n(e);
			i(e, t, Wd(t));
		}
	};
	function h(e, r) {
		let { getDefault: a, deep: o, disabled: f, onError: p } = Jd(r), m = a(), h = null, g = !1, _, v = (e) => {
			if (p !== void 0) p(e);
			else throw e;
		}, y = s((e, t) => (_ = t, {
			get() {
				return e(), o && Yd(m) ? k(m) : m;
			},
			set(e) {
				b(e ?? a()), x();
			}
		}));
		function b(e) {
			m = e, _();
		}
		function x() {
			if (!g) return;
			let r = m === null ? null : Wd(m);
			if (r !== h) {
				try {
					r === null ? t.removeItem(e) : (t.setItem(e, r), (typeof r != "string" || typeof m == "function") && (b(n(e)), r = Wd(m)));
				} catch (e) {
					v(e);
					return;
				}
				h = r, i(e, m, r, S);
			}
		}
		function S(n, r, i) {
			if (i !== void 0) v(i);
			else {
				if (n === null) {
					let i = t.getItem(e);
					i !== null && (n = Kd(i), r = Wd(n));
				}
				n === null ? (h = null, b(a())) : (h = r, b(n)), x();
			}
		}
		function C() {
			try {
				let n = t.getItem(e);
				if (n === null) h = null;
				else {
					let e = Kd(n);
					h = Wd(e), b(e);
				}
			} catch (e) {
				v(e);
				return;
			}
			x();
		}
		let T = l(!0);
		return T.run(() => {
			I(() => !W.value && P(f) !== !0, (t) => {
				t ? (g = !0, c(e, S), C()) : g && (g = !1, u(e, S));
			}, { immediate: !0 }), o && I(y, x, { deep: !0 });
		}), y.stop = () => {
			T.stop(), g && (g = !1, u(e, S));
		}, d() !== void 0 && w(y.stop), y;
	}
	return {
		has: f,
		hasItem: f,
		getLength: () => t.length,
		getItem: n,
		getIndex: (e) => e < t.length ? n(t.key(e)) : null,
		getKey: (e) => e < t.length ? t.key(e) : null,
		getAll: () => {
			let e, r = {}, i = t.length;
			for (let a = 0; a < i; a++) e = t.key(a), r[e] = n(e);
			return r;
		},
		getAllKeys: () => {
			let e = [], n = t.length;
			for (let r = 0; r < n; r++) e.push(t.key(r));
			return e;
		},
		set: m,
		setItem: m,
		remove: p,
		removeItem: p,
		clear: () => {
			t.clear(), a();
		},
		isEmpty: () => t.length === 0,
		useStorage: h
	};
}
({ ...Y.has.webStorage ? Qd("local") : Zd() }), { ...Y.has.webStorage ? Qd("session") : Zd() }, Y.is.mac;
var $d = {
	version: "2.35.1",
	install: kt,
	lang: ct,
	iconSet: ut
}, ef = Object.freeze({
	Contrast: {
		reference: "light-dark(var(--surface-800), var(--surface-200))",
		p50: "light-dark(var(--surface-950), var(--surface-50))",
		p100: "light-dark(var(--surface-900), var(--surface-100))",
		p200: "light-dark(var(--surface-800), var(--surface-200))",
		p300: "light-dark(var(--surface-700), var(--surface-200))",
		p400: "light-dark(var(--surface-800), var(--surface-50))",
		p500: "light-dark(var(--surface-800), var(--surface-200))",
		p600: "light-dark(var(--surface-800), var(--surface-600))",
		p700: "light-dark(var(--surface-300), var(--surface-700))",
		p800: "light-dark(var(--surface-200), var(--surface-800))",
		p900: "light-dark(var(--surface-100), var(--surface-900))",
		p950: "light-dark(var(--surface-50), var(--surface-950))"
	},
	Emerald: {
		reference: "#10b981",
		p50: "#ecfdf5",
		p100: "#d1fae5",
		p200: "#a7f3d0",
		p300: "#6ee7b7",
		p400: "#34d399",
		p500: "#10b981",
		p600: "#059669",
		p700: "#047857",
		p800: "#065f46",
		p900: "#064e3b",
		p950: "#022c22"
	},
	Green: {
		reference: "#22c55e",
		p50: "#f0fdf4",
		p100: "#dcfce7",
		p200: "#bbf7d0",
		p300: "#86efac",
		p400: "#4ade80",
		p500: "#22c55e",
		p600: "#16a34a",
		p700: "#15803d",
		p800: "#166534",
		p900: "#14532d",
		p950: "#052e16"
	},
	Lime: {
		reference: "#84cc16",
		p50: "#f7fee7",
		p100: "#ecfccb",
		p200: "#d9f99d",
		p300: "#bef264",
		p400: "#a3e635",
		p500: "#84cc16",
		p600: "#65a30d",
		p700: "#4d7c0f",
		p800: "#3f6212",
		p900: "#365314",
		p950: "#1a2e05"
	},
	Orange: {
		reference: "#f97316",
		p50: "#fff7ed",
		p100: "#ffedd5",
		p200: "#fed7aa",
		p300: "#fdba74",
		p400: "#fb923c",
		p500: "#f97316",
		p600: "#ea580c",
		p700: "#c2410c",
		p800: "#9a3412",
		p900: "#7c2d12",
		p950: "#431407"
	},
	Amber: {
		reference: "#f59e0b",
		p50: "#fffbeb",
		p100: "#fef3c7",
		p200: "#fde68a",
		p300: "#fcd34d",
		p400: "#fbbf24",
		p500: "#f59e0b",
		p600: "#d97706",
		p700: "#b45309",
		p800: "#92400e",
		p900: "#78350f",
		p950: "#451a03"
	},
	Yellow: {
		reference: "#eab308",
		p50: "#fefce8",
		p100: "#fef9c3",
		p200: "#fef08a",
		p300: "#fde047",
		p400: "#facc15",
		p500: "#eab308",
		p600: "#ca8a04",
		p700: "#a16207",
		p800: "#854d0e",
		p900: "#713f12",
		p950: "#422006"
	},
	Teal: {
		reference: "#14b8a6",
		p50: "#f0fdfa",
		p100: "#ccfbf1",
		p200: "#99f6e4",
		p300: "#5eead4",
		p400: "#2dd4bf",
		p500: "#14b8a6",
		p600: "#0d9488",
		p700: "#0f766e",
		p800: "#115e59",
		p900: "#134e4a",
		p950: "#042f2e"
	},
	Cyan: {
		reference: "#06b6d4",
		p50: "#ecfeff",
		p100: "#cffafe",
		p200: "#a5f3fc",
		p300: "#67e8f9",
		p400: "#22d3ee",
		p500: "#06b6d4",
		p600: "#0891b2",
		p700: "#0e7490",
		p800: "#155e75",
		p900: "#164e63",
		p950: "#083344"
	},
	Sky: {
		reference: "#0ea5e9",
		p50: "#f0f9ff",
		p100: "#e0f2fe",
		p200: "#bae6fd",
		p300: "#7dd3fc",
		p400: "#38bdf8",
		p500: "#0ea5e9",
		p600: "#0284c7",
		p700: "#0369a1",
		p800: "#075985",
		p900: "#0c4a6e",
		p950: "#082f49"
	},
	Blue: {
		reference: "#3b82f6",
		p50: "#eff6ff",
		p100: "#dbeafe",
		p200: "#bfdbfe",
		p300: "#93c5fd",
		p400: "#60a5fa",
		p500: "#3b82f6",
		p600: "#2563eb",
		p700: "#1d4ed8",
		p800: "#1e40af",
		p900: "#1e3a8a",
		p950: "#172554"
	},
	Indigo: {
		reference: "#6366f1",
		p50: "#eef2ff",
		p100: "#e0e7ff",
		p200: "#c7d2fe",
		p300: "#a5b4fc",
		p400: "#818cf8",
		p500: "#6366f1",
		p600: "#4f46e5",
		p700: "#4338ca",
		p800: "#3730a3",
		p900: "#312e81",
		p950: "#1e1b4b"
	},
	Violet: {
		reference: "#8b5cf6",
		p50: "#f5f3ff",
		p100: "#ede9fe",
		p200: "#ddd6fe",
		p300: "#c4b5fd",
		p400: "#a78bfa",
		p500: "#8b5cf6",
		p600: "#7c3aed",
		p700: "#6d28d9",
		p800: "#5b21b6",
		p900: "#4c1d95",
		p950: "#2e1065"
	},
	Purple: {
		reference: "#a855f7",
		p50: "#faf5ff",
		p100: "#f3e8ff",
		p200: "#e9d5ff",
		p300: "#d8b4fe",
		p400: "#c084fc",
		p500: "#a855f7",
		p600: "#9333ea",
		p700: "#7e22ce",
		p800: "#6b21a8",
		p900: "#581c87",
		p950: "#3b0764"
	},
	Fushia: {
		reference: "#d946ef",
		p50: "#fdf4ff",
		p100: "#fae8ff",
		p200: "#f5d0fe",
		p300: "#f0abfc",
		p400: "#e879f9",
		p500: "#d946ef",
		p600: "#c026d3",
		p700: "#a21caf",
		p800: "#86198f",
		p900: "#701a75",
		p950: "#4a044e"
	},
	Pink: {
		reference: "#ec4899",
		p50: "#fdf2f8",
		p100: "#fce7f3",
		p200: "#fbcfe8",
		p300: "#f9a8d4",
		p400: "#f472b6",
		p500: "#ec4899",
		p600: "#db2777",
		p700: "#be185d",
		p800: "#9d174d",
		p900: "#831843",
		p950: "#500724"
	},
	Rose: {
		reference: "#f43f5e",
		p50: "#fff1f2",
		p100: "#ffe4e6",
		p200: "#fecdd3",
		p300: "#fda4af",
		p400: "#fb7185",
		p500: "#f43f5e",
		p600: "#e11d48",
		p700: "#be123c",
		p800: "#9f1239",
		p900: "#881337",
		p950: "#4c0519"
	}
}), tf = Object.freeze(new Map(Object.entries(ef))), nf = Object.freeze({
	Slate: {
		reference: "#46748b",
		s0: "#ffffff",
		s50: "#f8fafc",
		s100: "#f1f5f9",
		s200: "#e2e8f0",
		s300: "#cbd5e1",
		s400: "#94a3b8",
		s500: "#64748b",
		s600: "#475569",
		s700: "#334155",
		s800: "#1e293b",
		s900: "#0f172a",
		s950: "#020617"
	},
	Gray: {
		reference: "#6b7280",
		s0: "#ffffff",
		s50: "#f9fafb",
		s100: "#f3f4f6",
		s200: "#e5e7eb",
		s300: "#d1d5db",
		s400: "#9ca3af",
		s500: "#6b7280",
		s600: "#4b5563",
		s700: "#374151",
		s800: "#1f2937",
		s900: "#111827",
		s950: "#030712"
	},
	Zinc: {
		reference: "#71717a",
		s0: "#ffffff",
		s50: "#fafafa",
		s100: "#f4f4f5",
		s200: "#e4e4e7",
		s300: "#d4d4d8",
		s400: "#a1a1aa",
		s500: "#71717a",
		s600: "#52525b",
		s700: "#3f3f46",
		s800: "#27272a",
		s900: "#18181b",
		s950: "#09090b"
	},
	Neutral: {
		reference: "#737373",
		s0: "#ffffff",
		s50: "#fafafa",
		s100: "#f5f5f5",
		s200: "#e5e5e5",
		s300: "#d4d4d4",
		s400: "#a3a3a3",
		s500: "#737373",
		s600: "#525252",
		s700: "#404040",
		s800: "#262626",
		s900: "#171717",
		s950: "#0a0a0a"
	},
	Stone: {
		reference: "#78716c",
		s0: "#ffffff",
		s50: "#fafaf9",
		s100: "#f5f5f4",
		s200: "#e7e5e4",
		s300: "#d6d3d1",
		s400: "#a8a29e",
		s500: "#78716c",
		s600: "#57534e",
		s700: "#44403c",
		s800: "#292524",
		s900: "#1c1917",
		s950: "#0c0a09"
	},
	Soho: {
		reference: "#7f8084",
		s0: "#ffffff",
		s50: "#ececec",
		s100: "#dedfdf",
		s200: "#c4c4c6",
		s300: "#adaeb0",
		s400: "#97979b",
		s500: "#7f8084",
		s600: "#6a6b70",
		s700: "#55565b",
		s800: "#3f4046",
		s900: "#2c2c34",
		s950: "#16161d"
	},
	Viva: {
		reference: "#666769",
		s0: "#ffffff",
		s50: "#f3f3f3",
		s100: "#e7e7e8",
		s200: "#cfd0d0",
		s300: "#b7b8b9",
		s400: "#9fa1a1",
		s500: "#87898a",
		s600: "#6e7173",
		s700: "#565a5b",
		s800: "#3e4244",
		s900: "#262b2c",
		s950: "#0e1315"
	},
	Ocean: {
		reference: "#828787",
		s0: "#ffffff",
		s50: "#fbfcfc",
		s100: "#F7F9F8",
		s200: "#EFF3F2",
		s300: "#DADEDD",
		s400: "#B1B7B6",
		s500: "#828787",
		s600: "#5F7274",
		s700: "#415B61",
		s800: "#29444E",
		s900: "#183240",
		s950: "#0c1920"
	},
	Taupe: {
		reference: "#7d7468",
		s0: "#ffffff",
		s50: "#faf8f6",
		s100: "#f2eeea",
		s200: "#e4ddd6",
		s300: "#d0c6bc",
		s400: "#a89e94",
		s500: "#7d7468",
		s600: "#5e564c",
		s700: "#4a433b",
		s800: "#322d28",
		s900: "#211d19",
		s950: "#110f0c"
	},
	Mauve: {
		reference: "#7e7082",
		s0: "#ffffff",
		s50: "#faf8fa",
		s100: "#f4f0f5",
		s200: "#e8dfe9",
		s300: "#d5c9d7",
		s400: "#ad9db0",
		s500: "#7e7082",
		s600: "#5d5261",
		s700: "#483f4c",
		s800: "#312a34",
		s900: "#201c22",
		s950: "#100e11"
	},
	Mist: {
		reference: "#6b7a94",
		s0: "#ffffff",
		s50: "#f8fafe",
		s100: "#eef2fa",
		s200: "#dde4f0",
		s300: "#c5cfe0",
		s400: "#97a4bb",
		s500: "#6b7a94",
		s600: "#4e5b72",
		s700: "#3c475a",
		s800: "#283142",
		s900: "#1a2130",
		s950: "#0c1018"
	},
	Olive: {
		reference: "#767e6c",
		s0: "#ffffff",
		s50: "#fafbf8",
		s100: "#f2f4ee",
		s200: "#e3e7dc",
		s300: "#cfd5c4",
		s400: "#a3ab96",
		s500: "#767e6c",
		s600: "#575e4f",
		s700: "#43493c",
		s800: "#2e3228",
		s900: "#1e211a",
		s950: "#0f100c"
	}
}), rf = Object.freeze(new Map(Object.entries(nf))), af = class {
	static keyName = "quasar-big-bang-theme";
	static serializerSeparator = "|";
	static save(e, t) {
		localStorage.setItem(this.keyName, `${e}${this.serializerSeparator}${t}`);
	}
	static load() {
		return localStorage.getItem(this.keyName)?.split(this.serializerSeparator) ?? ["Emerald", "Slate"];
	}
	constructor() {}
};
//#endregion
//#region node_modules/quasar-app-extension-big-bang/src/core/default-props.ts
function of() {
	let e = "fade", t = "fade", n = "keyboard_arrow_down";
	uu.props.view = {
		type: String,
		default: "lHh LpR fFf"
	}, fr.props.unelevated = {
		type: Boolean,
		default: !0
	}, fr.props.noCaps = {
		type: Boolean,
		default: !0
	}, fr.props.dense = {
		type: Boolean,
		default: !0
	}, pr.props.unelevated = {
		type: Boolean,
		default: !0
	}, ba.props.unelevated = {
		type: Boolean,
		default: !0
	}, ba.props.noCaps = {
		type: Boolean,
		default: !0
	}, ba.props.dense = {
		type: Boolean,
		default: !0
	}, ba.props.dropdownIcon = {
		type: String,
		default: n
	}, Ta.props.unelevated = {
		type: Boolean,
		default: !0
	}, Ta.props.noCaps = {
		type: Boolean,
		default: !0
	}, Ta.props.dense = {
		type: Boolean,
		default: !0
	}, Ea.props.bordered = {
		type: Boolean,
		default: !0
	}, fa.props.transitionDuration.default = 150, Ll.props.bordered = {
		type: Boolean,
		default: !0
	}, jc.props.bordered = {
		type: Boolean,
		default: !0
	}, Lc.props.dense = {
		type: Boolean,
		default: !0
	}, el.props.dense = {
		type: Boolean,
		default: !0
	}, el.props.denseToggle = {
		type: Boolean,
		default: !1
	}, el.props.duration = {
		type: [Number, String],
		default: 150
	}, el.props.expandIcon = {
		type: String,
		default: n
	}, sn.props.size = {
		type: String,
		default: "20px"
	}, Lo.props.noCaps = {
		type: Boolean,
		default: !0
	}, Uo.props.noCaps = {
		type: Boolean,
		default: !0
	}, oc.props.minimal = {
		type: Boolean,
		default: !0
	}, ou.props.dense = {
		type: Boolean,
		default: !0
	}, El.props.dense = {
		type: Boolean,
		default: !0
	}, El.props.outlined = {
		type: Boolean,
		default: !0
	}, El.props.hideBottomSpace = {
		type: Boolean,
		default: !0
	}, iu.props.dense = {
		type: Boolean,
		default: !0
	}, iu.props.outlined = {
		type: Boolean,
		default: !0
	}, iu.props.hideBottomSpace = {
		type: Boolean,
		default: !0
	}, Nu.props.dense = {
		type: Boolean,
		default: !0
	}, Nu.props.outlined = {
		type: Boolean,
		default: !0
	}, Nu.props.optionsDense = {
		type: Boolean,
		default: !0
	}, Nu.props.hideBottomSpace = {
		type: Boolean,
		default: !0
	}, Nu.props.dropdownIcon = {
		type: String,
		default: n
	}, mu.props.dense = {
		type: Boolean,
		default: !0
	}, pu.props.dense = {
		type: Boolean,
		default: !0
	}, ud.props.bordered = {
		type: Boolean,
		default: !0
	}, Ic.props.transitionDuration.default = 150, Ic.props.transitionShow.default = e, Ic.props.transitionHide.default = t, ln.props.dense = {
		type: Boolean,
		default: !0
	}, Oc.props.transitionDuration.default = 150, Oc.props.transitionShow = {
		type: String,
		default: e
	}, Oc.props.transitionHide = {
		type: String,
		default: t
	}, Xu.props.dense = {
		type: Boolean,
		default: !0
	}, Xu.props.duration.default = 150, Xu.props.noConnectors = {
		type: Boolean,
		default: !0
	}, Xu.props.icon = {
		type: String,
		default: "chevron_right"
	};
}
//#endregion
//#region node_modules/quasar-app-extension-big-bang/src/core/big-bang-theme.ts
var sf = class {
	static _primary = "Emerald";
	static _surface = "Slate";
	static _saveStrategy = "none";
	constructor() {}
	static setPrimary(e) {
		let t = tf.get(e);
		if (t) {
			this._primary = e;
			for (let e of Object.entries(t)) document.documentElement.style.setProperty(`--primary-${e[0].replace("p", "")}`, e[1]);
			this.trySaveTheme();
		}
	}
	static getPrimary() {
		return this._primary;
	}
	static setSurface(e) {
		let t = rf.get(e);
		if (t) {
			this._surface = e;
			for (let e of Object.entries(t)) document.documentElement.style.setProperty(`--surface-${e[0].replace("s", "")}`, e[1]);
			this.trySaveTheme();
		}
	}
	static getSurface() {
		return this._surface;
	}
	static setSaveMode(e) {
		this._saveStrategy = e;
	}
	static trySaveTheme() {
		return this._saveStrategy !== "none" && (af.save(this._primary, this._surface), !0);
	}
	static tryLoadTheme() {
		if (this._saveStrategy === "none") return !1;
		let e = af.load();
		return this.setPrimary(e[0]), this.setSurface(e[1]), !0;
	}
	static getSaveMode() {
		return this._saveStrategy;
	}
	static setupDefaultProps() {
		of();
	}
}, cf = { class: "flex flex-center full-width q-pb-md q-pt-sm" }, lf = /* @__PURE__ */ c({
	__name: "AsideBefore",
	setup(e) {
		return (e, t) => (D(), a("div", cf, [o(B)]));
	}
}), uf = {
	__name: "Layout",
	setup(e) {
		let { Layout: t } = z;
		return (e, n) => (D(), i(F(t), null, {
			"sidebar-nav-before": L(() => [o(lf)]),
			_: 1
		}));
	}
};
//#endregion
//#region src/vp-theme.ts
function df(e, t) {
	if (e.use($d, { plugins: { Dark: Q } }), typeof window < "u") {
		let e = () => {
			Q.set(document.documentElement.classList.contains("dark"));
		};
		e(), new MutationObserver(e).observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class"]
		});
	}
	sf.setPrimary(t.primary), sf.setSurface(t.surface), sf.setupDefaultProps();
}
function ff(e = {}) {
	return {
		extends: z,
		Layout: uf,
		enhanceApp({ app: t }) {
			df(t, e);
		}
	};
}
//#endregion
//#region src/vp-config.ts
var pf = {
	themeConfig: {
		docFooter: {
			prev: !1,
			next: !1
		},
		search: {
			provider: "local",
			options: { translations: {
				button: { buttonText: "Recherche" },
				modal: {
					footer: {
						navigateText: "Naviguer",
						selectText: "Sélectionner",
						closeText: "Fermer"
					},
					noResultsText: "Aucun résultat pour "
				}
			} }
		},
		outline: { label: "Sur cette page" },
		returnToTopLabel: "Retour en haut",
		darkModeSwitchLabel: "Apparence"
	},
	markdown: { theme: {
		dark: "dark-plus",
		light: "light-plus"
	} }
};
//#endregion
export { ff as createBigBangTheme, pf as vitepressBigBangConfig };
