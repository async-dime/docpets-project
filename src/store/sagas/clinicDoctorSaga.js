import {call, put, takeLatest} from "redux-saga/effects";
import api from "../api"
import {
    getClinicDoctorSuccess
} from "../actions/clinicDoctor";
import ACTION from "../types"



function* getClinicDoctor() {
    const doctor = yield call(api.doctor.getDoctorClinic);
    console.log("DOCTORR", doctor)
    yield put(getClinicDoctorSuccess(doctor)) // ini dilempar di action user
}

function* clinicDoctorSaga() {
    yield takeLatest(ACTION.GET_CLINIC_DOCTOR, getClinicDoctor);
}

export default clinicDoctorSaga;
