const ProjectReducer = (
    state = {
        project: [],
        activeProject: {
            projectName: '',
            startDatePr: '',
            endDatePr: '',
            prSummary: ''
        }
    }, action) => {
    switch (action.type) {
        case "SET_PROJECT_NAME":
            return {
                ...state,
                activeProject: { ...state.activeProject, projectName: action.projectName }
            }
        case "SET_START_PR":
            return {
                ...state,
                activeProject: { ...state.activeProject, startDatePr: action.startDatePr }
            }
        case "SET_END_PR":
            return {
                ...state,
                activeProject: { ...state.activeProject, endDatePr: action.endDatePr }
            }
        case "SET_ABOUT_PR":
            return {
                ...state,
                activeProject: { ...state.activeProject, prSummary: action.prSummary }
            }
        case "ADD_PROJECT":
            return {
                ...state,
                project: [...state.project, { ...state.activeProject, id: Math.random() }]
            }
        case "UPDATE_PROJECT":
            return {
                ...state,
                project: state.project.map(e => e.id === action.activeProject.id ? state.activeProject : e)
            }
        case "DELETE_PROJECT":
            return {
                ...state,
                project: state.project.filter(e => e.projectName !== action.projectName)
            }
        default:
            return state
    }

}
export default ProjectReducer