export const changePicture = (value) => {
    return ({
        type: 'CHANGE_PICTURE',
        preview: value
    })
}



export const changeFullName = (value) => {
    return ({
        type: 'CHANGE_FULL_NAME',
        fullName: value
    })
}

export const changeCurrentPost = (value) => {
    return ({
        type: 'CHANGE_CURRENT_POST',
        currentPost: value
    })
}

export const changeEmail = (value) => {
    return ({
        type: 'CHANGE_EMAIL',
        email: value
    })
}

export const changeAddress = (value) => {
    return ({
        type: 'CHANGE_ADDRESS',
        address: value
    })
}

export const changePhoneNumber = (value) => {
    return ({
        type: 'CHANGE_PHONE_NUMBER',
        phoneNumber: value
    })
}

export const changeSummary = (value) => {
    return ({
        type: 'CHANGE_SUMMARY',
        abSummary: value
    })
}