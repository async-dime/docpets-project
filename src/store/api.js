import axios from "axios";
export default {
    user: {
        //ini api get data user
        getUserData: () =>
        axios.get("https://doctorpets.tk:3002/user/getProfile",
        {
            "headers":
            {"Authorization": `Bearer ${localStorage.getItem("token")}`}
        }).then(res => res.data.result),

        // ini api lalalala yeyeyeye (andalan sifu hendrik)

    },
    doctor: {
        getDoctorClinic: () =>
        axios.get(`https://doctorpets.tk:3002/klinik/getAllDokterInKlinik/${localStorage.getItem("clinicId")}`,
        {
            "headers":
            {"Authorization": `Bearer ${localStorage.getItem("token")}`}
        }).then(res => res.data.result),
    }
}