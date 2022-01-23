import { setCookie } from "../../../infrastructure/Services/cookieService";
import { lawyersService } from "../../../infrastructure/Services/lawyersService";
import { userService } from "../../../infrastructure/Services/userService";
import { Lawyer } from "../../models/Lawyers";
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
export const CreateLawyer = (value:Lawyer) => async (dispatch: any) => {

    value.image = await getBase64(value.image).then((req) => req);
    await lawyersService.CreateLawyer(value);
}
export const UpdateLawyer = (value:Lawyer) => async (dispatch: any) => {
    value.image = await getBase64(value.image).then((req) => req);
    await lawyersService.UpdateLawyer(value);
}

function getBase64(file:File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }