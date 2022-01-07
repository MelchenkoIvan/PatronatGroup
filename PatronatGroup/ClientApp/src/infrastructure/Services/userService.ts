import * as connectionString from './connectionString';
import {Login, User} from '../../application/models/User';
import notificationService from './notificationService';

export const userService = {
    async Login(user: Login) {
        try {
            let data = await connectionString.api.post<User>('user/login',user)
                .then(response => response.data);
            return data;
        }
        catch (e) {
            console.log(e);
        }
    },

    async Register(user: Login) {
        try {
            let data = await connectionString.api.post<User>('user/registr', user)
                .then(response => response);
            if(data.status == 200){
                notificationService.Successful();
            }
            return data;
           
        }
        catch (e) {
            console.log(e);
        }
    },
    async GetCurrentUser() {
        try {
            let data = await connectionString.api.get<User>('user')
                .then(response => response.data);
            return data;
        }
        catch (e) {
            console.log(e);
        }
    }
};
