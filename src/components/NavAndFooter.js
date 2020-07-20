import React from 'react';
import { Container } from 'reactstrap';

import { SimpleFooter } from '../components/Footer';
import { GlobalNavbar } from '../components/Navbar';

export const NavAndFooter = props => {
  return (
    <div id="inBetween" className="d-flex flex-column justify-content-between">
      <GlobalNavbar />
      <Container>
        { props.children }
      </Container>
      <SimpleFooter />
    </div>
  )
}
