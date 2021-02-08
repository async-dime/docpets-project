import {call, put, takeLatest} from "redux-saga/effects";
import api from "../api"
import {
    getDataSuccess
} from "../actions/user";
import ACTION from "../types"

export function* getDataProfile() {
    const user = yield call(api.user.getUserData);
    console.log(user, "user lo ini")
    yield put(getDataSuccess(user)) // ini dilempar di action user
}
function* userSagas() {
    console.info("userSAgas")
yield takeLatest(ACTION.GET_USER_PROFILE, getDataProfile );
}

export default userSagas;