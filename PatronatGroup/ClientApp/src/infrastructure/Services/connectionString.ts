import axios, { AxiosError } from 'axios';
import notificationService from './notificationService';

export const api = axios.create({
    baseURL: 'https://localhost:44308/api/'
}); 

api.interceptors.response.use(async response => {
    return await response;
}, (error: AxiosError) => {
    const {data,status} = error.response!;
    
    const message = data.message;
    switch(status){
        case 400:
            notificationService.BadRequest();
            break;
        case 401 :
            notificationService.Unauthorised();
            break;
        case 404:
            notificationService.NotFound();
            break;
        case 500:
            notificationService.SomethingWasWrong(message)
            break;
        default:
            break;
    }
    return Promise.reject(error);
});