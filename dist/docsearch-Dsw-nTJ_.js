import { s as e } from "./shared-D0A4GCYe.js";
//#region node_modules/vitepress/dist/client/theme-default/support/docsearch.js
function t(e) {
	let t = e.mode ?? "auto", r = n(e), i = e.askAi, a = !!(i && typeof i == "object" && i.sidePanel);
	switch (t) {
		case "sidePanel": return {
			mode: t,
			showKeywordSearch: !1,
			useSidePanel: !0
		};
		case "hybrid": return r || console.error("[vitepress] mode: \"hybrid\" requires keyword search credentials (appId, apiKey, indexName)."), {
			mode: t,
			showKeywordSearch: r,
			useSidePanel: !0
		};
		case "modal": return {
			mode: t,
			showKeywordSearch: r,
			useSidePanel: !1
		};
		default: return {
			mode: "auto",
			showKeywordSearch: r,
			useSidePanel: a
		};
	}
}
function n(e) {
	return !!(e.appId && e.apiKey && e.indexName);
}
function r(e, t) {
	return [...(Array.isArray(e) ? e : e ? [e] : []).map((e) => Array.isArray(e) ? e.filter((e) => typeof e == "string" && !e.startsWith("lang:")) : e).filter((e) => typeof e == "string" ? !e.startsWith("lang:") : Array.isArray(e) && e.length > 0), `lang:${t}`];
}
function i(e) {
	let t = e.appId, n = e.apiKey, r = e.indexName;
	return {
		valid: !!(t && n && r),
		appId: t,
		apiKey: n,
		indexName: r
	};
}
function a(e, t, n) {
	let i = typeof e == "string", a = !i && e.searchParameters ? { ...e.searchParameters } : void 0, o = !i && e.agentStudio === !0, s = r(a?.facetFilters ?? t.searchParameters?.facetFilters, n), c = o ? a : {
		...a,
		facetFilters: s.length ? s : void 0
	}, l = {
		...i ? {} : e,
		indexName: i ? t.indexName : e.indexName,
		apiKey: i ? t.apiKey : e.apiKey,
		appId: i ? t.appId : e.appId,
		assistantId: i ? e : e.assistantId
	};
	return c && Object.values(c).some((e) => e != null) && (l.searchParameters = c), l;
}
function o(e, t) {
	let { sidePanel: n, ...r } = JSON.parse(JSON.stringify(e));
	return {
		container: "#vp-docsearch-sidepanel",
		indexName: t.indexName,
		appId: t.appId,
		apiKey: t.apiKey,
		...r,
		...n && n !== !0 ? n : {}
	};
}
function s(e, t, n) {
	e = c(e, e.locales?.[t] || {});
	let i = r(e.searchParameters?.facetFilters, n), o = e.askAi ? a(e.askAi, e, n) : void 0;
	return {
		...e,
		searchParameters: {
			...e.searchParameters,
			facetFilters: i
		},
		askAi: o
	};
}
function c(t, n) {
	let r = { ...t };
	for (let t in n) {
		let i = n[t];
		i !== void 0 && (r[t] = t === "searchParameters" ? i : e(i) && e(r[t]) ? c(r[t], i) : i);
	}
	return delete r.locales, r;
}
//#endregion
export { i, t as n, s as r, o as t };
