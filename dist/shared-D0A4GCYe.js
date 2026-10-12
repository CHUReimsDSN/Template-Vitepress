import { useData as e } from "vitepress";
//#region node_modules/vitepress/dist/client/theme-default/composables/data.js
var t = e, n = /^(?:[a-z]+:|\/\/)/i, r = "/__VP_BASE__/";
function i(e) {
	return e === "./";
}
var a = Symbol("stack-view:unpack"), o = /#.*?(?=:~:|$)/, s = /[?#].*$/, c = /(?:(^|\/)index)?(?:\.(?:md|html))?$/, l = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g, u = /^[a-z]:/i, d = /* @__PURE__ */ new Set(), f = typeof document < "u";
function p(e, t, n, r = !1, i = !1) {
	if (e = m(`/${e}`), r) return new RegExp(n).test(e);
	if (m(n) !== e) return !1;
	if (i) return !0;
	let a = n.match(o);
	return !a || t === a[0];
}
function m(e) {
	return decodeURI(e).replace(s, "").replace(c, "$1");
}
function h(e) {
	return n.test(e);
}
function g(e) {
	let t = u.exec(e), n = t ? t[0] : "";
	return n + e.slice(n.length).replace(l, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
function _(e) {
	if (d.size === 0) {
		let e = globalThis.process?.env?.VITE_EXTRA_EXTENSIONS || "";
		("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (e && typeof e == "string" ? "," + e : "")).split(",").forEach((e) => d.add(e));
	}
	let t = e.split(".").pop();
	return t == null || !d.has(t.toLowerCase());
}
function v(e) {
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function y(...e) {
	let t = e.filter((e) => b(e));
	if (t.length <= 1) return e[0];
	let n = new Set(t.flatMap((e) => Reflect.ownKeys(e))), r = [...n];
	return new Proxy({}, {
		get(e, n) {
			return n === a ? t : y(...t.map((e) => e[n]).filter((e) => e !== void 0));
		},
		set() {
			throw Error("StackView is read-only and cannot be mutated.");
		},
		has(e, t) {
			return n.has(t);
		},
		ownKeys() {
			return r;
		},
		getOwnPropertyDescriptor(e, n) {
			for (let e of t) {
				let t = Object.getOwnPropertyDescriptor(e, n);
				if (t) return t;
			}
		}
	});
}
y.unpack = function(e) {
	return e?.[a];
};
function b(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
//#endregion
export { p as a, i as c, _ as d, t as f, f as i, m as l, r as n, h as o, v as r, b as s, n as t, g as u };
