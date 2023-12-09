import React, { useEffect, useState } from "react";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";
import { byId } from "../api/api";
import { Icon } from "@iconify/react";

const SignNav = () => {
  const [collapseClasses, setCollapseClasses] = useState("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  // about page utish uchun
  const goAbout = () => byId("aboutBtn").click();

  return (
    <>
      {/* about uchun link btn */}
      <Link id="aboutBtn" to="/"></Link>

      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main">
          <Container>
            <NavbarBrand className="mr-lg-5" href="/" tag={NavLink} style={{ cursor: "pointer" }}>
              <img
                alt="..."
                src={require("assets/img/brand/argon-react-white.png")} />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}>
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <NavLink to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/argon-react.png")} />
                    </NavLink>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://t.me/itcity_academy"
                    id="tooltip333589074"
                    target="_blank">
                    <i className="fa fa-telegram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Telegram
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Follow us on Telegram
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.instagram.com/itcity_academy"
                    id="tooltip356693867"
                    target="_blank">
                    <i className="fa fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Instagram
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip356693867">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://twitter.com/creativetim"
                    id="tooltip184698705"
                    target="_blank">
                    <i className="fa fa-twitter-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Twitter
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip184698705">
                    Follow us on Twitter
                  </UncontrolledTooltip>
                </NavItem> */}
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://github.com/Alisher0903"
                    id="tooltip112445449"
                    target="_blank">
                    <i className="fa fa-github" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Github
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip112445449">
                    Star us on Github
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-4">
                  <Link to="/register-page">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      target="_blank">
                      <span className="btn-inner--icon">
                        <Icon icon="basil:logout-outline" rotate={2} width="20" />
                      </span>
                      <span className="nav-link-inner--text ml-2">
                       Sign up 
                      </span>
                    </Button>
                  </Link>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default SignNav;
