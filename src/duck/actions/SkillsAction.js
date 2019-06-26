
export const SetSkillsName = (value) => {
    return ({
        type: 'SET_SKILLS_NAME',
        skillsName: value
    })
}

export const SetSkillsLevel = (value) => {
    return ({
        type: 'SET_SKILLS_LEVEL',
        skillsLevel: value
    })
}

export const addSkills = (value) => {
    return (
        {
            type: "ADD_SKILL",
            skill: value
        }
    )
}

export const updateSkills = (value) => {
    return (
        {
            type: "UPDATE_SKILL",
            activeSkill: value

        }
    )
}

export const deleteSkills = (value) => {
    return (
        {
            type: "DELETE_SKILL",
            skillsName: value
        }
    )
}
