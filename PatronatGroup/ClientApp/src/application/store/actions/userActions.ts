import { lawyersService } from "../../../infrastructure/Services/lawyersService";
import { userService } from "../../../infrastructure/Services/userService";
import User from "../../models/User";
import { LOAD_ADMIN, LOAD_CLIENTS } from "../reducers/userReducer";

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
export const Login = (user:User) => async (dispatch: any) => {
    await userService.Login(user).then(data => {
         if(data != null){
             dispatch({
                type: LOAD_ADMIN,
                data
            })
        }
    })
}