import React, { useContext, useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  InputGroup
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom'
import ReactDatetime from 'react-datetime';
import { GlobalContext } from '../context/GlobalState';


export const AddAppointmentForm = () => {
  const { addAppointment, doctors, getDoctors } = useContext(GlobalContext);
  const history = useHistory();
  const [appointment, setAppointment] = useState({
    'patient_name': '',
    'comment': '',
    'start_dt': '',
    'end_dt': '',
    'doctor_id': ''
  })

  const onChange = e => {
    setAppointment({...appointment, [e.target.name]: e.target.value});
  }

  const onSubmit = () => {
    addAppointment(appointment);
    history.push('/appointments/');
  }

  useEffect(() => {
    getDoctors()
  }, [])

  return (
    <Card className="shadow">
      <CardBody>
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
          <Link className="btn btn-danger ml-2" to="/">Cancel</Link>
        </Form>
      </CardBody>
    </Card>
  )
}

