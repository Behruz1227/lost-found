import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Icon } from "@iconify/react";
import { Col, Row } from 'reactstrap';
import axios from 'axios';
import { api, byId } from '../../api/api';
import { toast } from 'react-toastify';
import defImg from "../../assets/newsletter.jpg";

const Customers = () => {

    const [newsletter, setNewsLetter] = useState([]);

    useEffect(() => {
        getNewsLetter();
    }, []);

    // getNewsLetter
    function getNewsLetter() {
        axios.get(`${api}news-letter/`, {
            headers: {
                Authorization: sessionStorage.getItem("jwtToken"),
            }
        })
            .then(res => setNewsLetter(res.data))
            .catch(() => console.log("newsletter kelmadi!!!"))
    }

    // addMessage
    const addMessage = () => {
        let addData = {
            comment: byId("newsletterInfo").value,
            user: 1
        }
        axios.post(`${api}news-letter/`, addData, {
            headers: {
                Authorization: sessionStorage.getItem("jwtToken"),
            }
        })
            .then(() => {
                toast.success("Fikr bildirganingiz uchun rahmat. Fikringiz albatta inobatga olinadi!")
                byId("newsletterInfo").value = "";
                getNewsLetter();
            }).catch(() => {
                toast.warning("Ruyxatdan utishingizni tavsiya qilamiz!!!")
            })
    }

    const handlePrevButtonClick = (e) => {
        e.preventDefault();
        carousel.slidePrev();
    };

    const handleNextButtonClick = (e) => {
        e.preventDefault();
        carousel.slideNext();
    };

    let carousel;

    const responsive = {
        0: { items: 1 },
        900: { items: 2 },
    };

    return (
        <>
            <h1 className='customer-heading'>What Our Customers Say</h1>
            <div className="customers-main-carousel">
                <button className="customers-prev d-none d-md-inline" onClick={handlePrevButtonClick}>
                    <Icon icon="ooui:next-rtl" width="20" height="20" />
                </button>
                <div className='alice-carousel'>
                    <AliceCarousel
                        items={newsletter.map((item, i) =>
                            <div key={i} className="p-4 customers_items">
                                <div key={1}>
                                    <Row className="w-100 customers__row">
                                        <Col className="col-12 col-sm-6 col-lg-4 customer__img">
                                            <div>
                                                <img
                                                    src={item.user_image !== null
                                                        ? api + item.user_image
                                                        : defImg
                                                    }
                                                    alt="img" />
                                            </div>
                                        </Col>
                                        <Col className="col-12 col-lg-8 customer__info">
                                            <h2>{item.user_username}</h2>
                                            <p>
                                                <span>Customers</span>
                                                <span>
                                                    <Icon icon="ri:star-fill" color="yellow" />
                                                    <Icon icon="ri:star-fill" color="yellow" />
                                                    <Icon icon="ri:star-fill" color="yellow" />
                                                    <Icon icon="ri:star-fill" color="yellow" />
                                                    <Icon icon="ri:star-fill" color="yellow" />
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <p className='customers__par'>{item.comment}</p>
                                </div>
                            </div>
                        )}
                        responsive={responsive}
                        autoPlay
                        autoPlayInterval={5000}
                        infinite
                        mouseTracking
                        disableButtonsControls
                        controlsStrategy="responsive"
                        buttonsDisabled={true}
                        dotsDisabled={true}
                        ref={(el) => (carousel = el)}
                    />
                </div>
                <button className="customers-next d-none d-md-inline" onClick={handleNextButtonClick}>
                    <Icon icon="ooui:next-ltr" width="20" height="20" />
                </button>
            </div>

            {/* newsletter */}
            <div className='newsletter_main'>
                <div className="newsletter_width">
                    <h2>Subscribe Newsletter</h2>
                    <p>
                        Stay connected with the latest stories of lost items being found, heartwarming
                        reunions, and valuable tips on protecting your belongings. Join our community
                        newsletter to get updates straight to your inbox.
                    </p>
                    <textarea
                        id="newsletterInfo"
                        className='form-control p-4'
                        placeholder='Write me....'
                        rows="6"></textarea>
                    <button onClick={addMessage}>Submit</button>
                </div>
            </div>
        </>
    );
};

export default Customers;
