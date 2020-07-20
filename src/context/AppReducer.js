export default (state, action) => {
  switch(action.type) {

    case 'GET_DOCTORS':
      return {
        doctors: [...action.payload],
        appointments: state.appointments
      }

    case 'ADD_DOCTOR':
      return {
        doctors: [action.payload, ...state.doctors],
        appointments: state.appointments
      }

    case 'REMOVE_DOCTOR':
      return {
        doctors: state.doctors.filter(doctor => {
          return doctor.id !== action.payload
        }),
        appointments: state.appointments
      }

    case 'EDIT_DOCTOR':
      const updatedDoctor = action.payload;

      const updatedDoctors = state.doctors.map(doctor => {
        return doctor.id === updatedDoctor.id ? updatedDoctor : doctor
      });

      return {
        doctors: updatedDoctors,
        appointments: state.appointments
      }

    case 'GET_APPOINTMENTS':
      return {
        doctors: state.doctors,
        appointments: [...action.payload]
      }

    case 'REMOVE_APPOINTMENT':
      return {
        doctors: state.doctors,
        appointments: state.appointments.filter(appointment => {
          return appointment.id !== action.payload
        })
      }

    case 'ADD_APPOINTMENT':
      return {
        doctors: state.doctors,
        appointments: [action.payload, ...state.appointments]
      }

    case 'EDIT_APPOINTMENT':
      const updatedAppointment = action.payload;

      const updatedAppointments = state.appointments.map(appointment => {
        return appointment.id === updatedAppointment.id ? updatedAppointment : appointment
      });

      return {
        doctors: state.doctors,
        appointments: updatedAppointments
      }

    default:
      return state
  }
}