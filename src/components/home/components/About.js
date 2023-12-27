import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { byId } from "../../api/api";

export const AboutHome = () => {

    // const goAbout = () => byId("goAbout").click();

    return (<>
        {/* <Link to="/about" id="goAbout"></Link> */}
        <Container className="aboutMe-container">
            <Row className="w-100 mt-5 pt-5">
                <Col className="col-12 col-md-7 col-lg-6 aboutMe-box">
                    <div className="about__img">
                        <img src={require("../../assets/homeImages/about.png")} alt="img" />
                    </div>
                </Col>
                <Col className="col-12 col-md-5 col-lg-6 about__text">
                    <h2>
                        <span className="me-3" style={{ color: "#CF1010" }}>Lost</span>
                        <span className="me-3" style={{ color: "#0E0D15" }}>and</span>
                        <span style={{ color: "#04D300" }}>Found</span>
                    </h2>
                    <p>
                        With quick and easy searching, secure communication, and team support, Lost&Found can help you recover your lost or found items. Just a few steps to get started.
                        Your honesty is valuable to our team. Contribute to our community by helping return items to their owners in the Foundry section. With every post you make, you fill someone with gratitude.
                    </p>
                </Col>
            </Row>
        </Container>
    </>)
}