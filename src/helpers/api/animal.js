import axios from 'axios'
import {baseUrl} from './index'

export function apiAddAnimal (headers, payload) {
    return axios ({
        method: 'PUT',
        url: baseUrl + 'user/addPet',
        data: payload,
        headers
    });
}

export function apiGetAnimal (headers){
    return axios ({
        method: 'GET',
        url: baseUrl + 'user/getPet',
        headers
    })
}

export function apiDeleteAnimal (headers, data){
    return axios ({
        method: 'DELETE',
        url: baseUrl + 'pet',
        headers, 
        data
    })
}