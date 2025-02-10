'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Slide1 from './Slide1.jpg';
import Slide2 from './Slide2.jpg';
import Slide3 from './Slide3.jpg';
import './style.css';

const Slider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Image
                    className="slider"
                    src={Slide1}
                    alt="slider"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className="slider"
                    src={Slide2}
                    alt="slider"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className="slider"
                    src={Slide3}
                    alt="slider"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
