import React from "react";
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";


const Carousel = (src, des, ) => {
  return (
    <>
      <section className="section section-shaped pt-5">
        <div className="shape shape-style-1 shape-default ">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="py-lg">
          <Row className="justify-content-between align-items-center ">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Bootstrap carousel
              </h1>
              <p className="lead text-white mt-4">
                Argon Design System comes with four pre-built pages to help
                you get started faster. You can change the text and images and
                you're good to go.
              </p>
            
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                <img className="img-fluid " style={{objectFit: "cover"}} src={require("assets/img/theme/img-2-1200x1000.jpg")} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
      </section>
    </>
  );
};

export default Carousel;
