import React, { useEffect, useRef } from "react";
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
import LogNav from "components/Navbars/LogNav";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { api, byId } from "../../components/api/api";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, []);

  // login
  const addLogin = () => {
    let addData = {
      phone_number: `+998${byId("phoneNumber").value}`,
      password: byId("password").value
    }
    axios.post(api + "login/", addData)
      .then(res => {
        toast.success("Tizimga muvaffaqiyatli kiridingiz✔");
        sessionStorage.setItem("jwtToken", `Bearer ${res.data.access_token}`);
        sessionStorage.setItem("logOutToken", `Bearer ${res.data.refresh_token}`);
        byId("goHomePage").click();
      })
      .catch(() => {
        toast.error("Xatolik yuz berdi ma'lumotlarni tekshirib qaytadan urinib ko'ring❓");
      })
  }

  return (
    <>
      <ToastContainer />
      <Link to="/home" id="goHomePage"></Link>
      <LogNav />
      <main ref={mainRef}>
        <section className="section section-shaped section-lg" style={{ minHeight: "100vh" }}>
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
          <Container className="pt-6 pt-lg-5 pb-lg-2">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-5">
                      <p
                        style={{
                          fontSize: "1.7rem",
                          fontWeight: "700",
                          letterSpacing: "1px",
                          color: "#2DCE89"
                        }}>Sign In</p>
                      <small id="dNonef" className="d-none">Ro'yxatdan utganligingizni tekshirib ko'ring!!!</small>
                    </div>
                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <Icon icon="gridicons:phone" width="20" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <InputGroupText
                            style={{
                              paddingLeft: "0",
                              paddingRight: ".3rem"
                            }}>
                            +998
                          </InputGroupText>
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
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            onKeyDown={addLogin}
                            id="password"
                            className="input_style"
                            placeholder="Password"
                            type="password"
                            autoComplete="off" />
                        </InputGroup>
                      </FormGroup>
                      <Row className="my-4">
                        <Col className="text-left" xs="6">
                          <Link
                            className="text-light"
                            to="/register-page">
                            <small>Create new account</small>
                          </Link>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link
                            className="text-light">
                            <small>Forgot password?</small>
                          </Link>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          onClick={addLogin}
                          className="mt-4"
                          color="primary"
                          type="button">
                          Log In
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
    </>
  );
}

export default Login;
