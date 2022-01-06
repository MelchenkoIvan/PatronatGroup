import axios, { AxiosError } from 'axios';
import { store } from '../../application/store/store';
import notificationService from './notificationService';

export const api = axios.create({
    baseURL: 'https://localhost:44308/api/',
}); 

api.interceptors.request.use(config => {
    const token = store.getState().administration.admin.token;
    if(token) config.headers!.Authorization = `Bearer ${token}`
    return config;
  })
  
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