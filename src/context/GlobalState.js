import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { axiosInstance } from '../axiosInstance';

// Initial State
const initialState = {
  appointments: [],
  doctors: [],
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const getDoctors = () => {
    axiosInstance.get('/doctors/')
    .then(res => {
      dispatch({
        type: 'GET_DOCTORS',
        payload: res.data
      });
    }).catch(err => console.log(err));
  }

  const addDoctor = doctor => {
    axiosInstance.post('/doctors/', {...doctor})
    .then(res => {
      dispatch({
        type: 'ADD_DOCTOR',
        payload: res.data
      });
    }).catch(err => console.log(err.response));
  }

  const removeDoctor = id => {
    axiosInstance.delete(`/doctors/${id}/`)
    .then(res => {
      dispatch({
        type: 'REMOVE_DOCTOR',
        payload: id
      });
    }).catch(err => console.log(err.response));
  }

  const editDoctor = doctor => {
    axiosInstance.put(`/doctors/${doctor.id}/`, {...doctor})
    .then(res => {
      dispatch({
        type: 'EDIT_DOCTOR',
        payload: res.data
      });
    }).catch(err => console.log(err.response));
  }

  const getAppointments = () => {
    axiosInstance.get('/appointments/')
    .then(res => {
      dispatch({
        type: 'GET_APPOINTMENTS',
        payload: res.data
      });
    }).catch(err => console.log(err.response))
  }

  const addAppointment = appointment => {
    axiosInstance.post('/appointments/', {
      ...appointment,
      "start_dt": appointment.start_dt.utc().toDate(),
      "end_dt": appointment.end_dt.utc().toDate()
    })
    .then(res => {
      dispatch({
        type: 'ADD_APPOINTMENT',
        payload: res.data
      });
    }).catch(err => console.log(err.response))
  }

  const removeAppointment = id => {
    axiosInstance.delete(`/appointments/${id}/`)
    .then(res => {
      dispatch({
        type: 'REMOVE_APPOINTMENT',
        payload: id
      });
    }).catch(err => console.log(err.response))
  }

  const editAppointment = appointment => {
    axiosInstance.put(`/appointments/${appointment.id}`)
    .then(res => {
      dispatch({
        type: 'EDIT_APPOINTMENT',
        payload: res.data
      });
    }).catch(err => console.log(err.response))
  }

  return (
    <GlobalContext.Provider value={{
      doctors: state.doctors,
      appointments: state.appointments,
      addDoctor,
      removeDoctor,
      editDoctor,
      getDoctors,
      getAppointments,
      addAppointment,
      removeAppointment,
      editAppointment
    }}>
      { children }
    </GlobalContext.Provider>
  )
}
