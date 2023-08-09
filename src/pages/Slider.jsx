import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import teen1 from '../assets/edeh and ada.jpg';
import bake2 from '../assets/Bake3.jpg';
import bakingTeens from '../assets/WhatsApp Image 2023-08-02 at 12.57.59.jpg';
import picNic1 from '../assets/picnicTeens.jpg'
import picNic2 from '../assets/picnicTeens2.jpg'
import picNic3 from '../assets/picnicTeens7.jpg'
import '../App.css'


const Slider = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    <div>
      
    </div>
    <div className='galleryImg'>
    <SwiperSlide><img src={picNic2} className='img' alt="" /></SwiperSlide>
    <div className='galleryBackground'></div>
    <SwiperSlide><img src={bakingTeens} alt=""  className='img' /></SwiperSlide>
    <SwiperSlide><img src={picNic1} alt=""  className='img' /></SwiperSlide>
    <SwiperSlide><img src={bake2} alt=""  className='img' /></SwiperSlide>
    <SwiperSlide><img src={picNic3} alt=""  className='img' /></SwiperSlide>
  </div>
  </Swiper>
  );
};

export default Slider;
