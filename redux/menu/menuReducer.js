import { menuActionTypes } from './menuActionTypes'

const INITIAL_STATE = {

    MenuData: [],
    missionData:[],
    
    

}
const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case menuActionTypes.SET_MENU_DATA:
            return {
                ...state,
                MenuData: action.payload
            };
            case menuActionTypes.SET_MISSION_DATA:
                return {
                    ...state,
                    missionData: action.payload
                };
       
        default:
            return state
    }
}
export default menuReducer;