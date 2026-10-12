import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { fileURLToPath, URL } from "node:url";
import type { UserConfig } from 'vitepress'

export const vitepressBigBangConfig: UserConfig = {
  themeConfig: {
    docFooter: {
      prev: false,
      next: false,
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Recherche",
          },
          modal: {
            footer: {
              navigateText: "Naviguer",
              selectText: "Sélectionner",
              closeText: "Fermer",
            },
            noResultsText: "Aucun résultat pour ",
          },
        },
      },
    },
    outline: {
      label: "Sur cette page",
    },
    returnToTopLabel: "Retour en haut",
    darkModeSwitchLabel: "Apparence",
  },
  markdown: {
    theme: {
      dark: "dark-plus",
      light: "light-plus",
    },
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },

};
