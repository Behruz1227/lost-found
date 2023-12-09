import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const CardsFooter = () => {
  return (
    <>
      <footer className="footer has-cards">
        <Container className="container-lg">
          <Row>
            <Col className="mb-5 mb-md-0" md="6">
              <Card className="card-lift--hover shadow border-0">
                <Link to="/landing-page">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/landing.jpg")}
                  />
                </Link>
              </Card>
            </Col>
            <Col className="mb-5 mb-lg-0" md="6">
              <Card className="card-lift--hover shadow border-0">
                <Link to="/profile-page">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/profile.jpg")}
                  />
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="row-grid align-items-center my-md">
            <Col lg="6">
              <h3 className="text-primary font-weight-light mb-2">
                Thank you for supporting us!
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                href="https://twitter.com/creativetim"
                id="tooltip475038074"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-twitter" />
                </span>
              </Button>
              {/* Other buttons and tooltips */}
            </Col>
          </Row>
          <hr />
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=adsr-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
                .
              </div>
            </Col>
            <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    Creative Tim
                  </NavLink>
                </NavItem>
                {/* Other NavItems */}
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default CardsFooter;
