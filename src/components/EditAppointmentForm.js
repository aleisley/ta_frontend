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

export const EditAppointmentForm = props => {
  const { appointments, editAppointment, doctors } = useContext(GlobalContext);
  const history = useHistory();
  const [selectedAppointment, setSelectedAppointment] = useState({
    patient_name: '',
    comment: '',
    start_dt: '',
    end_dt: '',
    doctor_id: ''
  });
  const currentAppointmentId = Number(props.appointmentID);

  useEffect(() => {
    const selectedAppointment = appointments.find(appointment => appointment.id === currentAppointmentId);
    setSelectedAppointment(selectedAppointment);
  }, [currentAppointmentId, appointments]);

  const onChange = e => {
    setSelectedAppointment({...selectedAppointment, [e.target.name]: e.target.value});
  }

  const onSubmit = e => {
    e.preventDefault();
    editAppointment(selectedAppointment);
    history.push('/appointments/');
  }

  return (
    <React.Fragment>
      <h1 className="mt-2 mb-4 text-center">Edit Appointment</h1>
      <Card className="shadow">
        <CardBody>
          <Form onSubmit={ onSubmit }>
            <FormGroup>
              <Label>Patient Name</Label>
              <Input
                type="text"
                name="patient_name"
                value={ selectedAppointment.patient_name }
                onChange={ onChange }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Comment</Label>
              <Input
                type="text"
                name="comment"
                value={ selectedAppointment.comment }
                onChange={ onChange }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Start Datetime</Label>
              <InputGroup>
                <ReactDatetime
                  timeFormat={true}
                  value={ selectedAppointment.start_dt }
                  onChange={ value => setSelectedAppointment({...selectedAppointment, "start_dt": value}) }
                  required
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>End Datetime</Label>
              <InputGroup>
                <ReactDatetime
                  timeFormat={true}
                  value={ selectedAppointment.end_dt }
                  onChange={ value => setSelectedAppointment({...selectedAppointment, "end_dt": value}) }
                  required
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Doctor</Label>
              <Input
                type="select"
                name="doctor_id"
                value={selectedAppointment.doctor_id}
                onChange={e => setSelectedAppointment({...selectedAppointment, "doctor_id": e.target.value})}
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

