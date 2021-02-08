import axios from "axios";
import { baseUrl } from "./index";

export async function apiGetClinicDoctor(headers) {
    let clinicId = await localStorage.getItem("clinicId");

    return axios({
        method: "GET",
        url: baseUrl + "klinik/getAllDokterInKlinik/" + clinicId,
        headers,
    });
}
