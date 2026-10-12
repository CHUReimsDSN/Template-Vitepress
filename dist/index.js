import { Dark as e, QBanner as t, QBtn as n, QBtnDropdown as r, QBtnGroup as i, QBtnToggle as a, QCard as o, QDate as s, QDialog as c, QDrawer as l, QExpansionItem as u, QField as d, QHeader as f, QIcon as p, QInput as m, QItem as ee, QLayout as h, QList as g, QMenu as te, QRadio as ne, QSelect as _, QTab as re, QTabs as v, QToggle as y, QTooltip as b, QTree as x, QUploader as ie, Quasar as S } from "quasar";
import C from "vitepress/theme";
import { createBlock as ae, createElementBlock as oe, createVNode as w, defineComponent as se, openBlock as T, unref as ce, withCtx as le } from "vue";
import ue from "vitepress/dist/client/theme-default/components/VPNavBarSearch.vue";
import { createRequire as E } from "node:module";
import "node:fs";
import "node:path";
import { URL as D, fileURLToPath as O } from "node:url";
var k = Object.freeze({
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
}), A = Object.freeze(new Map(Object.entries(k))), j = Object.freeze({
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
}), M = Object.freeze(new Map(Object.entries(j))), N = class {
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
function P() {
	let e = "fade", S = "fade", C = "keyboard_arrow_down";
	h.props.view = {
		type: String,
		default: "lHh LpR fFf"
	}, n.props.unelevated = {
		type: Boolean,
		default: !0
	}, n.props.noCaps = {
		type: Boolean,
		default: !0
	}, n.props.dense = {
		type: Boolean,
		default: !0
	}, i.props.unelevated = {
		type: Boolean,
		default: !0
	}, r.props.unelevated = {
		type: Boolean,
		default: !0
	}, r.props.noCaps = {
		type: Boolean,
		default: !0
	}, r.props.dense = {
		type: Boolean,
		default: !0
	}, r.props.dropdownIcon = {
		type: String,
		default: C
	}, a.props.unelevated = {
		type: Boolean,
		default: !0
	}, a.props.noCaps = {
		type: Boolean,
		default: !0
	}, a.props.dense = {
		type: Boolean,
		default: !0
	}, o.props.bordered = {
		type: Boolean,
		default: !0
	}, te.props.transitionDuration.default = 150, f.props.bordered = {
		type: Boolean,
		default: !0
	}, l.props.bordered = {
		type: Boolean,
		default: !0
	}, ee.props.dense = {
		type: Boolean,
		default: !0
	}, u.props.dense = {
		type: Boolean,
		default: !0
	}, u.props.denseToggle = {
		type: Boolean,
		default: !1
	}, u.props.duration = {
		type: [Number, String],
		default: 150
	}, u.props.expandIcon = {
		type: String,
		default: C
	}, p.props.size = {
		type: String,
		default: "20px"
	}, v.props.noCaps = {
		type: Boolean,
		default: !0
	}, re.props.noCaps = {
		type: Boolean,
		default: !0
	}, s.props.minimal = {
		type: Boolean,
		default: !0
	}, g.props.dense = {
		type: Boolean,
		default: !0
	}, d.props.dense = {
		type: Boolean,
		default: !0
	}, d.props.outlined = {
		type: Boolean,
		default: !0
	}, d.props.hideBottomSpace = {
		type: Boolean,
		default: !0
	}, m.props.dense = {
		type: Boolean,
		default: !0
	}, m.props.outlined = {
		type: Boolean,
		default: !0
	}, m.props.hideBottomSpace = {
		type: Boolean,
		default: !0
	}, _.props.dense = {
		type: Boolean,
		default: !0
	}, _.props.outlined = {
		type: Boolean,
		default: !0
	}, _.props.optionsDense = {
		type: Boolean,
		default: !0
	}, _.props.hideBottomSpace = {
		type: Boolean,
		default: !0
	}, _.props.dropdownIcon = {
		type: String,
		default: C
	}, y.props.dense = {
		type: Boolean,
		default: !0
	}, ne.props.dense = {
		type: Boolean,
		default: !0
	}, ie.props.bordered = {
		type: Boolean,
		default: !0
	}, b.props.transitionDuration.default = 150, b.props.transitionShow.default = e, b.props.transitionHide.default = S, t.props.dense = {
		type: Boolean,
		default: !0
	}, c.props.transitionDuration.default = 150, c.props.transitionShow = {
		type: String,
		default: e
	}, c.props.transitionHide = {
		type: String,
		default: S
	}, x.props.dense = {
		type: Boolean,
		default: !0
	}, x.props.duration.default = 150, x.props.noConnectors = {
		type: Boolean,
		default: !0
	}, x.props.icon = {
		type: String,
		default: "chevron_right"
	};
}
//#endregion
//#region node_modules/quasar-app-extension-big-bang/src/core/big-bang-theme.ts
var F = class {
	static _primary = "Emerald";
	static _surface = "Slate";
	static _saveStrategy = "none";
	constructor() {}
	static setPrimary(e) {
		let t = A.get(e);
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
		let t = M.get(e);
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
		return this._saveStrategy !== "none" && (N.save(this._primary, this._surface), !0);
	}
	static tryLoadTheme() {
		if (this._saveStrategy === "none") return !1;
		let e = N.load();
		return this.setPrimary(e[0]), this.setSurface(e[1]), !0;
	}
	static getSaveMode() {
		return this._saveStrategy;
	}
	static setupDefaultProps() {
		P();
	}
}, I = { class: "flex flex-center full-width q-pb-md q-pt-sm" }, L = /* @__PURE__ */ se({
	__name: "AsideBefore",
	setup(e) {
		return (e, t) => (T(), oe("div", I, [w(ue)]));
	}
}), R = {
	__name: "Layout",
	setup(e) {
		let { Layout: t } = C;
		return (e, n) => (T(), ae(ce(t), null, {
			"sidebar-nav-before": le(() => [w(L)]),
			_: 1
		}));
	}
};
//#endregion
//#region src/vp-theme.ts
function z(t, n) {
	if (t.use(S, { plugins: { Dark: e } }), typeof window < "u") {
		let t = () => {
			e.set(document.documentElement.classList.contains("dark"));
		};
		t(), new MutationObserver(t).observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class"]
		});
	}
	F.setPrimary(n.primary), F.setSurface(n.surface), F.setupDefaultProps();
}
function B(e = {}) {
	return {
		extends: C,
		Layout: R,
		enhanceApp({ app: t }) {
			z(t, e);
		}
	};
}
//#endregion
//#region node_modules/@iconify/utils/lib/icon/defaults.js
var V = Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
}), H = Object.freeze({
	rotate: 0,
	vFlip: !1,
	hFlip: !1
}), U = Object.freeze({
	...V,
	...H
}), de = Object.freeze({
	...U,
	body: "",
	hidden: !1
}), fe = Object.freeze({
	width: null,
	height: null
}), pe = Object.freeze({
	...fe,
	...H
});
//#endregion
//#region node_modules/@iconify/utils/lib/icon/transformations.js
function me(e, t) {
	let n = {};
	!e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
	let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
	return r && (n.rotate = r), n;
}
//#endregion
//#region node_modules/@iconify/utils/lib/icon/merge.js
function W(e, t) {
	let n = me(e, t);
	for (let r in de) r in H ? r in e && !(r in n) && (n[r] = H[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
	return n;
}
//#endregion
//#region node_modules/@iconify/utils/lib/icon-set/tree.js
function he(e, t) {
	let n = e.icons, r = e.aliases || Object.create(null), i = Object.create(null);
	function a(e) {
		if (n[e]) return i[e] = [];
		if (!(e in i)) {
			i[e] = null;
			let t = r[e] && r[e].parent, n = t && a(t);
			n && (i[e] = [t].concat(n));
		}
		return i[e];
	}
	return (t || Object.keys(n).concat(Object.keys(r))).forEach(a), i;
}
//#endregion
//#region node_modules/@iconify/utils/lib/icon-set/get-icon.js
function G(e, t, n) {
	let r = e.icons, i = e.aliases || Object.create(null), a = {};
	function o(e) {
		a = W(r[e] || i[e], a);
	}
	return o(t), n.forEach(o), W(e, a);
}
function ge(e, t) {
	if (e.icons[t]) return G(e, t, []);
	let n = he(e, [t])[t];
	return n ? G(e, t, n) : null;
}
//#endregion
//#region node_modules/@iconify/utils/lib/svg/size.js
var _e = /(-?[0-9.]*[0-9]+[0-9.]*)/g, ve = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function K(e, t, n) {
	if (t === 1) return e;
	if (n ||= 100, typeof e == "number") return Math.ceil(e * t * n) / n;
	if (typeof e != "string") return e;
	let r = e.split(_e);
	if (r === null || !r.length) return e;
	let i = [], a = r.shift(), o = ve.test(a);
	for (;;) {
		if (o) {
			let e = parseFloat(a);
			isNaN(e) ? i.push(a) : i.push(Math.ceil(e * t * n) / n);
		} else i.push(a);
		if (a = r.shift(), a === void 0) return i.join("");
		o = !o;
	}
}
//#endregion
//#region node_modules/@iconify/utils/lib/svg/defs.js
function ye(e, t = "defs") {
	let n = "", r = e.indexOf("<" + t);
	for (; r >= 0;) {
		let i = e.indexOf(">", r), a = e.indexOf("</" + t);
		if (i === -1 || a === -1) break;
		let o = e.indexOf(">", a);
		if (o === -1) break;
		n += e.slice(i + 1, a).trim(), e = e.slice(0, r).trim() + e.slice(o + 1);
	}
	return {
		defs: n,
		content: e
	};
}
function be(e, t) {
	return e ? "<defs>" + e + "</defs>" + t : t;
}
function xe(e, t, n) {
	let r = ye(e);
	return be(r.defs, t + r.content + n);
}
//#endregion
//#region node_modules/@iconify/utils/lib/svg/build.js
var Se = (e) => e === "unset" || e === "undefined" || e === "none";
function Ce(e, t) {
	let n = {
		...U,
		...e
	}, r = {
		...pe,
		...t
	}, i = {
		left: n.left,
		top: n.top,
		width: n.width,
		height: n.height
	}, a = n.body;
	[n, r].forEach((e) => {
		let t = [], n = e.hFlip, r = e.vFlip, o = e.rotate;
		n ? r ? o += 2 : (t.push("translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"), t.push("scale(-1 1)"), i.top = i.left = 0) : r && (t.push("translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"), t.push("scale(1 -1)"), i.top = i.left = 0);
		let s;
		switch (o < 0 && (o -= Math.floor(o / 4) * 4), o %= 4, o) {
			case 1:
				s = i.height / 2 + i.top, t.unshift("rotate(90 " + s.toString() + " " + s.toString() + ")");
				break;
			case 2:
				t.unshift("rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")");
				break;
			case 3: s = i.width / 2 + i.left, t.unshift("rotate(-90 " + s.toString() + " " + s.toString() + ")");
		}
		o % 2 == 1 && (i.left !== i.top && (s = i.left, i.left = i.top, i.top = s), i.width !== i.height && (s = i.width, i.width = i.height, i.height = s)), t.length && (a = xe(a, "<g transform=\"" + t.join(" ") + "\">", "</g>"));
	});
	let o = r.width, s = r.height, c = i.width, l = i.height, u, d;
	o === null ? (d = s === null ? "1em" : s === "auto" ? l : s, u = K(d, c / l)) : (u = o === "auto" ? c : o, d = s === null ? K(u, l / c) : s === "auto" ? l : s);
	let f = {}, p = (e, t) => {
		Se(t) || (f[e] = t.toString());
	};
	p("width", u), p("height", d);
	let m = [
		i.left,
		i.top,
		c,
		l
	];
	return f.viewBox = m.join(" "), {
		attributes: f,
		viewBox: m,
		body: a
	};
}
//#endregion
//#region node_modules/@iconify/utils/lib/svg/url.js
function we(e) {
	return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
//#endregion
//#region node_modules/@iconify/utils/lib/svg/encode-svg-for-css.js
function q(e) {
	let t = e.startsWith("<svg>") ? e.replace("<svg>", "<svg >") : e;
	return !t.includes(" xmlns:xlink=") && t.includes(" xlink:") && (t = t.replace("<svg ", "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" ")), t.includes(" xmlns=") || (t = t.replace("<svg ", "<svg xmlns=\"http://www.w3.org/2000/svg\" ")), we(t);
}
//#endregion
//#region node_modules/@iconify/utils/lib/svg/html.js
function Te(e, t) {
	let n = e.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let e in t) n += " " + e + "=\"" + t[e] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + n + ">" + e + "</svg>";
}
//#endregion
//#region node_modules/vitepress-plugin-group-icons/dist/index.mjs
var J = {
	packageManager: {
		pnpm: {
			dark: "vscode-icons:file-type-pnpm",
			light: "vscode-icons:file-type-light-pnpm"
		},
		npm: "vscode-icons:file-type-npm",
		yarn: "vscode-icons:file-type-yarn",
		bun: "vscode-icons:file-type-bun",
		deno: "vscode-icons:file-type-deno"
	},
	frameworks: {
		vue: "vscode-icons:file-type-vue",
		svelte: "vscode-icons:file-type-svelte",
		angular: "vscode-icons:file-type-angular",
		react: "vscode-icons:file-type-reactjs",
		solid: "logos:solidjs-icon",
		marko: "vscode-icons:file-type-marko",
		next: {
			dark: "vscode-icons:file-type-next",
			light: "vscode-icons:file-type-light-next"
		},
		nuxt: "vscode-icons:file-type-nuxt",
		astro: {
			dark: "vscode-icons:file-type-astro",
			light: "vscode-icons:file-type-light-astro"
		},
		qwik: "logos:qwik-icon",
		ember: "vscode-icons:file-type-ember"
	},
	tools: {
		vitest: {
			dark: "vscode-icons:file-type-vitest",
			light: "vscode-icons:file-type-light-vitest"
		},
		rollup: "vscode-icons:file-type-rollup",
		webpack: "vscode-icons:file-type-webpack",
		vite: {
			dark: "vscode-icons:file-type-vite",
			light: "vscode-icons:file-type-light-vite"
		},
		esbuild: "vscode-icons:file-type-esbuild",
		rolldown: {
			dark: "vscode-icons:file-type-rolldown",
			light: "vscode-icons:file-type-light-rolldown"
		},
		oxlint: {
			dark: "vscode-icons:file-type-oxc",
			light: "vscode-icons:file-type-light-oxc"
		},
		oxc: {
			dark: "vscode-icons:file-type-oxc",
			light: "vscode-icons:file-type-light-oxc"
		},
		oxfmt: {
			dark: "vscode-icons:file-type-oxc",
			light: "vscode-icons:file-type-light-oxc"
		},
		eslint: "vscode-icons:file-type-eslint",
		tailwind: "vscode-icons:file-type-tailwind",
		unocss: "vscode-icons:file-type-unocss"
	},
	misc: {
		tsconfig: "vscode-icons:file-type-tsconfig",
		editorconfig: "vscode-icons:file-type-editorconfig",
		gitignore: "vscode-icons:file-type-git",
		gitattributes: "vscode-icons:file-type-git",
		vscode: "vscode-icons:file-type-vscode",
		prisma: {
			dark: "vscode-icons:file-type-prisma",
			light: "vscode-icons:file-type-light-prisma"
		},
		gradle: {
			dark: "vscode-icons:file-type-gradle",
			light: "vscode-icons:file-type-light-gradle"
		}
	}
}, Ee = {
	"package.json": "vscode-icons:file-type-node",
	"uno.config.ts": "vscode-icons:file-type-unocss",
	".sass": "vscode-icons:file-type-sass",
	".less": "vscode-icons:file-type-less",
	".toml": {
		dark: "vscode-icons:file-type-toml",
		light: "vscode-icons:file-type-light-toml"
	},
	".ini": {
		dark: "vscode-icons:file-type-ini",
		light: "vscode-icons:file-type-light-ini"
	},
	".jsp": "vscode-icons:file-type-jsp",
	".wasm": "vscode-icons:file-type-wasm",
	".rs": {
		dark: "vscode-icons:file-type-rust",
		light: "vscode-icons:file-type-light-rust"
	},
	".go": "vscode-icons:file-type-go",
	".java": "vscode-icons:file-type-java",
	".c": "vscode-icons:file-type-c",
	".cpp": "vscode-icons:file-type-cpp",
	".cs": "vscode-icons:file-type-csharp",
	".dart": "vscode-icons:file-type-dartlang",
	".sln": "vscode-icons:file-type-sln",
	".kt": "vscode-icons:file-type-kotlin",
	".groovy": "vscode-icons:file-type-groovy",
	".scala": "vscode-icons:file-type-scala",
	".swift": "vscode-icons:file-type-swift",
	".lua": "vscode-icons:file-type-lua",
	".r": "vscode-icons:file-type-r",
	".rb": "vscode-icons:file-type-ruby",
	".mts": "vscode-icons:file-type-typescript",
	".cts": "vscode-icons:file-type-typescript",
	".ts": "vscode-icons:file-type-typescript",
	".tsx": "vscode-icons:file-type-typescript",
	".mjs": {
		dark: "vscode-icons:file-type-js",
		light: "vscode-icons:file-type-light-js"
	},
	".cjs": {
		dark: "vscode-icons:file-type-js",
		light: "vscode-icons:file-type-light-js"
	},
	".json": {
		dark: "vscode-icons:file-type-json",
		light: "vscode-icons:file-type-light-json"
	},
	".js": {
		dark: "vscode-icons:file-type-js",
		light: "vscode-icons:file-type-light-js"
	},
	".jsx": {
		dark: "vscode-icons:file-type-js",
		light: "vscode-icons:file-type-light-js"
	},
	".md": "vscode-icons:file-type-markdown",
	".py": "vscode-icons:file-type-python",
	".ico": "vscode-icons:file-type-favicon",
	".html": "vscode-icons:file-type-html",
	".css": "vscode-icons:file-type-css",
	".scss": "vscode-icons:file-type-scss",
	".yml": {
		dark: "vscode-icons:file-type-yaml-official",
		light: "vscode-icons:file-type-light-yaml-official"
	},
	".yaml": {
		dark: "vscode-icons:file-type-yaml-official",
		light: "vscode-icons:file-type-light-yaml-official"
	},
	".php": "vscode-icons:file-type-php3",
	".gjs": "vscode-icons:file-type-glimmer",
	".gts": "vscode-icons:file-type-glimmer",
	".env": "vscode-icons:file-type-dotenv"
}, De = {
	...J.packageManager,
	...J.frameworks,
	...J.tools,
	...J.misc,
	...Ee
};
function Oe(e, t) {
	try {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	} catch {
		return !1;
	}
}
var Y = /\s~(~?)([^~]+)~\1/, ke = /<label\b(?![^>]+\bdata-title\b)[^>]*>(.*?)<\/label>/g, Ae = /(<label[^>]*>)(.*?)(<\/label>)/g, je = /\[((?:[^[\]]|\[[^[\]]*\])*)\]/;
function Me(e, t) {
	let n = t || { titleBar: { includeSnippet: !1 } }, r = e.renderer.rules["container_code-group_open"];
	r && (e.renderer.rules["container_code-group_open"] = (...t) => r(...t).replace(ke, (t, n) => `<label data-title="${e.utils.escapeHtml(n)}"${t.slice(6)}`)), e.renderer.rules["container_code-group_open"] = (...e) => r(...e).replace(Ae, (e, t, n, r) => {
		let i = n.match(Y);
		return `${t}${i ? n.replace(i[0], "") : n}${r}`;
	});
	let i = e.renderer.rules.fence;
	i && (e.renderer.rules.fence = (...t) => {
		let [r, a] = t, o = r[a], s = !1;
		for (let e = a - 1; e >= 0; e--) {
			if (r[e].type === "container_code-group_open") {
				s = !0;
				break;
			}
			if (r[e].type === "container_code-group_close") break;
		}
		let c = o.info.match(je), l = n.titleBar.includeSnippet;
		if (!s && c && (!o.src || l)) {
			let n = c[1].match(Y);
			return `<div class="vp-code-block-title">
      <div class="vp-code-block-title-bar">
          <span class="vp-code-block-title-text" data-title="${e.utils.escapeHtml(c[1])}">${n ? c[1].replace(n[0], "") : c[1]}</span>
      </div>
        ${i(...t)}
      </div>
      `;
		}
		return i(...t);
	});
}
var Ne = /^https?:\/\//;
async function Pe(e, t) {
	let n = {
		...De,
		...t.customIcon
	};
	return { css: "\n.vp-code-block-title [data-title]::before,\n.vp-code-group [data-title]::before {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  margin-right: 0.5em;\n  margin-bottom: -0.2em;\n  background: var(--icon) no-repeat center / contain;\n}\n\n.vp-code-block-title-bar {\n  position: relative;\n  margin: 16px -24px 0 -24px;\n  background-color: var(--vp-code-block-bg);\n  overflow-x: auto;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--vp-code-tab-text-color);\n  white-space: nowrap;\n  transition: background-color 0.5s;\n  border-radius: 8px 8px 0 0;\n  padding:0 12px;\n  box-shadow: inset 0 -1px var(--vp-code-tab-divider);\n}\n\n.custom-block .vp-code-block-title-bar {\n  margin: 16px 0 0 0;\n}\n\n@media (min-width: 640px) {\n  .vp-code-block-title-bar {\n    margin: 16px 0 0 0;\n  }\n}\n\n.vp-code-block-title-text {\n  padding: 0 12px;\n  line-height: 48px;\n}\n\n\n.vp-code-block-title div[class*=language-] {\n  margin-top: 0 !important;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n" + await Z(Ie(/* @__PURE__ */ new Set([...e, ...t.defaultLabels || []]), n)) };
}
function Fe(e) {
	return typeof e == "string" ? `s:${e}` : `o:${JSON.stringify(e)}`;
}
function Ie(e, t) {
	let n = /* @__PURE__ */ new Map(), r = Object.entries(t).sort(([e], [t]) => t.length - e.length), i = r.filter(([e]) => !e.includes(".")), a = r.filter(([e]) => e.includes(".")), o = (e, t) => {
		let r = Fe(e), i = n.get(r);
		i ? i.labels.push(t) : n.set(r, {
			icon: e,
			labels: [t]
		});
	};
	for (let t of e) {
		let e = t.match(Y);
		if (e) {
			let n = e[2];
			o(n, t);
		} else {
			let e = t.toLowerCase(), n = i.find(([t]) => e.includes(t));
			if (n) {
				o(n[1], t);
				continue;
			}
			let r = a.find(([t]) => e.endsWith(t));
			r && o(r[1], t);
		}
	}
	return Array.from(n.values());
}
function X(e, t) {
	return t.map((t) => `${e} ${t}`).join(",");
}
async function Z(e) {
	return (await Promise.all(e.map(async ({ icon: e, labels: t }) => {
		let n = t.map((e) => `[data-title='${e}']::before`);
		if (typeof e == "string") {
			if (!e) return "";
			let t = await Q(e);
			return `
${n.join(",")} {
  content: '';
  --icon: url("data:image/svg+xml,${t}");
}`;
		}
		let r = [];
		if (e.light) {
			let t = await Q(e.light), i = X("", n);
			r.push(`
${i} {
  content: '';
  --icon: url("data:image/svg+xml,${t}");
}`);
		}
		if (e.dark) {
			let t = await Q(e.dark), i = X("html.dark", n);
			r.push(`
${i} {
  content: '';
  --icon: url("data:image/svg+xml,${t}");
}`);
		}
		return r.join("");
	}))).sort().join("");
}
async function Q(e) {
	if (!e) return "";
	if (e.startsWith("<svg")) return q(e);
	if (Ne.test(e)) try {
		return q(await (await fetch(e)).text());
	} catch {
		return console.warn(`[vitepress-plugin-group-icons]: Failed to fetch icon: ${e}`), "";
	}
	let [t, n] = e.split(":");
	try {
		let { icons: e } = E(import.meta.url)(`@iconify-json/${t}`), r = ge(e, n);
		if (r) {
			let { attributes: e, body: t } = Ce(r);
			return q(Te(t, e));
		}
		return "";
	} catch {
		return console.warn(`[vitepress-plugin-group-icons]: Icon set \`${t}\` not found. Please install \`@iconify-json/${t}\` first`), "";
	}
}
var Le = /&(?:lt|#60);/g, Re = /&(?:gt|#62);/g, ze = /&(?:quot|#34);/g, Be = /&(?:apos|#39);/g, Ve = /&(?:amp|#38);/g, $ = /\bdata-title=\\"([^"]*)\\"|\bdata-title="([^"]*)"|"data-title":\s*"([^"]*)"/g, He = /\.(md|md\?vue|md\?v=)$/;
function Ue(e) {
	return e.replaceAll(Le, "<").replaceAll(Re, ">").replaceAll(ze, "\"").replaceAll(Be, "'").replaceAll(Ve, "&");
}
function We(e) {
	let t = "virtual:group-icons.css", n = `\0${t}`, r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a;
	e ||= { customIcon: {} };
	function o() {
		let e = a?.moduleGraph.getModuleById(n);
		e && (a.moduleGraph.invalidateModule(e), a.reloadModule(e));
	}
	return {
		name: "vitepress-plugin-group-icons",
		enforce: "post",
		resolveId(e) {
			if (e === t) return n;
		},
		configureServer(e) {
			a = e;
		},
		async load(t) {
			if (t === n) {
				let { css: t } = await Pe(r, e);
				return i = new Set(r), t;
			}
		},
		transform: {
			filter: { id: He },
			handler(e) {
				for ($.lastIndex = 0;;) {
					let t = $.exec(e);
					if (!t) break;
					r.add(Ue(t[1] || t[2] || t[3]));
				}
				Oe(r, i) || o();
			}
		}
	};
}
//#endregion
//#region src/vp-config.ts
var Ge = {
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
	markdown: {
		theme: {
			dark: "dark-plus",
			light: "light-plus"
		},
		config(e) {
			e.use(Me);
		}
	},
	vite: {
		resolve: { alias: [{
			find: /^.*\/VPSidebarGroup\.vue$/,
			replacement: O(new D("data:application/octet-stream;base64,PHNjcmlwdCBzZXR1cCBsYW5nPSJ0cyI+CmltcG9ydCB7IFFFeHBhbnNpb25JdGVtLCBRTGlzdCB9IGZyb20gInF1YXNhciI7CmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAidnVlIjsKaW1wb3J0IFNpZGViYXJJdGVtIGZyb20gIi4vU2lkZWJhckl0ZW0udnVlIjsKaW1wb3J0IHR5cGUgeyBUU2lkZWJhckVudHJ5IH0gZnJvbSAiLi4vdHlwZXMiOwoKLy8gcHJvcHMKY29uc3QgcHJvcHNDb21wb25lbnQgPSBkZWZpbmVQcm9wczx7CiAgaXRlbXM6IFRTaWRlYmFyRW50cnlbXTsKfT4oKTsKCi8vIGZ1bmN0aW9ucwpmdW5jdGlvbiBpc09wZW5lZChpdGVtOiBUU2lkZWJhckVudHJ5KTogYm9vbGVhbiB7CiAgcmV0dXJuIChpdGVtLml0ZW1zID8/IFtdKS5maW5kKChpKSA9PiBpLmFjdGl2ZSB8fCBpc09wZW5lZChpKSkgIT09IHVuZGVmaW5lZDsKfQoKLy8gY29tcHV0ZWRzCmNvbnN0IG1lbnVzID0gY29tcHV0ZWQoKCkgPT4gewogIC8vIHd0ZiBWaXRlUHJlc3MKICBpZiAocHJvcHNDb21wb25lbnQuaXRlbXNbMF0udGV4dCA9PT0gdW5kZWZpbmVkKSB7CiAgICByZXR1cm4gWwogICAgICAuLi4ocHJvcHNDb21wb25lbnQuaXRlbXNbMF0uaXRlbXMgPz8gW10pLAogICAgICAuLi5wcm9wc0NvbXBvbmVudC5pdGVtcy5zbGljZSgxKSwKICAgIF07CiAgfQogIHJldHVybiBwcm9wc0NvbXBvbmVudC5pdGVtczsKfSk7Cjwvc2NyaXB0PgoKPHRlbXBsYXRlPgogIDxxLWxpc3Q+CiAgICA8ZGl2IHYtZm9yPSJpdGVtIG9mIG1lbnVzIiA6a2V5PSJpdGVtLnRleHQiPgogICAgICA8cS1leHBhbnNpb24taXRlbQogICAgICAgIHYtaWY9IihpdGVtLml0ZW1zPy5sZW5ndGggPz8gMCkgPiAwIgogICAgICAgIDpkZWZhdWx0LW9wZW5lZD0iaXNPcGVuZWQoaXRlbSkiCiAgICAgICAgOmljb249Iml0ZW0uaWNvbiA/PyAnJyIKICAgICAgICA6bGFiZWw9Iml0ZW0udGV4dCA/PyAnPz8/JyIKICAgICAgICBoZWFkZXJDbGFzcz0ibWVudS1pdGVtIgogICAgICAgIGNsYXNzPSJtZW51LWV4cGFuZGFibGUiCiAgICAgICAgZ3JvdXA9Imdyb3VwQWNjb3JkaW9uTW9kZSIKICAgICAgPgogICAgICAgIDxTaWRlYmFyR3JvdXAgOml0ZW1zPSJpdGVtLml0ZW1zISIgLz4KICAgICAgPC9xLWV4cGFuc2lvbi1pdGVtPgoKICAgICAgPFNpZGViYXJJdGVtIHYtZWxzZSA6aXRlbT0iaXRlbSIgLz4KICAgIDwvZGl2PgogIDwvcS1saXN0Pgo8L3RlbXBsYXRlPgo=", "" + import.meta.url))
		}] },
		plugins: [We()]
	}
};
//#endregion
export { B as createBigBangTheme, Ge as vitepressBigBangConfig };
