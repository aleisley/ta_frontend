import React from 'react'
import { Container } from 'reactstrap';

import { AddDoctorForm } from '../components/AddDoctorForm';
import { GlobalNavbar } from '../components/Navbar';

export const AddDoctor = () => {
  return (
    <React.Fragment>
      <GlobalNavbar />
      <Container>
        <AddDoctorForm />
      </Container>
    </React.Fragment>
  )
}
