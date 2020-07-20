import React, { useContext, useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
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
      cell: row => (
        <EditDeleteButtons editLink={`/doctors/${row.id}/edit`}
        deleteFunction={() => removeDoctor(row.id)}/>
      )
    }
  ];

  return (
    <React.Fragment>
      <h1 className="mt-2 mb-4 text-center">Doctors</h1>
      <Card className="shadow">
        <CardBody>
          <DataTable
            columns={ columns }
            data={ doctors }
            pagination={ true }
            actions={
              <Link className="btn btn-success btn-sm" to="/doctors/create/">
                Add Doctor
              </Link>
            }
          />
        </CardBody>
      </Card>
    </React.Fragment>
  )
}
