import React from "react";
import { useSwiper } from "swiper/react";
import classes from "../../pages/Products/styles.module.css";


const SwiperNavButton = () => {
    const Swiper = useSwiper();

    return (
        <div className={classes.swiperNavButton}>
            <button onClick={() => Swiper.slidePrev()}>v</button>
            <button onClick={() => Swiper.slideNext()}>v</button>
        </div>
    );
}

export default SwiperNavButton;
