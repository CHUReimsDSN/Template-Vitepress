import { primaries, type TPrimaryLabel } from "./primary";
import { surfaces, type TSurfaceLabel } from "./surface";

export class ThemePicker {

  private constructor() {}

  static setPrimary(primaryLabel: TPrimaryLabel) {
    const primary = primaries.get(primaryLabel);
    if (!primary) {
      return;
    }
    for (const entry of Object.entries(primary)) {
      document.documentElement.style.setProperty(
        `--primary-${entry[0].replace("p", "")}`,
        entry[1],
      );
    }
  }

  static setSurface(surfaceLabel: TSurfaceLabel) {
    const surface = surfaces.get(surfaceLabel);
    if (!surface) {
      return;
    }
    for (const entry of Object.entries(surface)) {
      document.documentElement.style.setProperty(
        `--surface-${entry[0].replace("s", "")}`,
        entry[1],
      );
    }
  }
}
