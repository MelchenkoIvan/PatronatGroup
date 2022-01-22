import Client from "../models/Client";
import { Lawyer } from "../models/Lawyers";

export const initialState = {
    homePage:{
        command:{
            defaultRowsOnPage:15,
            totalCount: 0,
            currentPageNumber: 0,
            items:[]as Array<Lawyer>
        } 
    },
    administration:{
        admin:{},
        clients:{
            simpleSearch:{
                isSearching: false,
                searchingValue:""
            },
            defaultRowsOnPage:15,
            totalCount: 0,
            currentPageNumber: 0,
            items:[]as Array<Client>,
        }
    }
}; 
