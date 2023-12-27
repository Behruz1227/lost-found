import { Col, Container, Row } from "reactstrap";
import "../scss/search.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { api, byId } from "../../api/api";
import FooTer from "../../footer/FooTer";
import { Link } from "react-router-dom";
import { ItemNavSearch } from "../../nav-item/DefouldNav";

function Search2() {

    const [item, setItem] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getItem();
    }, []);

    // get item
    const getItem = () => {
        axios.get(`${api}itemss/`, {
            headers: {
              Authorization: sessionStorage.getItem("jwtToken"),
            },
          })
            .then(res => setItem(res.data.reverse()))
            .catch(() => console.log("item kelmadi!!!"))
    }

   

    const searchLost = () => {
        let searchItem = byId("searchInput").value
        if (!!searchItem)
            axios.get(`${api}itemss/?search=${searchItem}`, {
                headers: {
                  Authorization: sessionStorage.getItem("jwtToken"),
                },
              })
                .then(res => setItem(res.data.reverse()))
        else getItem();
    }

    return (
        <>
            <ItemNavSearch/>
            <Container className="remove_container" style={{ marginTop: "11rem", marginBottom: "5rem" }}>
                <h4>
                    <Link to="/">Bosh Sahifa </Link>
                    <span>/ Search</span>
                </h4>
                <div className="row search-filters">
                  
                    <div className="col-12 mt-3 mt-lg-0 d-flex justify-content-center">
                        <input
                            onChange={searchLost}
                            id="searchInput"
                            className="form-control w-50"
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

export default Search2;