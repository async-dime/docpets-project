import ACTION from "../types";
export default function getDataSuccess(state={loaded:false},action = {}){
    switch(action.type){
        case ACTION.GET_USER_PROFILE_SUCCESS:
            return {...action.payload, loaded:true};
        default:
            return state;
    }
}