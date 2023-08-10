import React, { useState } from 'react';
import Slider from "./Slider";
import Gallery from "./Gallery";

const EntireGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
  <>
  <Slider selectedImage ={selectedImage}/>
  <Gallery setSelectedImage={setSelectedImage}/>
  </>
   );
}
 
export default EntireGallery;