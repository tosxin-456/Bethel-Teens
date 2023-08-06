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
import kidsImage from '../assets/image.png';
import teacher from '../assets/WhatsApp Image 2023-08-02 at 12.57.59.jpg';
import '../App.css'

const Slider = () => {
  const images = [
    teen1,
    kidsImage,
    teacher,
  ];

  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <div className='galleryImg'>
    <SwiperSlide><img src={teen1} className='img' alt="" /></SwiperSlide>
    <div className='galleryBackground'></div>
    <SwiperSlide><img src={teacher} alt=""  className='img' /></SwiperSlide>
    <SwiperSlide><img src={kidsImage} alt=""  className='img' /></SwiperSlide>
    <SwiperSlide><img src={teen1} alt=""  className='img' /></SwiperSlide>
  </div>
  </Swiper>
  );
};

export default Slider;
