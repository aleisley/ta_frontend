import React, { useContext, useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const AddDoctorForm = () => {
  const { addDoctor } = useContext(GlobalContext);
  const history = useHistory();
  const [doctor, setDoctor] = useState({
    'first_name': '',
    'last_name': '',
    'email': ''
  })

  const onChange = e => {
    setDoctor({...doctor, [e.target.name]: e.target.value})
  }

  const onSubmit = () => {
    addDoctor(doctor);
    history.push('/doctors/');
  }

  return (
    <Card className="shadow">
      <CardBody>
        <Form onSubmit={ onSubmit }>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              type="text"
              placeholder="John"
              name="first_name"
              value={ doctor.first_name }
              onChange={ onChange }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              placeholder="Smith"
              name="last_name"
              value={ doctor.last_name }
              onChange={ onChange }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="john.smith@test.com"
              name="email"
              onChange={ onChange }
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

