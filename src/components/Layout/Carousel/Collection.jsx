import { Swiper, SwiperSlide } from "swiper/react";
import Accessory from "../Accessories/Accessory";
import axios from "axios";
import URL from "../../../config/api";

export const Collection = () => {

    // const accessories = axios.get(URL + "")

    return ( 
        <section class="shop__collection--section section--padding">
            <div class="container">
                <div class="section__heading text-center mb-40">
                    <h2 class="section__heading--maintitle">Shop By Category</h2>
                </div>
                <Swiper class="shop__collection--column5"
                    spaceBetween={30}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    loop
                    breakpoints = {{
                                1200: {
                                    slidesPerView: 4,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 25,
                                },
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                200: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                    >
                    <div>
                        <SwiperSlide class="swiper-slide">
                            <Accessory name="Rings"/>
                        </SwiperSlide>
                        <SwiperSlide class="swiper-slide">
                            <div class="shop__collection--card text-center">
                                <a class="shop__collection--link" href="shop.html">
                                    <img class="shop__collection--img" src="assets/img/collection/collection8.webp" alt="icon-img"/>
                                    <h3 class="shop__collection--title mb-0">Bracelets</h3>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="swiper-slide">
                            <div class="shop__collection--card text-center">
                                <a class="shop__collection--link" href="shop.html">
                                    <img class="shop__collection--img" src="assets/img/collection/collection9.webp" alt="icon-img"/>
                                    <h3 class="shop__collection--title mb-0">Earrings</h3>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="swiper-slide">
                            <div class="shop__collection--card text-center">
                                <a class="shop__collection--link" href="shop.html">
                                    <img class="shop__collection--img" src="assets/img/collection/collection10.webp" alt="icon-img"/>
                                    <h3 class="shop__collection--title mb-0">Wedding-bridal</h3>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="swiper-slide">
                            <div class="shop__collection--card text-center">
                                <a class="shop__collection--link" href="shop.html">
                                    <img class="shop__collection--img" src="assets/img/collection/collection11.webp" alt="icon-img"/>
                                    <h3 class="shop__collection--title mb-0">Shop Earrings</h3>
                                </a>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div class="swiper__nav--btn swiper-button-next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" -chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                    <div class="swiper__nav--btn swiper-button-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" -chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default Collection;