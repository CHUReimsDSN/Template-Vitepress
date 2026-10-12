import { s as e, t } from "./_plugin-vue_export-helper-BRO4Hcm6.js";
import { useRoute as n } from "vitepress";
import { createElementBlock as r, onMounted as i, openBlock as a, useTemplateRef as o, watch as s } from "vue";
var c = /*#__PURE__*/ t({
	__name: "VPCarbonAds",
	props: { carbonAds: {
		type: Object,
		required: !0
	} },
	setup(t) {
		let c = n(), l = t.carbonAds, u = e("(min-width: 80rem)"), d = o("container"), f = !1;
		function p() {
			if (!f) {
				f = !0;
				let e = new URLSearchParams({
					serve: l.code,
					placement: l.placement,
					format: l?.format || "classic"
				}), t = document.createElement("script");
				t.id = "_carbonads_js", t.src = `//cdn.carbonads.com/carbon.js?${e.toString()}`, t.async = !0, d.value?.appendChild(t);
			}
		}
		return s(() => c.data.relativePath, () => {
			f && u.value && window._carbonads?.refresh();
		}), l && i(() => {
			u.value ? p() : s(u, (e) => e && p());
		}), (e, t) => (a(), r("div", {
			class: "VPCarbonAds",
			ref_key: "container",
			ref: d
		}, null, 512));
	}
}, [["__scopeId", "data-v-64c776cf"]]);
//#endregion
export { c as default };
