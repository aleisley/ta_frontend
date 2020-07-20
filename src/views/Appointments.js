import React from 'react';
import { AppointmentList } from '../components/AppointmentList';
import { NavAndFooter } from '../components/NavAndFooter';


export const Appointments = () => {
  return (
    <NavAndFooter>
      <AppointmentList />
    </NavAndFooter>
  )
}

