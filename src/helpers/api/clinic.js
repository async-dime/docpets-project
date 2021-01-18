import axios from 'axios'
import {baseUrl} from './index'

export function apiGetClinicAllRoute(headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'klinik/getAllKlinik',
        headers,
    });
}

export function apiGetClinicByCityRoute(city, headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'search?lokasi=' + city,
        headers,
    });
}

export function apiGetClinicByNameRoute(name, headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'search?nama=' + name,
        headers,
    });
}

export function apiGetClinicByPetRoute(patient, headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'search/pet/?species=' + patient,
        headers,
    });
}
