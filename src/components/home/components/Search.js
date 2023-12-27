import { Col, Container, Row } from "reactstrap";
import { DefouldNav } from "../../navbars/DefouldNav";
import "../scss/search.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { api, byId } from "../../api/api";
import FooTer from "../../footer/FooTer";
import { Link } from "react-router-dom";

function SearchHome() {

    const [item, setItem] = useState([]);
    const [category, setCategory] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        getItem();
        getCategory();
    }, []);

    // get item
    const getItem = () => {
        axios.get(`${api}item/`)
            .then(res => setItem(res.data.reverse()))
            .catch(() => console.log("item kelmadi!!!"))
    }

    // getCategory
    function getCategory() {
        axios.get(`${api}category/`)
            .then(res => setCategory(res.data.reverse()))
    }

    // getTypeFilter
    function getType() {
        let types = byId("type").value
        axios.get(`${api}item/category/${types}/`)
            .then(res => setItem(res.data.reverse()))
            .catch(() => console.log("type yuq!!!"))
    }

    // categoryFilter
    const categoryFIlter = () => {
        let categoryId = byId("category").value
        axios.get(`${api}item/category/${categoryId}/`)
            .then(res => setItem(res.data.reverse()))
            .catch(() => console.log("category filter ishlamadi!!!"))
    }

    const searchLost = () => {
        let searchItem = byId("searchInput").value
        if (!!searchItem)
            axios.get(`${api}item/?search=${searchItem}`)
                .then(res => setItem(res.data.reverse()))
        else getItem();
    }

    return (
        <>
            <DefouldNav />
            <Container className="remove_container" style={{ marginTop: "11rem", marginBottom: "5rem" }}>
                <h4>
                    <Link to="/">Bosh Sahifa </Link>
                    <span>/ Search</span>
                </h4>
                <div className="row search-filters">
                    <div className="col-12 col-lg-7">
                        <button className="rounded-2" onClick={() => {
                            getItem();
                            byId("type").value = "Type Filter"
                            byId("category").value = "Categoty Filter"
                            byId("searchInput").value = ""
                        }}>All</button>

                        <select className="form-select" id="category" onChange={() => {
                            categoryFIlter();
                            byId("type").value = "Type Filter"
                            byId("searchInput").value = ""
                        }}>
                            <option selected disabled>Categoty Filter</option>
                            {category.map((item, i) =>
                                <option value={item.id} key={i}>{item.name}</option>
                            )}
                        </select>

                        <select className="form-select" id="type" onChange={() => {
                            getType();
                            byId("category").value = "Categoty Filter"
                            byId("searchInput").value = ""
                        }}>
                            <option selected disabled>Type Filter</option>
                            <option value="LOST">Lost</option>
                            <option value="FOUND">Found</option>
                        </select>

                    </div>
                    <div className="col-12 col-lg-5 mt-3 mt-lg-0">
                        <input
                            onChange={() => {
                                searchLost();
                                byId("category").value = "Categoty Filter"
                                byId("type").value = "Type Filter"
                            }}
                            id="searchInput"
                            className="form-control"
                            placeholder="🔍 search" />
                    </div>
                </div>
                <Row className="w-100">
                    {item.map((item, i) =>
                        <Col className="col-12 col-sm-6 col-lg-3 mt-4 col-p-remove" key={i}>
                            <div className="search_main">
                                <div className="search_hover">
                                    <img
                                        src={item.image}
                                        className="img-fluid"
                                        alt="images" />
                                </div>
                                <h2>{item.name}</h2>
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
            <hr />

            <FooTer />
        </>
    );
}

export default SearchHome;