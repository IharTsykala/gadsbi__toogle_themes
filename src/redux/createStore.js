import { createStore } from 'redux';
import combineReducers from "./combineReducers";

export default preloadedState => createStore(combineReducers, preloadedState);
