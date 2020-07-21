import React from "react";

import {
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from 'react-router-dom';

import { GlobalNavbar } from '../components/Navbar';

class Landing extends React.Component {
  state = {};

  render() {
    return(
      <React.Fragment>
        <GlobalNavbar />
        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        DoctorApp.
                        <span>An app made for doctors.</span>
                      </h1>
                      <p className="lead text-white">
                        To create an appointment, please add a doctor first. You can go to the doctors list through clicking the nav link above or the button just right under.
                      </p>
                      <div className="btn-wrapper">
                        <Link
                          className="btn btn-icon mb-3 mb-sm-0 btn-info"
                          to="/doctors/"
                        >
                          Doctors
                        </Link>
                        <Link className="btn btn-white btn-icon mb-3 mb-sm-0 ml-1 btn-default" to="/appointments/">
                          Appointments
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
        </main>
    </React.Fragment>
    )
  }
}

export default Landing;
