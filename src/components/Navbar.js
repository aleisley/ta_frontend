import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler,
  Collapse,
  Container
} from 'reactstrap';

export const GlobalNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <header className="header-global">
        <Navbar
          className="navbar navbar-main bg-primary navbar-dark"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={ Link }>
              Hello
            </NavbarBrand>
            <NavbarToggler onClick={ toggle } />
            <Collapse isOpen={ isOpen } navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/doctors/" className="nav-link-icon">Doctors</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/appointments/" className="nav-link-icon">Appointments</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    </React.Fragment>
  )
}
