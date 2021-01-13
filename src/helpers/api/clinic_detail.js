import axios from 'axios'
import {baseUrl} from './index'

export function apiGetClinicDetail(headers, id) {
    return axios ({
        method: 'GET',
        url: baseUrl + "clinic/" + id,
        headers
    })
}
