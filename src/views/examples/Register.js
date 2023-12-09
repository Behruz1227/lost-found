import React from "react";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import SignUpNav from "components/Navbars/SignNav";
import { Icon } from "@iconify/react";
import "./register.scss";
import { Link } from "react-router-dom";

class Register extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <SignUpNav />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-5 pb-lg-2">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    {/* <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign up</small>
                      </div>
                      <div className="text-center">
                        <Button
                          className="btn-neutral btn-icon mr-4"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={
                                require("assets/img/icons/common/github.svg")
                                  .default
                              }
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={
                                require("assets/img/icons/common/google.svg")
                                  .default
                              }
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader> */}
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-5">
                        <p
                          style={{
                            fontSize: "1.7rem",
                            fontWeight: "700",
                            letterSpacing: "1px",
                            color: "#2DCE89"
                          }}>Sign Up</p>
                      </div>
                      <Form role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <Icon icon="bxs:user" width="20" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              id="name"
                              className="input_style"
                              placeholder="Name" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <Icon icon="gridicons:phone" width="20" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              id="phoneNumber"
                              className="input_style"
                              placeholder="Phone Number"
                              type="number" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <Icon icon="mdi:password-outline" width="20" />
                                {/* <i className="ni ni-lock-circle-open" /> */}
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              className="input_style"
                              placeholder="Password"
                              type="password"
                              autoComplete="off" />
                          </InputGroup>
                        </FormGroup>
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox" />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister">
                                <span>
                                  Eslab qolish{" "}
                                  {/* <Link
                                    to="#"
                                    onClick={(e) => e.preventDefault()}>
                                    Privacy Policy
                                  </Link> */}
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            type="button">
                            Create account
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        {/* <SimpleFooter /> */}
      </>
    );
  }
}

export default Register;
