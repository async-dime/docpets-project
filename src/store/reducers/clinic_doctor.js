import ACTION from "../types";


export default function getClinicDoctorSuccess(state = { loaded: false }, action = {}) {
    switch (action.type) {
        case ACTION.GET_CLINIC_DOCTOR_SUCCESS:
            return { ...action.payload, loaded: true };
        default:
            return state;
    }
}
