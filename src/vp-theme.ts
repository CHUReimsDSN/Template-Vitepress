import { App } from "vue";
import { Quasar, Dark } from "quasar";
import {
  BigBangTheme,
  type TPrimaryLabel,
  type TSurfaceLabel,
} from "quasar-app-extension-big-bang";
import DefaultTheme from "vitepress/theme";
import Layout from "./components/Layout.vue";
import type { Theme } from "vitepress";

export type BigBangThemeOptions = {
  primary?: TPrimaryLabel;
  surface?: TSurfaceLabel;
};

function setupVitepressBigBangTheme(
  app: App,
  options?: BigBangThemeOptions,
) {
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

export function createBigBangTheme(
  options: BigBangThemeOptions = {},
): Theme {
  return {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
      setupVitepressBigBangTheme(app, options);
    },
  };
}

export default createBigBangTheme();
