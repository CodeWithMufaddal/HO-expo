const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",
  transparent: "transparent",

  bgPrimary: "papayawhip",
  bgSecondary: "#444262",
  bgTertiary: "#7a5924",

  bgPrimarySade: "#0b060d",
  bgSecondarySade: "#000",

  btnPrimary: "#7a5922",
  btnSecondary: "#C1C0C8",

  light: "#FFF",
  dark: "#000",
  white: "#F3F4F8",
  lightWhite: "#FAFAFC",

  gray: "#696162",
  hrLineColor: "#BC8831",

  gradientLeft: "#be1622",
  gradientRight: "#bc8831"
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  VSmall: 4,
  IVSmall: 4,
  xxxSmall: 6,
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  medium: 16,
  xMedium: 18,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  xxxLarge: 38,
  xxxxLarge: 42,
};

const SHADOWS = {
  small: {
    shadowColor: "inherit",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "inherit",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
