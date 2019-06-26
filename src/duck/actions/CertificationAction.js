export const setNameCer = (value) => {
    return ({
        type: 'SET_NAME_CER',
        certificationName: value
    })
}
export const setAuthority = (value) => {
    return ({
        type: 'SET_AUTHORITY',
        authority: value
    })
}

export const setLicenseNumber = (value) => {
    return ({
        type: 'SET_LICENSE_NUMBER',
        licenseNumber: value
    })
}

export const setStartDateCer = (value) => {
    return ({
        type: 'SET_START_DATE_CER',
        startDateCer: value
    })
}
export const setEndDateCer = (value) => {
    return ({
        type: 'SET_END_DATE_CER',
        endDateCer: value
    })
}

export const setSiteCer = (value) => {
    return ({
        type: 'SET_SITE_CER',
        siteCertification: value
    })
}
export const addSkills = (value) => {
    return ({
        type: 'ADD_SKILLS',
        cert: value
    })
}
export const updateSkills = (value) => {
    return ({
        type: 'UPDATE_SKILLS',
        activeCert: value
    })
}
export const deleteSkills = (value) => {
    return ({
        type: 'DELETE_SKILLS',
        certificationName: value
    })
}
