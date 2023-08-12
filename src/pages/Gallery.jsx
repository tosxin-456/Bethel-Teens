import image1 from '../assets/picNic1.jpg'
import image2 from '../assets/bake1.jpg'
import image3 from '../assets/picNic2.jpg'
import image4 from '../assets/bake2.jpg'
import image5 from '../assets/longBake1.jpg'
import image6 from '../assets/picNic4.jpg'
import image7 from '../assets/longBake2.jpg'
import image8 from '../assets/picNic5.jpg'
import image9 from '../assets/longBake3.jpg'
import facebook from '../assets/Facebook.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.svg'
import React, { useState } from 'react';

const Gallery = ({ setSelectedImage }) => {
  // const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className='gallery'>
        <div className='setOfThree'>
          <div className='firstPic'>
            <img src={image1} alt='' onClick={() => handleImageClick(image1)} />
            <p className='text'>Picnic In Wild-Life Park</p>
          </div>
          <div className='firstPic'>
            <img src={image2} alt='' onClick={() => handleImageClick(image2)} />
            <p className='text'>Baking Lesson</p>
          </div>
          <div className='firstPic'>
            <img src={image3} alt=''  onClick={() => handleImageClick(image3)} />
            <p className='text'>Picnic In Wild-Life Park</p>
          </div>
        </div>
        <div className='setOfThree'>
          <div className='firstPic' id='secondLine'>
            <img src={image4} alt=''  onClick={() => handleImageClick(image4)} />
            <p className='text'>Baking Lesson</p>
          </div>
          <div className='firstPic'>
            <img src={image8} alt=''  onClick={() => handleImageClick(image8)} />
            <p className='text'>Wild-Life Park</p>
          </div>
          <div className='firstPic' id='secondLine'>
            <img src={image6} alt=''  onClick={() => handleImageClick(image6)} />
            <p className='text'>Wild-Life Park</p>
          </div>
        </div>
        <div className='setOfThree lastSetOfThree'>
          <div className='firstPic baking'>
            <img src={image7} alt='' id='LongOnes'  onClick={() => handleImageClick(image7)} />
            <p className='text'>Baking Lesson</p>
          </div>
          <div className='firstPic' id='secondLine'>
            <img src={image5} alt=''  onClick={() => handleImageClick(image5)} />
            <p className='text'>Baking Lesson</p>
          </div>
          <div className='firstPic' id='lastImage'>
            <img src={image9} alt=''   onClick={() => handleImageClick(image9)} />
            <p className='text'>Baking Lesson</p>
          </div>
        </div>
      </div>
      <footer className='footerNav'>
        <div className='footerNameAndLogo'>
          <p className='footerName'>The Chapel of Faith</p>
        </div>
        <div className='icons'>
          <a href='https://web.facebook.com/ChapelofFaithUJ/?_rdc=1&_rdr'>
            <img src={facebook} alt='' />
          </a>
          <a href='https://instagram.com/chapeloffaithunijos?igshid=MzRlODBiNWFlZA=='>
            <img src={instagram} alt='' className='microphone' />
          </a>
          <a href='https://www.youtube.com/@ChapelofFaithUJ'>
            <img src={youtube} alt='' className='youtube' />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Gallery;
