import { takeLatest, put, select } from "redux-saga/effects";
import { apiGetProfile, apiUpdateProfile } from "../../helpers/api/profile";
import { getAccountId, getHeaders } from "../../helpers/function/auth";
import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILED,
} from "../actions/types";

function* getProfileDetail(action) {
    try {
        const headers = yield getHeaders();
        const accountId = yield getAccountId();

        const resProfile = yield apiGetProfile(headers, action.payload);

        console.log(resProfile.data.result, "profile saga");

        yield put({
            type: GET_PROFILE_SUCCESS,
            payload: resProfile.data.result,
        });
    } catch (e) {
        console.info("Data profil tidak dapat diakses");

        yield put({ type: GET_PROFILE_FAILED });
    }
}

function* updateProfile(action) {
    try {
        console.info("sebelum headers update profile");
        const headers = yield getHeaders();
        console.info("sebelum account ID update", headers);
        const accountId = yield getAccountId();
        console.info(accountId);
        console.info("saga updateProfile :", action);
        // Update Profile
        const resProfileUpdate = yield apiUpdateProfile(
            accountId,
            headers,
            action.payload
        );
        if (resProfileUpdate && resProfileUpdate.data) {
            console.info("yessss", resProfileUpdate.data);
        }
        // console.log('data resProfileUpdate: ', resProfileUpdate.data)
        // yield put ({type: UPDATE_PROFILE_SUCCESS, payload: resProfileUpdate.data});
        // console.log('berhasil edit profile')
        yield put({ type: GET_PROFILE });

        console.info("Sukses mengupdate data profil");
    } catch (e) {
        // show alert
        console.info("Gagal mengupdate profil");
        yield put({ type: UPDATE_PROFILE_FAILED });
    }
}

function* profileSaga() {
    yield takeLatest(GET_PROFILE, getProfileDetail);
    yield takeLatest(UPDATE_PROFILE, updateProfile);
}

export default profileSaga;
