type StateType = {
    themeId: string
}

const initState: StateType = {
    themeId: "1",
}
type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const themeReducer = (state = initState, action: ChangeThemeIdType): StateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: string) => ({ type: 'SET_THEME_ID', id }) as const
