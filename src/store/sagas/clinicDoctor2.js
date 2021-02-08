import {call, put, takeLatest} from "redux-saga/effects";
import {
    getClinicDoctorSuccess
} from "../actions/clinicDoctor";
import {
    GET_CLINIC_DOCTOR,
    GET_CLINIC_DOCTOR_SUCCESS,
    GET_CLINIC_DOCTOR_FAILED,
} from "../actions/types";
import api from "../api"



function* getClinicDoctor() {
    try {
    const doctor = yield call(api.doctor.getDoctorClinic);
    console.log("DOCTORR", doctor)
    yield put(getClinicDoctorSuccess(doctor)) // ini dilempar di action user

       
    } catch (err) {
        console.log(JSON.stringify(err));
        console.info("Gagal Mengambil Data Dokter");
        yield put({ type: GET_CLINIC_DOCTOR_FAILED });
    }
}

function* clinicDoctorSaga() {
    yield takeLatest(GET_CLINIC_DOCTOR, getClinicDoctor);
}

export default clinicDoctorSaga;
