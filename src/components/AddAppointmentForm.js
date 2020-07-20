import React, { useContext, useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  InputGroup,
  Alert
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom'
import ReactDatetime from 'react-datetime';
import { GlobalContext } from '../context/GlobalState';
import { axiosInstance } from '../axiosInstance';


export const AddAppointmentForm = props => {
  const { addAppointment, doctors } = useContext(GlobalContext);
  const history = useHistory();
  const [appointment, setAppointment] = useState({
    'patient_name': '',
    'comment': '',
    'start_dt': '',
    'end_dt': '',
    'doctor_id': ''
  });
  const [error, setError] = useState('');

  const onChange = e => {
    setAppointment({...appointment, [e.target.name]: e.target.value});
  }

  const onSubmit = e => {
    e.preventDefault();
    if (!appointment.doctor_id) {
      setError('Please fill out the Doctor for the appointment.')
    } else {
      axiosInstance.post('/appointments/', {...appointment})
        .then(res => {
          res.data.start_dt = new Date(`${res.data.start_dt}Z`).toLocaleString();
          res.data.end_dt = new Date(`${res.data.end_dt}Z`).toLocaleString();
          addAppointment(res);
          history.push('/appointments/');
        })
        .catch(err => setError(err.response.data.detail));
    }
  }

  return (
    <React.Fragment>
      <h1 className="mt-2 mb-4 text-center">Add Appointment</h1>
      <Card className="shadow mb-5">
        <CardBody>
          {error &&
            <Alert color="danger">
              {error}
            </Alert>
          }
          <Form onSubmit={ onSubmit }>
            <FormGroup>
              <Label>Patient Name</Label>
              <Input
                type="text"
                name="patient_name"
                value={ appointment.patient_name }
                onChange={ onChange }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Comment</Label>
              <Input
                type="text"
                name="comment"
                value={ appointment.comment }
                onChange={ onChange }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Start Datetime</Label>
              <InputGroup>
                <ReactDatetime
                  dateFormat={true}
                  timeFormat={true}
                  value={ appointment.start_dt }
                  onChange={ value => setAppointment({...appointment, "start_dt": value}) }
                  required
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>End Datetime</Label>
              <InputGroup>
                <ReactDatetime
                  dateformat={true}
                  timeFormat={true}
                  value={ appointment.end_dt }
                  onChange={ value => setAppointment({...appointment, "end_dt": value}) }
                  required
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Doctor</Label>
              <Input
                type="select"
                name="doctor_id"
                defaultValue={'DEFAULT'}
                onChange={e => setAppointment({...appointment, "doctor_id": e.target.value})}
                required
              >
                <option value="DEFAULT" disabled>Choose a doctor ...</option>
                {doctors.map(doctor => (
                  <option value={ doctor.id } key={ doctor.id }>
                    { doctor.first_name } { doctor.last_name }
                  </option>
                ))}
              </Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link className="btn btn-danger ml-2" to="/appointments/">Cancel</Link>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

