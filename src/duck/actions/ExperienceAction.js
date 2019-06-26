export const changeCompany = (value) => {
    return ({
        type: 'SET_COMPANY',
        company: value
    })
}
export const changePosition = (value) => {
    return ({
        type: 'SET_POSITION',
        position: value
    })
}
export const changeWebsite = (value) => {
    return ({
        type: 'SET_WEBSITE',
        website: value
    })
}

export const changeStartDate = (value) => {
    return ({
        type: 'SET_START_DATE',
        startDate: value
    })
}
export const changeEndDate = (value) => {
    return ({
        type: 'SET_END_DATE',
        endDate: value
    })
}

export const changeSummary = (value) => {
    return ({
        type: 'SET_SUMMARY',
        exSummary: value
    })
}
export const addExp = (value) => {
    return ({
        type: 'ADD_EXP',
        experience: value
    })
}
export const updateExp = (value) => {
    return ({
        type: 'UPDATE_EXP',
        activeExperience: value
    })
}
export const deleteExp = (value) => {
    return ({
        type: 'DELETE_EXP',
        company: value
    })
}