import { c as e, i as t, n, u as r } from "./shared-D0A4GCYe.js";
import { inBrowser as i } from "vitepress";
import { computed as a, onScopeDispose as o, readonly as s, shallowRef as c } from "vue";
import l from "@siteData";
//#region node_modules/vitepress/dist/client/app/data.js
var u = c(s(l)), d;
function f() {
	if (d === void 0) {
		let r = u.value.base;
		if (!e(r)) return d = r;
		if (!t) return d = n;
		let i = window.__VP_SITE_ROOT__;
		d = i ? decodeURIComponent(new URL(i, location.href).pathname) : "/";
	}
	return d;
}
function p(e) {
	let n = e.replace(/\.html$/, "");
	if (n = decodeURIComponent(n), n = n.replace(/\/$/, "/index"), t) {
		let e = f();
		if (n + "/" === e && (n = e), !n.startsWith(e)) return null;
		n = r(n.slice(e.length).replace(/\//g, "_") || "index") + ".md";
		let t = __VP_HASH_MAP__[n.toLowerCase()];
		if (t ||= (n = n.endsWith("_index.md") ? n.slice(0, -9) + ".md" : n.slice(0, -3) + "_index.md", __VP_HASH_MAP__[n.toLowerCase()]), !t) return null;
		n = `${__ASSETS_BASE__ || e}${__ASSETS_DIR__}/${n}.${t}.js`;
	} else n = `./${r(n.slice(1).replace(/\//g, "_"))}.md.js`;
	return n;
}
//#endregion
//#region node_modules/vitepress/dist/client/theme-default/composables/scroll-lock.js
var m = i && (/iP(?:ad|hone|od)/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1), h = /* @__PURE__ */ new Set([
	" ",
	"PageUp",
	"PageDown",
	"Home",
	"End",
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
]), g = {
	capture: !0,
	passive: !1
};
function _(e) {
	let t = e instanceof Element ? e : null;
	for (; t && t !== document.body;) {
		let { overflowX: e, overflowY: n } = getComputedStyle(t);
		if ((n === "auto" || n === "scroll") && t.scrollHeight > t.clientHeight || (e === "auto" || e === "scroll") && t.scrollWidth > t.clientWidth) return !0;
		t = t.parentElement;
	}
	return !1;
}
function v(e) {
	"touches" in e && e.touches.length > 1 || _(e.target) || e.preventDefault();
}
function y(e) {
	if (e.metaKey || e.ctrlKey || e.altKey || !h.has(e.key)) return;
	let t = e.target;
	t instanceof HTMLElement && (t.isContentEditable || t.matches("input, textarea, select")) || v(e);
}
var b = 0, x = 0, S, C;
function w() {
	if (++b > 1) return;
	let e = document.documentElement;
	getComputedStyle(e).scrollbarGutter.includes("stable") || (C = e.style.scrollbarGutter, e.style.scrollbarGutter = "stable"), S = document.body.style.overflow, document.body.style.overflow = "hidden", m && document.addEventListener("touchmove", v, g);
}
function T() {
	--b > 0 || (m && document.removeEventListener("touchmove", v, g), document.body.style.overflow = S ?? "", C !== void 0 && (document.documentElement.style.scrollbarGutter = C), S = C = void 0);
}
function E() {
	++x > 1 || (document.addEventListener("wheel", v, g), document.addEventListener("touchmove", v, g), document.addEventListener("keydown", y, g));
}
function D() {
	--x > 0 || (document.removeEventListener("wheel", v, g), document.removeEventListener("touchmove", v, g), document.removeEventListener("keydown", y, g));
}
function O() {
	let e = c(!1), t = !1;
	function n() {
		e.value ||= (t = window.innerWidth > document.documentElement.clientWidth && !CSS.supports("scrollbar-gutter", "stable"), t ? E() : w(), !0);
	}
	function r() {
		e.value &&= (t ? D() : T(), !1);
	}
	return o(r), a({
		get: () => e.value,
		set: (e) => e ? n() : r()
	});
}
//#endregion
export { p as n, f as r, O as t };
