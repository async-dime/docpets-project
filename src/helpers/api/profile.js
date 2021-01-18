import axios from 'axios'
import {baseUrl} from './index'

export function apiGetProfile(headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + '/user/getProfile',
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