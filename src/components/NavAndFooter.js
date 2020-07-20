import React from 'react';

import { SimpleFooter } from '../components/Footer';
import { GlobalNavbar } from '../components/Navbar';

export const NavAndFooter = props => {
  return (
    <div id="inBetween" className="d-flex flex-column justify-content-between">
      <GlobalNavbar />
      <div className="offset-2 col-8">
        { props.children }
      </div>
      <SimpleFooter />
    </div>
  )
}
