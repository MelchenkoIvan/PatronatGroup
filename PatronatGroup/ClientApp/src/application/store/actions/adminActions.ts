import { setCookie } from "../../../infrastructure/Services/cookieService";
import { lawyersService } from "../../../infrastructure/Services/lawyersService";
import { userService } from "../../../infrastructure/Services/userService";
import { Login as LoginUser} from "../../models/User";
import { LOAD_ADMIN, LOAD_CLIENTS, LOGOUT_ADMIN } from "../reducers/userReducer";

export const GetClients = () => async (dispatch: any) => {
   await lawyersService.GetClients().then(data => {
        if(data != null){
            dispatch({
                type: LOAD_CLIENTS,
                data
            })
        }
    })
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
