import { lawyersService } from "../../../infrastructure/Services/lawyersService";
import Sc from "../../models/Sc";
import ToContactUs from "../../models/ToContactUs";
import { LOAD_COMMAND } from "../reducers/homeReducer";

export const GetLawyers = (sc:Sc) => async (dispatch: any) => {
   await lawyersService.GetLawyers(sc).then(data => {
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