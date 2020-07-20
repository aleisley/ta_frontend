import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export const EditDeleteButtons = props => {
  return(
    <div>
      <Link to={ props.editLink } className="btn btn-warning mr-1 btn-sm">Edit</Link>
      <Button onClick={ props.deleteFunction } color="danger" size="sm">Delete</Button>
    </div>
  )
}
