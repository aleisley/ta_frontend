import React from 'react';

import { Container } from 'reactstrap';

import { GlobalNavbar } from '../components/Navbar';
import { AddAppointmentForm } from '../components/AddAppointmentForm';

export const AddAppointment = () => {
  return (
    <React.Fragment>
      <GlobalNavbar />
      <Container>
        <AddAppointmentForm />
      </Container>
    </React.Fragment>
  )
}
