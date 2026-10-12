import { type TPrimaryLabel, type TSurfaceLabel } from "quasar-app-extension-big-bang";
import type { Theme } from "vitepress";
export type BigBangThemeOptions = {
    primary?: TPrimaryLabel;
    surface?: TSurfaceLabel;
};
export declare function createBigBangTheme(options?: BigBangThemeOptions): Theme;
declare const _default: Theme;
export default _default;
