import * as connectionString from './connectionString';
import Lawyers from '../../application/models/Lawyers';
import ToContactUs from '../../application/models/ToContactUs';
import notificationService from './notificationService';
import Sc from '../../application/models/Sc';

export const lawyersService = {
    async GetLawyers(sc:Sc) {
        try {
            let data = await connectionString.api.post<Lawyers>('lawyers/lawyers',sc)
                .then(response => response.data);
            return data;
        }
        catch (e) {
            console.log(e);
        }
    },
    async CreateLawyer(lawyer: Lawyers) {
        try {
            let data = await connectionString.api.post('lawyers', lawyer)
                .then(response => response.data);
            return data;
        }
        catch (e) {
            console.log(e);
        }
    },
    async UpdateLawyer(lawyer: Lawyers) {
        try {
            let data = await connectionString.api.put('lawyers', lawyer)
                .then(response => response.data);
            return data;
        }
        catch (e) {
            console.log(e);
        }
    },
    async DeleteLawyer(lawyerId: number) {
        try {
            let data = await connectionString.api.delete('lawyers', {data:{lawyerId}})
                .then(response => response.data);
            return data;
        }
        catch (e) {
            console.log(e);
        }
    },

    async Submit(toContactUS: ToContactUs) {
        try {
            let data = await connectionString.api.post('lawyers/submit', toContactUS)
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
    async GetClients(sc:Sc) {
        try {
            let data = await connectionString.api.post<ToContactUs>('lawyers/clients', sc)
                .then(response => response.data);
            return data;
        }
        catch (e) {
            console.log(e);
        }
    },
};
