import { takeLatest, put } from "redux-saga/effects";
import { apiGetClinicAllRoute } from "../../helpers/api/clinic";
import { getHeaders } from "../../helpers/function/auth";
import { GET_CLINIC_FAILED, GET_CLINIC_SUCCESS } from "../actions/types";

function* getClinic() {
  try {
    const headers = yield getHeaders();
    const resClinic = yield apiGetClinicAllRoute(headers);
    yield put({ type: GET_CLINIC_SUCCESS, payload: resClinic.data });
  } catch (e) {
    yield put({ type: GET_CLINIC_FAILED });
    console.info("Gagal menampilkan data clinic");
  }
}

function* clinicSaga() {
  console.info("authsaga()");
  yield takeLatest("GET_CLINIC", getClinic);
}
export default clinicSaga;
