import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { api } from "../../api/api";
import img from "../../assets/homeImages/categoryImg.png";

export const Category = () => {

    const [categoryItem, setCategoryItem] = useState([]);

    useEffect(() => {
        getCategory();
    }, []);

    // getCategory
    const getCategory = () => {
        axios.get(`${api}category/`)
            .then(res => setCategoryItem(res.data))
            .catch(() => console.log("category kelmadi!!!"))
    }

    const responsive = {
        0: { items: 1 },
        500: { items: 2 },
        700: { items: 3 },
        991: { items: 4 },
    };

    return (
        <>
            <AliceCarousel
                items={categoryItem.map((item, i) =>
                    <div key={i} className="category__style">
                        <div>
                            <img src={item.image} alt="img" />
                        </div>
                        <p className="text-center">{item.name}</p>
                    </div>
                )}
                responsive={responsive}
                autoPlay
                autoPlayInterval={5000}
                infinite
                mouseTracking
                disableButtonsControls
            />
        </>
    );
}