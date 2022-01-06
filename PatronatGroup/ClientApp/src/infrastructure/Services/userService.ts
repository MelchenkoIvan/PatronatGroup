import * as connectionString from './connectionString';
import User from '../../application/models/User';

export const userService = {
    async Login(user: User) {
        try {
            let data = await connectionString.api.post<User>('user/login',user)
                .then(response => response.data);
            return data;
        }
        catch (e) {
            console.log(e);
        }
    },

    async Register(user: User) {
        try {
            let data = await connectionString.api.post<User>('user/search', user)
                .then(response => response.data);
            return data;
           
        }
        catch (e) {
            console.log(e);
        }
    }
};
