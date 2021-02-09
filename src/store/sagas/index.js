import {all} from 'redux-saga/effects'
import animalSaga from './animal'
import authSaga from './auth'
import bookingSaga from './booking'
import clinicSaga from './clinic'
import clinicCariSaga from './clinicCari'
import clinicCitySaga from './clinicCity'
import clinicPetSaga from './clinicPet'
import clinicDetailSaga from './clinic_detail'
import clinicDoctorSaga from './clinicDoctorSaga'
import profileSaga from './profile'
import userSagas from './userSagas'

export default function* rootSaga() {
    yield all([
        authSaga(),
        clinicSaga(),
        clinicCariSaga(),
        clinicCitySaga(),
        animalSaga(),
        clinicDetailSaga(),
        bookingSaga(),
        clinicPetSaga(),
        profileSaga(),
        userSagas(),
        clinicDoctorSaga()
    ])
}