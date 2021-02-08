import { combineReducers } from "redux";
import auth from './auth';
import user from './user'
import clinic from './clinic'
import clinicSearch from './clinicSearch'
import animal from './animal'
import getAnimal from './get_animal'
import getClinicDetail from './clinic_detail'
import getClinicDoctor from './clinic_doctor'
import deleteAnimal from './delete_animal'
import addBooking from './add_booking'
import getBooking from './get_booking'
import getHistoryBooking from './get_history_booking'
import clinicSearchPet from './clinicSearchPet'



export default combineReducers({
  auth,
  clinic,
  clinicSearch,
  animal,
  getAnimal,
  deleteAnimal,
  getClinicDetail,
  getClinicDoctor,
  addBooking,
  getBooking,
  getHistoryBooking,
  clinicSearchPet,
  user
});
