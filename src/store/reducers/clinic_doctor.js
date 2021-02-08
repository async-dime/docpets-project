import {
    GET_CLINIC_DOCTOR,
    GET_CLINIC_DOCTOR_SUCCESS,
    GET_CLINIC_DOCTOR_FAILED,
} from "../actions/types.js";

export default function getClinicDoctorSuccess(state = { loaded: false }, action = {}) {
    switch (action.type) {
        case GET_CLINIC_DOCTOR_SUCCESS:
            return { ...action.payload, loaded: true };
        default:
            return state;
    }
}

// const initialState = {
//     isLoading: false,
//     // data: [{
//     //     userVeterinaries: [{
//     //         user: {}
//     //     }]
//     // }]
//     data: {},
// }

// const getClinicDoctor = (state = initialState, action) => {
//     switch(action.type) {
//         case GET_CLINIC_DOCTOR: {
//             console.log('reducer get CLINIC_DOCTOR')
//             return{
//                 ...state,
//                 isLoading: true
//             }
//         }
//         case GET_CLINIC_DOCTOR_SUCCESS: {
//             // console.log('reducer get CLINIC_DOCTOR success')
//             return{
//                 ...state,
//                 isLoading: false,
//                 data: action.payload
//             }
//         }
//         case GET_CLINIC_DOCTOR_FAILED: {
//             console.log('reducer get CLINIC_DOCTOR failed')
//             return{
//                 ...state,
//                 isLoading: false
//             }
//         }
//         default:
//             return{
//                 ...state,
//             }
//     }
// }

// export default getClinicDoctor
