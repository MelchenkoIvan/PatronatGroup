import { lawyersService } from "../../../infrastructure/Services/lawyersService";
import ToContactUs from "../../models/ToContactUs";
import { LOAD_COMMAND } from "../reducers/homeReducer";

export const GetLawyers = () => async (dispatch: any) => {
   await lawyersService.GetLawyers().then(data => {
        if(data != null){
            dispatch({
                type: LOAD_COMMAND,
                data
            })
        }
    })
}
export const Submit = (toContactUs: ToContactUs) => async () => {
    await lawyersService.Submit(toContactUs)
 } 