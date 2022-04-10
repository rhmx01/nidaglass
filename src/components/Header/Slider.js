import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SSlider from "react-slick";
import s1 from "../../images/slides/s1.jpg";
import s2 from "../../images/slides/s2.jpg";
import s3 from "../../images/slides/s3.jpg";

const Slider = () => {
    return (
        <div id="slider">
            <SSlider
                dots={false}
                infinite={true}
                speed={3000}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={2500}
            >
                <div>
                    <img src={s1} className="w-full h-full" alt="ed"/>
                </div>
                <div>
                    <img src={s2} className="w-full h-full" alt="ed"/>
                </div>
                <div>
                    <img src={s3} className="w-full h-full" alt="ed"/>
                </div>
            </SSlider>
        </div>
    );
};

export default Slider;