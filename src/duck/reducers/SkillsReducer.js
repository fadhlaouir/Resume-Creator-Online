

const SkillsReducer = (state = { skills: [], activeSkill: { skillsName: '', skillsLevel: '' } }, action) => {

    switch (action.type) {

        case "SET_SKILLS_NAME":
            return {
                ...state,
                activeSkill: { ...state.activeSkill, skillsName: action.skillsName }
            }

        case "SET_SKILLS_LEVEL":
            return {
                ...state,
                activeSkill: { ...state.activeSkill, skillsLevel: action.skillsLevel }
            }

        case "ADD_SKILL":
            return {
                ...state,
                skills: [...state.skills, { ...state.activeSkill, id: Math.random() }]
            }


        case "UPDATE_SKILL":
            return {
                ...state,
                skills: state.skills.map(e => e.id === action.activeSkill.id ? state.activeSkill : e)
            }

        case "DELETE_SKILL":
            return {
                ...state,
                skills: state.skills.filter(e => e.skillsName !== action.skillsName)
            }

        default:
            return state
    }
}

export default SkillsReducer