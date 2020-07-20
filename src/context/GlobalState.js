import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { axiosInstance } from '../axiosInstance';
import {
  LOG_FAILURE,
  GET_APPOINTMENTS,
  GET_DOCTORS,
  REMOVE_APPOINTMENT,
  REMOVE_DOCTOR,
  ADD_APPOINTMENT,
  ADD_DOCTOR,
  EDIT_APPOINTMENT,
EDIT_DOCTOR
} from './actions';

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
        type: GET_DOCTORS,
        payload: res.data
      });
    }).catch(err => console.log(err));
  }

  const addDoctor = res => {
    dispatch({
      type: ADD_DOCTOR,
      payload: res.data
    })
  }

  const removeDoctor = id => {
    dispatch({
      type: REMOVE_DOCTOR,
      payload: id
    });
  }

  const editDoctor = res => {
    dispatch({
      type: EDIT_DOCTOR,
      payload: res.data
    })
  }

  const getAppointments = () => {
    axiosInstance.get('/appointments/')
    .then(res => {
      res.data.map(datum => {
        datum.start_dt = new Date(`${datum.start_dt}Z`).toLocaleString();
        datum.end_dt = new Date(`${datum.end_dt}Z`).toLocaleString();
      })
      dispatch({
        type: GET_APPOINTMENTS,
        payload: res.data
      });
    }).catch(err => console.log(err.response))
  }

  const addAppointment = res => {
    dispatch({
      type: ADD_APPOINTMENT,
      payload: res.data
    })
  }

  const removeAppointment = id => {
    dispatch({
      type: REMOVE_APPOINTMENT,
      payload: id
    })
  }

  const editAppointment = res => {
    dispatch({
      type: EDIT_APPOINTMENT,
      payload: res.data
    })
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
