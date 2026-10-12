export const vitepressBigBangConfig = {
  themeConfig: {
    docFooter: {
      prev: false,
      next: false,
    },
  },
  markdown: {
    theme: {
      dark: "dark-plus",
      light: "light-plus",
    },
  },
};

export const frenchTranslate = {
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
};
