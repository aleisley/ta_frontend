import React, { useContext, useEffect, useState } from 'react';
import { Card, CardBody, Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

import { EditDeleteButtons } from './EditDeleteButtons';
import DataTable from 'react-data-table-component';
import { DateRangePicker } from 'react-dates';
import { axiosInstance } from '../axiosInstance';


export const AppointmentList = () => {
  const { appointments, getAppointments, removeAppointment } = useContext(GlobalContext);
  const [startFilterDate, setStartFilterDate] = useState(null);
  const [endFilterDate, setEndFilterDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [error, setError] = useState('');

  // useEffect(() =>{
  //   getAppointments();
  // }, []);

  const deleteAppointment = id => {
    axiosInstance.delete(`/appointments/${id}/`)
      .then(res => {
        removeAppointment(id);
      })
      .catch(err => setError(err.response.data.detail));
  }

  const columns = [
    {
      name: '#',
      selector: 'id',
      sortable: true,
      width: '3rem'
    },
    {
      name: 'Patient Name',
      selector: 'patient_name',
      sortable: true,
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
        deleteFunction={() => deleteAppointment(row.id)}/>
      )
    }
  ]

  const filterDates = () => {
    let startFilter = startFilterDate.toISOString().split('T')[0];
    let endFilter = endFilterDate.toISOString().split('T')[0];
    axiosInstance.get('/appointments/', {
        params: {
          start_date: startFilter,
          end_date: endFilter
        }
      })
      .then(res => {
        res.data.map(datum => {
          datum.start_dt = new Date(`${datum.start_dt}Z`).toLocaleString();
          datum.end_dt = new Date(`${datum.end_dt}Z`).toLocaleString();
        })
        setFilteredAppointments(res.data);
      })
      .catch(err => console.log(err))
  }

  return (
    <React.Fragment>
      <h1 className="mt-2 mb-4 text-center">Appointments</h1>
      <div className="mb-4">
        <DateRangePicker
          startDate={startFilterDate}
          startDateId="your_unique_start_date_id"
          endDate={endFilterDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={({ startDate, endDate }) => {
            setStartFilterDate(startDate)
            setEndFilterDate(endDate);
          }}
          focusedInput={ focusedInput }
          onFocusChange={ focusedInput => setFocusedInput(focusedInput) }
        />
        <Button onClick={ filterDates }>
          Filter
        </Button>
      </div>
      <Card className="shadow mb-5">
        <CardBody>
          {error &&
            <Alert color="danger">
              {error}
            </Alert>
          }
          <DataTable
            columns={ columns }
            data={ filteredAppointments.length ? filteredAppointments : appointments }
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
