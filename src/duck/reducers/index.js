import { combineReducers } from 'redux'
import AboutReducer from './AboutReducer'
import ExperienceReducer from './ExperienceReducer'
import EducationReducer from './EducationReducer'
import ProjectReducer from './ProjectReducer'
import OrganizationReducer from './OrganizationReducer'
import SkillsReducer from './SkillsReducer'
import CertificationReducer from './CertificationReducer'
import LanguagesReducer from './LanguagesReducer'

export default combineReducers({

    AboutReducer,
    ExperienceReducer,
    EducationReducer,
    ProjectReducer,
    OrganizationReducer,
    SkillsReducer,
    CertificationReducer,
    LanguagesReducer

})