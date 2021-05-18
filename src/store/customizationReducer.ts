import * as actionTypes from "./actions";
import config from "../config";
import {ACTIONTYPE} from "./actions";
import {Theme} from "@material-ui/core/styles";
export const initialState: Partial<Theme> & {isOpen: string; locale: string, opened: boolean} = {
  isOpen: "dashboard",
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  navType: config.theme,
  locale: config.i18n,
  rtlLayout: '',
  opened: true
};
const customizationReducer = (state = initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      return {
        ...state,
        isOpen: action.isOpen
      };
    case actionTypes.MENU_TYPE:
      return {
        ...state,
        navType: action.navType
      };
    case actionTypes.THEME_LOCALE:
      return {
        ...state,
        locale: action.locale
      };
    case actionTypes.THEME_RTL:
      return {
        ...state,
        rtlLayout: action.rtlLayout
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    default:
      return state;
  }
};
export default customizationReducer;
