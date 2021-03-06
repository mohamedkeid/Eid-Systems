import _ from "lodash";
import {
    SKILLS_CREATE_REQUEST_SUCCESS,
    SKILLS_DESTROY_REQUEST_SUCCESS,
    SKILLS_LIST_REQUEST_SUCCESS,
    SKILLS_SHOW_REQUEST_SUCCESS,
    SKILLS_UPDATE_REQUEST_SUCCESS
} from "../actions/skill_actions";

export default (state = {}, action) => {
    switch (action.type) {
        // Added a newly created skill item from the payload to the list skills
        case SKILLS_CREATE_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            );

        // Removed a skill item from the payload from the list of skills
        case SKILLS_DESTROY_REQUEST_SUCCESS:
            return _.omit(state, action.payload.data["_id"]);

        // Retrieved the entire list of skill documents
        case SKILLS_LIST_REQUEST_SUCCESS:
            return _.mapKeys(action.payload.data.skills, "_id");

        // Retrieved a single skill document
        case SKILLS_SHOW_REQUEST_SUCCESS:
            const skill = action.payload.data.skill;
            let showSkills = state.skills;

            if (showSkills) {
                showSkills[skill._id] = skill;
            } else {
                showSkills = {
                    [skill._id]: skill
                };
            }

            return showSkills;

        // Updated a specific skill from the payload retrieved from payload
        case SKILLS_UPDATE_REQUEST_SUCCESS:
            const updatedSkill = action.payload.data.skill;
            return Object.assign({}, state,
                {[updatedSkill["_id"]]: updatedSkill}
            );

        // Only update state when the action type is specified
        default:
            return state;
    }
};
