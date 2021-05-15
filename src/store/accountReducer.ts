import {ACCOUNT_INITIALISE, ACTIONTYPE, LOGIN, LOGOUT} from "./actions";
const accountReducer = (state: {isLoggedIn: boolean; isInitialised: boolean; user: {}}, action: ACTIONTYPE) => {
  switch (action.type) {
    case ACCOUNT_INITIALISE: {
      const { isLoggedIn, user } = action.payload;
      return {
        ...state,
        isLoggedIn,
        isInitialised: true,
        user
      };
    }
    case LOGIN: {
      const { user } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        user
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    default: {
      return { ...state };
    }
  }
};
export default accountReducer;
