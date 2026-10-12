import { a as e, c as t, d as n, f as r, l as i, o as a, t as o } from "./shared-D0A4GCYe.js";
import { a as s, c, h as l, r as u, s as d, t as f, u as p } from "./_plugin-vue_export-helper-BRO4Hcm6.js";
import { r as m, t as h } from "./scroll-lock-Cif0bK7S.js";
import { n as ee, r as te } from "./docsearch-Dsw-nTJ_.js";
import { Dark as g, QBanner as _, QBtn as v, QBtnDropdown as y, QBtnGroup as ne, QBtnToggle as re, QCard as ie, QDate as ae, QDialog as oe, QDrawer as se, QExpansionItem as ce, QField as le, QHeader as ue, QIcon as de, QInput as fe, QItem as pe, QLayout as me, QList as he, QMenu as ge, QRadio as _e, QSelect as b, QTab as ve, QTabs as ye, QToggle as be, QTooltip as xe, QTree as Se, QUploader as Ce, Quasar as we } from "quasar";
import { inBrowser as x, onContentUpdated as Te, useIcon as Ee, useRoute as S, withBase as De } from "vitepress";
import { Fragment as C, Transition as Oe, computed as w, createBlock as T, createCommentVNode as E, createElementBlock as D, createElementVNode as O, createTextVNode as k, createVNode as A, defineAsyncComponent as ke, defineComponent as Ae, inject as j, mergeProps as M, nextTick as je, normalizeClass as N, normalizeStyle as Me, onBeforeUnmount as Ne, onMounted as P, onScopeDispose as Pe, onUnmounted as Fe, onUpdated as Ie, openBlock as F, provide as Le, reactive as Re, readonly as ze, ref as I, renderList as L, renderSlot as R, resolveComponent as z, resolveDynamicComponent as B, shallowReadonly as Be, shallowRef as Ve, toDisplayString as V, toValue as He, unref as H, useId as U, useSlots as Ue, useTemplateRef as W, vShow as We, watch as G, watchEffect as K, watchPostEffect as Ge, withCtx as q, withDirectives as Ke, withModifiers as qe } from "vue";
import { URL as Je, fileURLToPath as Ye } from "node:url";
//#region \0rolldown/runtime.js
var Xe = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), Ze = Object.freeze({
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
}), Qe = Object.freeze(new Map(Object.entries(Ze))), $e = Object.freeze({
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
}), et = Object.freeze(new Map(Object.entries($e))), tt = class {
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
function nt() {
	let e = "fade", t = "fade", n = "keyboard_arrow_down";
	me.props.view = {
		type: String,
		default: "lHh LpR fFf"
	}, v.props.unelevated = {
		type: Boolean,
		default: !0
	}, v.props.noCaps = {
		type: Boolean,
		default: !0
	}, v.props.dense = {
		type: Boolean,
		default: !0
	}, ne.props.unelevated = {
		type: Boolean,
		default: !0
	}, y.props.unelevated = {
		type: Boolean,
		default: !0
	}, y.props.noCaps = {
		type: Boolean,
		default: !0
	}, y.props.dense = {
		type: Boolean,
		default: !0
	}, y.props.dropdownIcon = {
		type: String,
		default: n
	}, re.props.unelevated = {
		type: Boolean,
		default: !0
	}, re.props.noCaps = {
		type: Boolean,
		default: !0
	}, re.props.dense = {
		type: Boolean,
		default: !0
	}, ie.props.bordered = {
		type: Boolean,
		default: !0
	}, ge.props.transitionDuration.default = 150, ue.props.bordered = {
		type: Boolean,
		default: !0
	}, se.props.bordered = {
		type: Boolean,
		default: !0
	}, pe.props.dense = {
		type: Boolean,
		default: !0
	}, ce.props.dense = {
		type: Boolean,
		default: !0
	}, ce.props.denseToggle = {
		type: Boolean,
		default: !1
	}, ce.props.duration = {
		type: [Number, String],
		default: 150
	}, ce.props.expandIcon = {
		type: String,
		default: n
	}, de.props.size = {
		type: String,
		default: "20px"
	}, ye.props.noCaps = {
		type: Boolean,
		default: !0
	}, ve.props.noCaps = {
		type: Boolean,
		default: !0
	}, ae.props.minimal = {
		type: Boolean,
		default: !0
	}, he.props.dense = {
		type: Boolean,
		default: !0
	}, le.props.dense = {
		type: Boolean,
		default: !0
	}, le.props.outlined = {
		type: Boolean,
		default: !0
	}, le.props.hideBottomSpace = {
		type: Boolean,
		default: !0
	}, fe.props.dense = {
		type: Boolean,
		default: !0
	}, fe.props.outlined = {
		type: Boolean,
		default: !0
	}, fe.props.hideBottomSpace = {
		type: Boolean,
		default: !0
	}, b.props.dense = {
		type: Boolean,
		default: !0
	}, b.props.outlined = {
		type: Boolean,
		default: !0
	}, b.props.optionsDense = {
		type: Boolean,
		default: !0
	}, b.props.hideBottomSpace = {
		type: Boolean,
		default: !0
	}, b.props.dropdownIcon = {
		type: String,
		default: n
	}, be.props.dense = {
		type: Boolean,
		default: !0
	}, _e.props.dense = {
		type: Boolean,
		default: !0
	}, Ce.props.bordered = {
		type: Boolean,
		default: !0
	}, xe.props.transitionDuration.default = 150, xe.props.transitionShow.default = e, xe.props.transitionHide.default = t, _.props.dense = {
		type: Boolean,
		default: !0
	}, oe.props.transitionDuration.default = 150, oe.props.transitionShow = {
		type: String,
		default: e
	}, oe.props.transitionHide = {
		type: String,
		default: t
	}, Se.props.dense = {
		type: Boolean,
		default: !0
	}, Se.props.duration.default = 150, Se.props.noConnectors = {
		type: Boolean,
		default: !0
	}, Se.props.icon = {
		type: String,
		default: "chevron_right"
	};
}
//#endregion
//#region node_modules/quasar-app-extension-big-bang/src/core/big-bang-theme.ts
var rt = class {
	static _primary = "Emerald";
	static _surface = "Slate";
	static _saveStrategy = "none";
	constructor() {}
	static setPrimary(e) {
		let t = Qe.get(e);
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
		let t = et.get(e);
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
		return this._saveStrategy !== "none" && (tt.save(this._primary, this._surface), !0);
	}
	static tryLoadTheme() {
		if (this._saveStrategy === "none") return !1;
		let e = tt.load();
		return this.setPrimary(e[0]), this.setSurface(e[1]), !0;
	}
	static getSaveMode() {
		return this._saveStrategy;
	}
	static setupDefaultProps() {
		nt();
	}
};
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/support/utils.js
function it(e, t) {
	let n, r = !1;
	return () => {
		n && clearTimeout(n), r ? n = window.setTimeout(e, t) : (e(), (r = !0) && window.setTimeout(() => r = !1, t));
	};
}
function at(e) {
	return e.startsWith("/") ? e : `/${e}`;
}
function ot(e, t, n) {
	return n === void 0 ? !!e && a(e) || t === "_blank" : n;
}
function st(e) {
	let { pathname: i, search: o, hash: s, protocol: c } = new URL(e, "http://a.com");
	if (a(e) || e.startsWith("#") || !c.startsWith("http") || !n(i)) return e;
	let { site: l } = r(), u = i.endsWith("/") || i.endsWith(".html") ? e : e.replace(/(?:(^\.+)\/)?.*$/, `$1${i.replace(/(\.md)?$/, l.value.cleanUrls ? "" : ".html")}${o}${s}`);
	if (t(l.value.base) && !l.value.cleanUrls) {
		let e = u.replace(/[?#].*$/, "");
		e.endsWith("/") && (u = e + "index.html" + u.slice(e.length));
	}
	return De(u);
}
function ct(e, t) {
	let n = /* @__PURE__ */ new Set();
	return e.filter((e) => {
		let r = t(e);
		return !n.has(r) && n.add(r);
	});
}
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/support/sidebar.js
function lt(e, t) {
	if (Array.isArray(e)) return pt(e);
	if (e == null) return [];
	t = at(t);
	let n = Object.keys(e).sort((e, t) => t.split("/").length - e.split("/").length).find((e) => t.startsWith(at(e))), r = n ? e[n] ?? [] : [];
	return Array.isArray(r) ? pt(r) : pt(r.items, r.base);
}
function ut(e) {
	let t = [], n = 0;
	for (let r of e) {
		if (r.items) {
			n = t.push(r);
			continue;
		}
		let e = t[n];
		e || (e = { items: [] }, t.push(e)), e.items?.push(r);
	}
	return t;
}
function dt(e) {
	let t = [];
	function n(e) {
		for (let r of e) r.text && r.link && t.push({
			text: r.text,
			link: r.link,
			docFooterText: r.docFooterText,
			rel: r.rel,
			target: r.target
		}), r.items && n(r.items);
	}
	return n(e), t;
}
function ft(t, n, r, i = !1) {
	return Array.isArray(r) ? r.some((e) => ft(t, n, e, i)) : r.link && e(t, n, r.link, !1, i) ? !0 : r.items ? ft(t, n, r.items, i) : !1;
}
function pt(e, t) {
	return [...e].map((e) => {
		let n = { ...e }, r = n.base || t;
		return r && n.link && !a(n.link) && (n.link = r + n.link.replace(/^\//, r.endsWith("/") ? "" : "/")), n.items &&= pt(n.items, r), n;
	});
}
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/composables/outline.js
var mt = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/, ht = [];
function gt(e) {
	return typeof e.outline == "object" && !Array.isArray(e.outline) && e.outline.label || "On this page";
}
function _t(e) {
	return yt([...document.querySelectorAll(".VPDoc h1, .VPDoc h2, .VPDoc h3, .VPDoc h4, .VPDoc h5, .VPDoc h6")].filter((e) => e.id && e.hasChildNodes()).map((e) => {
		let t = Number(e.tagName[1]);
		return {
			element: e,
			title: vt(e),
			link: "#" + e.id,
			level: t
		};
	}), e);
}
function vt(e) {
	let t = "";
	for (let n of e.childNodes) if (n.nodeType === 1) {
		if (mt.test(n.className)) continue;
		t += n.textContent;
	} else n.nodeType === 3 && (t += n.textContent);
	return t.trim();
}
function yt(e, t) {
	if (t === !1) return [];
	let n = (typeof t == "object" && !Array.isArray(t) ? t.level : t) || 2, [r, i] = typeof n == "number" ? [n, n] : n === "deep" ? [2, 6] : n;
	return St(e, r, i);
}
function bt(e, t) {
	let n = d("(min-width: 80rem)"), r = it(s, 100), i = null, a = !1;
	P(() => {
		requestAnimationFrame(s), window.addEventListener("scroll", r), e.value?.addEventListener("click", o);
	}), Ie(() => {
		c(location.hash);
	}), Fe(() => {
		window.removeEventListener("scroll", r);
	});
	function o(e) {
		if (!n.value) return;
		let t = e.target instanceof Element ? e.target.closest("a")?.hash : null;
		t && (a = !0, c(t));
	}
	function s() {
		if (!n.value) return;
		if (a) {
			a = !1;
			return;
		}
		let e = window.scrollY, t = window.innerHeight, r = document.body.offsetHeight, i = e + t - r >= 0, o = ht.map(({ element: e, link: t }) => ({
			link: t,
			top: xt(e),
			scrollMarginTop: Number.parseFloat(getComputedStyle(e).scrollMarginTop) || 0
		})).filter(({ top: e }) => !Number.isNaN(e)).sort((e, t) => e.top - t.top);
		if (!o.length || e < 1) {
			c(null);
			return;
		}
		if (i) {
			c(o.at(-1)?.link ?? null);
			return;
		}
		let s = null;
		for (let { link: t, top: n, scrollMarginTop: r } of o) {
			if (n > e + r + 4) break;
			s = t;
		}
		c(s);
	}
	function c(n) {
		let r = n == null ? null : e.value?.querySelector(`a[href$="${decodeURIComponent(n)}"]`) ?? null;
		r !== i && (i?.classList.remove("active"), i = r, r ? (r.classList.add("active"), t.value && (t.value.style.top = r.offsetTop + (r.offsetParent?.offsetTop ?? 0) + (r.offsetHeight - t.value.offsetHeight) / 2 + "px", t.value.style.opacity = "1"), r.scrollIntoView({
			block: "nearest",
			behavior: "smooth"
		})) : t.value && (t.value.style.top = "", t.value.style.opacity = "0"));
	}
}
function xt(e) {
	let t = 0;
	for (; e !== document.body;) {
		if (e === null) return NaN;
		t += e.offsetTop, e = e.offsetParent;
	}
	return t;
}
function St(e, t, n) {
	ht.length = 0;
	let r = [], i = [];
	return e.forEach((e) => {
		let a = {
			...e,
			children: []
		}, o = i[i.length - 1];
		for (; o && o.level >= a.level;) i.pop(), o = i[i.length - 1];
		a.element.classList.contains("ignore-header") || o && "shouldIgnore" in o ? i.push({
			level: a.level,
			shouldIgnore: !0
		}) : a.level > n || a.level < t || (ht.push({
			element: a.element,
			link: a.link
		}), o ? o.children.push(a) : r.push(a), i.push(a));
	}), r;
}
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/composables/sidebar.js
var J = I(!1);
function Ct(e) {
	let t;
	K(() => {
		t = J.value ? document.activeElement : void 0;
	}), P(() => {
		window.addEventListener("keyup", n);
	}), Fe(() => {
		window.removeEventListener("keyup", n);
	});
	function n(n) {
		n.key === "Escape" && J.value && (e(), t?.focus());
	}
}
function wt() {
	function e() {
		J.value = !0;
	}
	function t() {
		J.value = !1;
	}
	function n() {
		J.value ? t() : e();
	}
	return {
		isOpen: J,
		open: e,
		close: t,
		toggle: n
	};
}
function Tt(t) {
	let n = S(), r = I(!1), i = w(() => t.value.collapsed != null), a = w(() => !!t.value.link), o = I(!1), s = I(!1);
	function c(i = !1) {
		t.value.link ? o.value = e(n.data.relativePath, n.hash, t.value.link, !1, i) : o.value = !1, o.value ? (s.value = !0, je(() => r.value = !1)) : t.value.items ? (s.value = ft(n.data.relativePath, n.hash, t.value.items, i), s.value && je(() => r.value = !1)) : s.value = !1;
	}
	c(!0), G([t, n], () => c()), P(() => c());
	let l = w(() => t.value.link ? e(n.data.relativePath, n.hash, t.value.link) : !1), u = w(() => !!(t.value.items && t.value.items.length));
	K(() => {
		r.value = !!(i.value && t.value.collapsed);
	});
	function d() {
		i.value && (r.value = !r.value);
	}
	return {
		collapsed: r,
		collapsible: i,
		isLink: a,
		isActiveLink: o,
		isCurrentLink: l,
		hasActiveLink: s,
		hasChildren: u,
		toggle: d
	};
}
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/composables/layout.js
var Et = Ve([]), Y = Ve([]), Dt = d("(min-width: 60rem)");
function X() {
	let { frontmatter: e, theme: t } = r(), n = w(() => !!(e.value.isHome ?? e.value.layout === "home")), i = w(() => e.value.sidebar !== !1 && Y.value.length > 0 && !n.value), a = w(() => i.value && Dt.value), o = w(() => i.value ? ut(Y.value) : []), s = w(() => n.value ? !1 : e.value.aside == null ? t.value.aside !== !1 : !!e.value.aside), c = w(() => s.value ? e.value.aside == null ? t.value.aside === "left" : e.value.aside === "left" : !1), l = w(() => Et.value.length > 0);
	return {
		isHome: n,
		sidebar: Be(Y),
		sidebarGroups: o,
		hasSidebar: i,
		isSidebarEnabled: a,
		hasAside: s,
		leftAside: c,
		headers: Be(Et),
		hasLocalNav: l
	};
}
function Ot({ closeSidebar: e }) {
	let { theme: t, page: n, frontmatter: i } = r();
	G(() => [n.value.relativePath, t.value.sidebar], ([e, t]) => {
		let n = t ? lt(t, e) : [];
		JSON.stringify(n) !== JSON.stringify(Y.value) && (Y.value = n);
	}, {
		immediate: !0,
		deep: !0,
		flush: "sync"
	}), Te(() => {
		Et.value = _t(i.value.outline ?? t.value.outline);
	});
	let a = S();
	G(() => a.path, e), G(Dt, e), Ct(e);
}
var kt = Symbol("layout-info"), At = {
	__name: "VPBadge",
	props: {
		text: {
			type: String,
			required: !1
		},
		type: {
			type: String,
			required: !1,
			default: "tip"
		}
	},
	setup(e) {
		return (t, n) => (F(), D("span", { class: N(["VPBadge", e.type]) }, [R(t.$slots, "default", {}, () => [k(V(e.text), 1)])], 2));
	}
}, jt = {
	key: 0,
	class: "VPBackdrop"
}, Mt = /*#__PURE__*/ f({
	__name: "VPBackdrop",
	props: { show: {
		type: Boolean,
		required: !0
	} },
	setup(e) {
		return (t, n) => (F(), T(Oe, { name: "fade" }, {
			default: q(() => [e.show ? (F(), D("div", jt)) : E("", !0)]),
			_: 1
		}));
	}
}, [["__scopeId", "data-v-2d6ee955"]]), Nt = Symbol();
function Pt() {
	let e = j(Nt);
	if (!e) throw Error("useRouter() is called without provider.");
	return e;
}
function Ft() {
	return Pt().route;
}
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/composables/langs.js
function It({ linkToCorrespondingPage: e = !1 } = {}) {
	let t = r(), n = Ft(), { site: i, localeIndex: a } = t, o = w(() => ({
		label: i.value.locales[a.value]?.label,
		link: i.value.locales[a.value]?.link || (a.value === "root" ? "/" : `/${a.value}/`)
	}));
	return {
		currentLang: o,
		localeLinks: w(() => Object.entries(i.value.locales).flatMap(([r, i]) => o.value.label === i.label ? [] : {
			text: i.label,
			link: Lt(t, n, {
				targetLocale: r,
				targetLocaleLink: i.link || (r === "root" ? "/" : `/${r}/`),
				currentLocaleLink: o.value.link,
				linkToCorrespondingPage: e
			}),
			lang: i.lang,
			dir: i.dir
		}))
	};
}
function Lt(e, t, { targetLocale: n, targetLocaleLink: r, currentLocaleLink: i, linkToCorrespondingPage: a }) {
	let { site: o, theme: s } = e, c = s.value.i18nRouting;
	return a && typeof c == "function" ? c(e, t, n) : Rt(r, c !== !1 && a, t.data.relativePath.slice(i.length - 1), !o.value.cleanUrls) + t.query + t.hash;
}
function Rt(e, t, n, r) {
	return t ? e.replace(/\/$/, "") + at(n.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, r ? ".html" : "")) : e;
}
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/NotFound.vue
var zt = { class: "NotFound" }, Bt = { class: "code" }, Vt = { class: "title" }, Ht = { class: "quote" }, Ut = { class: "action" }, Wt = ["href", "aria-label"], Gt = /*#__PURE__*/ f({
	__name: "NotFound",
	setup(e) {
		let { theme: t } = r(), { currentLang: n } = It();
		return (e, r) => (F(), D("div", zt, [
			O("p", Bt, V(H(t).notFound?.code ?? "404"), 1),
			O("h1", Vt, V(H(t).notFound?.title ?? "PAGE NOT FOUND"), 1),
			r[0] ||= O("div", { class: "divider" }, null, -1),
			O("blockquote", Ht, V(H(t).notFound?.quote ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."), 1),
			O("div", Ut, [O("a", {
				class: "link",
				href: H(De)(H(t).notFound?.link ?? H(n).link),
				"aria-label": H(t).notFound?.linkLabel ?? "go to home"
			}, V(H(t).notFound?.linkText ?? "Take me home"), 9, Wt)])
		]));
	}
}, [["__scopeId", "data-v-de3cd469"]]), Kt = { class: "VPDocAsideCarbonAds" }, qt = {
	__name: "VPDocAsideCarbonAds",
	props: { carbonAds: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = __CARBON__ ? ke(() => import("./VPCarbonAds-Ko3XtZVt.js")) : () => null;
		return (n, r) => (F(), D("div", Kt, [A(H(t), { "carbon-ads": e.carbonAds }, null, 8, ["carbon-ads"])]));
	}
}, Jt = ["href", "title"], Yt = /*#__PURE__*/ f({
	__name: "VPDocOutlineItem",
	props: {
		headers: {
			type: Array,
			required: !0
		},
		root: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		return (t, n) => {
			let r = z("VPDocOutlineItem", !0);
			return F(), D("ul", { class: N(["VPDocOutlineItem", e.root ? "root" : "nested"]) }, [(F(!0), D(C, null, L(e.headers, ({ children: e, link: t, title: n }) => (F(), D("li", null, [O("a", {
				class: "outline-link",
				href: t,
				title: n
			}, V(n), 9, Jt), e?.length ? (F(), T(r, {
				key: 0,
				headers: e
			}, null, 8, ["headers"])) : E("", !0)]))), 256))], 2);
		};
	}
}, [["__scopeId", "data-v-36c863a6"]]), Xt = { class: "content" }, Zt = {
	"aria-level": "2",
	class: "outline-title",
	id: "doc-outline-aria-label",
	role: "heading"
}, Qt = /*#__PURE__*/ f({
	__name: "VPDocAsideOutline",
	setup(e) {
		let { theme: t } = r(), n = W("container"), i = W("marker"), { headers: a, hasLocalNav: o } = X();
		return bt(n, i), (e, r) => (F(), D("nav", {
			"aria-labelledby": "doc-outline-aria-label",
			class: N(["VPDocAsideOutline", { "has-outline": H(o) }]),
			ref_key: "container",
			ref: n
		}, [O("div", Xt, [
			O("div", {
				class: "outline-marker",
				ref_key: "marker",
				ref: i
			}, null, 512),
			O("div", Zt, V(H(gt)(H(t))), 1),
			A(Yt, {
				headers: H(a),
				root: !0
			}, null, 8, ["headers"])
		])], 2));
	}
}, [["__scopeId", "data-v-df5b2de9"]]), $t = { class: "VPDocAside" }, en = /*#__PURE__*/ f({
	__name: "VPDocAside",
	setup(e) {
		let { theme: t } = r();
		return (e, n) => (F(), D("div", $t, [
			R(e.$slots, "aside-top", {}, void 0, !0),
			R(e.$slots, "aside-outline-before", {}, void 0, !0),
			A(Qt),
			R(e.$slots, "aside-outline-after", {}, void 0, !0),
			n[0] ||= O("div", { class: "spacer" }, null, -1),
			R(e.$slots, "aside-ads-before", {}, void 0, !0),
			H(t).carbonAds ? (F(), T(qt, {
				key: 0,
				"carbon-ads": H(t).carbonAds
			}, null, 8, ["carbon-ads"])) : E("", !0),
			R(e.$slots, "aside-ads-after", {}, void 0, !0),
			R(e.$slots, "aside-bottom", {}, void 0, !0)
		]));
	}
}, [["__scopeId", "data-v-5ef2eff3"]]);
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/composables/edit-link.js
function tn() {
	let { theme: e, page: t } = r();
	return w(() => {
		let { text: n = "Edit this page", pattern: r = "" } = e.value.editLink || {}, i;
		return i = typeof r == "function" ? r(t.value) : r.replace(/:path/g, t.value.filePath), {
			url: i,
			text: n
		};
	});
}
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/composables/prev-next.js
function nn() {
	let { theme: t, page: n, frontmatter: a } = r();
	return w(() => {
		let r = ct(dt(lt(t.value.sidebar, n.value.relativePath)), (e) => i(e.link)), o = r.findIndex((t) => e(n.value.relativePath, "", t.link, !1, !0)), s = t.value.docFooter?.prev === !1 && !a.value.prev || a.value.prev === !1, c = t.value.docFooter?.next === !1 && !a.value.next || a.value.next === !1;
		return {
			prev: s ? void 0 : {
				text: (typeof a.value.prev == "string" ? a.value.prev : typeof a.value.prev == "object" ? a.value.prev.text : void 0) ?? r[o - 1]?.docFooterText ?? r[o - 1]?.text,
				link: (typeof a.value.prev == "object" ? a.value.prev.link : void 0) ?? r[o - 1]?.link,
				target: (typeof a.value.prev == "object" ? a.value.prev.target : void 0) ?? r[o - 1]?.target,
				rel: (typeof a.value.prev == "object" ? a.value.prev.rel : void 0) ?? r[o - 1]?.rel
			},
			next: c ? void 0 : {
				text: (typeof a.value.next == "string" ? a.value.next : typeof a.value.next == "object" ? a.value.next.text : void 0) ?? r[o + 1]?.docFooterText ?? r[o + 1]?.text,
				link: (typeof a.value.next == "object" ? a.value.next.link : void 0) ?? r[o + 1]?.link,
				target: (typeof a.value.next == "object" ? a.value.next.target : void 0) ?? r[o + 1]?.target,
				rel: (typeof a.value.next == "object" ? a.value.next.rel : void 0) ?? r[o + 1]?.rel
			}
		};
	});
}
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue
var rn = { class: "VPLastUpdated" }, an = ["datetime"], on = /*#__PURE__*/ f({
	__name: "VPDocFooterLastUpdated",
	setup(e) {
		let { theme: t, page: n, lang: i } = r(), { language: a } = c(), o = W("timeRef"), s = w(() => new Date(n.value.lastUpdated)), l = w(() => s.value.toISOString()), u = Ve("");
		return P(() => {
			K(() => {
				let e = t.value.lastUpdated?.formatOptions?.forceLocale ? i.value : a.value;
				u.value = new Intl.DateTimeFormat(e, t.value.lastUpdated?.formatOptions ?? {
					dateStyle: "medium",
					timeStyle: "medium"
				}).format(s.value), e && i.value !== e ? o.value?.setAttribute("lang", e) : o.value?.removeAttribute("lang");
			});
		}), (e, n) => (F(), D("p", rn, [k(V(H(t).lastUpdated?.text || "Last updated") + ": ", 1), O("time", {
			ref_key: "timeRef",
			ref: o,
			datetime: l.value
		}, V(u.value), 9, an)]));
	}
}, [["__scopeId", "data-v-ec392945"]]), Z = {
	__name: "VPLink",
	props: {
		tag: {
			type: String,
			required: !1
		},
		href: {
			type: String,
			required: !1
		},
		noIcon: {
			type: Boolean,
			required: !1
		},
		external: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		target: {
			type: String,
			required: !1
		},
		rel: {
			type: String,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = w(() => t.tag ?? (t.href ? "a" : "span")), r = w(() => ot(t.href, t.target, t.external));
		return (t, i) => (F(), T(B(n.value), {
			class: N(["VPLink", {
				link: e.href,
				"vp-external-link-icon": r.value,
				"no-icon": e.noIcon
			}]),
			href: e.href ? H(st)(e.href) : void 0,
			target: e.target ?? (r.value ? "_blank" : void 0),
			rel: e.rel ?? (r.value ? "noreferrer" : void 0)
		}, {
			default: q(() => [R(t.$slots, "default")]),
			_: 3
		}, 8, [
			"class",
			"href",
			"target",
			"rel"
		]));
	}
}, sn = {
	key: 0,
	class: "VPDocFooter"
}, cn = {
	key: 0,
	class: "edit-info"
}, ln = {
	key: 0,
	class: "edit-link"
}, un = {
	key: 1,
	class: "last-updated"
}, dn = {
	key: 1,
	class: "prev-next",
	"aria-labelledby": "doc-footer-aria-label"
}, fn = { class: "pager" }, pn = ["innerHTML"], mn = ["innerHTML"], hn = { class: "pager" }, gn = ["innerHTML"], _n = ["innerHTML"], vn = /*#__PURE__*/ f({
	__name: "VPDocFooter",
	setup(e) {
		let { theme: t, page: n, frontmatter: i } = r(), a = tn(), o = nn(), s = w(() => t.value.editLink && i.value.editLink !== !1), c = w(() => n.value.lastUpdated), l = w(() => s.value || c.value || o.value.prev || o.value.next);
		return (e, n) => l.value ? (F(), D("footer", sn, [
			R(e.$slots, "doc-footer-before", {}, void 0, !0),
			s.value || c.value ? (F(), D("div", cn, [s.value ? (F(), D("div", ln, [A(Z, {
				class: "edit-link-button",
				href: H(a).url,
				"no-icon": !0
			}, {
				default: q(() => [n[0] ||= O("span", { class: "vpi-square-pen edit-link-icon" }, null, -1), k(" " + V(H(a).text), 1)]),
				_: 1
			}, 8, ["href"])])) : E("", !0), c.value ? (F(), D("div", un, [A(on)])) : E("", !0)])) : E("", !0),
			H(o).prev?.link || H(o).next?.link ? (F(), D("nav", dn, [
				n[1] ||= O("span", {
					class: "visually-hidden",
					id: "doc-footer-aria-label"
				}, "Pager", -1),
				O("div", fn, [H(o).prev?.link ? (F(), T(Z, {
					key: 0,
					class: "pager-link prev",
					href: H(o).prev.link,
					target: H(o).prev.target,
					rel: H(o).prev.rel
				}, {
					default: q(() => [O("span", {
						class: "desc",
						innerHTML: H(t).docFooter?.prev || "Previous page"
					}, null, 8, pn), O("span", {
						class: "title",
						innerHTML: H(o).prev.text
					}, null, 8, mn)]),
					_: 1
				}, 8, [
					"href",
					"target",
					"rel"
				])) : E("", !0)]),
				O("div", hn, [H(o).next?.link ? (F(), T(Z, {
					key: 0,
					class: "pager-link next",
					href: H(o).next.link,
					target: H(o).next.target,
					rel: H(o).next.rel
				}, {
					default: q(() => [O("span", {
						class: "desc",
						innerHTML: H(t).docFooter?.next || "Next page"
					}, null, 8, gn), O("span", {
						class: "title",
						innerHTML: H(o).next.text
					}, null, 8, _n)]),
					_: 1
				}, 8, [
					"href",
					"target",
					"rel"
				])) : E("", !0)])
			])) : E("", !0)
		])) : E("", !0);
	}
}, [["__scopeId", "data-v-7b49853b"]]), yn = { class: "container" }, bn = { class: "aside-container" }, xn = { class: "aside-content" }, Sn = { class: "content" }, Cn = { class: "content-container" }, wn = { class: "main" }, Tn = /*#__PURE__*/ f({
	__name: "VPDoc",
	setup(e) {
		let { theme: n, site: i } = r(), a = S(), { hasSidebar: o, hasAside: s, leftAside: c } = X(), l = w(() => (t(i.value.base) ? "/" + a.path.slice(m().length) : a.path).replace(/[./]+/g, "_").replace(/_html$/, ""));
		return (e, t) => {
			let r = z("Content");
			return F(), D("div", { class: N(["VPDoc", {
				"has-sidebar": H(o),
				"has-aside": H(s)
			}]) }, [
				R(e.$slots, "doc-top", {}, void 0, !0),
				O("div", yn, [H(s) ? (F(), D("div", {
					key: 0,
					class: N(["aside", { "left-aside": H(c) }])
				}, [t[0] ||= O("div", { class: "aside-curtain" }, null, -1), O("div", bn, [O("div", xn, [A(en, null, {
					"aside-top": q(() => [R(e.$slots, "aside-top", {}, void 0, !0)]),
					"aside-bottom": q(() => [R(e.$slots, "aside-bottom", {}, void 0, !0)]),
					"aside-outline-before": q(() => [R(e.$slots, "aside-outline-before", {}, void 0, !0)]),
					"aside-outline-after": q(() => [R(e.$slots, "aside-outline-after", {}, void 0, !0)]),
					"aside-ads-before": q(() => [R(e.$slots, "aside-ads-before", {}, void 0, !0)]),
					"aside-ads-after": q(() => [R(e.$slots, "aside-ads-after", {}, void 0, !0)]),
					_: 3
				})])])], 2)) : E("", !0), O("div", Sn, [O("div", Cn, [
					R(e.$slots, "doc-before", {}, void 0, !0),
					O("main", wn, [A(r, { class: N(["vp-doc", [l.value, H(n).externalLinkIcon && "external-link-icon-enabled"]]) }, null, 8, ["class"])]),
					A(vn, null, {
						"doc-footer-before": q(() => [R(e.$slots, "doc-footer-before", {}, void 0, !0)]),
						_: 3
					}),
					R(e.$slots, "doc-after", {}, void 0, !0)
				])])]),
				R(e.$slots, "doc-bottom", {}, void 0, !0)
			], 2);
		};
	}
}, [["__scopeId", "data-v-8ba3d45b"]]), En = {}, Dn = { class: "VPHomeContent vp-doc container" };
function On(e, t) {
	return F(), D("div", Dn, [R(e.$slots, "default", {}, void 0, !0)]);
}
var kn = /*#__PURE__*/ f(En, [["render", On], ["__scopeId", "data-v-d438e14a"]]), An = ["src", "alt"], jn = /*#__PURE__*/ f(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
	__name: "VPImage",
	props: {
		image: {
			type: [String, Object],
			required: !0
		},
		alt: {
			type: String,
			required: !1
		}
	},
	setup(e) {
		return (t, n) => {
			let r = z("VPImage", !0);
			return e.image ? (F(), D(C, { key: 0 }, [typeof e.image == "string" || "src" in e.image ? (F(), D("img", M({
				key: 0,
				class: "VPImage"
			}, typeof e.image == "string" ? t.$attrs : {
				...e.image,
				...t.$attrs
			}, {
				src: H(De)(typeof e.image == "string" ? e.image : e.image.src),
				alt: e.alt ?? (typeof e.image == "string" ? "" : e.image.alt || "")
			}), null, 16, An)) : (F(), D(C, { key: 1 }, [A(r, M({
				class: "dark",
				image: e.image.dark,
				alt: e.image.alt
			}, t.$attrs), null, 16, ["image", "alt"]), A(r, M({
				class: "light",
				image: e.image.light,
				alt: e.image.alt
			}, t.$attrs), null, 16, ["image", "alt"])], 64))], 64)) : E("", !0);
		};
	}
}), [["__scopeId", "data-v-b7995f32"]]), Mn = { class: "box" }, Nn = {
	key: 0,
	class: "icon"
}, Pn = ["innerHTML"], Fn = ["innerHTML"], In = {
	key: 3,
	class: "details"
}, Ln = ["innerHTML"], Rn = ["innerHTML"], zn = {
	key: 5,
	class: "link-text"
}, Bn = { class: "link-text-value" }, Vn = /*#__PURE__*/ f({
	__name: "VPFeature",
	props: {
		icon: {
			type: [String, Object],
			required: !1
		},
		title: {
			type: String,
			required: !0
		},
		details: {
			type: String,
			required: !1
		},
		link: {
			type: String,
			required: !1
		},
		linkText: {
			type: String,
			required: !1
		},
		rel: {
			type: String,
			required: !1
		},
		target: {
			type: String,
			required: !1
		}
	},
	setup(e) {
		return (t, n) => (F(), T(Z, {
			class: "VPFeature",
			href: e.link,
			rel: e.rel,
			target: e.target,
			"no-icon": !0,
			tag: e.link ? "a" : "div"
		}, {
			default: q(() => [O("article", Mn, [
				typeof e.icon == "object" && e.icon.wrap ? (F(), D("div", Nn, [A(jn, {
					image: e.icon,
					alt: e.icon.alt,
					height: e.icon.height || 48,
					width: e.icon.width || 48
				}, null, 8, [
					"image",
					"alt",
					"height",
					"width"
				])])) : typeof e.icon == "object" ? (F(), T(jn, {
					key: 1,
					image: e.icon,
					alt: e.icon.alt,
					height: e.icon.height || 48,
					width: e.icon.width || 48
				}, null, 8, [
					"image",
					"alt",
					"height",
					"width"
				])) : e.icon ? (F(), D("div", {
					key: 2,
					class: "icon",
					innerHTML: e.icon
				}, null, 8, Pn)) : E("", !0),
				O("h2", {
					class: "title",
					innerHTML: e.title
				}, null, 8, Fn),
				Array.isArray(e.details) ? (F(), D("ul", In, [(F(!0), D(C, null, L(e.details, (e) => (F(), D("li", {
					key: e,
					innerHTML: e
				}, null, 8, Ln))), 128))])) : e.details ? (F(), D("p", {
					key: 4,
					class: "details",
					innerHTML: e.details
				}, null, 8, Rn)) : E("", !0),
				e.linkText ? (F(), D("div", zn, [O("p", Bn, [k(V(e.linkText) + " ", 1), n[0] ||= O("span", { class: "vpi-arrow-right link-text-icon" }, null, -1)])])) : E("", !0)
			])]),
			_: 1
		}, 8, [
			"href",
			"rel",
			"target",
			"tag"
		]));
	}
}, [["__scopeId", "data-v-aba599ce"]]), Hn = {
	key: 0,
	class: "VPFeatures"
}, Un = { class: "container" }, Wn = { class: "items" }, Gn = /*#__PURE__*/ f({
	__name: "VPFeatures",
	props: { features: {
		type: Array,
		required: !0
	} },
	setup(e) {
		let t = e, n = w(() => {
			let e = t.features.length;
			if (e) {
				if (e === 2) return "grid-2";
				if (e === 3) return "grid-3";
				if (e % 3 == 0) return "grid-6";
				if (e > 3) return "grid-4";
			}
		});
		return (t, r) => e.features ? (F(), D("div", Hn, [O("div", Un, [O("ul", Wn, [(F(!0), D(C, null, L(e.features, (e) => (F(), D("li", {
			key: e.title,
			class: N(["item", [n.value]])
		}, [A(Vn, {
			icon: e.icon,
			title: e.title,
			details: e.details,
			link: e.link,
			"link-text": e.linkText,
			rel: e.rel,
			target: e.target
		}, null, 8, [
			"icon",
			"title",
			"details",
			"link",
			"link-text",
			"rel",
			"target"
		])], 2))), 128))])])])) : E("", !0);
	}
}, [["__scopeId", "data-v-702930b9"]]), Kn = {
	__name: "VPHomeFeatures",
	setup(e) {
		let { frontmatter: t } = r();
		return (e, n) => H(t).features ? (F(), T(Gn, {
			key: 0,
			class: "VPHomeFeatures",
			features: H(t).features
		}, null, 8, ["features"])) : E("", !0);
	}
}, qn = /*#__PURE__*/ f({
	__name: "VPButton",
	props: {
		tag: {
			type: String,
			required: !1
		},
		size: {
			type: String,
			required: !1,
			default: "medium"
		},
		theme: {
			type: String,
			required: !1,
			default: "brand"
		},
		text: {
			type: String,
			required: !1
		},
		href: {
			type: String,
			required: !1
		},
		target: {
			type: String,
			required: !1
		},
		rel: {
			type: String,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = w(() => t.href && o.test(t.href)), r = w(() => t.tag || (t.href ? "a" : "button"));
		return (i, a) => (F(), T(B(r.value), {
			class: N(["VPButton no-icon", [e.size, e.theme]]),
			href: e.href ? H(st)(e.href) : void 0,
			target: t.target ?? (n.value ? "_blank" : void 0),
			rel: t.rel ?? (n.value ? "noreferrer" : void 0)
		}, {
			default: q(() => [R(i.$slots, "default", {}, () => [k(V(e.text), 1)], !0)]),
			_: 3
		}, 8, [
			"class",
			"href",
			"target",
			"rel"
		]));
	}
}, [["__scopeId", "data-v-5d59b88c"]]), Jn = { class: "container" }, Yn = { class: "main" }, Xn = { class: "heading" }, Zn = ["innerHTML"], Qn = ["innerHTML"], $n = ["innerHTML"], er = {
	key: 0,
	class: "actions"
}, tr = {
	key: 0,
	class: "image"
}, nr = { class: "image-container" }, rr = /*#__PURE__*/ f({
	__name: "VPHero",
	props: {
		name: {
			type: String,
			required: !1
		},
		text: {
			type: String,
			required: !1
		},
		tagline: {
			type: String,
			required: !1
		},
		image: {
			type: [String, Object],
			required: !1
		},
		actions: {
			type: Array,
			required: !1
		}
	},
	setup(e) {
		let { heroImageSlotExists: t } = j(kt, { heroImageSlotExists: w(() => !1) });
		return (n, r) => (F(), D("div", { class: N(["VPHero", { "has-image": e.image || H(t) }]) }, [O("div", Jn, [O("div", Yn, [
			R(n.$slots, "home-hero-info-before", {}, void 0, !0),
			R(n.$slots, "home-hero-info", {}, () => [O("h1", Xn, [e.name ? (F(), D("span", {
				key: 0,
				innerHTML: e.name,
				class: "name clip"
			}, null, 8, Zn)) : E("", !0), e.text ? (F(), D("span", {
				key: 1,
				innerHTML: e.text,
				class: "text"
			}, null, 8, Qn)) : E("", !0)]), e.tagline ? (F(), D("p", {
				key: 0,
				innerHTML: e.tagline,
				class: "tagline"
			}, null, 8, $n)) : E("", !0)], !0),
			R(n.$slots, "home-hero-info-after", {}, void 0, !0),
			e.actions ? (F(), D("div", er, [R(n.$slots, "home-hero-actions-before-actions", {}, void 0, !0), (F(!0), D(C, null, L(e.actions, (e) => (F(), D("div", {
				key: e.link,
				class: "action"
			}, [A(qn, {
				tag: "a",
				size: "medium",
				theme: e.theme,
				text: e.text,
				href: e.link,
				target: e.target,
				rel: e.rel
			}, null, 8, [
				"theme",
				"text",
				"href",
				"target",
				"rel"
			])]))), 128))])) : E("", !0),
			R(n.$slots, "home-hero-actions-after", {}, void 0, !0)
		]), e.image || H(t) ? (F(), D("div", tr, [O("div", nr, [r[0] ||= O("div", { class: "image-bg" }, null, -1), R(n.$slots, "home-hero-image", {}, () => [e.image ? (F(), T(jn, {
			key: 0,
			class: "image-src",
			image: e.image
		}, null, 8, ["image"])) : E("", !0)], !0)])])) : E("", !0)])], 2));
	}
}, [["__scopeId", "data-v-39c3ef28"]]), ir = {
	__name: "VPHomeHero",
	setup(e) {
		let { frontmatter: t } = r();
		return (e, n) => H(t).hero ? (F(), T(rr, {
			key: 0,
			class: "VPHomeHero",
			name: H(t).hero.name,
			text: H(t).hero.text,
			tagline: H(t).hero.tagline,
			image: H(t).hero.image,
			actions: H(t).hero.actions
		}, {
			"home-hero-info-before": q(() => [R(e.$slots, "home-hero-info-before")]),
			"home-hero-info": q(() => [R(e.$slots, "home-hero-info")]),
			"home-hero-info-after": q(() => [R(e.$slots, "home-hero-info-after")]),
			"home-hero-actions-after": q(() => [R(e.$slots, "home-hero-actions-after")]),
			"home-hero-actions-before-actions": q(() => [R(e.$slots, "home-hero-actions-before-actions")]),
			"home-hero-image": q(() => [R(e.$slots, "home-hero-image")]),
			_: 3
		}, 8, [
			"name",
			"text",
			"tagline",
			"image",
			"actions"
		])) : E("", !0);
	}
}, ar = /*#__PURE__*/ f({
	__name: "VPHome",
	setup(e) {
		let { frontmatter: t, theme: n } = r();
		return (e, r) => {
			let i = z("Content");
			return F(), D("div", { class: N(["VPHome", { "external-link-icon-enabled": H(n).externalLinkIcon }]) }, [
				R(e.$slots, "home-hero-before", {}, void 0, !0),
				A(ir, null, {
					"home-hero-info-before": q(() => [R(e.$slots, "home-hero-info-before", {}, void 0, !0)]),
					"home-hero-info": q(() => [R(e.$slots, "home-hero-info", {}, void 0, !0)]),
					"home-hero-info-after": q(() => [R(e.$slots, "home-hero-info-after", {}, void 0, !0)]),
					"home-hero-actions-after": q(() => [R(e.$slots, "home-hero-actions-after", {}, void 0, !0)]),
					"home-hero-actions-before-actions": q(() => [R(e.$slots, "home-hero-actions-before-actions", {}, void 0, !0)]),
					"home-hero-image": q(() => [R(e.$slots, "home-hero-image", {}, void 0, !0)]),
					_: 3
				}),
				R(e.$slots, "home-hero-after", {}, void 0, !0),
				R(e.$slots, "home-features-before", {}, void 0, !0),
				A(Kn),
				R(e.$slots, "home-features-after", {}, void 0, !0),
				H(t).markdownStyles === !1 ? (F(), T(i, { key: 1 })) : (F(), T(kn, { key: 0 }, {
					default: q(() => [A(i)]),
					_: 1
				}))
			], 2);
		};
	}
}, [["__scopeId", "data-v-b991a01d"]]), or = {}, sr = { class: "VPPage" };
function cr(e, t) {
	let n = z("Content");
	return F(), D("div", sr, [
		R(e.$slots, "page-top"),
		A(n),
		R(e.$slots, "page-bottom")
	]);
}
var lr = /*#__PURE__*/ f(or, [["render", cr]]), ur = /*#__PURE__*/ f({
	__name: "VPContent",
	setup(e) {
		let { page: t, frontmatter: n } = r(), { isHome: i, hasSidebar: a } = X();
		function o(e) {
			return typeof B(e) != "string";
		}
		return (e, r) => (F(), D("div", {
			class: N(["VPContent", {
				"has-sidebar": H(a),
				"is-home": H(i)
			}]),
			id: "VPContent"
		}, [H(t).isNotFound ? R(e.$slots, "not-found", {}, () => [A(Gt)], !0, 0) : H(n).layout === "page" && !o("page") ? (F(), T(lr, { key: 1 }, {
			"page-top": q(() => [R(e.$slots, "page-top", {}, void 0, !0)]),
			"page-bottom": q(() => [R(e.$slots, "page-bottom", {}, void 0, !0)]),
			_: 3
		})) : H(n).layout === "home" && !o("home") ? (F(), T(ar, { key: 2 }, {
			"home-hero-before": q(() => [R(e.$slots, "home-hero-before", {}, void 0, !0)]),
			"home-hero-info-before": q(() => [R(e.$slots, "home-hero-info-before", {}, void 0, !0)]),
			"home-hero-info": q(() => [R(e.$slots, "home-hero-info", {}, void 0, !0)]),
			"home-hero-info-after": q(() => [R(e.$slots, "home-hero-info-after", {}, void 0, !0)]),
			"home-hero-actions-after": q(() => [R(e.$slots, "home-hero-actions-after", {}, void 0, !0)]),
			"home-hero-actions-before-actions": q(() => [R(e.$slots, "home-hero-actions-before-actions", {}, void 0, !0)]),
			"home-hero-image": q(() => [R(e.$slots, "home-hero-image", {}, void 0, !0)]),
			"home-hero-after": q(() => [R(e.$slots, "home-hero-after", {}, void 0, !0)]),
			"home-features-before": q(() => [R(e.$slots, "home-features-before", {}, void 0, !0)]),
			"home-features-after": q(() => [R(e.$slots, "home-features-after", {}, void 0, !0)]),
			_: 3
		})) : (!H(n).layout || H(n).layout === "doc") && !o("doc") ? (F(), T(Tn, { key: 3 }, {
			"doc-top": q(() => [R(e.$slots, "doc-top", {}, void 0, !0)]),
			"doc-bottom": q(() => [R(e.$slots, "doc-bottom", {}, void 0, !0)]),
			"doc-footer-before": q(() => [R(e.$slots, "doc-footer-before", {}, void 0, !0)]),
			"doc-before": q(() => [R(e.$slots, "doc-before", {}, void 0, !0)]),
			"doc-after": q(() => [R(e.$slots, "doc-after", {}, void 0, !0)]),
			"aside-top": q(() => [R(e.$slots, "aside-top", {}, void 0, !0)]),
			"aside-outline-before": q(() => [R(e.$slots, "aside-outline-before", {}, void 0, !0)]),
			"aside-outline-after": q(() => [R(e.$slots, "aside-outline-after", {}, void 0, !0)]),
			"aside-ads-before": q(() => [R(e.$slots, "aside-ads-before", {}, void 0, !0)]),
			"aside-ads-after": q(() => [R(e.$slots, "aside-ads-after", {}, void 0, !0)]),
			"aside-bottom": q(() => [R(e.$slots, "aside-bottom", {}, void 0, !0)]),
			_: 3
		})) : (F(), T(B(H(n).layout || "doc"), { key: 4 }))], 2));
	}
}, [["__scopeId", "data-v-852b6936"]]), dr = { class: "container" }, fr = ["innerHTML"], pr = ["innerHTML"], mr = /*#__PURE__*/ f({
	__name: "VPFooter",
	setup(e) {
		let { theme: t, frontmatter: n } = r(), { hasSidebar: i } = X();
		return (e, r) => H(t).footer && H(n).footer !== !1 ? (F(), D("footer", {
			key: 0,
			class: N(["VPFooter", { "has-sidebar": H(i) }])
		}, [O("div", dr, [H(t).footer.message ? (F(), D("p", {
			key: 0,
			class: "message",
			innerHTML: H(t).footer.message
		}, null, 8, fr)) : E("", !0), H(t).footer.copyright ? (F(), D("p", {
			key: 1,
			class: "copyright",
			innerHTML: H(t).footer.copyright
		}, null, 8, pr)) : E("", !0)])], 2)) : E("", !0);
	}
}, [["__scopeId", "data-v-dd9e2ea5"]]), hr = ["aria-expanded", "aria-controls"], gr = { class: "menu-text" }, _r = ["id"], vr = { class: "header" }, yr = { class: "outline" }, br = /*#__PURE__*/ f({
	__name: "VPLocalNavOutlineDropdown",
	props: {
		headers: {
			type: Array,
			required: !0
		},
		navHeight: {
			type: Number,
			required: !0
		}
	},
	setup(e) {
		let t = e, { theme: n } = r(), i = I(!1), a = I(0), o = W("main"), s = W("items"), c = U(), l = h();
		function d(e) {
			o.value?.contains(e.target) || (i.value = !1);
		}
		G(i, (e) => {
			l.value = e, e ? document.addEventListener("click", d) : document.removeEventListener("click", d);
		}), u("Escape", () => {
			i.value = !1;
		}), Te(() => {
			i.value = !1;
		});
		function f() {
			i.value = !i.value, a.value = window.innerHeight + Math.min(window.scrollY - t.navHeight, 0);
		}
		function p(e) {
			e.target.classList.contains("outline-link") && (s.value && (s.value.style.transition = "none"), je(() => {
				i.value = !1;
			}));
		}
		function m() {
			i.value = !1, window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
		}
		return (t, r) => (F(), D("div", {
			ref_key: "main",
			ref: o,
			class: "VPLocalNavOutlineDropdown",
			style: Me({ "--vp-vh": a.value + "px" }),
			"data-allow-mismatch": "style"
		}, [e.headers.length > 0 ? (F(), D("button", {
			key: 0,
			type: "button",
			"aria-expanded": i.value,
			"aria-controls": H(c),
			class: N({ open: i.value }),
			onClick: f
		}, [O("span", gr, V(H(gt)(H(n))), 1), r[0] ||= O("span", {
			class: "vpi-chevron-right icon",
			"aria-hidden": "true"
		}, null, -1)], 10, hr)) : (F(), D("button", {
			key: 1,
			type: "button",
			onClick: m
		}, V(H(n).returnToTopLabel || "Return to top"), 1)), A(Oe, { name: "flyout" }, {
			default: q(() => [i.value ? (F(), D("div", {
				key: 0,
				ref_key: "items",
				ref: s,
				id: H(c),
				class: "items",
				onClick: p
			}, [O("div", vr, [O("a", {
				class: "top-link",
				href: "#",
				onClick: m
			}, V(H(n).returnToTopLabel || "Return to top"), 1)]), O("div", yr, [A(Yt, { headers: e.headers }, null, 8, ["headers"])])], 8, _r)) : E("", !0)]),
			_: 1
		})], 4));
	}
}, [["__scopeId", "data-v-a9770819"]]), xr = { class: "container" }, Sr = ["aria-expanded"], Cr = { class: "menu-text" }, wr = /*#__PURE__*/ f({
	__name: "VPLocalNav",
	props: { open: {
		type: Boolean,
		required: !0
	} },
	emits: ["open-menu"],
	setup(e) {
		let { theme: t } = r(), { isHome: n, hasSidebar: i, headers: a, hasLocalNav: o } = X(), { y: s } = p(), c = I(0);
		P(() => {
			let e = document.createElement("div");
			e.style.cssText = "position: absolute; visibility: hidden; height: var(--vp-nav-height)", document.body.appendChild(e), c.value = e.offsetHeight, e.remove();
		});
		let l = w(() => s.value >= c.value);
		return (r, s) => !H(n) && (H(o) || H(i) || l.value) ? (F(), D("div", {
			key: 0,
			class: N(["VPLocalNav", {
				"has-sidebar": H(i),
				empty: !H(o),
				fixed: !H(o) && !H(i)
			}])
		}, [O("div", xr, [H(i) ? (F(), D("button", {
			key: 0,
			type: "button",
			class: "menu",
			"aria-expanded": e.open,
			"aria-controls": "VPSidebarNav",
			onClick: s[0] ||= (e) => r.$emit("open-menu")
		}, [s[1] ||= O("span", {
			class: "vpi-align-left menu-icon",
			"aria-hidden": "true"
		}, null, -1), O("span", Cr, V(H(t).sidebarMenuLabel || "Menu"), 1)], 8, Sr)) : E("", !0), A(br, {
			headers: H(a),
			navHeight: c.value
		}, null, 8, ["headers", "navHeight"])])], 2)) : E("", !0);
	}
}, [["__scopeId", "data-v-19dde0b7"]]), Tr = I(!1), Er = Ve(null);
function Dr() {
	Tr.value = !0;
}
function Or() {
	Tr.value = !1;
}
function kr() {
	Tr.value ? Or() : Dr();
}
var Ar = !1;
function jr() {
	if (x && !Ar) {
		Ar = !0;
		let e = d("(min-width: 48rem)");
		l(e, Or);
		let t = S();
		G(() => t.path, Or);
	}
	return {
		isScreenOpen: Tr,
		screenTriggerEl: Er,
		openScreen: Dr,
		closeScreen: Or,
		toggleScreen: kr
	};
}
function Mr() {
	let { site: e } = r();
	return w(() => !!e.value.appearance && e.value.appearance !== "force-dark" && e.value.appearance !== "force-auto");
}
function Nr(t) {
	let n = S(), r = w(() => {
		let { link: e } = He(t);
		return typeof e == "function" ? e(n.data) : e;
	});
	return {
		href: r,
		isActiveLink: w(() => {
			let { activeMatch: i } = He(t);
			return e(n.data.relativePath, n.hash, i || r.value, !!i);
		}),
		isCurrentLink: w(() => e(n.data.relativePath, n.hash, r.value))
	};
}
var Pr = Symbol("nav"), Fr = Symbol("nav-screen"), Ir = [
	"translations",
	"appearance",
	"socialLinks"
], Lr = {
	visibleItemCount: Infinity,
	translations: !0,
	appearance: !0,
	socialLinks: !0
};
function Rr(e) {
	let { itemWidths: t, available: n, extraWidth: r } = e, i = t.reduce((e, t) => e + t, 0);
	if (i + ((e.translations ?? 0) + (e.appearance ?? 0) + (e.socialLinks ?? 0)) <= n) return Lr;
	let a = n - r;
	if (i > a) {
		let n = 0, r = 0;
		for (let e of t) {
			if (n + e > a) break;
			n += e, r++;
		}
		return {
			visibleItemCount: r,
			translations: e.translations == null,
			appearance: e.appearance == null,
			socialLinks: e.socialLinks == null
		};
	}
	let o = { ...Lr }, s = i, c = !1;
	for (let t of Ir) {
		let n = e[t];
		n != null && (c || s + n > a ? (c = !0, o[t] = !1) : s += n);
	}
	return o;
}
var zr = 24, Br = 48, Vr = Symbol("nav-overflow");
function Q() {
	return j(Vr, null);
}
function Hr(e) {
	let t = Re({ ...Lr }), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = null, a = null, o = null, s = Br, c = null, l = /* @__PURE__ */ new Set(), u = !1;
	function f(e) {
		x && e instanceof Element && !l.has(e) && (l.add(e), (c ??= new ResizeObserver(p)).observe(e));
	}
	function p() {
		x && !u && (u = !0, requestAnimationFrame(() => {
			u = !1, te();
		}));
	}
	let m = {
		state: t,
		hasCollapsed: () => t.visibleItemCount !== Infinity || !t.translations || !t.appearance || !t.socialLinks,
		setContainerEl(e) {
			i = e, f(e), p();
		},
		setMenuEl(e) {
			a = e, f(e), p();
		},
		setExtraEl(e) {
			o = e, f(e), p();
		},
		setItemEl(e, t) {
			t ? n.set(e, t) : n.delete(e), f(t), p();
		},
		setClusterEl(e, t) {
			t ? r.set(e, t) : r.delete(e), f(t), p();
		}
	};
	if (Le(Vr, m), !x) return m;
	let h = d("(min-width: 48rem)");
	function ee(e) {
		return Math.max(e.offsetWidth, e.scrollWidth);
	}
	function te() {
		if (!h.value) return g(Lr);
		if (!i) return;
		o && o.offsetWidth > 0 && (s = o.offsetWidth);
		let e = 0;
		for (let t of Array.from(i.children)) {
			if (!(t instanceof HTMLElement) || t === a || t === o) continue;
			let n = !1;
			for (let e of r.values()) if (e === t) {
				n = !0;
				break;
			}
			n || (e += t.offsetWidth);
		}
		let t = [];
		for (let e = 0; e < n.size; e++) {
			let r = n.get(e);
			if (!r) return;
			t.push(ee(r));
		}
		let c = (e) => {
			let t = r.get(e);
			return t ? ee(t) : null;
		};
		g(Rr({
			itemWidths: t,
			translations: c("translations"),
			appearance: c("appearance"),
			socialLinks: c("socialLinks"),
			available: i.clientWidth - e - zr,
			extraWidth: s
		}));
	}
	function g(e) {
		t.visibleItemCount !== e.visibleItemCount && (t.visibleItemCount = e.visibleItemCount);
		for (let n of Ir) t[n] !== e[n] && (t[n] = e[n]);
	}
	return G(h, p), G(() => He(e.itemsKey), p), document.fonts?.ready && document.fonts.ready.then(p).catch(() => {}), Pe(() => {
		c?.disconnect(), c = null, l.clear();
	}), m;
}
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue
var Ur = {}, Wr = {
	class: "VPSwitch",
	type: "button",
	role: "switch"
}, Gr = { class: "check" }, Kr = {
	key: 0,
	class: "icon"
};
function qr(e, t) {
	return F(), D("button", Wr, [O("span", Gr, [e.$slots.default ? (F(), D("span", Kr, [R(e.$slots, "default", {}, void 0, !0)])) : E("", !0)])]);
}
var Jr = /*#__PURE__*/ f(Ur, [["render", qr], ["__scopeId", "data-v-a2ada4fc"]]), Yr = /*#__PURE__*/ f({
	__name: "VPSwitchAppearance",
	setup(e) {
		let { isDark: t, theme: n } = r(), i = j("toggle-appearance", () => {
			t.value = !t.value;
		}), a = I("");
		return Ge(() => {
			a.value = t.value ? n.value.lightModeSwitchTitle || "Switch to light theme" : n.value.darkModeSwitchTitle || "Switch to dark theme";
		}), (e, r) => (F(), T(Jr, {
			title: a.value,
			class: "VPSwitchAppearance",
			"aria-label": H(n).darkModeSwitchLabel || "Appearance",
			"aria-checked": H(t),
			onClick: H(i)
		}, {
			default: q(() => [...r[0] ||= [O("span", {
				class: "vpi-sun sun",
				"aria-hidden": "true"
			}, null, -1), O("span", {
				class: "vpi-moon moon",
				"aria-hidden": "true"
			}, null, -1)]]),
			_: 1
		}, 8, [
			"title",
			"aria-label",
			"aria-checked",
			"onClick"
		]));
	}
}, [["__scopeId", "data-v-2d2da833"]]), Xr = ["id"], Zr = /*#__PURE__*/ f({
	__name: "VPNavAppearance",
	props: {
		row: {
			type: Boolean,
			required: !1
		},
		screen: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e, { theme: n } = r(), i = Mr(), a = t.row ? null : Q(), o = w(() => !!a && !a.state.appearance), s = U();
		return (t, r) => H(i) ? (F(), D("div", {
			key: 0,
			class: N(["VPNavAppearance", [e.row ? e.screen ? "VPNavScreenAppearance" : "menu-appearance" : "VPNavBarAppearance", { collapsed: o.value }]]),
			ref: (e) => H(a)?.setClusterEl("appearance", e)
		}, [e.row ? (F(), D("p", {
			key: 0,
			id: H(s),
			class: "text"
		}, V(H(n).darkModeSwitchLabel || "Appearance"), 9, Xr)) : E("", !0), A(Yr, { "aria-labelledby": e.row ? H(s) : void 0 }, null, 8, ["aria-labelledby"])], 2)) : E("", !0);
	}
}, [["__scopeId", "data-v-0526efd6"]]), Qr = I(), $r = !1, ei = 0;
function ti(e) {
	let t = I(!1);
	if (x) {
		!$r && ni(), ei++;
		let n = G(Qr, (n) => {
			n === e.el.value || e.el.value?.contains(n) ? (t.value = !0, e.onFocus?.()) : (t.value = !1, e.onBlur?.());
		});
		Fe(() => {
			n(), ei--, ei || ri();
		});
	}
	return ze(t);
}
function ni() {
	document.addEventListener("focusin", ii), $r = !0, Qr.value = document.activeElement;
}
function ri() {
	document.removeEventListener("focusin", ii), $r = !1;
}
function ii() {
	Qr.value = document.activeElement;
}
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue
var ai = { class: "VPMenuLink" }, oi = ["innerHTML"], $ = /*#__PURE__*/ f(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
	__name: "VPMenuLink",
	props: {
		item: {
			type: null,
			required: !0
		},
		rel: {
			type: String,
			required: !1
		}
	},
	setup(e) {
		let t = e, { href: n, isActiveLink: r, isCurrentLink: i } = Nr(() => t.item), a = j(Fr, !1), o = j(Pr, null);
		function s() {
			a && o?.closeScreen();
		}
		return (o, c) => (F(), D("li", ai, [A(Z, M(o.$attrs, {
			class: {
				active: H(r),
				VPNavScreenMenuGroupLink: H(a)
			},
			"aria-current": H(i) ? "page" : void 0,
			href: H(n),
			target: e.item.target,
			rel: t.rel ?? e.item.rel,
			"no-icon": e.item.noIcon,
			onClick: s
		}), {
			default: q(() => [O("span", { innerHTML: e.item.text }, null, 8, oi)]),
			_: 1
		}, 16, [
			"class",
			"aria-current",
			"href",
			"target",
			"rel",
			"no-icon"
		])]));
	}
}), [["__scopeId", "data-v-ef274441"]]), si = {
	key: 0,
	class: "title"
}, ci = /*#__PURE__*/ f({
	__name: "VPMenuGroup",
	props: {
		text: {
			type: String,
			required: !1
		},
		items: {
			type: Array,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = j(Fr, !1), r = w(() => t.items.some((e) => !("link" in e) && !("component" in e)));
		return (t, i) => {
			let a = z("VPMenuGroup", !0);
			return F(), D("li", { class: N(["VPMenuGroup", { VPNavScreenMenuGroupSection: H(n) }]) }, [e.text ? (F(), D("p", si, V(e.text), 1)) : E("", !0), O("ul", { class: N({ "sub-groups": r.value }) }, [(F(!0), D(C, null, L(e.items, (e) => (F(), D(C, { key: JSON.stringify(e) }, ["link" in e ? (F(), T($, {
				key: 0,
				item: e
			}, null, 8, ["item"])) : "component" in e ? (F(), T(B(e.component), M({
				key: 1,
				ref_for: !0
			}, e.props, {
				"screen-menu": H(n) || void 0,
				menu: !H(n) || void 0
			}), null, 16, ["screen-menu", "menu"])) : (F(), T(a, {
				key: 2,
				text: e.text,
				items: e.items
			}, null, 8, ["text", "items"]))], 64))), 128))], 2)], 2);
		};
	}
}, [["__scopeId", "data-v-a581e1a7"]]), li = { class: "VPMenu" }, ui = {
	key: 0,
	class: "items"
}, di = /*#__PURE__*/ f({
	__name: "VPMenu",
	props: { items: {
		type: Array,
		required: !1
	} },
	setup(e) {
		return (t, n) => (F(), D("div", li, [e.items ? (F(), D("ul", ui, [(F(!0), D(C, null, L(e.items, (e) => (F(), D(C, { key: JSON.stringify(e) }, ["link" in e ? (F(), T($, {
			key: 0,
			item: e
		}, null, 8, ["item"])) : "component" in e ? (F(), T(B(e.component), M({
			key: 1,
			ref_for: !0
		}, e.props, { menu: "" }), null, 16)) : (F(), T(ci, {
			key: 2,
			text: e.text,
			items: e.items
		}, null, 8, ["text", "items"]))], 64))), 128))])) : E("", !0), R(t.$slots, "default", {}, void 0, !0)]));
	}
}, [["__scopeId", "data-v-be0e6f32"]]), fi = [
	"aria-expanded",
	"aria-controls",
	"aria-label"
], pi = {
	key: 0,
	class: "text"
}, mi = ["innerHTML"], hi = {
	key: 1,
	class: "vpi-more-horizontal icon",
	"aria-hidden": "true"
}, gi = ["id"], _i = /*#__PURE__*/ f({
	__name: "VPFlyout",
	props: {
		icon: {
			type: String,
			required: !1
		},
		button: {
			type: String,
			required: !1
		},
		label: {
			type: String,
			required: !1
		},
		items: {
			type: Array,
			required: !1
		}
	},
	setup(e) {
		let t = I(!1), n = W("el"), r = W("buttonEl"), i = W("menuEl"), a = U();
		ti({
			el: n,
			onBlur: p
		});
		let o = S();
		G(() => o.path, p);
		let c = !1;
		function l(e) {
			e.pointerType === "mouse" && (t.value || (t.value = !0, c = !0));
		}
		function d(e) {
			if (e.pointerType !== "mouse") return;
			let t = e.relatedTarget;
			t && (r.value?.contains(t) || i.value?.contains(t)) || p();
		}
		function f() {
			t.value && c ? c = !1 : (c = !1, t.value = !t.value);
		}
		function p() {
			t.value = !1, c = !1;
		}
		return u("Escape", () => {
			if (!t.value) return;
			let e = n.value?.contains(document.activeElement);
			p(), e && n.value?.querySelector("button")?.focus();
		}), s("pointerdown", (e) => {
			t.value && n.value && !n.value.contains(e.target) && p();
		}), (o, s) => (F(), D("div", {
			class: "VPFlyout",
			ref_key: "el",
			ref: n
		}, [O("button", {
			ref_key: "buttonEl",
			ref: r,
			type: "button",
			class: "button",
			"aria-expanded": t.value,
			"aria-controls": H(a),
			"aria-label": e.label,
			onPointerenter: l,
			onPointerleave: d,
			onClick: f
		}, [e.button || e.icon ? (F(), D("span", pi, [
			e.icon ? (F(), D("span", {
				key: 0,
				class: N([e.icon, "option-icon"]),
				"aria-hidden": "true"
			}, null, 2)) : E("", !0),
			e.button ? (F(), D("span", {
				key: 1,
				innerHTML: e.button
			}, null, 8, mi)) : E("", !0),
			s[0] ||= O("span", {
				class: "vpi-chevron-down text-icon",
				"aria-hidden": "true"
			}, null, -1)
		])) : (F(), D("span", hi))], 40, fi), O("div", {
			ref_key: "menuEl",
			ref: i,
			class: "menu",
			id: H(a),
			onPointerleave: d
		}, [A(di, { items: e.items }, {
			default: q(() => [R(o.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["items"])], 40, gi)], 512));
	}
}, [["__scopeId", "data-v-7cc95988"]]), vi = ["aria-expanded", "aria-controls"], yi = ["id"], bi = {
	key: 1,
	class: "VPNavTranslations group translations"
}, xi = { class: "title" }, Si = { class: "title" }, Ci = { class: "items" }, wi = /*#__PURE__*/ f({
	__name: "VPNavTranslations",
	props: {
		screen: {
			type: Boolean,
			required: !1
		},
		menu: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e, { theme: n } = r(), { localeLinks: i, currentLang: a } = It({ linkToCorrespondingPage: !0 }), o = w(() => !!(i.value.length && a.value.label)), s = t.screen || t.menu ? null : Q(), c = w(() => !!s && !s.state.translations), l = I(!1), u = U();
		function d() {
			l.value = !l.value;
		}
		let f = (e) => ({
			lang: e.lang,
			hreflang: e.lang,
			rel: "alternate",
			dir: e.dir,
			"data-allow-mismatch": "attribute"
		});
		return (t, r) => e.screen && o.value ? (F(), D("div", {
			key: 0,
			class: N(["VPNavTranslations VPNavScreenTranslations", { open: l.value }])
		}, [O("button", {
			type: "button",
			class: "title",
			"aria-expanded": l.value,
			"aria-controls": H(u),
			onClick: d
		}, [
			r[0] ||= O("span", {
				class: "vpi-languages icon lang",
				"aria-hidden": "true"
			}, null, -1),
			k(" " + V(H(a).label) + " ", 1),
			r[1] ||= O("span", {
				class: "vpi-chevron-down icon chevron",
				"aria-hidden": "true"
			}, null, -1)
		], 8, vi), Ke(O("ul", {
			id: H(u),
			class: "list"
		}, [(F(!0), D(C, null, L(H(i), (e) => (F(), D("li", {
			key: e.link,
			class: "item"
		}, [A(Z, M({
			class: "link",
			href: e.link,
			external: !1
		}, { ref_for: !0 }, f(e)), {
			default: q(() => [k(V(e.text), 1)]),
			_: 2
		}, 1040, ["href"])]))), 128))], 8, yi), [[We, l.value]])], 2)) : e.menu && o.value ? (F(), D("div", bi, [O("p", xi, V(H(a).label), 1), O("ul", null, [(F(!0), D(C, null, L(H(i), (e) => (F(), T($, M({
			key: e.link,
			item: e,
			external: !1
		}, { ref_for: !0 }, f(e)), null, 16, ["item"]))), 128))])])) : !e.menu && o.value ? (F(), T(_i, {
			key: 2,
			class: N(["VPNavTranslations VPNavBarTranslations", { collapsed: c.value }]),
			icon: "vpi-languages",
			label: H(n).langMenuLabel || "Change language",
			ref: (e) => H(s)?.setClusterEl("translations", e?.$el ?? null)
		}, {
			default: q(() => [O("p", Si, V(H(a).label), 1), O("ul", Ci, [(F(!0), D(C, null, L(H(i), (e) => (F(), T($, M({
				key: e.link,
				item: e,
				external: !1
			}, { ref_for: !0 }, f(e)), null, 16, ["item"]))), 128))])]),
			_: 1
		}, 8, ["class", "label"])) : E("", !0);
	}
}, [["__scopeId", "data-v-6cb674f0"]]), Ti = ["innerHTML"], Ei = /*#__PURE__*/ f({
	__name: "VPIcon",
	props: { icon: {
		type: [String, Object],
		required: !0
	} },
	setup(e) {
		let t = e, n = W("el"), r = Ee(() => t.icon, n);
		return (t, i) => typeof e.icon == "object" ? (F(), D("span", {
			key: 0,
			class: "VPIcon",
			innerHTML: e.icon.svg
		}, null, 8, Ti)) : (F(), D("span", {
			key: 1,
			ref_key: "el",
			ref: n,
			class: N(H(r))
		}, null, 2));
	}
}, [["__scopeId", "data-v-890c5b71"]]), Di = [
	"href",
	"aria-label",
	"target",
	"rel"
], Oi = /*#__PURE__*/ f({
	__name: "VPSocialLink",
	props: {
		icon: {
			type: [String, Object],
			required: !0
		},
		link: {
			type: String,
			required: !0
		},
		ariaLabel: {
			type: String,
			required: !1
		},
		target: {
			type: String,
			required: !1
		},
		me: {
			type: Boolean,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = w(() => typeof t.icon == "string" && !t.icon.includes(":") ? `simple-icons:${t.icon}` : t.icon);
		return (t, r) => (F(), D("a", {
			class: "VPSocialLink no-icon",
			href: e.link,
			"aria-label": e.ariaLabel ?? (typeof e.icon == "string" ? e.icon : ""),
			target: e.target ?? (H(a)(e.link) ? "_blank" : void 0),
			rel: e.me ? "me noopener" : "noopener"
		}, [A(Ei, { icon: n.value }, null, 8, ["icon"])], 8, Di));
	}
}, [["__scopeId", "data-v-b08e7265"]]), ki = { class: "VPSocialLinks" }, Ai = /*#__PURE__*/ f({
	__name: "VPSocialLinks",
	props: {
		links: {
			type: Array,
			required: !0
		},
		me: {
			type: Boolean,
			required: !1,
			default: !0
		}
	},
	setup(e) {
		return (t, n) => (F(), D("ul", ki, [(F(!0), D(C, null, L(e.links, ({ link: t, icon: n, ariaLabel: r, target: i }) => (F(), D("li", { key: t }, [A(Oi, {
			icon: n,
			link: t,
			ariaLabel: r,
			target: i,
			me: e.me
		}, null, 8, [
			"icon",
			"link",
			"ariaLabel",
			"target",
			"me"
		])]))), 128))]));
	}
}, [["__scopeId", "data-v-c257d51e"]]), ji = {
	key: 0,
	class: "group overflow-items"
}, Mi = {
	key: 2,
	class: "group"
}, Ni = {
	key: 3,
	class: "group"
}, Pi = { class: "item social-links" }, Fi = /*#__PURE__*/ f({
	__name: "VPNavBarExtra",
	setup(e) {
		let { theme: t } = r(), { localeLinks: n, currentLang: i } = It({ linkToCorrespondingPage: !0 }), a = Mr(), o = Q(), s = w(() => {
			let e = o?.state.visibleItemCount ?? Infinity;
			return e === Infinity || !t.value.nav ? [] : t.value.nav.slice(e);
		}), c = w(() => !!(n.value.length && i.value.label) && !(o?.state.translations ?? !0)), l = w(() => a.value && !(o?.state.appearance ?? !0)), u = w(() => !!t.value.socialLinks && !(o?.state.socialLinks ?? !0)), d = w(() => s.value.length > 0 || c.value || l.value || u.value);
		return (e, n) => d.value ? (F(), T(_i, {
			key: 0,
			class: "VPNavBarExtra",
			label: H(t).extraMenuLabel || "More options",
			ref: (e) => H(o)?.setExtraEl(e?.$el ?? null)
		}, {
			default: q(() => [
				s.value.length ? (F(), D("ul", ji, [(F(!0), D(C, null, L(s.value, (e) => (F(), D(C, { key: JSON.stringify(e) }, ["link" in e ? (F(), T($, {
					key: 0,
					item: e
				}, null, 8, ["item"])) : "component" in e ? (F(), T(B(e.component), M({
					key: 1,
					ref_for: !0
				}, e.props, { menu: "" }), null, 16)) : (F(), T(ci, {
					key: 2,
					text: e.text,
					items: e.items
				}, null, 8, ["text", "items"]))], 64))), 128))])) : E("", !0),
				c.value ? (F(), T(wi, {
					key: 1,
					menu: ""
				})) : E("", !0),
				l.value ? (F(), D("div", Mi, [A(Zr, { row: "" })])) : E("", !0),
				u.value ? (F(), D("div", Ni, [O("div", Pi, [A(Ai, {
					class: "social-links-list",
					links: H(t).socialLinks
				}, null, 8, ["links"])])])) : E("", !0)
			]),
			_: 1
		}, 8, ["label"])) : E("", !0);
	}
}, [["__scopeId", "data-v-f1efe52e"]]), Ii = ["aria-label", "aria-expanded"], Li = /*#__PURE__*/ f({
	__name: "VPNavBarHamburger",
	props: { active: {
		type: Boolean,
		required: !0
	} },
	emits: ["click"],
	setup(e) {
		let { theme: t } = r(), n = W("el"), { screenTriggerEl: i } = jr();
		return K(() => {
			i.value = n.value;
		}), (r, i) => (F(), D("button", {
			ref_key: "el",
			ref: n,
			type: "button",
			class: N(["VPNavBarHamburger", { active: e.active }]),
			"aria-label": H(t).mobileMenuLabel || "Menu",
			"aria-expanded": e.active,
			onClick: i[0] ||= (e) => r.$emit("click")
		}, [...i[1] ||= [O("span", {
			class: "container",
			"aria-hidden": "true"
		}, [
			O("span", { class: "top" }),
			O("span", { class: "middle" }),
			O("span", { class: "bottom" })
		], -1)]], 10, Ii));
	}
}, [["__scopeId", "data-v-32c75667"]]);
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/support/reactivity.js
function Ri(e, t = (e, t) => JSON.stringify(e) === JSON.stringify(t)) {
	return w((n) => {
		let r = e();
		return n === void 0 || !t(r, n) ? r : n;
	});
}
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/components/VPNavBarAskAiButton.vue
var zi = {}, Bi = {
	type: "button",
	class: "VPNavBarAskAiButton"
};
function Vi(e, t) {
	return F(), D("button", Bi, [...t[0] ||= [O("span", {
		class: "vpi-sparkles",
		"aria-hidden": "true"
	}, null, -1)]]);
}
var Hi = /*#__PURE__*/ f(zi, [["render", Vi], ["__scopeId", "data-v-4c862795"]]), Ui = {
	type: "button",
	class: "VPNavBarSearchButton"
}, Wi = { class: "text" }, Gi = /*#__PURE__*/ f({
	__name: "VPNavBarSearchButton",
	props: { text: {
		type: String,
		required: !0
	} },
	setup(e) {
		return (t, n) => (F(), D("button", Ui, [
			n[0] ||= O("span", {
				class: "vpi-search",
				"aria-hidden": "true"
			}, null, -1),
			O("span", Wi, V(e.text), 1),
			n[1] ||= O("span", {
				class: "keys",
				"aria-hidden": "true"
			}, [O("kbd", { class: "key-mod" }), O("kbd", { class: "key-k" })], -1)
		]));
	}
}, [["__scopeId", "data-v-74241663"]]), Ki = { class: "VPNavBarSearch" }, qi = /*#__PURE__*/ f({
	__name: "VPNavBarSearch",
	setup(e) {
		let t = __VP_LOCAL_SEARCH__ ? ke(() => import("./VPLocalSearchBox-CVqPraXz.js")) : () => null, n = __ALGOLIA__ ? ke(() => import("./VPAlgoliaSearchBox-DI-v7DnE.js")) : () => null, { theme: i, localeIndex: a, lang: o } = r(), s = __ALGOLIA__ ? "algolia" : __VP_LOCAL_SEARCH__ ? "local" : "", c = Ri(() => te(i.value.search?.options || {}, a.value, o.value)), l = w(() => ee(c.value)), d = w(() => {
			if (!l.value.useSidePanel) return null;
			let e = c.value.askAi;
			return !e || typeof e == "string" || !e.sidePanel ? null : e.sidePanel === !0 ? {} : e.sidePanel;
		}), f = w(() => d.value?.keyboardShortcuts?.["Ctrl/Cmd+I"] !== !1), p = I(null), m = 0, h = I(!1), g = I(!1);
		P(() => {
			if (!__ALGOLIA__) return;
			let e = "VPAlgoliaPreconnect";
			if (document.getElementById(e)) return;
			let t = c.value.appId || (typeof c.value.askAi == "object" ? c.value.askAi?.appId : void 0);
			t && (window.requestIdleCallback || setTimeout)(() => {
				let n = document.createElement("link");
				n.id = e, n.rel = "preconnect", n.href = `https://${t}-dsn.algolia.net`, n.crossOrigin = "", document.head.appendChild(n);
			});
		}), __ALGOLIA__ && (u("k", (e) => {
			l.value.showKeywordSearch && (e.ctrlKey || e.metaKey) && (e.preventDefault(), _("search"));
		}), u("i", (e) => {
			d.value && f.value && (e.ctrlKey || e.metaKey) && (e.preventDefault(), _("askAi"));
		}), u("/", (e) => {
			l.value.showKeywordSearch && !y(e) && (e.preventDefault(), _("search"));
		}));
		function _(e) {
			h.value ||= !0, p.value = {
				target: e,
				nonce: ++m
			};
		}
		let v = I(!1);
		__VP_LOCAL_SEARCH__ && (u("k", (e) => {
			(e.ctrlKey || e.metaKey) && (e.preventDefault(), v.value = !0);
		}), u("/", (e) => {
			y(e) || (e.preventDefault(), v.value = !0);
		}));
		function y(e) {
			let t = e.target, n = t.tagName;
			return t.isContentEditable || n === "INPUT" || n === "SELECT" || n === "TEXTAREA";
		}
		return (e, r) => (F(), D("div", Ki, [H(s) === "algolia" ? (F(), D(C, { key: 0 }, [
			l.value.showKeywordSearch ? (F(), T(Gi, {
				key: 0,
				text: H(c).translations?.button?.buttonText || "Search",
				"aria-label": H(c).translations?.button?.buttonAriaLabel || "Search",
				"aria-keyshortcuts": "/ control+k meta+k",
				onClick: r[0] ||= (e) => _("search")
			}, null, 8, ["text", "aria-label"])) : E("", !0),
			d.value ? (F(), T(Hi, {
				key: 1,
				"aria-label": d.value.button?.translations?.buttonAriaLabel || "Ask AI",
				"aria-keyshortcuts": f.value ? "control+i meta+i" : void 0,
				onClick: r[1] ||= (e) => g.value ? _("toggleAskAi") : _("askAi")
			}, null, 8, ["aria-label", "aria-keyshortcuts"])) : E("", !0),
			h.value ? (F(), T(H(n), {
				key: 2,
				"algolia-options": H(c),
				"open-request": p.value,
				onVnodeBeforeMount: r[2] ||= (e) => g.value = !0
			}, null, 8, ["algolia-options", "open-request"])) : E("", !0)
		], 64)) : H(s) === "local" ? (F(), D(C, { key: 1 }, [A(Gi, {
			text: H(c).translations?.button?.buttonText || "Search",
			"aria-label": H(c).translations?.button?.buttonAriaLabel || "Search",
			"aria-keyshortcuts": "/ control+k meta+k",
			onClick: r[3] ||= (e) => v.value = !0
		}, null, 8, ["text", "aria-label"]), v.value ? (F(), T(H(t), {
			key: 0,
			onClose: r[4] ||= (e) => v.value = !1
		})) : E("", !0)], 64)) : E("", !0)]));
	}
}, [["__scopeId", "data-v-23cefeba"]]), Ji = [
	"href",
	"rel",
	"target",
	"title"
], Yi = ["innerHTML"], Xi = { key: 2 }, Zi = /*#__PURE__*/ f({
	__name: "VPNavBarTitle",
	setup(e) {
		let { site: t, theme: n } = r(), { hasSidebar: i } = X(), { currentLang: a } = It(), o = w(() => typeof n.value.logoLink == "string" ? n.value.logoLink : n.value.logoLink?.link), s = w(() => typeof n.value.logoLink == "string" ? void 0 : n.value.logoLink?.rel), c = w(() => typeof n.value.logoLink == "string" ? void 0 : n.value.logoLink?.target), l = w(() => {
			if (n.value.siteTitle !== !1) return (n.value.siteTitle ?? t.value.title).replace(/<[^>]+>/g, "").trim() || void 0;
		});
		return (e, r) => (F(), D("div", { class: N(["VPNavBarTitle", { "has-sidebar": H(i) }]) }, [O("a", {
			class: "title",
			href: o.value ?? H(st)(H(a).link),
			rel: s.value,
			target: c.value,
			title: l.value
		}, [
			R(e.$slots, "nav-bar-title-before", {}, void 0, !0),
			H(n).logo ? (F(), T(jn, {
				key: 0,
				class: "logo",
				image: H(n).logo
			}, null, 8, ["image"])) : E("", !0),
			H(n).siteTitle ? (F(), D("span", {
				key: 1,
				innerHTML: H(n).siteTitle
			}, null, 8, Yi)) : H(n).siteTitle === void 0 ? (F(), D("span", Xi, V(H(t).title), 1)) : E("", !0),
			R(e.$slots, "nav-bar-title-after", {}, void 0, !0)
		], 8, Ji)], 2));
	}
}, [["__scopeId", "data-v-c8132227"]]), Qi = ["aria-expanded", "aria-controls"], $i = ["innerHTML"], ea = ["id"], ta = { key: 1 }, na = /*#__PURE__*/ f({
	__name: "VPNavMenuGroup",
	props: {
		item: {
			type: Object,
			required: !0
		},
		screen: {
			type: Boolean,
			required: !1
		},
		menu: {
			type: Boolean,
			required: !1
		}
	},
	setup(t) {
		let n = t, r = S(), i = w(() => n.item.activeMatch ? e(r.data.relativePath, r.hash, n.item.activeMatch, !0) : a(n.item));
		function a(t) {
			if ("component" in t) return !1;
			if ("link" in t) {
				let n = typeof t.link == "function" ? t.link(r.data) : t.link;
				return e(r.data.relativePath, r.hash, t.activeMatch || n, !!t.activeMatch);
			}
			return t.items.some(a);
		}
		let o = I(!1), s = U();
		function c() {
			o.value = !o.value;
		}
		return (e, n) => t.menu ? (F(), T(ci, {
			key: 0,
			class: "VPNavMenuGroup",
			text: t.item.text,
			items: t.item.items
		}, null, 8, ["text", "items"])) : t.screen ? (F(), D("div", {
			key: 2,
			class: N(["VPNavMenuGroup VPNavScreenMenuGroup", {
				open: o.value,
				active: i.value
			}])
		}, [O("button", {
			type: "button",
			class: "button",
			"aria-expanded": o.value,
			"aria-controls": H(s),
			onClick: c
		}, [O("span", {
			class: "button-text",
			innerHTML: t.item.text
		}, null, 8, $i), n[0] ||= O("span", {
			class: "vpi-plus button-icon",
			"aria-hidden": "true"
		}, null, -1)], 8, Qi), Ke(O("ul", {
			id: H(s),
			class: "items"
		}, [(F(!0), D(C, null, L(t.item.items, (e) => (F(), D(C, { key: JSON.stringify(e) }, ["link" in e ? (F(), T($, {
			key: 0,
			item: e
		}, null, 8, ["item"])) : "component" in e ? (F(), D("li", ta, [(F(), T(B(e.component), M({ ref_for: !0 }, e.props, { "screen-menu": "" }), null, 16))])) : (F(), T(ci, {
			key: 2,
			text: e.text,
			items: e.items
		}, null, 8, ["text", "items"]))], 64))), 128))], 8, ea), [[We, o.value]])], 2)) : (F(), T(_i, {
			key: 1,
			class: N({
				VPNavMenuGroup: !0,
				VPNavBarMenuGroup: !0,
				active: i.value
			}),
			button: t.item.text,
			items: t.item.items
		}, null, 8, [
			"class",
			"button",
			"items"
		]));
	}
}, [["__scopeId", "data-v-108f7c8b"]]), ra = ["innerHTML"], ia = /*#__PURE__*/ f({
	__name: "VPNavMenuLink",
	props: {
		item: {
			type: Object,
			required: !0
		},
		screen: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e, { href: n, isActiveLink: r, isCurrentLink: i } = Nr(() => t.item), a = j(Pr, null);
		function o() {
			t.screen && a?.closeScreen();
		}
		return (t, a) => (F(), T(Z, {
			class: N(["VPNavMenuLink", {
				VPNavBarMenuLink: !e.screen,
				VPNavScreenMenuLink: e.screen,
				active: H(r)
			}]),
			"aria-current": H(i) ? "page" : void 0,
			href: H(n),
			target: e.item.target,
			rel: e.item.rel,
			"no-icon": e.item.noIcon,
			onClick: o
		}, {
			default: q(() => [O("span", { innerHTML: e.item.text }, null, 8, ra)]),
			_: 1
		}, 8, [
			"class",
			"aria-current",
			"href",
			"target",
			"rel",
			"no-icon"
		]));
	}
}, [["__scopeId", "data-v-e441a3d4"]]), aa = ["aria-label"], oa = { class: "list" }, sa = /*#__PURE__*/ f({
	__name: "VPNavMenu",
	props: { screen: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = e, { theme: n } = r(), i = t.screen ? null : Q();
		function a(e) {
			return !i || e < i.state.visibleItemCount;
		}
		return (t, r) => H(n).nav ? (F(), D("nav", {
			key: 0,
			"aria-label": H(n).navMenuLabel || "Main Navigation",
			class: N(["VPNavMenu", e.screen ? "VPNavScreenMenu" : "VPNavBarMenu"]),
			ref: (e) => H(i)?.setMenuEl(e)
		}, [O("ul", oa, [(F(!0), D(C, null, L(H(n).nav, (t, n) => (F(), D("li", {
			key: JSON.stringify(t),
			class: N({ collapsed: !a(n) }),
			ref_for: !0,
			ref: (e) => H(i)?.setItemEl(n, e)
		}, ["link" in t ? (F(), T(ia, {
			key: 0,
			item: t,
			screen: e.screen
		}, null, 8, ["item", "screen"])) : "component" in t ? (F(), T(B(t.component), M({
			key: 1,
			ref_for: !0
		}, t.props, { "screen-menu": e.screen || void 0 }), null, 16, ["screen-menu"])) : (F(), T(na, {
			key: 2,
			item: t,
			screen: e.screen
		}, null, 8, ["item", "screen"]))], 2))), 128))])], 10, aa)) : E("", !0);
	}
}, [["__scopeId", "data-v-7c501401"]]), ca = /*#__PURE__*/ f({
	__name: "VPNavSocialLinks",
	props: { screen: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = e, { theme: n } = r(), i = t.screen ? null : Q(), a = w(() => !!i && !i.state.socialLinks);
		return (t, r) => H(n).socialLinks ? (F(), T(Ai, {
			key: 0,
			class: N(["VPNavSocialLinks", [e.screen ? "VPNavScreenSocialLinks" : "VPNavBarSocialLinks", { collapsed: a.value }]]),
			links: H(n).socialLinks,
			ref: (e) => H(i)?.setClusterEl("socialLinks", e?.$el ?? null)
		}, null, 8, ["class", "links"])) : E("", !0);
	}
}, [["__scopeId", "data-v-07f6e6d5"]]), la = { class: "wrapper" }, ua = { class: "container" }, da = { class: "title" }, fa = { class: "content" }, pa = /*#__PURE__*/ f({
	__name: "VPNavBar",
	props: { isScreenOpen: {
		type: Boolean,
		required: !0
	} },
	emits: ["toggle-screen"],
	setup(e) {
		let { theme: t } = r(), { isHome: n, hasSidebar: i, hasLocalNav: a } = X(), { y: o } = p(), s = w(() => o.value <= 0), c = Hr({ itemsKey: () => JSON.stringify(t.value.nav ?? null) });
		return (t, r) => (F(), D("div", { class: N(["VPNavBar", {
			"has-sidebar": H(i),
			"has-local-nav": !H(n) && H(a),
			home: H(n),
			top: s.value,
			"screen-open": e.isScreenOpen
		}]) }, [O("div", la, [O("div", ua, [O("div", da, [A(Zi, null, {
			"nav-bar-title-before": q(() => [R(t.$slots, "nav-bar-title-before", {}, void 0, !0)]),
			"nav-bar-title-after": q(() => [R(t.$slots, "nav-bar-title-after", {}, void 0, !0)]),
			_: 3
		})]), O("div", fa, [O("div", {
			class: "content-body",
			ref: (e) => H(c).setContainerEl(e)
		}, [
			R(t.$slots, "nav-bar-content-before", {}, void 0, !0),
			A(qi, { class: "search" }),
			A(sa, { class: "menu" }),
			A(wi, { class: "translations" }),
			A(Zr, { class: "appearance" }),
			A(ca, { class: "social-links" }),
			A(Fi, { class: "extra" }),
			R(t.$slots, "nav-bar-content-after", {}, void 0, !0),
			A(Li, {
				class: "hamburger",
				active: e.isScreenOpen,
				onClick: r[0] ||= (e) => t.$emit("toggle-screen")
			}, null, 8, ["active"])
		], 512)])])]), r[1] ||= O("div", { class: "divider" }, [O("div", { class: "divider-line" })], -1)], 2));
	}
}, [["__scopeId", "data-v-8f4848b5"]]), ma = {
	key: 0,
	class: "VPNavScreen",
	id: "VPNavScreen"
}, ha = { class: "container" }, ga = /*#__PURE__*/ f({
	__name: "VPNavScreen",
	props: { open: {
		type: Boolean,
		required: !0
	} },
	setup(e) {
		let t = e, n = h();
		Le(Fr, !0);
		let { closeScreen: r, screenTriggerEl: i } = jr();
		return u("Escape", () => {
			t.open && (r(), i.value?.focus());
		}), (t, r) => (F(), T(Oe, {
			name: "fade",
			onEnter: r[0] ||= (e) => n.value = !0,
			onAfterLeave: r[1] ||= (e) => n.value = !1
		}, {
			default: q(() => [e.open ? (F(), D("div", ma, [O("div", ha, [
				R(t.$slots, "nav-screen-content-before", {}, void 0, !0),
				A(sa, {
					screen: "",
					class: "menu"
				}),
				A(wi, {
					screen: "",
					class: "translations"
				}),
				A(Zr, {
					row: "",
					screen: "",
					class: "appearance"
				}),
				A(ca, {
					screen: "",
					class: "social-links"
				}),
				R(t.$slots, "nav-screen-content-after", {}, void 0, !0)
			])])) : E("", !0)]),
			_: 3
		}));
	}
}, [["__scopeId", "data-v-c1f0fd02"]]), _a = {
	key: 0,
	class: "VPNav"
}, va = /*#__PURE__*/ f({
	__name: "VPNav",
	setup(e) {
		let { isScreenOpen: t, closeScreen: n, toggleScreen: i } = jr(), { frontmatter: a } = r(), o = w(() => a.value.navbar !== !1);
		return Le(Pr, { closeScreen: n }), K(() => {
			x && document.documentElement.classList.toggle("hide-nav", !o.value);
		}), (e, n) => o.value ? (F(), D("header", _a, [A(pa, {
			"is-screen-open": H(t),
			onToggleScreen: H(i)
		}, {
			"nav-bar-title-before": q(() => [R(e.$slots, "nav-bar-title-before", {}, void 0, !0)]),
			"nav-bar-title-after": q(() => [R(e.$slots, "nav-bar-title-after", {}, void 0, !0)]),
			"nav-bar-content-before": q(() => [R(e.$slots, "nav-bar-content-before", {}, void 0, !0)]),
			"nav-bar-content-after": q(() => [R(e.$slots, "nav-bar-content-after", {}, void 0, !0)]),
			_: 3
		}, 8, ["is-screen-open", "onToggleScreen"]), A(ga, { open: H(t) }, {
			"nav-screen-content-before": q(() => [R(e.$slots, "nav-screen-content-before", {}, void 0, !0)]),
			"nav-screen-content-after": q(() => [R(e.$slots, "nav-screen-content-after", {}, void 0, !0)]),
			_: 3
		}, 8, ["open"])])) : E("", !0);
	}
}, [["__scopeId", "data-v-21c0505c"]]), ya = ["aria-expanded"], ba = {
	key: 1,
	class: "items"
}, xa = { key: 0 }, Sa = /*#__PURE__*/ f({
	__name: "VPSidebarItem",
	props: {
		item: {
			type: Object,
			required: !0
		},
		depth: {
			type: Number,
			required: !0
		}
	},
	setup(e) {
		let t = e, { collapsed: n, collapsible: r, isLink: i, isActiveLink: a, isCurrentLink: o, hasActiveLink: s, hasChildren: c, toggle: l } = Tt(w(() => t.item)), u = w(() => i.value ? "a" : "div"), d = w(() => c.value && t.depth < 5 ? `h${t.depth + 2}` : "p"), f = w(() => t.item.text && d.value !== "p" ? "section" : "div");
		function p() {
			!t.item.link && l();
		}
		return (t, c) => {
			let m = z("VPSidebarItem", !0);
			return F(), T(B(f.value), { class: N(["VPSidebarItem", [`level-${e.depth}`, {
				collapsible: H(r),
				collapsed: H(n),
				"is-link": H(i),
				"is-active": H(a),
				"has-active": H(s)
			}]]) }, {
				default: q(() => [e.item.text ? (F(), D("div", {
					key: 0,
					class: "item",
					onClick: p
				}, [
					c[2] ||= O("div", { class: "indicator" }, null, -1),
					e.item.link ? (F(), T(Z, {
						key: 0,
						tag: u.value,
						class: "link",
						"aria-current": H(o) ? "page" : void 0,
						href: e.item.link,
						rel: e.item.rel,
						target: e.item.target
					}, {
						default: q(() => [(F(), T(B(d.value), {
							class: "text",
							innerHTML: e.item.text
						}, null, 8, ["innerHTML"]))]),
						_: 1
					}, 8, [
						"tag",
						"aria-current",
						"href",
						"rel",
						"target"
					])) : (F(), T(B(d.value), {
						key: 1,
						class: "text",
						innerHTML: e.item.text
					}, null, 8, ["innerHTML"])),
					e.item.collapsed != null && e.item.items && e.item.items.length ? (F(), D("button", {
						key: 2,
						type: "button",
						class: "caret",
						"aria-label": "toggle section",
						"aria-expanded": !H(n),
						onClick: c[0] ||= qe((...e) => H(l) && H(l)(...e), ["stop"])
					}, [...c[1] ||= [O("span", { class: "vpi-chevron-right caret-icon" }, null, -1)]], 8, ya)) : E("", !0)
				])) : E("", !0), e.item.items && e.item.items.length ? (F(), D("ul", ba, [e.depth < 5 ? (F(), D("li", xa, [(F(!0), D(C, null, L(e.item.items, (t) => (F(), T(m, {
					key: t.text,
					item: t,
					depth: e.depth + 1
				}, null, 8, ["item", "depth"]))), 128))])) : E("", !0)])) : E("", !0)]),
				_: 1
			}, 8, ["class"]);
		};
	}
}, [["__scopeId", "data-v-508f7dbf"]]), Ca = /*#__PURE__*/ f({
	__name: "VPSidebarGroup",
	props: { items: {
		type: Array,
		required: !0
	} },
	setup(e) {
		let t = I(!0), n = null;
		return P(() => {
			n = setTimeout(() => {
				n = null, t.value = !1;
			}, 300);
		}), Ne(() => {
			n != null && (clearTimeout(n), n = null);
		}), (n, r) => (F(!0), D(C, null, L(e.items, (e) => (F(), D("div", {
			key: e.text,
			class: N(["group", { "no-transition": t.value }])
		}, [A(Sa, {
			item: e,
			depth: 0
		}, null, 8, ["item"])], 2))), 128));
	}
}, [["__scopeId", "data-v-bd6fbf8d"]]), wa = {
	class: "nav",
	id: "VPSidebarNav",
	"aria-labelledby": "sidebar-aria-label",
	tabindex: "-1"
}, Ta = /*#__PURE__*/ f({
	__name: "VPSidebar",
	props: { open: {
		type: Boolean,
		required: !0
	} },
	setup(e) {
		let { sidebarGroups: t, hasSidebar: n } = X(), r = e, i = W("navEl"), a = h();
		G([() => r.open, i], () => {
			r.open ? (a.value = !0, i.value?.focus()) : a.value = !1;
		}, {
			immediate: !0,
			flush: "post"
		});
		let o = I(0);
		return G(t, () => {
			o.value += 1;
		}, { deep: !0 }), (r, a) => H(n) ? (F(), D("aside", {
			key: 0,
			class: N(["VPSidebar", { open: e.open }]),
			ref_key: "navEl",
			ref: i,
			onClick: a[0] ||= qe(() => {}, ["stop"])
		}, [a[2] ||= O("div", { class: "curtain" }, null, -1), O("nav", wa, [
			a[1] ||= O("span", {
				class: "visually-hidden",
				id: "sidebar-aria-label"
			}, " Sidebar Navigation ", -1),
			R(r.$slots, "sidebar-nav-before", {}, void 0, !0),
			(F(), T(Ca, {
				items: H(t),
				key: o.value
			}, null, 8, ["items"])),
			R(r.$slots, "sidebar-nav-after", {}, void 0, !0)
		])], 2)) : E("", !0);
	}
}, [["__scopeId", "data-v-a61a820c"]]), Ea = ["inert"], Da = /*#__PURE__*/ f({
	__name: "VPSkipLink",
	props: { inert: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let { theme: t } = r(), n = S(), i = W("backToTop");
		return G(() => n.path, () => i.value?.focus()), (n, r) => (F(), D(C, null, [O("span", {
			ref_key: "backToTop",
			ref: i,
			tabindex: "-1"
		}, null, 512), O("a", {
			href: "#VPContent",
			class: "VPSkipLink visually-hidden",
			inert: e.inert
		}, V(H(t).skipToContentLabel || "Skip to content"), 9, Ea)], 64));
	}
}, [["__scopeId", "data-v-499bdcc5"]]), Oa = {
	Layout: /* @__PURE__ */ f({
		__name: "Layout",
		setup(e) {
			let { isOpen: t, open: n, close: i } = wt(), { isScreenOpen: a } = jr();
			Ot({ closeSidebar: i });
			let { frontmatter: o, theme: s } = r(), c = Ue(), l = w(() => !!c["home-hero-image"]);
			return Le(kt, { heroImageSlotExists: l }), (e, r) => {
				let c = z("Content");
				return H(o).layout === !1 ? (F(), T(c, { key: 1 })) : (F(), D("div", {
					key: 0,
					class: N(["Layout", [H(o).pageClass, H(s).gradedContainers && "vp-graded-containers"]])
				}, [
					R(e.$slots, "layout-top", {}, void 0, !0),
					A(Da, { inert: H(a) }, null, 8, ["inert"]),
					A(Mt, {
						class: "backdrop",
						show: H(t),
						onClick: H(i)
					}, null, 8, ["show", "onClick"]),
					A(va, null, {
						"nav-bar-title-before": q(() => [R(e.$slots, "nav-bar-title-before", {}, void 0, !0)]),
						"nav-bar-title-after": q(() => [R(e.$slots, "nav-bar-title-after", {}, void 0, !0)]),
						"nav-bar-content-before": q(() => [R(e.$slots, "nav-bar-content-before", {}, void 0, !0)]),
						"nav-bar-content-after": q(() => [R(e.$slots, "nav-bar-content-after", {}, void 0, !0)]),
						"nav-screen-content-before": q(() => [R(e.$slots, "nav-screen-content-before", {}, void 0, !0)]),
						"nav-screen-content-after": q(() => [R(e.$slots, "nav-screen-content-after", {}, void 0, !0)]),
						_: 3
					}),
					A(wr, {
						open: H(t),
						onOpenMenu: H(n),
						inert: H(a)
					}, null, 8, [
						"open",
						"onOpenMenu",
						"inert"
					]),
					A(Ta, {
						open: H(t),
						inert: H(a)
					}, {
						"sidebar-nav-before": q(() => [R(e.$slots, "sidebar-nav-before", {}, void 0, !0)]),
						"sidebar-nav-after": q(() => [R(e.$slots, "sidebar-nav-after", {}, void 0, !0)]),
						_: 3
					}, 8, ["open", "inert"]),
					A(ur, { inert: H(a) }, {
						"page-top": q(() => [R(e.$slots, "page-top", {}, void 0, !0)]),
						"page-bottom": q(() => [R(e.$slots, "page-bottom", {}, void 0, !0)]),
						"not-found": q(() => [R(e.$slots, "not-found", {}, void 0, !0)]),
						"home-hero-before": q(() => [R(e.$slots, "home-hero-before", {}, void 0, !0)]),
						"home-hero-info-before": q(() => [R(e.$slots, "home-hero-info-before", {}, void 0, !0)]),
						"home-hero-info": q(() => [R(e.$slots, "home-hero-info", {}, void 0, !0)]),
						"home-hero-info-after": q(() => [R(e.$slots, "home-hero-info-after", {}, void 0, !0)]),
						"home-hero-actions-after": q(() => [R(e.$slots, "home-hero-actions-after", {}, void 0, !0)]),
						"home-hero-actions-before-actions": q(() => [R(e.$slots, "home-hero-actions-before-actions", {}, void 0, !0)]),
						"home-hero-image": q(() => [R(e.$slots, "home-hero-image", {}, void 0, !0)]),
						"home-hero-after": q(() => [R(e.$slots, "home-hero-after", {}, void 0, !0)]),
						"home-features-before": q(() => [R(e.$slots, "home-features-before", {}, void 0, !0)]),
						"home-features-after": q(() => [R(e.$slots, "home-features-after", {}, void 0, !0)]),
						"doc-footer-before": q(() => [R(e.$slots, "doc-footer-before", {}, void 0, !0)]),
						"doc-before": q(() => [R(e.$slots, "doc-before", {}, void 0, !0)]),
						"doc-after": q(() => [R(e.$slots, "doc-after", {}, void 0, !0)]),
						"doc-top": q(() => [R(e.$slots, "doc-top", {}, void 0, !0)]),
						"doc-bottom": q(() => [R(e.$slots, "doc-bottom", {}, void 0, !0)]),
						"aside-top": q(() => [R(e.$slots, "aside-top", {}, void 0, !0)]),
						"aside-bottom": q(() => [R(e.$slots, "aside-bottom", {}, void 0, !0)]),
						"aside-outline-before": q(() => [R(e.$slots, "aside-outline-before", {}, void 0, !0)]),
						"aside-outline-after": q(() => [R(e.$slots, "aside-outline-after", {}, void 0, !0)]),
						"aside-ads-before": q(() => [R(e.$slots, "aside-ads-before", {}, void 0, !0)]),
						"aside-ads-after": q(() => [R(e.$slots, "aside-ads-after", {}, void 0, !0)]),
						_: 3
					}, 8, ["inert"]),
					A(mr, { inert: H(a) }, null, 8, ["inert"]),
					R(e.$slots, "layout-bottom", {}, void 0, !0)
				], 2));
			};
		}
	}, [["__scopeId", "data-v-7e38a135"]]),
	enhanceApp: ({ app: e }) => {
		e.component("Badge", At);
	}
}, ka = { class: "flex flex-center full-width q-pb-md q-pt-sm" }, Aa = /* @__PURE__ */ Ae({
	__name: "AsideBefore",
	setup(e) {
		return (e, t) => (F(), D("div", ka, [A(qi)]));
	}
}), ja = {
	__name: "Layout",
	setup(e) {
		let { Layout: t } = Oa;
		return (e, n) => (F(), T(H(t), null, {
			"sidebar-nav-before": q(() => [A(Aa)]),
			_: 1
		}));
	}
};
//#endregion
//#region src/vp-theme.ts
function Ma(e, t) {
	if (e.use(we, { plugins: { Dark: g } }), typeof window < "u") {
		let e = () => {
			g.set(document.documentElement.classList.contains("dark"));
		};
		e(), new MutationObserver(e).observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class"]
		});
	}
	rt.setPrimary(t.primary), rt.setSurface(t.surface), rt.setupDefaultProps();
}
function Na(e = {}) {
	return {
		extends: Oa,
		Layout: ja,
		enhanceApp({ app: t }) {
			Ma(t, e);
		}
	};
}
//#endregion
//#region __vite-browser-external
var Pa = /* @__PURE__ */ Xe(((e, t) => {
	t.exports = {};
})), Fa = Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
}), Ia = Object.freeze({
	rotate: 0,
	vFlip: !1,
	hFlip: !1
}), La = Object.freeze({
	...Fa,
	...Ia
}), Ra = Object.freeze({
	...La,
	body: "",
	hidden: !1
}), za = Object.freeze({
	width: null,
	height: null
}), Ba = Object.freeze({
	...za,
	...Ia
});
//#endregion
//#region node_modules/@iconify/utils/lib/icon/transformations.js
function Va(e, t) {
	let n = {};
	!e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
	let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
	return r && (n.rotate = r), n;
}
//#endregion
//#region node_modules/@iconify/utils/lib/icon/merge.js
function Ha(e, t) {
	let n = Va(e, t);
	for (let r in Ra) r in Ia ? r in e && !(r in n) && (n[r] = Ia[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
	return n;
}
//#endregion
//#region node_modules/@iconify/utils/lib/icon-set/tree.js
function Ua(e, t) {
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
function Wa(e, t, n) {
	let r = e.icons, i = e.aliases || Object.create(null), a = {};
	function o(e) {
		a = Ha(r[e] || i[e], a);
	}
	return o(t), n.forEach(o), Ha(e, a);
}
function Ga(e, t) {
	if (e.icons[t]) return Wa(e, t, []);
	let n = Ua(e, [t])[t];
	return n ? Wa(e, t, n) : null;
}
//#endregion
//#region node_modules/@iconify/utils/lib/svg/size.js
var Ka = /(-?[0-9.]*[0-9]+[0-9.]*)/g, qa = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Ja(e, t, n) {
	if (t === 1) return e;
	if (n ||= 100, typeof e == "number") return Math.ceil(e * t * n) / n;
	if (typeof e != "string") return e;
	let r = e.split(Ka);
	if (r === null || !r.length) return e;
	let i = [], a = r.shift(), o = qa.test(a);
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
function Ya(e, t = "defs") {
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
function Xa(e, t) {
	return e ? "<defs>" + e + "</defs>" + t : t;
}
function Za(e, t, n) {
	let r = Ya(e);
	return Xa(r.defs, t + r.content + n);
}
//#endregion
//#region node_modules/@iconify/utils/lib/svg/build.js
var Qa = (e) => e === "unset" || e === "undefined" || e === "none";
function $a(e, t) {
	let n = {
		...La,
		...e
	}, r = {
		...Ba,
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
		o % 2 == 1 && (i.left !== i.top && (s = i.left, i.left = i.top, i.top = s), i.width !== i.height && (s = i.width, i.width = i.height, i.height = s)), t.length && (a = Za(a, "<g transform=\"" + t.join(" ") + "\">", "</g>"));
	});
	let o = r.width, s = r.height, c = i.width, l = i.height, u, d;
	o === null ? (d = s === null ? "1em" : s === "auto" ? l : s, u = Ja(d, c / l)) : (u = o === "auto" ? c : o, d = s === null ? Ja(u, l / c) : s === "auto" ? l : s);
	let f = {}, p = (e, t) => {
		Qa(t) || (f[e] = t.toString());
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
function eo(e) {
	return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
//#endregion
//#region node_modules/@iconify/utils/lib/svg/encode-svg-for-css.js
function to(e) {
	let t = e.startsWith("<svg>") ? e.replace("<svg>", "<svg >") : e;
	return !t.includes(" xmlns:xlink=") && t.includes(" xlink:") && (t = t.replace("<svg ", "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" ")), t.includes(" xmlns=") || (t = t.replace("<svg ", "<svg xmlns=\"http://www.w3.org/2000/svg\" ")), eo(t);
}
//#endregion
//#region node_modules/@iconify/utils/lib/svg/html.js
function no(e, t) {
	let n = e.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let e in t) n += " " + e + "=\"" + t[e] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + n + ">" + e + "</svg>";
}
//#endregion
//#region node_modules/vitepress-plugin-group-icons/dist/index.mjs
var ro = Pa(), io = {
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
}, ao = {
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
}, oo = {
	...io.packageManager,
	...io.frameworks,
	...io.tools,
	...io.misc,
	...ao
};
function so(e, t) {
	try {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	} catch {
		return !1;
	}
}
var co = /\s~(~?)([^~]+)~\1/, lo = /<label\b(?![^>]+\bdata-title\b)[^>]*>(.*?)<\/label>/g, uo = /(<label[^>]*>)(.*?)(<\/label>)/g, fo = /\[((?:[^[\]]|\[[^[\]]*\])*)\]/;
function po(e, t) {
	let n = t || { titleBar: { includeSnippet: !1 } }, r = e.renderer.rules["container_code-group_open"];
	r && (e.renderer.rules["container_code-group_open"] = (...t) => r(...t).replace(lo, (t, n) => `<label data-title="${e.utils.escapeHtml(n)}"${t.slice(6)}`)), e.renderer.rules["container_code-group_open"] = (...e) => r(...e).replace(uo, (e, t, n, r) => {
		let i = n.match(co);
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
		let c = o.info.match(fo), l = n.titleBar.includeSnippet;
		if (!s && c && (!o.src || l)) {
			let n = c[1].match(co);
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
var mo = /^https?:\/\//;
async function ho(e, t) {
	let n = {
		...oo,
		...t.customIcon
	};
	return { css: "\n.vp-code-block-title [data-title]::before,\n.vp-code-group [data-title]::before {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  margin-right: 0.5em;\n  margin-bottom: -0.2em;\n  background: var(--icon) no-repeat center / contain;\n}\n\n.vp-code-block-title-bar {\n  position: relative;\n  margin: 16px -24px 0 -24px;\n  background-color: var(--vp-code-block-bg);\n  overflow-x: auto;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--vp-code-tab-text-color);\n  white-space: nowrap;\n  transition: background-color 0.5s;\n  border-radius: 8px 8px 0 0;\n  padding:0 12px;\n  box-shadow: inset 0 -1px var(--vp-code-tab-divider);\n}\n\n.custom-block .vp-code-block-title-bar {\n  margin: 16px 0 0 0;\n}\n\n@media (min-width: 640px) {\n  .vp-code-block-title-bar {\n    margin: 16px 0 0 0;\n  }\n}\n\n.vp-code-block-title-text {\n  padding: 0 12px;\n  line-height: 48px;\n}\n\n\n.vp-code-block-title div[class*=language-] {\n  margin-top: 0 !important;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n" + await yo(_o(/* @__PURE__ */ new Set([...e, ...t.defaultLabels || []]), n)) };
}
function go(e) {
	return typeof e == "string" ? `s:${e}` : `o:${JSON.stringify(e)}`;
}
function _o(e, t) {
	let n = /* @__PURE__ */ new Map(), r = Object.entries(t).sort(([e], [t]) => t.length - e.length), i = r.filter(([e]) => !e.includes(".")), a = r.filter(([e]) => e.includes(".")), o = (e, t) => {
		let r = go(e), i = n.get(r);
		i ? i.labels.push(t) : n.set(r, {
			icon: e,
			labels: [t]
		});
	};
	for (let t of e) {
		let e = t.match(co);
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
function vo(e, t) {
	return t.map((t) => `${e} ${t}`).join(",");
}
async function yo(e) {
	return (await Promise.all(e.map(async ({ icon: e, labels: t }) => {
		let n = t.map((e) => `[data-title='${e}']::before`);
		if (typeof e == "string") {
			if (!e) return "";
			let t = await bo(e);
			return `
${n.join(",")} {
  content: '';
  --icon: url("data:image/svg+xml,${t}");
}`;
		}
		let r = [];
		if (e.light) {
			let t = await bo(e.light), i = vo("", n);
			r.push(`
${i} {
  content: '';
  --icon: url("data:image/svg+xml,${t}");
}`);
		}
		if (e.dark) {
			let t = await bo(e.dark), i = vo("html.dark", n);
			r.push(`
${i} {
  content: '';
  --icon: url("data:image/svg+xml,${t}");
}`);
		}
		return r.join("");
	}))).sort().join("");
}
async function bo(e) {
	if (!e) return "";
	if (e.startsWith("<svg")) return to(e);
	if (mo.test(e)) try {
		return to(await (await fetch(e)).text());
	} catch {
		return console.warn(`[vitepress-plugin-group-icons]: Failed to fetch icon: ${e}`), "";
	}
	let [t, n] = e.split(":");
	try {
		let { icons: e } = (0, ro.createRequire)(import.meta.url)(`@iconify-json/${t}`), r = Ga(e, n);
		if (r) {
			let { attributes: e, body: t } = $a(r);
			return to(no(t, e));
		}
		return "";
	} catch {
		return console.warn(`[vitepress-plugin-group-icons]: Icon set \`${t}\` not found. Please install \`@iconify-json/${t}\` first`), "";
	}
}
var xo = /&(?:lt|#60);/g, So = /&(?:gt|#62);/g, Co = /&(?:quot|#34);/g, wo = /&(?:apos|#39);/g, To = /&(?:amp|#38);/g, Eo = /\bdata-title=\\"([^"]*)\\"|\bdata-title="([^"]*)"|"data-title":\s*"([^"]*)"/g, Do = /\.(md|md\?vue|md\?v=)$/;
function Oo(e) {
	return e.replaceAll(xo, "<").replaceAll(So, ">").replaceAll(Co, "\"").replaceAll(wo, "'").replaceAll(To, "&");
}
function ko(e) {
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
				let { css: t } = await ho(r, e);
				return i = new Set(r), t;
			}
		},
		transform: {
			filter: { id: Do },
			handler(e) {
				for (Eo.lastIndex = 0;;) {
					let t = Eo.exec(e);
					if (!t) break;
					r.add(Oo(t[1] || t[2] || t[3]));
				}
				so(r, i) || o();
			}
		}
	};
}
//#endregion
//#region src/vp-config.ts
var Ao = {
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
			e.use(po);
		}
	},
	vite: {
		resolve: { alias: [{
			find: /^.*\/VPSidebarGroup\.vue$/,
			replacement: Ye(new Je("data:application/octet-stream;base64,PHNjcmlwdCBzZXR1cCBsYW5nPSJ0cyI+CmltcG9ydCB7IFFFeHBhbnNpb25JdGVtLCBRTGlzdCB9IGZyb20gInF1YXNhciI7CmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAidnVlIjsKaW1wb3J0IFNpZGViYXJJdGVtIGZyb20gIi4vU2lkZWJhckl0ZW0udnVlIjsKaW1wb3J0IHR5cGUgeyBUU2lkZWJhckVudHJ5IH0gZnJvbSAiLi4vdHlwZXMiOwoKLy8gcHJvcHMKY29uc3QgcHJvcHNDb21wb25lbnQgPSBkZWZpbmVQcm9wczx7CiAgaXRlbXM6IFRTaWRlYmFyRW50cnlbXTsKfT4oKTsKCi8vIGZ1bmN0aW9ucwpmdW5jdGlvbiBpc09wZW5lZChpdGVtOiBUU2lkZWJhckVudHJ5KTogYm9vbGVhbiB7CiAgcmV0dXJuIChpdGVtLml0ZW1zID8/IFtdKS5maW5kKChpKSA9PiBpLmFjdGl2ZSB8fCBpc09wZW5lZChpKSkgIT09IHVuZGVmaW5lZDsKfQoKLy8gY29tcHV0ZWRzCmNvbnN0IG1lbnVzID0gY29tcHV0ZWQoKCkgPT4gewogIC8vIHd0ZiBWaXRlUHJlc3MKICBpZiAocHJvcHNDb21wb25lbnQuaXRlbXNbMF0udGV4dCA9PT0gdW5kZWZpbmVkKSB7CiAgICByZXR1cm4gWwogICAgICAuLi4ocHJvcHNDb21wb25lbnQuaXRlbXNbMF0uaXRlbXMgPz8gW10pLAogICAgICAuLi5wcm9wc0NvbXBvbmVudC5pdGVtcy5zbGljZSgxKSwKICAgIF07CiAgfQogIHJldHVybiBwcm9wc0NvbXBvbmVudC5pdGVtczsKfSk7Cjwvc2NyaXB0PgoKPHRlbXBsYXRlPgogIDxxLWxpc3Q+CiAgICA8ZGl2IHYtZm9yPSJpdGVtIG9mIG1lbnVzIiA6a2V5PSJpdGVtLnRleHQiPgogICAgICA8cS1leHBhbnNpb24taXRlbQogICAgICAgIHYtaWY9IihpdGVtLml0ZW1zPy5sZW5ndGggPz8gMCkgPiAwIgogICAgICAgIDpkZWZhdWx0LW9wZW5lZD0iaXNPcGVuZWQoaXRlbSkiCiAgICAgICAgOmljb249Iml0ZW0uaWNvbiA/PyAnJyIKICAgICAgICA6bGFiZWw9Iml0ZW0udGV4dCA/PyAnPz8/JyIKICAgICAgICBoZWFkZXJDbGFzcz0ibWVudS1pdGVtIgogICAgICAgIGNsYXNzPSJtZW51LWV4cGFuZGFibGUiCiAgICAgICAgZ3JvdXA9Imdyb3VwQWNjb3JkaW9uTW9kZSIKICAgICAgPgogICAgICAgIDxTaWRlYmFyR3JvdXAgOml0ZW1zPSJpdGVtLml0ZW1zISIgLz4KICAgICAgPC9xLWV4cGFuc2lvbi1pdGVtPgoKICAgICAgPFNpZGViYXJJdGVtIHYtZWxzZSA6aXRlbT0iaXRlbSIgLz4KICAgIDwvZGl2PgogIDwvcS1saXN0Pgo8L3RlbXBsYXRlPgo=", "" + import.meta.url))
		}] },
		plugins: [ko()]
	}
};
//#endregion
export { Na as createBigBangTheme, Ao as vitepressBigBangConfig };
