const initState =
{
    picture: '',
    fullName: '',
    currentPost: '',
    email: '',
    address: '',
    phoneNumber: '',
    abSummary: ''
}


const AboutReducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_PICTURE":
            return { ...state, picture: action.picture }
        case "CHANGE_FULL_NAME":
            return { ...state, fullName: action.fullName }


        case "CHANGE_CURRENT_POST":
            return { ...state, currentPost: action.currentPost }

        case "CHANGE_EMAIL":
            return { ...state, email: action.email }

        case "CHANGE_ADDRESS":
            return { ...state, address: action.address }

        case "CHANGE_PHONE_NUMBER":
            return { ...state, phoneNumber: action.phoneNumber }

        case "CHANGE_SUMMARY":
            return { ...state, abSummary: action.abSummary }


        default:
            return state

    }
}
export default AboutReducer