const EducationReducer = (
    state = {
        education: [],
        activeEducation: {
            institution: '',
            area: '',
            diploma: '',
            startDateEd: '',
            endDateEd: '',
            course: ''
        }
    }, action) => {
    switch (action.type) {
        case "SET_INSTITUTION":
            return {
                ...state,
                activeEducation: { ...state.activeEducation, institution: action.institution }
            }
        case "SET_AREA":
            return {
                ...state,
                activeEducation: { ...state.activeEducation, area: action.area }
            }
        case "SET_DIPLOMA":
            return {
                ...state,
                activeEducation: { ...state.activeEducation, diploma: action.diploma }
            }
        case "SET_START_DATE_ED":
            return {
                ...state,
                activeEducation: { ...state.activeEducation, startDateEd: action.startDateEd }
            }
        case "SET_END_DATE_ED":
            return {
                ...state,
                activeEducation: { ...state.activeEducation, endDateEd: action.endDateEd }
            }
        case "SET_COURSE":
            return {
                ...state,
                activeEducation: { ...state.activeEducation, course: action.course }
            }
        case "ADD_EDU":
            return {
                ...state,
                education: [...state.education, { ...state.activeEducation, id: Math.random() }]
            }
        case "UPDATE_EDU":
            return {
                ...state,
                education: state.education.map(e => e.id === action.activeEducation.id ? state.activeEducation : e)
            }
        case "DELETE_EDU":
            return {
                ...state,
                education: state.education.filter(e => e.institution !== action.institution)
            }
        default:
            return state
    }
}
export default EducationReducer
