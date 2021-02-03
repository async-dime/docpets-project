import axios from 'axios'
import {baseUrl} from './index'

let clinicId = localStorage.getItem("clinicId")

export function apiGetClinicDetail(headers, id) {
    return axios ({
        method: 'GET',
        url: baseUrl + "klinik/getKlinikById/" + clinicId,
        headers
    })
}
