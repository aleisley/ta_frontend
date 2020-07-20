import React from 'react';

import { DoctorList } from '../components/DoctorList';
import { NavAndFooter } from '../components/NavAndFooter';


export const Doctors = () => {
  return (
    <NavAndFooter>
      <DoctorList />
    </NavAndFooter>
  )
}
