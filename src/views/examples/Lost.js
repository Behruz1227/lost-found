import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { Link } from "react-router-dom";
import axios from "axios";
import { api, byId } from "../../components/api/api";
import { ToastContainer, toast } from "react-toastify";
// import CardsFooter from "components/Footers/CardsFooter.js";
// import Download from "../IndexSections/Download.js";

const Lost = () => {
  const [lost, setLost] = useState([]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    // getLost
    getLost();
  }, []);

  // getlost
  const getLost = () => {
    let config = {
      headers: { Authorization: sessionStorage.getItem('jwtToken') }
    }
    axios.get(api + "item/", config)
      .then(res => {
        if (res.data.find(t => t.type === "LOST")) {
          setLost(res.data)
        } else {
          toast.error("Xali lost haqida ma'lumot yuq!!!")
        }
      })
      .catch(() => {
        console.log("Lost kelmadi!!!");
      })
  }

  // go about
  const goAbout = () => byId("linkLost").click();

  return (
    <>
      <Link to="/single/about" id="linkLost"></Link>
      <ToastContainer />
      <DemoNavbar />
      <main>
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
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page">
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-code" />
                        </span>
                        <span className="btn-inner--text">Components</span>
                      </Button>
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page">
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
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0">
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100" />
              </svg>
            </div>
          </section>
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  {lost && lost.map((item, i) =>
                    <Col lg="4" className="mb-5" key={i}>
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="pb-5">
                          <img
                            alt="..."
                            className="img-fluid "
                            src={item.image}
                            style={{ width: "100%", height: "230px", objectFit: "cover" }} />
                          <h6 className="text-primary mt-4 text-uppercase">
                            {item.name}
                          </h6>
                          <Button
                            onClick={() => {
                              goAbout();
                              sessionStorage.setItem("lostAbout", item.id);
                            }}
                            className="mt-4"
                            color="primary">
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  )}
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
