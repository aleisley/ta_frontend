export default (state, action) => {
  switch(action.type) {

    case 'GET_DOCTORS':
      return {
        doctors: [...action.payload]
      }

    case 'ADD_DOCTOR':
      return {
        doctors: [action.payload, ...state.doctors]
      }

    case 'REMOVE_DOCTOR':
      return {
        doctors: state.doctors.filter(doctor => {
          return doctor.id !== action.payload
        })
      }

    case 'EDIT_DOCTOR':
      const updatedDoctor = action.payload;

      const updatedDoctors = state.doctors.map(doctor => {
        return doctor.id === updatedDoctor.id ? updatedDoctor : doctor
      });

      return {
        doctors: updatedDoctors
      }

    case 'GET_APPOINTMENTS':
      return {
        appointments: [...action.payload]
      }

    case 'REMOVE_APPOINTMENT':
      return {
        appointments: state.appointments.filter(appointment => {
          return appointment.id !== action.payload
        })
      }

    case 'EDIT_APPOINTMENT':
      const updatedAppointment = action.payload;

      const updatedAppointments = state.appointments.map(appointment => {
        return appointment.id === updatedAppointment.id ? updatedAppointment : appointment
      });

      return {
        appointments: updatedAppointments
      }

    default:
      return state
  }
}