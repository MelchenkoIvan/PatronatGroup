import { setCookie } from "../../../infrastructure/Services/cookieService";
import { lawyersService } from "../../../infrastructure/Services/lawyersService";
import { userService } from "../../../infrastructure/Services/userService";
import Sc from "../../models/Sc";
import { Login as LoginUser} from "../../models/User";
import { LOAD_ADMIN, LOAD_CLIENTS, LOGOUT_ADMIN, SEARCH_CLIENTS } from "../reducers/userReducer";

export const GetClients = (sc:Sc) => async (dispatch: any) => {
   await lawyersService.GetClients(sc).then(data => {
            dispatch({
                type: LOAD_CLIENTS,
                data
            })
    })
}
export const SearchClients = (sc:Sc) => async (dispatch: any) => {
    dispatch({
        type: SEARCH_CLIENTS,
        data:{
            isSearching:true,
            searchingValue: sc.search
        }
    })
    await lawyersService.GetClients(sc).then(data => {
             dispatch({
                 type: LOAD_CLIENTS,
                 data:{...data,simpleSearch:{isSearching:false}}
             })
     })
}
export const DeleteClient = (id:number) => async (dispatch: any) => {
    await lawyersService.DeleteClient(id);
 }
 export const DeleteLawyer = (id:number) => async (dispatch: any) => {
    await lawyersService.DeleteLawyer(id);
 }
export const Login = (user:LoginUser) => async (dispatch: any) => {
    await userService.Login(user).then(data => {
         if(data != null){
            setCookie("token", data.token, 1);

            dispatch({
                type: LOAD_ADMIN,
                data
            })
        }
    })
}

export const Register = (user:LoginUser) => async (dispatch: any) => {
    await userService.Register(user);
}

export const Logout = () => async (dispatch: any) => {
    setCookie("token","", 1);
    dispatch({type: LOGOUT_ADMIN})    
}

export const GetCurrentUser = () => async (dispatch: any) => {
    await userService.GetCurrentUser().then(data => {
         if(data != null){
             dispatch({
                type: LOAD_ADMIN,
                data
            })
        }
    })
}
