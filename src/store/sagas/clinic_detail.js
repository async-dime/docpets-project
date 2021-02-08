import { takeLatest, put } from "redux-saga/effects";
import { apiGetClinicDetail } from "../../helpers/api/clinic_detail";
import {
    GET_CLINIC_DETAIL,
    GET_CLINIC_DETAIL_SUCCESS,
    GET_CLINIC_DETAIL_FAILED,
} from "../actions/types";
import { getAccountId, getHeaders } from "../../helpers/function/auth";

function* getClinicDetail(action) {
    try {
        const headers = yield getHeaders();
        const accountId = yield getAccountId();
        const resGetClinicDetail = yield apiGetClinicDetail(
            headers,
            action.payload
        );
        // console.log(resGetClinicDetail.data.result[0], "clinic details saga");

        yield put({
            type: GET_CLINIC_DETAIL_SUCCESS,
            payload: resGetClinicDetail.data.result[0],
        });
        console.log("berhasil menambahkan clinic");
    } catch (err) {
        console.log(JSON.stringify(err));
        console.info("Gagal Mengambil Data Klinik");
        yield put({ type: GET_CLINIC_DETAIL_FAILED });
    }
}

function* clinicDetailSaga() {
    yield takeLatest(GET_CLINIC_DETAIL, getClinicDetail);
}

export default clinicDetailSaga;
