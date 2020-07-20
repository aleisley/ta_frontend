import {
  LOG_FAILURE,
  GET_APPOINTMENTS,
  GET_DOCTORS,
  REMOVE_APPOINTMENT,
  REMOVE_DOCTOR,
  ADD_APPOINTMENT,
  ADD_DOCTOR,
  EDIT_APPOINTMENT,
  EDIT_DOCTOR,
} from './actions';


export default (state, action) => {
  switch(action.type) {

    case GET_DOCTORS:
      return {
        doctors: [...action.payload],
        appointments: state.appointments,
        responseStatus: {"success": true, "detail": ""}
      }

    case ADD_DOCTOR:
      return {
        doctors: [action.payload, ...state.doctors],
        appointments: state.appointments,
        responseStatus: {"success": true, "detail": ""}
      }

    case REMOVE_DOCTOR:
      return {
        doctors: state.doctors.filter(doctor => {
          return doctor.id !== action.payload
        }),
        appointments: state.appointments,
        responseStatus: {"success": true, "detail": ""}
      }

    case EDIT_DOCTOR:
      const updatedDoctor = action.payload;

      const updatedDoctors = state.doctors.map(doctor => {
        return doctor.id === updatedDoctor.id ? updatedDoctor : doctor
      });

      return {
        doctors: updatedDoctors,
        appointments: state.appointments,
        responseStatus: {"success": true, "detail": ""}
      }

    case GET_APPOINTMENTS:
      return {
        doctors: state.doctors,
        appointments: [...action.payload],
        responseStatus: {"success": true, "detail": ""}
      }

    case REMOVE_APPOINTMENT:
      return {
        doctors: state.doctors,
        appointments: state.appointments.filter(appointment => {
          return appointment.id !== action.payload
        }),
        responseStatus: {"success": true, "detail": ""}
      }

    case ADD_APPOINTMENT:
      return {
        doctors: state.doctors,
        appointments: [action.payload, ...state.appointments],
        responseStatus: {"success": true, "detail": ""}
      }

    case EDIT_APPOINTMENT:
      const updatedAppointment = action.payload;

      const updatedAppointments = state.appointments.map(appointment => {
        return appointment.id === updatedAppointment.id ? updatedAppointment : appointment
      });

      return {
        doctors: state.doctors,
        appointments: updatedAppointments,
        responseStatus: {"success": true, "detail": ""}
      }

    case LOG_FAILURE:
      return {
        doctors: state.doctors,
        appointments: state.appointments,
        responseStatus: {"success": false, "detail": action.payload}
      }

    default:
      return state
  }
}