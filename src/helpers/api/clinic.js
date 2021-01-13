import axios from 'axios'
import {baseUrl} from './index'

export function apiGetClinicAllRoute(headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'clinic',
        headers,
    });
}

export function apiGetClinicByCityRoute(city, headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'search/?city=' + city,
        headers,
    });
}

export function apiGetClinicByNameRoute(name, headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'search/name/?name=' + name,
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
