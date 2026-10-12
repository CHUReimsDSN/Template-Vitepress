import { f as e } from "./shared-D0A4GCYe.js";
import { i as t, n, t as r } from "./docsearch-Dsw-nTJ_.js";
import { inBrowser as i, useRouter as a } from "vitepress";
import { Fragment as o, createElementBlock as s, createElementVNode as c, nextTick as l, onUnmounted as u, openBlock as d, watch as f } from "vue";
//#region node_modules/vitepress/dist/client/theme-default/components/VPAlgoliaSearchBox.vue
var p = {
	__name: "VPAlgoliaSearchBox",
	props: {
		algoliaOptions: {
			type: Object,
			required: !0
		},
		openRequest: {
			type: [Object, null],
			required: !1
		}
	},
	setup(p) {
		let m = p, h = a(), { site: g } = e(), _ = () => {}, v, y, b = null, x = 0, S, C, w = null, T = !1, E = !1;
		f(() => m.algoliaOptions, D, { immediate: !0 }), u(_), f(() => m.openRequest?.nonce, () => {
			let e = m.openRequest;
			e && (e.target === "search" ? v?.isReady ? A("docsearch", () => v?.open()) : b = "search" : e.target === "toggleAskAi" ? y?.isOpen ? y.close() : A("sidepanel", () => y?.open()) : y?.isReady ? A("sidepanel", () => y?.open()) : y ? b = "askAi" : v?.isReady ? A("docsearch", () => v?.openAskAi()) : b = "askAi");
		}, { immediate: !0 });
		async function D(e) {
			if (!i) return;
			await l();
			let n = e.askAi, { valid: r, ...a } = t({
				appId: e.appId ?? n?.appId,
				apiKey: e.apiKey ?? n?.apiKey,
				indexName: e.indexName ?? n?.indexName
			});
			r ? await O({
				...e,
				...a
			}) : console.warn("[vitepress] Algolia search cannot be initialized: missing appId/apiKey/indexName.");
		}
		async function O(e) {
			let t = ++x;
			_();
			let { useSidePanel: i } = n(e), a = e.askAi, { default: o } = await M();
			if (t === x) {
				if (i && a?.sidePanel) {
					let { default: n } = await N();
					if (t !== x) return;
					y = n({
						...r(a, e),
						onOpen: k,
						onClose: j.bind(null, "sidepanel"),
						onReady: () => {
							b === "askAi" && (b = null, A("sidepanel", () => y?.open()));
						},
						keyboardShortcuts: { "Ctrl/Cmd+I": !1 }
					});
				}
				v = o({
					...e,
					container: "#vp-docsearch",
					navigator: { navigate(e) {
						h.go(e.itemUrl);
					} },
					transformItems: (e) => e.map((e) => ({
						...e,
						url: P(e.url)
					})),
					...i && y && { interceptAskAiEvent: (e) => (A("sidepanel", () => y?.open(e)), !0) },
					onOpen: k,
					onClose: j.bind(null, "docsearch"),
					onReady: () => {
						b === "search" ? (b = null, A("docsearch", () => v?.open())) : b === "askAi" && !y && (b = null, A("docsearch", () => v?.openAskAi()));
					},
					keyboardShortcuts: {
						"/": !1,
						"Ctrl/Cmd+K": !1
					}
				}), _ = () => {
					v?.destroy(), y?.destroy(), v = void 0, y = void 0, b = null, w = null;
				};
			}
		}
		function k() {
			requestAnimationFrame(() => {
				(document.querySelector("#docsearch-input") || document.querySelector("#docsearch-sidepanel textarea"))?.focus();
			});
		}
		function A(e, t) {
			e === "docsearch" ? y?.isOpen ? (E = !0, y.close()) : v?.isOpen || document.activeElement instanceof HTMLElement && (w = document.activeElement) : e === "sidepanel" && (v?.isOpen ? (T = !0, v.close()) : y?.isOpen || document.activeElement instanceof HTMLElement && (w = document.activeElement)), setTimeout(t, 0);
		}
		function j(e) {
			if (e === "docsearch") {
				if (T) {
					T = !1;
					return;
				}
			} else if (e === "sidepanel" && E) {
				E = !1;
				return;
			}
			w &&= (w.focus(), null);
		}
		function M() {
			return S ||= import("./esm-Dxil18Xx.js"), S;
		}
		function N() {
			return C ||= import("./esm-BW1zfzhd.js"), C;
		}
		function P(e) {
			let { pathname: t, hash: n } = new URL(e, location.origin);
			return t.replace(/\.html$/, g.value.cleanUrls ? "" : ".html") + n;
		}
		return (e, t) => (d(), s(o, null, [t[0] ||= c("div", { id: "vp-docsearch" }, null, -1), t[1] ||= c("div", { id: "vp-docsearch-sidepanel" }, null, -1)], 64));
	}
};
//#endregion
export { p as default };
