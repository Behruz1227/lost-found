import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
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
  const [category, setCategory] = useState([]);
  const [AddModal, setAddModal] = useState(false);

  const openAddModal = () => setAddModal(!AddModal);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    getLost();
    getCategory();
  }, []);

  // getlost
  const getLost = () => {
    let config = {
      headers: { Authorization: sessionStorage.getItem('jwtToken') }
    }
    axios.get(api + "item/", config)
      .then(res => {
        setLost(res.data.filter(t => t.type == "LOST"))
      })
      .catch(() => {
        console.log("Lost kelmadi!!!");
      })
       }

  // getCategory
  const getCategory = () => {
    let config = {
      headers: { Authorization: sessionStorage.getItem('jwtToken') }
    }
    axios.get(api + "category/", config)
      .then(res => setCategory(res.data))
      .catch(() => console.log("category kelmadi!!!"))
  }

  // addLostItem
  const addLostItem = () => {
    const addData = new FormData();
    addData.append("image", byId("file").files[0]);
    addData.append("name", byId("name").value);
    addData.append("description", byId("description").value);
    addData.append("contact_info", byId("contact_info").value);
    addData.append("type", "LOST");
    addData.append("latitude", 0);
    addData.append("longitude", 0);
    addData.append("category ", byId("category").value);

    axios.post(api + "item/", addData, {
      headers: {
        Authorization: sessionStorage.getItem('jwtToken'),
      },
    })
      .then(() => {
        openAddModal();
        getLost();
        toast.success("Lost item muvaffaqiyatli qo'shildi✔")
      })
      .catch(() => {
        toast.error("Lost item qo'shishda xatolik yuz berdi!!!")
        for (const addDataKey of addData) {
          console.log(addDataKey)
        }
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
                        onClick={openAddModal}
                        className="btn-icon mb-3 mb-sm-0 w-50"
                        color="info">
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-plus" />
                        </span>
                        <span className="btn-inner--text">Add Item</span>
                      </Button>
                    </div>
                  </Col>
                  <Col className="text-center" lg="6">
                    <img className="py-4" style={{ objectFit: "cover", height: "400px" }} src={require("assets/img/theme/landing.png")} alt="" />
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

      {/* addLostModal */}
      <Modal isOpen={AddModal} centered size="lg">
        <ModalHeader
          toggle={openAddModal}
          className="text-dark fs-4 fw-bolder">Add Lost</ModalHeader>
        <ModalBody>
          <Input type="file" className="form-control mb-3" id="file" />
          <Input className="mb-3" id="name" placeholder="Name" />
          <Input className="mb-3" id="description" placeholder="Description" />
          <textarea className="form-control" id="contact_info" placeholder="Contact info" />
          <select class="form-control mt-3" id="category">
            <option selected disabled>Category</option>
            {category && category.map((item, i) =>
              <option key={i} value={item.id}>{item.name}</option>
            )}
          </select>
        </ModalBody>
        <ModalFooter>
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openAddModal}>Close</Button>
          <Button
            className="bg-success"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            onClick={addLostItem}>Save</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Lost;
