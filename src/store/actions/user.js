import ACTION from "../types"

//kata mas geris ini get user
export const getUserProfile = () => ({
    type: ACTION.GET_USER_PROFILE
})

export const getDataSuccess = payload =>({
    type: ACTION.GET_USER_PROFILE_SUCCESS, payload:payload
})