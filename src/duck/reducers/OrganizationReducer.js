
const OrganizationReducer = (
    state = {
        organization: [],
        activeOrganization: {
            orgName: '',
            orgPosition: '',
            startDateOrg: '',
            endDateOrg: '',
            orgSummary: ''
        }
    }, action) => {
    switch (action.type) {
        case "SET_ORG_NAME":
            return {
                ...state,
                activeOrganization: { ...state.activeOrganization, orgName: action.orgName }
            }
        case "SET_ORG_POSITION":
            return {
                ...state,
                activeOrganization: { ...state.activeOrganization, orgPosition: action.orgPosition }
            }
        case "SET_ORG_START":
            return {
                ...state,
                activeOrganization: { ...state.activeOrganization, startDateOrg: action.startDateOrg }
            }
        case "SET_ORG_END":
            return {
                ...state,
                activeOrganization: { ...state.activeOrganization, endDateOrg: action.endDateOrg }
            }
        case "SET_ORG_ABOUT":
            return {
                ...state,
                activeOrganization: { ...state.activeOrganization, orgSummary: action.orgSummary }
            }
        case "ADD_ORGANIZATION":
            return {
                ...state,
                organization: [...state.organization, { ...state.activeOrganization, id: Math.random() }]
            }
        case "UPDATE_ORGANIZATION":
            return {
                ...state,
                organization: state.organization.map(e => e.id === action.activeOrganization.id ? state.activeOrganization : e)
            }
        case "DELETE_ORGANIZATION":
            return {
                ...state,
                organization: state.organization.filter(e => e.orgName !== action.orgName)
            }
        default:
            return state
    }
}
export default OrganizationReducer