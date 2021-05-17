import { createMuiTheme } from "@material-ui/core/styles";
import value from "../assets/scss/_themes-vars.module.scss";
import { componentStyleOverrides } from "./compStyleOverride";
import { themePalette } from "./palatte";
import { themeTypography } from "./typography";
import { Theme } from '@material-ui/core/styles';
import {ColorPartial, SimplePaletteColorOptions} from "@material-ui/core/styles/createPalette";

declare module '@material-ui/core/styles' {
  interface Theme {
    navType: "light" | "dark"
    rtlLayout: string;
    borderRadius: number
    fontFamily: string
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteOptions {
    purple: SimplePaletteColorOptions & ColorPartial,
    orange: SimplePaletteColorOptions,
  }
  interface TypeText {
    dark: string;
    hint: string;
  }
  interface Palette extends PaletteOptions{}
}

declare module "@material-ui/core/styles/createTypography" {
  interface TypographyOptions {
    mainContent : {
      backgroundColor: string;
      width: string;
      minHeight: string;
      flexGrow: number;
      padding: string;
      marginTop: string;
      marginRight: string;
      borderRadius: string;
    },
    menuCaption: {
      fontSize: string;
      fontWeight: number;
      color: string;
      padding: string;
      textTransform: string;
      marginTop: string;
    },
    subMenuCaption: {
      fontSize: string;
      fontWeight: number;
      color: string;
      textTransform: string;
    },
    commonAvatar: {
      cursor: string;
      borderRadius: string;
    },
    smallAvatar: {
      width: string;
      height: string;
      fontSize: string;
    },
    mediumAvatar: {
      width: string;
      height: string;
      fontSize: string;
    },
    largeAvatar : {
      width: string;
      height: string;
      fontSize: string;
    }
  }
  interface Typography extends TypographyOptions {}
}

export interface NavObject {
  paper: string;
  backgroundDefault: string;
  background: string;
  textPrimary: string;
  textSecondary: string;
  textDark: string;
  menuSelected: string;
  menuSelectedBack: string;
  divider: string;
  customization: Theme
}

export function theme(customization: Theme) {
  let navObject: NavObject = {
    paper: "",
    backgroundDefault: "",
    background: "",
    textPrimary: "",
    textSecondary: "",
    textDark: "",
    menuSelected: "",
    menuSelectedBack: "",
    divider: "",
    customization: customization
  };
  switch (customization.navType) {
    case "light":
    default:
      navObject.paper = value.paper;
      navObject.backgroundDefault = value.paper;
      navObject.background = value.blue50;
      navObject.textPrimary = value.grey700;
      navObject.textSecondary = value.grey500;
      navObject.textDark = value.grey900;
      navObject.menuSelected = value.deepPurple600;
      navObject.menuSelectedBack = value.blue50;
      navObject.divider = value.grey200;
      break;
  }
  return createMuiTheme({
    direction: customization.rtlLayout ? "rtl" : "ltr",
    palette: themePalette(navObject),
    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px"
        }
      }
    },
    typography: themeTypography(navObject),
    components: componentStyleOverrides(navObject)
  });
}
export default theme;
