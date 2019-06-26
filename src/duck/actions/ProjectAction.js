export const changeProjectName = (value) => {
    return ({
        type: 'SET_PROJECT_NAME',
        projectName: value
    })
}
export const changeStartDatePr = (value) => {
    return ({
        type: 'SET_START_PR',
        startDatePr: value
    })
}
export const changeEndDatePr = (value) => {
    return ({
        type: 'SET_END_PR',
        endDatePr: value
    })
}
export const changeAboutPr = (value) => {
    return ({
        type: 'SET_ABOUT_PR',
        prSummary: value
    })
}
export const addProject = (value) => {
    return ({
        type: 'ADD_PROJECT',
        project: value
    })
}
export const updateProject = (value) => {
    return ({
        type: 'UPDATE_PROJECT',
        activeProject: value
    })
}
export const deleteProject = (value) => {
    return ({
        type: 'DELETE_PROJECT',
        projectName: value
    })
}