import { combineReducers } from "redux";
import { initialState} from "../initialState";

export const LOAD_COMMAND = "LOAD_COMMAND"

const commandReducer = (state = initialState.homePage.command,action:any) => {
    switch(action.type){
        case LOAD_COMMAND:{
            return{
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}
const homeReducer = combineReducers({
    command: commandReducer,
});
export default homeReducer;