import { combineReducers } from "redux";
import customizationReducer, {initialState as CustomizationState} from "./customizationReducer";
import snackbarReducer, {initialState as SnackBarState} from "./snackbarReducer";
import {createSelectorHook} from "react-redux";
const reducer = combineReducers({
  customization: customizationReducer,
  snackbar: snackbarReducer
});
export default reducer;
export const useSelector = createSelectorHook<{
  customization: typeof CustomizationState;
  snackbar: typeof SnackBarState;
}>();
