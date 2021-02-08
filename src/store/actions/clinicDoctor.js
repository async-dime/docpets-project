import { GET_CLINIC_DOCTOR, GET_CLINIC_DOCTOR_SUCCESS } from "./types";

export const getClinicDoctor = () => ({
  type: GET_CLINIC_DOCTOR
});

export const getClinicDoctorSuccess = (payload) => ({
    type: GET_CLINIC_DOCTOR_SUCCESS,
    payload: payload,
});
