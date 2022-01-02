import { lawyersService } from "../../../infrastructure/Services/lawyersService";
import { LOAD_COMMAND } from "../reducers/homeReducer";

export const GetLawyers = () => async (dispatch: any) => {
   await lawyersService.GetLawyers().then(data => {
        dispatch({
            type: LOAD_COMMAND,
            data
        })
    })
}