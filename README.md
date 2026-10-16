## Vitepress Bigbang

Theme pour Vitepress avec style de Quasar BigBang.

## Installation

```json
"devDependencies": {
  "vitepress-bigbang": "https://github.com/CHUReimsDSN/Vitepress-BigBang.git",
},
```

## Utilisation du thème

```ts
// .vitepress/config.mts
import { defineConfig, mergeConfig, UserConfig } from "vitepress";
import { sidebar } from "./generated/sidebar.ts";
import { vitepressBigBangConfig, frenchTranslate } from "vitepress-bigbang";

// https://vitepress.dev/reference/site-config
export default defineConfig(
  mergeConfig(vitepressBigBangConfig as UserConfig, {
    themeConfig: {
      sidebar,
      ...frenchTranslate,
    },
  }),
);
```

```ts
// .vitepress/theme.index.ts
import DefaultTheme from "vitepress/theme";
import { ThemePicker } from "vitepress-bigbang";
import "vitepress-bigbang/style.css";

export default {
  extends: DefaultTheme,
  enhanceApp() {
    ThemePicker.setPrimary("Cyan");
    ThemePicker.setSurface("Slate");
  },
};
```

## Utilisations des scripts

```ts
// scripts/compute.ts
// A ajouter au package.json avant le npm run docs:dev
import {
  computeSidebar,
  computeVersion,
  computeApiDefinition,
  computeIndexMd,
} from "vitepress-bigbang/scripts";

console.log("Compute started...");
computeApiDefinition();
computeSidebar();
computeVersion({ mode: "package.json" });
computeIndexMd({
  primary: "Sky",
  surface: "Slate",
});
console.log("🎉 Compute done");
```
