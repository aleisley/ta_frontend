import React from 'react';

import { EditDoctorForm } from '../components/EditDoctorForm';
import { NavAndFooter } from '../components/NavAndFooter';

export const EditDoctor = props => {
  return (
    <NavAndFooter>
      <EditDoctorForm doctorID={ props.match.params.id }/>
    </NavAndFooter>
  )
}
