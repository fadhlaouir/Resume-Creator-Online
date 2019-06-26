export const changeLanguageName = (value) => {
    return ({
        type: 'SET_LANGUAGE_NAME',
        languageName: value
    })
}
export const changeLanguageFluency = (value) => {
    return ({
        type: 'SET_LANGUAGE_FLUENCY',
        fluency: value
    })
}
export const addLanguage = (value) => {
    return ({
        type: 'ADD_LANGUAGE',
        language: value
    })
}
export const updateLanguage = (value) => {
    return ({
        type: 'UPDATE_LANGUAGE',
        activeLanguage: value
    })
}
export const deleteLanguage = (value) => {
    return ({
        type: 'DELETE_LANGUAGE',
        languageName: value
    })
}
