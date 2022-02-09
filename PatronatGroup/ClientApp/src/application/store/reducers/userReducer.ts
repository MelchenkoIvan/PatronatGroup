import { combineReducers } from "redux";
import { initialState} from "../initialState";

export const LOAD_ADMIN = "LOAD_ADMIN"
export const LOGOUT_ADMIN = "LOGOUT_ADMIN"
export const LOAD_CLIENTS = "LOAD_CLIENTS"
export const SEARCH_CLIENTS = "SEARCH_CLIENTS"
export const LOAD_ADMINS = "LOAD_ADMINS"

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
            console.log(action.data)
            return{
                ...state,
                ...action.data,
                simpleSearch:{
                    ...state.simpleSearch,
                    ...action.data.simpleSearch
                }
            }
        }
        case SEARCH_CLIENTS:{
            return{
                ...state,
                simpleSearch:{...action.data}
            }
        }
        default:
            return state;
    }
}
const adminsReducer = (state = initialState.administration.admins,action:any) => {
    switch(action.type){
        case LOAD_ADMINS:{
            return{
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}
const administrationReducer = combineReducers({
    admin: adminReducer,
    clients: clientsReducer,
    admins: adminsReducer,
});
export default administrationReducer;