export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ACCOUNT_INITIALISE = "ACCOUNT_INITIALISE";
export const FIREBASE_STATE_CHANGED = "FIREBASE_STATE_CHANGED";
export const SET_MENU = "SET_MENU";
// Action for Combine Reducer
export const MENU_OPEN = "@customization/MENU_OPEN";
export const MENU_TYPE = "@customization/MENU_TYPE";
export const THEME_LOCALE = "@customization/THEME_LOCALE";
export const THEME_RTL = "@customization/THEME_RTL";
export const SET_FONT_FAMILY = "@customization/SET_FONT_FAMILY";
export const SET_BORDER_RADIUS = "@customization/SET_BORDER_RADIUS";
export const SNACKBAR_OPEN = "@snackbar/SNACKBAR_OPEN";

export type ACTIONTYPE =
    | { type: typeof LOGIN; payload: {user: {}} }
    | { type: typeof LOGOUT; }
    | { type: typeof ACCOUNT_INITIALISE; payload: {isLoggedIn: boolean; user: {}}}
    | { type: typeof FIREBASE_STATE_CHANGED;  }
    | { type: typeof SET_MENU; opened: string }

    | { type: typeof MENU_OPEN, isOpen: boolean }
    | { type: typeof MENU_TYPE;  navType: string}
    | { type: typeof THEME_LOCALE; locale: string}
    | { type: typeof THEME_RTL, rtlLayout: string }
    | { type: typeof SET_FONT_FAMILY, fontFamily: string }
    | { type: typeof SET_BORDER_RADIUS, borderRadius: string }
    | { type: typeof SNACKBAR_OPEN }
