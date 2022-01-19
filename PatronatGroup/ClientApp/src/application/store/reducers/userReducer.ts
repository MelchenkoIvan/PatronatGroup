import { combineReducers } from "redux";
import { initialState} from "../initialState";

export const LOAD_ADMIN = "LOAD_ADMIN"
export const LOGOUT_ADMIN = "LOGOUT_ADMIN"
export const LOAD_CLIENTS = "LOAD_CLIENTS"

const adminReducer = (state = initialState.administration.admin,action:any) => {
    switch(action.type){
        case LOAD_ADMIN:{
            return{...action.data}
        }
        case LOGOUT_ADMIN:{
            return{}
        }
        default:
            return state;
    }
}
const clientsReducer = (state = initialState.administration.clients,action:any) => {
    switch(action.type){
        case LOAD_CLIENTS:{
            return{...action.data}
        }
        default:
            return state;
    }
}
const administrationReducer = combineReducers({
    admin: adminReducer,
    clients: clientsReducer,
});
export default administrationReducer;