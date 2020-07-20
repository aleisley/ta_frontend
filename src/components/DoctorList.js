import React, { useContext, useEffect } from 'react';
import { Table, Card, CardBody } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

import { EditDeleteButtons } from './EditDeleteButtons';


export const DoctorList = () => {
  const { doctors, removeDoctor, getDoctors } = useContext(GlobalContext);

  useEffect(() =>{
    getDoctors();
  }, [])

  return (
    <Card className="shadow">
      <CardBody>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {doctors.length > 0 ? (
              <React.Fragment>
                {doctors.map(doctor => (
                  <tr key={ doctor.id }>
                    <th>{ doctor.id }</th>
                    <td>{ doctor.first_name }</td>
                    <td>{ doctor.last_name }</td>
                    <td>{ doctor.email }</td>
                    <td>
                      <EditDeleteButtons
                        editLink={`/doctors/${doctor.id}/edit`}
                        deleteFunction={() => removeDoctor(doctor.id)}
                      />
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ) : (
              <h4>No Doctors yet.</h4>
            )}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}
