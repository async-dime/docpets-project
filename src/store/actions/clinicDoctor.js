import ACTION from "../types"


export const getClinicDoctor = () => ({
  type: ACTION.GET_CLINIC_DOCTOR
});

export const getClinicDoctorSuccess = (payload) => ({
    type: ACTION.GET_CLINIC_DOCTOR_SUCCESS,
    payload: payload,
});
