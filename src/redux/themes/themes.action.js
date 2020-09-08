export const ActionTypes = {
    SET_THEME: '[theme] set theme'
}

export const setTheme = colorTheme => ({
        type: ActionTypes.SET_THEME,
        payload: colorTheme,
})
