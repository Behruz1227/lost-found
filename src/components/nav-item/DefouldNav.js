import React, { useRef, useState } from "react";
import "./defouldNav.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { api, apiImg, byId } from "../api/api";
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import axios from "axios";
import { createPopper } from "@popperjs/core";
import { toast } from "react-toastify";
import FooTer from "../footer/FooTer";

export const ItemNavSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [getMe, setGetme] = useState(false);

  useState(() => {
    getme();
  }, []);

  const openCurrentModal = () => setCurrentModal(!currentModal);
  const openProfileModal = () => setProfileModal(!profileModal);


  const toggleNavbar = () => setIsOpen(!isOpen);
  const goSearch = () => byId("search2").click();

  function getme() {
    axios
      .get(api + "current-user/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setGetme(res.data);
      })
      .catch(() => {});
  }

  const [showModal, setShowModal] = useState(false);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  let popperInstance = null;

  const openModal = () => {
    setShowModal(!showModal);
    popperInstance = createPopper(buttonRef.current, modalRef.current, {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
        {
          name: "preventOverflow",
          options: {
            boundary: document.querySelector(".app"),
          },
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: ["top"],
          },
        },
      ],
    });
  };

  const closeModal = () => {
    setShowModal(false);
    if (popperInstance) {
      popperInstance.destroy();
    }
  };

  
  function editProfile() {
    const addData = new FormData();
    addData.append("username", byId("username").value);
    addData.append("gender", byId("gender").value);
    addData.append("image", byId("avatar").files[0]);

    axios
      .put(api + "profile/edit/", addData, {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then(() => {
        openCurrentModal();
        toast.success("Profile successfully edit");
        getme();
      })
      .catch(() => toast.error("Something is error"));
  }

  function getme() {
    axios
      .get(api + "current-user/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setGetme(res.data);
      })
      .catch(() => {});
  }

  const logout = () => {
    document.getElementById("log").click()
    sessionStorage.clear()
  }
  return (
    <>
      <header>
        <Link id="search2" to="/search my profile"></Link>
        <Link id="log" to="/"></Link>

        <nav className="fixed-top">
          <div className="mobile_nav p-3 d-md-none">
            <div className="mobilenav_box">
              <div className="nav_brand">
                <Link to="/Lost and Found">
                  <span className="text-light">Back</span>
                  <span className="text-light">to</span>
                  <span className="text-light">profile</span>
                </Link>
              </div>
              <div className="burger-menu" onClick={toggleNavbar}>
                {isOpen ? "✕" : "☰"}
              </div>
            </div>
            <div className="mobilenav_heddin">
              <div
                className={
                  isOpen ? "nav-links-mobile show_mobile" : "nav-links-mobile"
                }
              >
                <div className="d-flex mt-3 justify-content-center">
                  <div className="search-avatar-mobil сol-6 ">
                    <img
                      className="img-fluid "
                      style={{
                        borderRadius: "10rem",
                        width: "90px",
                        height: "90px",
                        objectFit: "cover",
                      }}
                      src={
                        getMe.image !== null
                          ? apiImg +
                            getMe.image
                          : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                      }
                      alt=".."
                    />
                  </div>

                  <form class="d-flex justify-content-center row col-6" role="search">
                    <div className="w-75 d-flex justify-content-center col-12">
                      {/* {(a=b) ? "uechdh" : "wutfdu"} */}
                      <button class="btn btn-success" onClick={goSearch}>
                    Search
                  </button>
                    </div>
                    <div className="mt-3 text-center ">
                      <Button
                      color="primary"
                        onClick={() => {
                          openProfileModal();
                          getme();
                        }}
                        className="text-light"
                      >
                        <b>Profile</b>
                      </Button>
                    </div>
                    <div className="mt-3 text-center ">
                      <Button
                      color="danger"
                        onClick={() => {
                          logout();
                        }}
                        className="text-light"
                      >
                        <b>Log out</b>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="destop_nav d-none d-md-inline">
            <div className="container py-4">
              <div className="nav_brand2">
                <Link to="/Lost and Found">
                  <span className="text-light">Back</span>
                  <span className="text-light">to</span>
                  <span className="text-light">profile</span>
                </Link>
              </div>
              <div className="nav_search align-middle">
                <div className="">
                  <button class="btn btn-success" onClick={goSearch}>
                    Search
                  </button>
                </div>
                {/* <div className="ms-5"> */}
                <div className="search-avatar">
                  <img
                    className="img-fluid"
                    src={
                      getMe.image !== null
                        ? apiImg + getMe.image
                        : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    }
                    alt=".."
                  />
                </div>

                <h5 ref={buttonRef} onClick={openModal} className="mt-2">
                  Profile
                </h5>
                <div
                  className="app"
                  style={{
                    position: "relative",
                  }}
                >
                  {showModal && (
                    <div
                      className="row"
                      ref={modalRef}
                      style={{
                        position: "absolute",
                        top: "4rem",
                        width: "20rem",
                        left: "-13rem",
                        background: "rgb(255,255,255)",
                        background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(34,129,195,1) 85%)",
                        padding: "20px",
                        boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.3)",
                        borderRadius: "3rem",
                      }}
                    >
                       
                      <div className="col-12 d-flex justify-content-end">
                        <svg
                          onClick={closeModal}
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="white"
                          className=" bi bi-x-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                        </svg>
                      </div>

                      <div className="search-avatar-pr col-12">
                        <img
                          className="img-fluid"
                          src={
                            getMe.image !== null
                              ? apiImg +
                                getMe.image
                              : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                          }
                          alt=".."
                        />
                      </div>

                      <div
                        className="col-12 d-flex ms-3"
                        style={{
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <h4 className="mt-3 ms-5">{getMe.username}</h4>
                        <h4 className="mt-3">{getMe.phone_number}</h4>
                      </div>
                      <div className="col-6 mt-3 d-flex justify-content-center">
                        <button
                          className="edit-button"
                          onClick={() => {
                            openCurrentModal();
                            closeModal();
                          }}
                        >
                          Edit
                        </button>
                      </div>
                      <div className="col-6 mt-3 d-flex justify-content-center">
                        <button
                          className="log-button "
                          onClick={() => {
                            logout();
                          }}
                        >
                          Log out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Modal isOpen={currentModal} size="lg" scrollable>
        <ModalHeader
          toggle={openCurrentModal}
          className="text-light fs-4 fw-bolder"
        >
          Profile
        </ModalHeader>
        <ModalBody className="modal-body p-4 text-light modal-css row">
          <div className="bot col-12 col-md-6">
            <img
              style={{
                width: "300px",
                borderRadius: "10rem",
                height: "300px",
                objectFit: "cover",
                
              }}
              src={
                getMe.image !== null
                  ? apiImg + getMe.image
                  : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
              }
              alt=".."
            />
          </div>
          <div className="col-12 col-md-6">
            <div>
              <b className="mb-3">Username:</b>
              <Input
                type="text"
                id="username"
                className="bg-secondary mt-3"
                defaultValue={getMe.username}
              />
            </div>
            <div className="mt-3">
              <b className="mb-3">Avatar:</b>

              <Input type="file" id="avatar" className="bg-secondary mt-3" />
            </div>
            
              <select id="gender" className="form-control mt-3">
                <option selected disabled>Gender</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
          </div>
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openCurrentModal}
          >
            Close
          </Button>
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-success"
            onClick={editProfile}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={profileModal} size="lg" scrollable>
        <ModalHeader
          toggle={openProfileModal}
          className="text-light fs-4 fw-bolder"
        >
          Profile
        </ModalHeader>
        <ModalBody className="modal-body p-4 text-light modal-css row">
          <div className="bot col-12 col-md-6">
            <img
              style={{
                width: "300px",
                borderRadius: "10rem",
                height: "300px",
                objectFit: "cover",
              }}
              src={
                getMe.image !== null
                  ? apiImg + getMe.image
                  : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
              }
              alt=".."
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="">
              <b className="mb-3">Username:</b>
              <h4>{getMe.username}</h4>
            </div>
            <div>
              <b className="mb-3">Phone number:</b>

              <h4>{getMe.phone_number}</h4>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openProfileModal}
          >
            Close
          </Button>
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-success"
            onClick={openCurrentModal}
          >
            Edit profile
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
