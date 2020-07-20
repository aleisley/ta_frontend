import React, { useContext, useEffect } from 'react';
import { Table, Card, CardBody } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

import { EditDeleteButtons } from './EditDeleteButtons';

import DataTable from 'react-data-table-component';


export const DoctorList = () => {
  const { doctors, removeDoctor, getDoctors } = useContext(GlobalContext);

  useEffect(() =>{
    getDoctors();
  }, []);

  const columns = [
    {
      name: '#',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'First Name',
      selector: 'first_name',
      sortable: true,
      // right: true,
    },
    {
      name: 'Last Name',
      selector: 'last_name',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true
    },
    {
      name: 'Actions',
      selector: 'actions',
      left: true,
      cell: row => <EditDeleteButtons editLink={`/doctors/${row.id}/edit`}
      deleteFunction={() => removeDoctor(row.id)}/>
    }
  ];

  // const doctorRows = doctors.map(doctor => ({...doctor, <EditDeleteButtons />}))

  return (
    <Card className="shadow">
      <CardBody>
        {/* <Table hover>
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
        </Table> */}
        <DataTable
          title="Test"
          columns={columns}
          data={doctors}
          pagination={true}
          // paginationRowsPerPageOptions={10}
        />
      </CardBody>
    </Card>
  )
}
