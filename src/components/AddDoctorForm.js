import React, { useContext, useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  Alert
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const AddDoctorForm = () => {
  const { addDoctor, responseStatus } = useContext(GlobalContext);
  const history = useHistory();
  const [doctor, setDoctor] = useState({
    'first_name': '',
    'last_name': '',
    'email': ''
  })

  const onChange = e => {
    setDoctor({...doctor, [e.target.name]: e.target.value})
  }

  const onSubmit = e => {
    e.preventDefault();
      addDoctor(doctor);
  }

  useEffect(() => {
    if (responseStatus.success) {
      history.push('/doctors/')
    }
  }, [responseStatus])

  return (
    <React.Fragment>
      <h1 className="mt-2 mb-4 text-center">Add Doctor</h1>
      <Card className="shadow">
        <CardBody>
          {responseStatus.detail &&
            <Alert color="danger">
              {responseStatus.detail}
            </Alert>
          }
          <Form onSubmit={ onSubmit }>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
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
                name="email"
                value={ doctor.email }
                onChange={ onChange }
                required
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link className="btn btn-danger ml-2" to="/doctors/">Cancel</Link>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

