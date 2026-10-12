import { Quasar, Dark } from "quasar";
import { BigBangTheme, } from "quasar-app-extension-big-bang";
import DefaultTheme from "vitepress/theme";
import Layout from "./components/Layout.vue";
function setupVitepressBigBangTheme(app, options) {
    app.use(Quasar, {
        plugins: { Dark },
    });
    if (typeof window !== "undefined") {
        const syncDarkMode = () => {
            Dark.set(document.documentElement.classList.contains("dark"));
        };
        syncDarkMode();
        const observer = new MutationObserver(syncDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
    }
    BigBangTheme.setPrimary(options.primary);
    BigBangTheme.setSurface(options.surface);
    BigBangTheme.setupDefaultProps();
}
export function createBigBangTheme(options = {}) {
    return {
        extends: DefaultTheme,
        Layout,
        enhanceApp({ app }) {
            setupVitepressBigBangTheme(app, options);
        },
    };
}
export default createBigBangTheme();
