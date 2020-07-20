import React from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export const SimpleFooter = () => {
  return (
    <React.Fragment>
      <footer className="footer footer-dark">
        <Container>
          <Row className=" row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className=" text-primary font-weight-light mb-2">
                Thank you for trying out the app!
              </h3>
              <h4 className=" mb-0 font-weight-light">
                Please feel free to contact me if you have any questions or concerns.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                href="https://www.linkedin.com/in/anthon-van-asares-61a830153/"
                id="tooltip475038074"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-linkedin" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip475038074">
                Add me to your network
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="github"
                href="https://github.com/aleisley"
                id="tooltip495507257"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-github" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip495507257">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
          <hr />
          <Row className=" align-items-center justify-content-md-between">
            <Col md="6">
              <div className=" copyright">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.linkedin.com/in/anthon-van-asares-61a830153/"
                  target="_blank"
                >
                  Anthon Van Asares
                </a>
                .
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}
