import React from 'react';
import { Container } from 'reactstrap';

import { EditDoctorForm } from '../components/EditDoctorForm';
import { GlobalNavbar } from '../components/Navbar';

export const EditDoctor = props => {
  return (
    <React.Fragment>
      <GlobalNavbar />
      <Container>
        <EditDoctorForm doctorID={ props.match.params.id }/>
      </Container>
    </React.Fragment>
  )
}
