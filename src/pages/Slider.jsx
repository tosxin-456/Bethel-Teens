import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import picNic1 from '../assets/picNic6.jpg';
import picNic2 from '../assets/picNic7.jpg';
import bakingTeens from '../assets/bake3.jpg';
import bake2 from '../assets/bake4.jpg';
import picNic3 from '../assets/picnicTeens7.jpg';
import bake3 from '../assets/picNic9.jpg'
import '../App.css';

const Slider = ({ selectedImage }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      scrollbar={{ draggable: true }}
    >
    
      <div className='galleryImg'>
        <SwiperSlide>
          <img src={selectedImage || bake3} className='img' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={selectedImage || picNic2} className='img' alt='' />
        </SwiperSlide>
        <div className='galleryBackground'></div>
        <SwiperSlide>
          <img src={selectedImage|| bakingTeens  } alt='' className='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={selectedImage || picNic1 } alt='' className='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={selectedImage || bake2 } alt='' className='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={selectedImage|| picNic3  } alt='' className='img' />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Slider;
