import { Lawyer } from "../models/Lawyers";

export const initialState = {
    homePage:{
        command:[] as Array<Lawyer>
    } 
}; 
export interface InitialStateType {
    homePage:{
        command:[]
    } 
}; 