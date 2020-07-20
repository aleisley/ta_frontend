import React, { useContext, useEffect } from 'react';
import { Table } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

import { EditDeleteButtons } from './EditDeleteButtons';


export const AppointmentList = () => {
  const { appointments, getAppointments, removeAppointment } = useContext(GlobalContext);

  useEffect(() =>{
    getAppointments();
  }, [])

  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Patient Name</th>
          <th>Comment</th>
          <th>Start Datetime</th>
          <th>End Datetime</th>
          <th>Doctor</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {appointments.map(appointment => (
          <tr key={ appointment.id }>
            <th>{ appointment.id }</th>
            <td>{ appointment.patient_name }</td>
            <td>{ appointment.comment }</td>
            <td>{ appointment.start_dt }</td>
            <td>{ appointment.end_dt }</td>
            <td>{ appointment.doctor.first_name } { appointment.doctor.last_name }</td>
            <td>
              <EditDeleteButtons
                editLink={`/appointments/${appointment.id}/edit`}
                deleteFunction={() => removeAppointment(appointment.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
