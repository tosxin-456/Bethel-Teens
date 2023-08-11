import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import picNic1 from '../assets/picNic6.jpg';
import picNic2 from '../assets/picNic7.jpg';
import bakingTeens from '../assets/Bake3.jpg';
import bake2 from '../assets/bake4.jpg';
import picNic3 from '../assets/picnicTeens7.jpg';
import bake3 from '../assets/picNic9.jpg';
import '../App.css';

const Slider = ({ selectedImage }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      scrollbar={{ draggable: true }}
    >
      {selectedImage && (
        <SwiperSlide key={selectedImage}>
          <img src={selectedImage} alt='' className='img' />
        </SwiperSlide>
      )}
      <SwiperSlide key={bake3}>
        <img src={bake3} alt='' className='img' />
      </SwiperSlide>
      <SwiperSlide key={picNic2}>
        <img src={picNic2} alt='' className='img' />
      </SwiperSlide>
      <SwiperSlide key={bakingTeens}>
        <img src={bakingTeens} alt='' className='img' />
      </SwiperSlide>
      <SwiperSlide key={picNic1}>
        <img src={picNic1} alt='' className='img' />
      </SwiperSlide>
      <SwiperSlide key={bake2}>
        <img src={bake2} alt='' className='img' />
      </SwiperSlide>
      <SwiperSlide key={picNic3}>
        <img src={picNic3} alt='' className='img' />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
