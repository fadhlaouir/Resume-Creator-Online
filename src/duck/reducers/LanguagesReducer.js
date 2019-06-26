
const LanguagesReducer = (
    state = {
        language: [],
        activeLanguage: {
            languageName: '',
            fluency: ''
        }
    }, action) => {
    switch (action.type) {
        case "SET_LANGUAGE_NAME":
            return {
                ...state,
                activeLanguage: { ...state.activeLanguage, languageName: action.languageName }
            }
        case "SET_LANGUAGE_FLUENCY":
            return {
                ...state,
                activeLanguage: { ...state.activeLanguage, fluency: action.fluency }
            }
        case "ADD_LANGUAGE":
            return {
                ...state,
                language: [...state.language, { ...state.activeLanguage, id: Math.random() }]
            }
        case "UPDATE_LANGUAGE":
            return {
                ...state,
                language: state.language.map(e => e.id === action.activeLanguage.id ? state.activeLanguage : e)
            }
        case "DELETE_LANGUAGE":
            return {
                ...state,
                language: state.language.filter(e => e.languageName !== action.languageName)
            }
        default:
            return state
    }
}
export default LanguagesReducer
