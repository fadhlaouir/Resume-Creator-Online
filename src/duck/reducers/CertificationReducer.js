
const CertificationReducer = (
    state = {
        cert: [],
        activeCert: {
            certificationName: '',
            authority: '',
            licenseNumber: '',
            startDateCer: '',
            endDateCer: '',
            siteCertification: ''
        }
    }, action) => {
    switch (action.type) {
        case "SET_NAME_CER":
            return {
                ...state,
                activeCert: { ...state.activeCert, certificationName: action.certificationName }
            }
        case "SET_AUTHORITY":
            return {
                ...state,
                activeCert: { ...state.activeCert, authority: action.authority }
            }
        case "SET_LICENSE_NUMBER":
            return {
                ...state,
                activeCert: { ...state.activeCert, licenseNumber: action.licenseNumber }
            }
        case "SET_START_DATE_CER":
            return {
                ...state,
                activeCert: { ...state.activeCert, startDateCer: action.startDateCer }
            }
        case "SET_END_DATE_CER":
            return {
                ...state,
                activeCert: { ...state.activeCert, endDateCer: action.endDateCer }
            }
        case "SET_SITE_CER":
            return {
                ...state,
                activeCert: { ...state.activeCert, siteCertification: action.siteCertification }
            }
        case "ADD_SKILLS":
            return {
                ...state,
                cert: [...state.cert, { ...state.activeCert, id: Math.random() }]
            }
        case "UPDATE_SKILLS":
            return {
                ...state,
                cert: state.cert.map(e => e.id === action.activeCert.id ? state.activeCert : e)
            }
        case "DELETE_SKILLS":
            return {
                ...state,
                cert: state.cert.filter(e => e.certificationName !== action.certificationName)
            }
        default:
            return state
    }
}
export default CertificationReducer