import React from 'react'

import { EditAppointmentForm } from '../components/EditAppointmentForm';
import { NavAndFooter } from '../components/NavAndFooter';

export const EditAppointment = props => {
  return (
    <NavAndFooter>
      <EditAppointmentForm appointmentID={ props.match.params.id } />
    </NavAndFooter>
  )
}
