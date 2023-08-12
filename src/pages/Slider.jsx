import React ,{useEffect ,useRef} from 'react';
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
import bakingTeens from '../assets/Bake3.jpg';
import bake2 from '../assets/bake4.jpg';
import picNic3 from '../assets/picNic8.jpg';
import bake3 from '../assets/picNic9.jpg'
import '../App.css';


const Slider = ({ selectedImage }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && selectedImage) {
      const swiperInstance = swiperRef.current.swiper;
      const slideIndex = swiperInstance.slides.findIndex(
        (slide) => slide.querySelector('img').src === selectedImage
      );
      if (slideIndex !== -1) {
        swiperInstance.slideTo(slideIndex);
      }
    }
  }, [selectedImage]);
  return (
    <>
    <div className='galleryBackground'>
        <Swiper
      ref={swiperRef}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      scrollbar={{ draggable: true }}
    >
    
      <div className='galleryImg' >
        {selectedImage && (
          <SwiperSlide>
            <img src={selectedImage} alt='' className='img' />
          </SwiperSlide>
        )}
        <SwiperSlide>
          <img src={ bake3 } className='img' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ picNic2} className='img' alt='' />
        </SwiperSlide>
        <div className='galleryBackground'></div>
        <SwiperSlide>
          <img src={ bakingTeens  } alt='' className='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ picNic1 } alt='' className='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ bake2 } alt='' className='img' />
        </SwiperSlide>
        <SwiperSlide >
          <img src={ picNic3  } alt='' className='img' />
        </SwiperSlide>
      </div>
    </Swiper>
    </div>
    </>
  );
};

export default Slider;
