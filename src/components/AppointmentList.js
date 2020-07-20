import React, { useContext, useEffect, useState } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

import { EditDeleteButtons } from './EditDeleteButtons';
import DataTable from 'react-data-table-component';


export const AppointmentList = () => {
  const { appointments, getAppointments, removeAppointment } = useContext(GlobalContext);

  useEffect(() =>{
    getAppointments();
  }, []);

  const columns = [
    {
      name: '#',
      selector: 'id',
      sortable: true
    },
    {
      name: 'Patient Name',
      selector: 'patient_name',
      sortable: true
    },
    {
      name: 'Comment',
      selector: 'comment',
    },
    {
      name: 'Start',
      selector: 'start_dt',
      sortable: true
    },
    {
      name: 'End',
      selector: 'end_dt',
      sortable: true
    },
    {
      name: 'Doctor',
      sortable: true,
      cell: row => `${row.doctor.first_name} ${row.doctor.last_name}`
    },
    {
      name: 'Actions',
      selector: 'actions',
      cell: row => (
        <EditDeleteButtons editLink={`/appointments/${row.id}/edit`}
        deleteFunction={() => removeAppointment(row.id)}/>
      )
    }
  ]

  return (
    <React.Fragment>
      <h1 className="mt-2 mb-4 text-center">Appointments</h1>
      <Card className="shadow">
        <CardBody>
          <DataTable
            columns={ columns }
            data={ appointments }
            pagination={ true }
            actions={
              <Link className="btn btn-success btn-sm" to="/appointments/create/">
                Add Appointment
              </Link>
            }
          />
        </CardBody>
      </Card>
    </React.Fragment>
  )
}
