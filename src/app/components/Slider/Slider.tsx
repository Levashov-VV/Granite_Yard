'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
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
          src="/slider/1.jpg"
          alt="slider"
          width={0}
          height={0}
          sizes="100vw"
        />
      </SwiperSlide>
      <SwiperSlide> 
        <Image
          src="/slider/2.jpg"
          alt="slider"
          width={0}
          height={0}
          sizes="100vw"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/slider/3.jpg"
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