import {ActionTypes} from "./themes.action";
import themes from "../../services/themes";

const initialState = {
    currentTheme: themes.dark,
    nameCurrentTheme: 'dark'
};

export default function themesReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_THEME:
            return {
                ...state,
                currentTheme: action.payload,
            };
        case ActionTypes.SET_NAME_THEME:
            return {
                ...state,
                nameCurrentTheme: action.payload,
            };
        default:
            return state;
    }
}
