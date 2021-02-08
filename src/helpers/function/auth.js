
export async function getHeaders(){
    const token = await localStorage.getItem('token')
    // const token = await localStorage.getItem('APP_AUTH_TOKEN')
    return {
        'Content-Type' : 'application/json',
        Authorization: 'Bearer ' + token,
    }
}

export async function getClinicId() {
    return await localStorage.getItem('clinicId');
}

export async function getAccountId() {
    return await localStorage.getItem('id');
}

export async function saveToken(token) {
    localStorage.setItem('APP_AUTH_TOKEN', token);
}

export async function saveAccountId(id) {
    localStorage.setItem('APP_ACCOUNT_ID', String(id));
}

export async function removeToken(token) {
    localStorage.removeItem('APP_AUTH_TOKEN');
}

export async function removeAccountId(id) {
    localStorage.removeItem('APP_ACCOUNT_ID');
}