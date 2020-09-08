import { createStore } from 'redux';
import combineReducers from "./combineReducers";
import themesReducer from "./themes/themes.reducer";

export default preloadedState => createStore(combineReducers, preloadedState);
