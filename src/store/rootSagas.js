import { takeLatest } from "redux-saga/effects";
import ACTION from "./types";
import {
    getDataProfile
} from "./sagas/userSagas";
import {
    getClinicDoctor
} from "./sagas/clinicDoctor2";
export default function* rootSagas() {
    //kata mas geris ini root saga profile
    
}