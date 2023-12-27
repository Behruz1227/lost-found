import React, { useEffect, useState } from "react";
import "./item-page.scss";
import {
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import axios from "axios";
import { api, byId } from "../api/api";
import { toast } from "react-toastify";
import { ItemNavs } from "../nav-item/DefouldNavSearch";
import FooTer from "../footer/FooTer";
import { Icon } from "@iconify/react";

function Itemspage() {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [infoID, setInfoId] = useState([]);
  const [setError] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const openAddModal = () => setAddModal(!addModal);
  const openEditModal = () => setEditModal(!editModal);
  const openDeleteModal = () => setDeleteModal(!deleteModal);
  const openInfoModal = () => setInfoModal(!infoModal);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    getAll();
    getCategory();
    getSubCategory();
    // getAbout()
  }, []);

  const getAll = () => {
    axios
      .get(api + "itemss/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
      })
      .catch((err) => setError(err));
  };

  const getFound = () => {
    axios
      .get(api + "itemss/", {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then((res) => {
        setItem(res.data.filter((t) => t.type == "FOUND"));
      })
      .catch(() => console.log("Found kelmadi!!!"));
  };

  const getLost = () => {
    axios
      .get(api + "itemss/", {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then((res) => {
        setItem(res.data.filter((t) => t.type == "LOST"));
      })
      .catch(() => console.log("lost kelmadi!!!"));
  };

  const getCategory = () => {
    axios
      .get(api + "category/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setCategory(res.data);
      })
      .catch(() => console.log("category kelmadi!!!"));
  };

  const getSubCategory = () => {
    axios
      .get(api + "sub_category/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setSubCategory(res.data);
      })
      .catch(() => console.log("Subcategory kelmadi!!!"));
  };

  const deleteItem = () => {
    axios
      .delete(api + "item" + infoID.id + "/", {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then(() => {
        toast.success("Item o'chirildi!!!");
        openDeleteModal();
        getAll();
      })
      .catch(() => toast.error("Item o'chirishda xatolik yuz berdi!!!"));
  };

  const addItem = () => {
    const addData = new FormData();
    addData.append("type", byId("type").value);
    addData.append("name", byId("name").value);
    addData.append("date", byId("date").value);
    addData.append("image", byId("file").files[0]);
    addData.append("brand", byId("brand").value);
    addData.append("primary_color", byId("color").value);
    addData.append("secondary_color", byId("secondary").value);
    addData.append("specific_description", byId("description").value);
    addData.append("specific_location", byId("location").value);
    addData.append("country", byId("region").value);
    addData.append("city", byId("city").value);
    addData.append("street", byId("street").value);
    addData.append("contact_info", byId("contact").value);
    addData.append("latitude", 0);
    addData.append("longitude", 0);
    addData.append("category ", byId("category").value);
    addData.append("sub_category  ", byId("subcategory").value);
    // addData.append("id", infoID.id);

    axios
      .post(api + "item/", addData, {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then(() => {
        openAddModal();
        getAll();
        toast.success("Item muvaffaqiyatli qo'shildi✔");
      })
      .catch(() => toast.error("Item qo'shishda xatolik yuz berdi!!!"));
  };


  const searchFound = () => {
    let searchItem = byId("searchid").value;
    if (!!searchItem)
      axios
        .get(api + "item/?search=" + searchItem)
        .then((res) => setItem(res.data.filter((t) => t.type == "FOUND")));
    else getAll();
  };

  const editItem = () => {
    const editData = new FormData();
    editData.append("type", byId("type").value);
    editData.append("name", byId("name").value);
    editData.append("date", byId("date").value);
    editData.append("image", byId("file").files[0]);
    editData.append("brand", byId("brand").value);
    editData.append("primary_color", byId("color").value);
    editData.append("secondary_color", byId("secondary").value);
    editData.append("specific_description", byId("description").value);
    editData.append("specific_location", byId("location").value);
    editData.append("country", byId("region").value);
    editData.append("city", byId("city").value);
    editData.append("street", byId("street").value);
    editData.append("contact_info", byId("contact").value);
    editData.append("latitude", 0);
    editData.append("longitude", 0);
    editData.append("category ", byId("category").value);
    editData.append("sub_category  ", byId("subcategory").value);
    editData.append("id", infoID.id);

    axios
      .put(api + "item" + infoID.id + "/", editData, {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then(() => {
        openEditModal();
        getFound();
        toast.success("Found item muvaffaqiyatli taxrirlandi✔");
      })
      .catch(() => {
        toast.error("Found item taxrirlashda xatolik yuz berdi!!!");
      });
  };

  // const searchFound = () => {
  //   let searchItem = byId("search").value;
  //   if (!!searchItem)
  //     axios
  //       .get(api + "item/?search=" + searchItem)
  //       .then((res) => setItem(res.data.filter((t) => t.type == "FOUND")));
  //   else getAll();
  // };

  //   const getAbout = () => {
  //     let infoId = sessionStorage.getItem("infoId");
  //     axios.get(api + "item/", {
  //         headers: { Authorization: sessionStorage.getItem('jwtToken') }
  //     })
  //         .then(res => {
  //             setInfoId(res.data.find(i => i.id == infoId))
  //         })
  //         .catch(() => {

  //         })
  // }

  const categoryFIlter = () => {
    let categoryId = byId("categoryFilter").value;
    axios
      .get(api + "item/category/" + categoryId + "/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => setItem(res.data.filter((c) => c.type == "FOUND")))
      .catch(() => console.log("category filter ishlamadi!!!"));
  };

  return (
    <div className="items-main">
      <Container>
        <ItemNavs />
        <div className="items-body">
          <h1>
            <b>
              <span>Lost </span>
              <span>and </span>
              <span>Found</span>
            </b>
          </h1>
          <p>
            Join our community today! Report a lost item or post a found one, and let's make reuniting as easy as possible. Together, we create a network of eyes and hands, ready to help each other in moments of need. Every post you make, every item you report, brings someone one step closer to relief and happiness. Don't let distance or time discourage you; our platform is here around the clock, bridging gaps and building bonds. Start your journey back to what you've lost or be the hero who brings joy with a simple click.
          </p>
        </div>
        <div className="items-tables">
          <div className="items-top">
            <div className="category_filter-btnn">
              <button onClick={openAddModal}>
                <Icon icon="lets-icons:add-duotone" className="me-2" width="30" height="30" />
                Add
              </button>
            {/* </div>
            <div className="category_filter-btn"> */}
              <button
                onClick={() => {
                  getAll();
                  // byId("categoryFilter").value = "Category filter";
                }}
              >
                All items
              </button>
              <button
                onClick={() => {
                  getLost();
                  // byId("categoryFilter").value = "Category filter";
                }}
              >
                Lost items
              </button>
              <button 
              className="mt-4 mt-md-0"
                onClick={() => {
                  getFound();
                  // byId("categoryFilter").value = "Category filter";
                }}
              >
                Found items
              </button>
            </div>
          </div>
          <div className="items-bottom mb-5">
            <Table striped hover responsive>
              <thead>
                <tr className="text-center align-middle top-tr">
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Phone number</th>
                  <th scope="col">Type</th>
                  <th scope="col">Info</th>
                  <th scope="col" colSpan="2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  // error ? (
                  //   <h4 className="text-center text-light">You have not item</h4>
                  // ) : (
                  item.length &&
                  item.map((item, i) => (
                    <tr className="text-center align-middle" key={i}>
                      <td scope="row">{i + 1}</td>
                      <td className="table-row img-row">
                        <img
                          src={item.image}
                          className="table-img"
                          alt="..."
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.date}</td>
                      <td>{item.contact_info}</td>
                      <td>{item.type}</td>
                      <td>
                        <button
                          className="btn btn-primary w-100"
                          onClick={() => {
                            openInfoModal();
                            setInfoId(item);
                          }}
                        >
                          Info
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-warning w-100"
                          onClick={() => {
                            openEditModal();
                            setInfoId(item);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger w-100"
                          onClick={() => {
                            openDeleteModal();
                            setInfoId(item);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                  // )
                }
              </tbody>
            </Table>
          </div>
        </div>
      </Container>

      {/* add modal */}
      <Modal isOpen={addModal} centered fullscreen scrollable>
        <ModalHeader
          toggle={openAddModal}
          className="text-light fs-4 fw-bolder"
        >
          Add Item
        </ModalHeader>
        <ModalBody className="modal-body p-4 ">
          <div className="addInfo">Item information</div>
          <div className="items-add">
            <div className="booot2">
              <select class="form-control" id="type">
                <option selected disabled>
                  TYPE
                </option>
                <option value="LOST">LOST</option>
                <option value="FOUND">FOUND</option>
              </select>
            </div>

            <FormGroup floating className="booot6">
              <Input id="date" name="Date" placeholder="Date" type="Date" />
              <Label for="date">Date</Label>
            </FormGroup>

            <FormGroup floating className="booot7">
              <Input
                id="contact"
                name="number"
                placeholder="PhoneNumber"
                type="text"
              />
              <Label for="contact">Phone number</Label>
            </FormGroup>

            <div className="booot4">
              <select class="form-control" id="category">
                <option selected disabled>
                  Category
                </option>
                {category &&
                  category.map((item, i) => (
                    <option key={i} id={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="booot5">
              <select class="form-control " id="subcategory">
                <option selected disabled>
                  SubCategory
                </option>
                {subCategory &&
                  subCategory.map((item, i) => (
                    <option key={i} id={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="booot3">
              <Input type="file" className="form-control " id="file" />
            </div>
            <FormGroup floating className="booot">
              <Input id="name" name="Name" placeholder="Name" type="text" />
              <Label for="name">Name</Label>
            </FormGroup>
            <FormGroup floating className=" booot1  ">
              <Input id="brand" name="Brand" placeholder="Brand" type="text" />
              <Label for="brand">Brand</Label>
            </FormGroup>

            <div floating className="booot10">
              <select class="form-control " id="color">
                <option selected disabled>
                  Color
                </option>
                <option value="Black">
                  Black
                </option>
                <option value="Blue">
                  Blue
                </option>
                <option value="Brown - Tan">
                  Brown - Tan
                </option>
                <option value="Gold">
                  Gold
                </option>
                <option value="Gray">
                  Gray
                </option>
                <option value="Maroon  ">
                  Maroon
                </option>
                <option value="Orange">
                  Orange
                </option>
                <option value="Peach">
                  Peach
                </option>
                <option value="Pink">
                  Pink
                </option>
                <option value="Platinum">
                  Platinum
                </option>
                <option value="Red">
                  Red
                </option>
                <option value="Silver">
                  Silver
                </option>
                <option value="White">
                  White
                </option>
                <option value="Yellow">
                  Yellow
                </option>
              </select>
            </div>
            <div floating className="booot11">
              <select class="form-control " id="secondary">
                <option selected disabled>
                  Secondary color
                </option>
                <option value="Black">
                  Black
                </option>
                <option value="Blue">
                  Blue
                </option>
                <option value="Brown - Tan">
                  Brown - Tan
                </option>
                <option value="Gold">
                  Gold
                </option>
                <option value="Gray">
                  Gray
                </option>
                <option value="Maroon  ">
                  Maroon
                </option>
                <option value="Orange">
                  Orange
                </option>
                <option value="Peach">
                  Peach
                </option>
                <option value="Pink">
                  Pink
                </option>
                <option value="Platinum">
                  Platinum
                </option>
                <option value="Red">
                  Red
                </option>
                <option value="Silver">
                  Silver
                </option>
                <option value="White">
                  White
                </option>
                <option value="Yellow">
                  Yellow
                </option>
              </select>
            </div>

            <textarea
              id="description"
              className="form-control booot8"
              name="des"
              placeholder="Specific description "
              type="text"
            />
            <textarea
              className="form-control booot9"
              id="location"
              name="des2"
              placeholder="Specific location"
              type="text"
            />

            {/* <textarea
              id="description"
              className="form-control booot"
              placeholder="Description"
            /> */}
          </div>
          <div className="addInfo">Address information</div>
          <div className="items-add2">
            <FormGroup floating>
              <Input
                id="region"
                name="Region"
                placeholder="Region"
                type="text"
              />
              <Label for="region">Region</Label>
            </FormGroup>
            <FormGroup floating>
              <Input id="city" name="City" placeholder="City" type="text" />
              <Label for="city">City</Label>
            </FormGroup>

            <FormGroup floating className="buuut">
              <Input
                id="street"
                name="street"
                placeholder="Street"
                type="text"
              />
              <Label for="street">Street</Label>
            </FormGroup>
          </div>
          <div className="float-end mb-5">
            <Button
              boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              className="bg-danger me-3 mb-4"
              onClick={openAddModal}
            >
              Close
            </Button>
            <Button
              className="bg-success mb-4"
              boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              onClick={addItem}
            >
              Save
            </Button>
          </div>
        </ModalBody>
      </Modal>

      {/* Edit modal */}
      <Modal isOpen={editModal} centered fullscreen scrollable>
        <ModalHeader
          toggle={openEditModal}
          className="text-light fs-4 fw-bolder"
        >
          Edit item
        </ModalHeader>
        <ModalBody className="modal-body p-4 ">
          <div className="addInfo">Item information</div>
          <div className="items-add">
            <div className="booot">
              <Label for="type" className="text-light">
                Type
              </Label>
              <select class="form-control" id="type">
                <option selected disabled>
                  {infoID.type}
                </option>
                <option value="LOST">LOST</option>
                <option value="FOUND">FOUND</option>
              </select>
            </div>

            <div className="booot2">
              <Label for="date" className="text-light">
                Date
              </Label>
              <Input
                id="date"
                name="Date"
                defaultValue={infoID.date}
                type="Date"
              />
            </div>

            <div className="booot1">
              <Label for="contact" className="text-light">
                Phone number
              </Label>
              <Input
                id="contact"
                name="number"
                placeholder="PhoneNumber"
                defaultValue={infoID.contact_info}
                type="text"
              />
            </div>

            <div className="booot3">
              <Label for="category" className="text-light">
                Category
              </Label>
              <select class="form-control" id="category">
                <option selected disabled>
                  Category
                </option>
                {category &&
                  category.map((item, i) => (
                    <option key={i} id={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="booot4">
              <Label for="category" className="text-light">
                Sub Category
              </Label>
              <select class="form-control " id="subcategory">
                <option selected disabled>
                  SubCategory
                </option>
                {subCategory &&
                  subCategory.map((item, i) => (
                    <option key={i} id={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="booot5">
              <Label for="file" className="text-light">
                Image
              </Label>
              <Input type="file" className="form-control " id="file" />
            </div>
            <div className="booot6">
              <Label for="name" className="text-light">
                Name
              </Label>
              <Input
                id="name"
                name="Name"
                placeholder="Name"
                type="text"
                defaultValue={infoID.name}
              />
            </div>
            <div className="booot7">
              <Label for="brand" className="text-light">
                Brand
              </Label>
              <Input
                id="brand"
                name="Brand"
                placeholder="Brand"
                type="text"
                defaultValue={infoID.brand}
              />
            </div>

            <div className="booot10 mb-4">
              <Label for="color" className="text-light">
                Color
              </Label>
              <select class="form-control " id="color">
                <option selected disabled>
                  Color
                </option>
                <option value="Black">
                  Black
                </option>
                <option value="Blue">
                  Blue
                </option>
                <option value="Brown - Tan">
                  Brown - Tan
                </option>
                <option value="Gold">
                  Gold
                </option>
                <option value="Gray">
                  Gray
                </option>
                <option value="Maroon  ">
                  Maroon
                </option>
                <option value="Orange">
                  Orange
                </option>
                <option value="Peach">
                  Peach
                </option>
                <option value="Pink">
                  Pink
                </option>
                <option value="Platinum">
                  Platinum
                </option>
                <option value="Red">
                  Red
                </option>
                <option value="Silver">
                  Silver
                </option>
                <option value="White">
                  White
                </option>
                <option value="Yellow">
                  Yellow
                </option>
              </select>
            </div>
            <div className="booot11 mb-4">
              <Label for="secondary" className="me-4 text-light">
                Secondary color
              </Label>
              <select class="form-control " id="secondary">
                <option selected disabled>
                  Secondary color
                </option>
                <option value="Black">
                  Black
                </option>
                <option value="Blue">
                  Blue
                </option>
                <option value="Brown - Tan">
                  Brown - Tan
                </option>
                <option value="Gold">
                  Gold
                </option>
                <option value="Gray">
                  Gray
                </option>
                <option value="Maroon  ">
                  Maroon
                </option>
                <option value="Orange">
                  Orange
                </option>
                <option value="Peach">
                  Peach
                </option>
                <option value="Pink">
                  Pink
                </option>
                <option value="Platinum">
                  Platinum
                </option>
                <option value="Red">
                  Red
                </option>
                <option value="Silver">
                  Silver
                </option>
                <option value="White">
                  White
                </option>
                <option value="Yellow">
                  Yellow
                </option>
              </select>
            </div>

            <textarea
              id="description"
              className="form-control booot8"
              name="des"
              placeholder="Specific description "
              type="text"
              defaultValue={infoID.specific_description}
            />
            <textarea
              className="form-control booot9"
              id="location"
              name="des2"
              placeholder="Specific location"
              type="text"
              defaultValue={infoID.specific_location}
            />

            {/* <textarea
              id="description"
              className="form-control booot"
              placeholder="Description"
            /> */}
          </div>
          <div className="addInfo">Address information</div>
          <div className="items-add2 mb-4">
            <div>
              <Label for="region" className="text-light">
                Region
              </Label>
              <Input
                id="region"
                name="Region"
                placeholder="Region"
                type="text"
                defaultValue={infoID.country}
              />
            </div>
            <div>
              <Label for="city" className="text-light">
                City
              </Label>
              <Input
                id="city"
                name="City"
                placeholder="City"
                type="text"
                defaultValue={infoID.city}
              />
            </div>

            <div className="buuut">
              <Label for="street" className="text-light">
                Street
              </Label>
              <Input
                id="street"
                name="street"
                placeholder="Street"
                type="text"
                defaultValue={infoID.street}
              />
            </div>
          </div>
          <div className="float-end mb-5">
            <Button
              boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              className="bg-danger me-3 mb-4"
              onClick={openEditModal}
            >
              Close
            </Button>
            <Button
              className="bg-success mb-4"
              boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              onClick={editItem}
            >
              Save
            </Button>
          </div>
        </ModalBody>
      </Modal>

      {/* Delete modal */}
      <Modal isOpen={deleteModal} centered size="md" scrollable>
        <ModalHeader
          toggle={openDeleteModal}
          className="text-light fs-4 fw-bolder"
        >
          Delete item
        </ModalHeader>
        <ModalBody className="modal-body p-4 text-light">
          Are you sure you want to delete this item?
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openDeleteModal}
          >
            Close
          </Button>
          <Button
            className="bg-success"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            onClick={deleteItem}
          >
            Delete
          </Button>
        </ModalFooter>
      </Modal>

      {/* info modal */}

      <Modal isOpen={infoModal} centered size="lg" scrollable>
        <ModalHeader></ModalHeader>
        <ModalBody
          className="modal-body p-4 text-light"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <div className="text-end">
            <Button
              onClick={openInfoModal}
              color="danger"
              className="fw-bold fs-6 rounded-5"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              ✕
            </Button>
          </div>

          <div className="text-center pe-5 ps-5 lost__modal">
            <img src={infoID.image} alt="img" />
            <h2>
              <span>{infoID.name}</span>
              <span style={{ color: (infoID.type == "FOUND") ? "#0EF647" : "red" }}>{infoID.type}</span>
            </h2>
            <Row className="lost_main-info1">
              <Col className="col-12 col-sm-6 col-md-4">category</Col>
              <Col className="col-12 col-sm-6 col-md-4">sub category</Col>
              <Col className="col-12 col-sm-6 col-md-4">{infoID.brand}</Col>
            </Row>
            <Row className="text-start lost_main-info2">
              <Col className="col-12 col-sm-6">
                <span className="me-3">Color_1:</span>
                {infoID.primary_color}
              </Col>
              <Col className="col-12 col-sm-6">
                <span className="me-3">Color_2:</span>
                {infoID.secondary_color}
              </Col>
            </Row>
            <Row className="text-start lost_main-info3">
              <Col className="col-12 col-md-6">
                <span className="me-3">PhoneNumber:</span>
                {infoID.contact_info}
              </Col>
              <Col className="col-12 col-md-6">
                <span className="me-3">Date:</span>
                {infoID.date}
              </Col>
            </Row>
            <p className="text-start " >
              <span className="me-3">Description:</span>
              <span className="w-50">{infoID.specific_description}</span>

            </p>
          </div>

          <div
            className="ps-5 lost_countriy"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2rem",
              marginBottom: ".5rem",
            }}
          >
            <p>
              <span>{infoID.country}</span>
              <span>{infoID.city}</span>
              <span>{infoID.street}</span>
            </p>
            <Button
              onClick={openInfoModal}
              color="danger"
              className="fw-bold fs-6 rounded-4"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              Close
            </Button>
          </div>
        </ModalBody>
        <ModalFooter className="modalFooter"></ModalFooter>
      </Modal>


      <hr />
      <FooTer />

    </div>
  );
}

export default Itemspage;


