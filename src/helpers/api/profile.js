import axios from 'axios'
import {baseUrl} from './index'

export async function apiGetProfile(headers) {
    let id = await localStorage.getItem("id");

    return axios ({
        method: 'GET',
        url: "https://doctorpets.tk:3002/user/getProfile",
        headers,
    });
}

export function apiUpdateProfile(headers, payload){
    return axios ({
        method: 'PUT',
        url: baseUrl + 'user/updateProfile',
        headers,
        data: payload,
    });
}