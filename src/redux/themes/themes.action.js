export const ActionTypes = {
    SET_THEME: '[theme] set theme',
    SET_NAME_THEME: '[theme] set name theme'
}

export const setTheme = colorTheme => ({
        type: ActionTypes.SET_THEME,
        payload: colorTheme,
})

export const setNameTheme = nameTheme => ({
    type: ActionTypes.SET_NAME_THEME,
    payload: nameTheme,
})
