
const ExperienceReducer = (
    state = {
        experience: [],
        activeExperience: {
            company: '',
            position: '',
            website: '',
            startDate: '',
            endDate: '',
            exSummary: ''
        }
    }, action) => {
    switch (action.type) {
        case "SET_COMPANY":
            return {
                ...state,
                activeExperience: { ...state.activeExperience, company: action.company }
            }
        case "SET_POSITION":
            return {
                ...state,
                activeExperience: { ...state.activeExperience, position: action.position }
            }
        case "SET_WEBSITE":
            return {
                ...state,
                activeExperience: { ...state.activeExperience, website: action.website }
            }
        case "SET_START_DATE":
            return {
                ...state,
                activeExperience: { ...state.activeExperience, startDate: action.startDate }
            }
        case "SET_END_DATE":
            return {
                ...state,
                activeExperience: { ...state.activeExperience, endDate: action.endDate }
            }
        case "SET_SUMMARY":
            return {
                ...state,
                activeExperience: { ...state.activeExperience, exSummary: action.exSummary }
            }
        case "ADD_EXP":
            return {
                ...state,
                experience: [...state.experience, { ...state.activeExperience, id: Math.random() }]
            }
        case "UPDATE_EXP":
            return {
                ...state,
                experience: state.experience.map(e => e.id === action.activeExperience.id ? state.activeExperience : e)
            }
        case "DELETE_EXP":
            return {
                ...state,
                experience: state.experience.filter(e => e.company !== action.company)
            }
        default:
            return state
    }
}
export default ExperienceReducer