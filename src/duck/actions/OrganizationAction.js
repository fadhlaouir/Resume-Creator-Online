export const changeOrgName = (value) => {
    return ({
        type: 'SET_ORG_NAME',
        orgName: value
    })
}

export const changeOrgPosition = (value) => {
    return ({
        type: 'SET_ORG_POSITION',
        orgPosition: value
    })
}
export const changeStartDateOrg = (value) => {
    return ({
        type: 'SET_ORG_START',
        startDateOrg: value
    })
}
export const changeEndDateOrg = (value) => {
    return ({
        type: 'SET_ORG_END',
        endDateOrg: value
    })
}
export const changeAboutOrg = (value) => {
    return ({
        type: 'SET_ORG_ABOUT',
        orgSummary: value
    })
}
export const addOrg = (value) => {
    return ({
        type: 'ADD_ORGANIZATION',
        organization: value
    })
}
export const updateOrg = (value) => {
    return ({
        type: 'UPDATE_ORGANIZATION',
        activeOrganization: value
    })
}
export const deleteOrg = (value) => {
    return ({
        type: 'DELETE_ORGANIZATION',
        orgName: value
    })
}