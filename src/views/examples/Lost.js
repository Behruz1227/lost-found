import React, { useEffect } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Download from "../IndexSections/Download.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { Link } from "react-router-dom";

const Lost = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0; (This part might need refactoring)
  }, []);

  const link = () => document.getElementById("link").click
  return (
    <>
      <DemoNavbar />
      <main>
        <div className="position-relative">
          {/* shape Hero */}
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
                        A beautiful Design System{" "}
                        <span>completed with examples</span>
                      </h1>
                      <p className="lead text-white">
                        The design system comes with four pre-built pages to
                        help you get started faster. You can change the text and
                        images and you're good to go.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button>
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
          {/* Rest of your code */}
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">

                    
                    <Col lg="4" className="mb-5">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="pb-5">
                          <img
                            alt="..."
                            className="img-fluid "
                            src={require("assets/img/theme/img-1-1200x1000.jpg")}
                            style={{ width: "100%", height: "230px", objectFit: "cover"}}
                          />
                          <h6 className="text-primary mt-4 text-uppercase">
                            Download Argon
                          </h6>
                          <Link to="/single/about" id="link">
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                   
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Lost;
