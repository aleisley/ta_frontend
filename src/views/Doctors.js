import React from 'react';
import { Container } from 'reactstrap';

import { GlobalNavbar } from '../components/Navbar';
import { DoctorList } from '../components/DoctorList';

export const Doctors = () => {
  return (
    <React.Fragment>
      <GlobalNavbar />
      <Container>
        <DoctorList />
      </Container>
    </React.Fragment>
  )
}
