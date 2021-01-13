import { takeLatest, put } from "redux-saga/effects";

import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  LOGOUT,
} from "../actions/types";

//import ACTION from '../types'

import { GET_PROFILE } from "../actions/types";
import {
  removeToken,
  saveAccountId,
  saveToken,
} from "../../helpers/function/auth.js";
import { apiLogin, apiRegister } from "../../helpers/api/auth";
import { GET_ANIMAL } from "../actions/types";

const nama = localStorage.getItem("nama")

function* login(action) {
  try {
    //LOGIN
    const resLogin = yield apiLogin(action.payload);
    console.log("data resLogin :", resLogin.data);

    if (resLogin && resLogin.data) {
      // save token to local storage
      yield saveToken(resLogin.data.token);
      yield saveAccountId(resLogin.data.id);

      yield put({ type: LOGIN_SUCCESS });

      alert("Selamat datang, " + {nama} );
      // alert("Selamat datang, " + resLogin.data.nama);
      yield put({ type: GET_PROFILE });
      yield put({ type: GET_ANIMAL });
    } else {
      // show alert
      alert("Login Gagal");
      yield put({ type: LOGIN_FAILED });
    }
  } catch {
    alert("Gagal login");
    yield put({ type: LOGIN_FAILED });
  }
}

function* register(action) {
  try {
    console.log("register saga: ", action);
    const resRegister = yield apiRegister(action.payload);
    console.log("data resRegister :", resRegister.data);

    if (resRegister && resRegister.data) {
      // save token to local storage
      yield saveToken(resRegister.data.token);
      yield saveAccountId(resRegister.data.id);

      yield put({ type: GET_PROFILE, payload: resRegister.data });
      yield put({ type: REGISTER_SUCCESS });

      alert(`Selamat Datang, ${nama}`);
      // alert("Selamat Datang, " + resRegister.data.nama);
    } else {
      alert("Register gagal");
      yield put({ type: REGISTER_FAILED });
    }
  } catch (e) {
    alert("Gagal register");
  }
}

function* logout() {
  try {
    yield removeToken();
  } catch (e) {
    alert("Gagal logout");
  }
}

function* authSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(REGISTER, register);
  yield takeLatest(LOGOUT, logout);
}
export default authSaga;
