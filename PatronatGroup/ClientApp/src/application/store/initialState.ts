import Client from "../models/Client";
import { Lawyer } from "../models/Lawyers";

export const initialState = {
    homePage:{
        command:[] as Array<Lawyer>
    },
    administration:{
        admin:{},
        clients:[] as Array<Client>,
    }
}; 
