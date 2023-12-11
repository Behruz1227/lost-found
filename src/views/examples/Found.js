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
  ModalFooter,
  Input,
  Label,
} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { Link } from "react-router-dom";
// import CardsFooter from "components/Footers/CardsFooter.js";
// import Download from "../IndexSections/Download.js";

const Found = () => {
  const [AddModal, setAddModal] = useState(false);
  const [EditModal, setEditModal] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);

  const openAddModal = () => setAddModal(!AddModal);
  const openEditModal = () => setEditModal(!EditModal);
  const openDeleteModal = () => setDeleteModal(!DeleteModal);

    
    useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);



  return (
    <>
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
                  <Col className="text-center d-none d-lg-block" lg="6">
                    <img className="pb-4" style={{ objectFit: "cover", height: "400px" }} src={require("assets/img/theme/profile.png")} alt="" />
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
                  <Col lg="4" className="mb-5">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="pb-5">
                        <img
                          alt="..."
                          className="img-fluid "
                          src={require("assets/img/theme/img-1-1200x1000.jpg")}
                          style={{ width: "100%", height: "230px", objectFit: "cover" }} />
                        <h6 className="text-primary mt-4 text-uppercase">
                          Download Argon
                        </h6>
                        <Row>
                            <Col className="col-8">   
                          <Button
                          
                            className="mt-4"
                            color="primary">
                            Learn more
                          </Button>
                            </Col>
                            <Col className="mt-4">
                            <Link onClick={openDeleteModal}>
                              <i className="mt-2 fa fa-trash" style={{fontSize: "20px"}}/>
                            </Link>
                            <Link onClick={openEditModal}>
                              <i className="mt-2 mx-3 fa fa-edit" style={{fontSize: "20px"}}/>
                            </Link>
                          </Col>
                            </Row>
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

      <Modal isOpen={AddModal} centered size="lg">
                <ModalHeader
                    toggle={openAddModal}
                    className="text-dark fs-4 fw-bolder">Add found item</ModalHeader>
                <ModalBody className="techer__modal-body">
                    <Input className="mb-3" id="name" placeholder="Name"/>
                    <Input className="mb-3" id="description" placeholder="Description"/>
                    <Input type="file" className="form-control mb-3" id="file"/>
                    <textarea className="form-control" type="email" id="email" placeholder="Contact info"/>
                    <select class="form-select form-control mt-3" id="category">
                      <option selected disabled>Category</option>
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
                        onClick={openAddModal}>Save</Button>
                </ModalFooter>
            </Modal>


            <Modal isOpen={EditModal} centered size="lg">
                <ModalHeader
                    toggle={openEditModal}
                    className="text-dark fs-4 fw-bolder">Edit lost item</ModalHeader>
                <ModalBody className="techer__modal-body">
                    <Input className="mb-3" id="name" placeholder="Name"/>
                    <Input className="mb-3" id="description" placeholder="Description"/>
                    <Input type="file" className="form-control mb-3" id="file"/>
                    <textarea className="form-control" type="email" id="email" placeholder="Contact info"/>
                    <select class="form-select form-control mt-3" id="category">
                      <option selected disabled>Category</option>
                    </select>

                </ModalBody>
                <ModalFooter>
                    <Button
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                       className="bg-danger"
                        onClick={openEditModal}>Close</Button>
                    <Button
                        className="bg-success"
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        onClick={openEditModal}>Save</Button>
                </ModalFooter>
            </Modal>


            <Modal isOpen={DeleteModal} centered size="lg">
                <ModalHeader
                    toggle={openDeleteModal}
                    className="text-dark fs-4 fw-bolder">Delete lost item</ModalHeader>
                <ModalBody className="techer__modal-body">
                  Delete this item
                </ModalBody>
                <ModalFooter>
                    <Button
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                       className="bg-danger"
                        onClick={openDeleteModal}>Close</Button>
                    <Button
                        className="bg-success"
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        onClick={openDeleteModal}>OK</Button>
                </ModalFooter>
            </Modal>
    </>
  );
};

export default Found;
