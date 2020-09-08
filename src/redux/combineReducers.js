import { combineReducers } from "redux"
import themesReducer from "./themes/themes.reducer";

export default combineReducers({
    themes: themesReducer,
})
