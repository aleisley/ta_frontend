import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export const EditDeleteButtons = props => {
  return(
    <div className="ml-auto">
      <Link to={ props.editLink } className="btn btn-warning mr-1">Edit</Link>
      <Button onClick={ props.deleteFunction } color="danger">Delete</Button>
    </div>
  )
}
