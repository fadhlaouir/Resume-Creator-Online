export const changeInstitution = (value) => {
    return ({
        type: 'SET_INSTITUTION',
        institution: value
    })
}
export const changeArea = (value) => {
    return ({
        type: 'SET_AREA',
        area: value
    })
}
export const changeDiploma = (value) => {
    return ({
        type: 'SET_DIPLOMA',
        diploma: value
    })
}
export const changeStartDateEd = (value) => {
    return ({
        type: 'SET_START_DATE_ED',
        startDateEd: value
    })
}
export const changeEndDateEd = (value) => {
    return ({
        type: 'SET_END_DATE_ED',
        endDateEd: value
    })
}
export const changeCourse = (value) => {
    return ({
        type: 'SET_COURSE',
        course: value
    })
}
export const addEdu = (value) => {
    return ({
        type: 'ADD_EDU',
        education: value
    })
}
export const updateEdu = (value) => {
    return ({
        type: 'UPDATE_EDU',
        activeEducation: value
    })
}
export const deleteEdu = (value) => {
    return ({
        type: 'DELETE_EDU',
        institution: value
    })
}