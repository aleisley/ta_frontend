import React, { useContext, useState, useEffect } from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody
} from 'reactstrap';
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState';

export const EditDoctorForm = props => {
  const {editDoctor, doctors} = useContext(GlobalContext);
  const history = useHistory();
  const [selectedDoctor, setSelectedDoctor] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: ''
  });
  const currentDoctorId = Number(props.doctorID);

  useEffect(() => {
    const selectedDoctor = doctors.find(doctor => doctor.id === currentDoctorId);
    setSelectedDoctor(selectedDoctor);
  }, [currentDoctorId, doctors])

  const onSubmit = () => {
    editDoctor(selectedDoctor);
    history.push('/doctors/');
  }

  const onChange = e => {
    setSelectedDoctor({...selectedDoctor, [e.target.name]: e.target.value})
  }

  return (
    <Card className="shadow">
      <CardBody>
        <Form onSubmit={ onSubmit }>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              type="text"
              value={ selectedDoctor ? selectedDoctor.first_name : '' }
              onChange={ onChange }
              name="first_name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              value={ selectedDoctor.last_name }
              onChange={ onChange }
              name="last_name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              value={ selectedDoctor.email }
              onChange={ onChange }
              name="email"
              required
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
          <Link className="btn btn-danger ml-2" to="/doctors/">Cancel</Link>
        </Form>
      </CardBody>
    </Card>
  )
}
