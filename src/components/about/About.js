import PageOne from "../home/components/Page_one";
import { DefouldNav } from "../navbars/DefouldNav";
import FooTer from "../footer/FooTer";
import { useEffect, useState } from "react";
import axios from "axios";
import { api, byId } from "../api/api";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from "reactstrap";
import "./about.scss";
import { Link } from "react-router-dom";

function AboutLostFound() {

    const [aboutCategory, setAboutCategory] = useState([]);
    const [aboutInfo, setAboutInfo] = useState([]);
    const [open, setOpen] = useState('');

    useEffect(() => {
        getAboutCategory();
        getAboutInfo();
    }, []);

    // get about category
    const getAboutCategory = () => {
        axios.get(`${api}about-category/`)
            .then(res => setAboutCategory(res.data))
            .catch(() => console.log("about yuq!!!"))
    }

    // getAboutInfo
    const getAboutInfo = () => {
        axios.get(`${api}about/`)
            .then(res => setAboutInfo(res.data))
            .catch(() => console.log("about kelmadi!!!"))
    }

    // open accardion
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    const goPageSection = (aboutId) => {
        if (aboutId == "Entering Information") byId("malumot").click();
        else if (aboutId == "Searching") byId("poisk").click();
        else if (aboutId == "Password Questions") byId("parol").click();
        else if (aboutId == "Picture Questions") byId("picture").click();
    }

    return (
        <>
            <a href="#goMalumot" id="malumot"></a>
            <a href="#goPoisk" id="poisk"></a>
            <a href="#goParol" id="parol"></a>
            <a href="#goPicture" id="picture"></a>

            <DefouldNav />
            {/* <PageOne /> */}

            <Container style={{ marginTop: "10rem", marginBottom: "4rem" }}>
                <h4 className="about__heading-back">
                    <Link to="/">Bosh Sahifa </Link>
                    <span>/ Search</span>
                </h4>
                <div className="category-btn text-center">
                    {aboutCategory.map((item, i) =>
                        <button onClick={() => {
                            goPageSection(item.name);
                        }} key={i}>{item.name}</button>
                    )}
                </div>

                <div>
                    <h2 id="goMalumot" className="about-accardions">Entering Information</h2>
                    {aboutInfo.map((item, i) =>
                        item.name === aboutCategory[0].id ?
                            <Accordion flush open={open} toggle={toggle}>
                                <AccordionItem className="accardion-style">
                                    <AccordionHeader className="accardion-header" targetId={i}>
                                        {item.question}
                                    </AccordionHeader>
                                    <AccordionBody accordionId={i}>
                                        {item.title}
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                            : ""
                    )}
                    <h2 id="goPoisk" className="about-accardions">Searching</h2>
                    {aboutInfo.map((item, i) =>
                        item.name === aboutCategory[1].id ?
                            <Accordion flush open={open} toggle={toggle}>
                                <AccordionItem className="accardion-style">
                                    <AccordionHeader className="accardion-header" targetId={i}>
                                        {item.question}
                                    </AccordionHeader>
                                    <AccordionBody accordionId={i}>
                                        {item.title}
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                            : ""
                    )}
                    <h2 id="goParol" className="about-accardions">Password Questions</h2>
                    {aboutInfo.map((item, i) =>
                        item.name === aboutCategory[2].id ?
                            <Accordion flush open={open} toggle={toggle}>
                                <AccordionItem className="accardion-style">
                                    <AccordionHeader className="accardion-header" targetId={i}>
                                        {item.question}
                                    </AccordionHeader>
                                    <AccordionBody accordionId={i}>
                                        {item.title}
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                            : ""
                    )}
                    <h2 id="goPicture" className="about-accardions">Picture Questions</h2>
                    {aboutInfo.map((item, i) =>
                        item.name === aboutCategory[3].id ?
                            <Accordion flush open={open} toggle={toggle}>
                                <AccordionItem className="accardion-style">
                                    <AccordionHeader className="accardion-header" targetId={i}>
                                        {item.question}
                                    </AccordionHeader>
                                    <AccordionBody accordionId={i}>
                                        {item.title}
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                            : ""
                    )}
                </div>
            </Container>

            <FooTer />
        </>
    );
}

export default AboutLostFound;