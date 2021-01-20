import { takeLatest, put } from "redux-saga/effects";
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

function* getProfileDetail() {
  try {
    console.info("sebelum headers");
    const headers = yield getHeaders();
    const accountId = yield getAccountId();
    console.info("sesudah headers");

    const resProfile = yield apiGetProfile(accountId, headers);
    console.info("ini resprofile", resProfile.data.result);
    console.info("ini resprofile nama", resProfile.data.result.nama);

    yield put({ type: GET_PROFILE_SUCCESS, payload: resProfile.data.result });
    console.log("berhasil ambil data profile");
  } catch (e) {
    alert("Data profil tidak dapat diakses");

    yield put({ type: GET_PROFILE_FAILED });
  }
}

function* updateProfile(action) {
  try {
    console.log("sebelum headers update profile");
    const headers = yield getHeaders();
    console.log("sebelum account ID update", headers);
    const accountId = yield getAccountId();
    console.log(accountId);
    console.log("saga updateProfile :", action);
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

    alert("Sukses mengupdate data profil");
  } catch (e) {
    // show alert
    alert("Gagal mengupdate profil");
    yield put({ type: UPDATE_PROFILE_FAILED });
  }
}

function* profileSaga() {
  yield takeLatest(GET_PROFILE, getProfileDetail);
  yield takeLatest(UPDATE_PROFILE, updateProfile);
}

export default profileSaga;
