import React from 'react';
import { Container } from 'reactstrap';
import { AppointmentList } from '../components/AppointmentList';
import { GlobalNavbar } from '../components/Navbar';

export const Appointments = () => {
  return (
    <React.Fragment>
      <GlobalNavbar />
      <Container>
        <AppointmentList />
      </Container>
    </React.Fragment>
  )
}

