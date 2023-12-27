import React from "react";
import "./style.scss";
import { DefouldNav } from "../navbars/DefouldNav";
import PageOne from "./components/Page_one";
import { Category } from "./components/Category";
import LostItems from "./components/LostItems";
import { AboutHome } from "./components/About";
import FooTer from "../footer/FooTer";
import Customers from "./components/Customers";
import FoundItems from "./components/FoundItems";
import { byId } from "../api/api";

function HomeDefault() {

    const goAll = () => byId("allId").click();
    const goLost = () => byId("lostId").click();
    const goFound = () => byId("foundId").click();
    return (
        <>
            <a href="#allProduct" id="allId"></a>
            <a href="#lostProduct" id="lostId"></a>
            <a href="#foundProduct" id="foundId"></a>

            <section className="home_main">
                {/*navbar*/}
                <DefouldNav />
                {/*page one carousel*/}
                <PageOne />

                {/*button section*/}
                <div className="text-center category__filter-btn">
                    <button onClick={goAll}>All product</button>
                    <button onClick={goLost}>Lost product</button>
                    <button onClick={goFound}>Found product</button>
                </div>

                {/* categores */}
                <section id="allProduct">
                    <Category />
                </section>
                {/* lost items */}
                <section id="lostProduct">
                    <LostItems />
                </section>
                {/* found items */}
                <section id="foundProduct">
                    <FoundItems />
                </section>
                {/*about*/}
                <AboutHome />
                {/* Customers */}
                <Customers />

                {/* Footer */}
                <FooTer />
            </section>
        </>
    );
}

export default HomeDefault;