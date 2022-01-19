import Client from "../models/Client";
import { Lawyer } from "../models/Lawyers";

export const initialState = {
    homePage:{
        command:{
            totalCount: 0,
            currentPageNumber: 0,
            items:[]as Array<Lawyer>
        } 
    },
    administration:{
        admin:{},
        clients:{
            totalCount: 0,
            currentPageNumber: 0,
            items:[]as Array<Client>,
        }
    }
}; 
