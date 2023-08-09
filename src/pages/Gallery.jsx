import image1 from '../assets/picnicTeens4.jpg'
import image2 from '../assets/Bake3.jpg'
import image3 from '../assets/picnicTeens3.jpg'
import image4 from '../assets/bake2.jpg'
import image5 from '../assets/bake4.jpg'
import image6 from '../assets/bake5.jpg'
import image7 from '../assets/bake6.jpg'
import image8 from '../assets/picnicTeens5.jpg'
import image9 from '../assets/picnicTeens6.jpg'
import image10 from '../assets/picnicTeens8.jpg'





const Gallery = () => {
  return (
  <>
  <div className='gallery'>
   <div className='setOfThree'>
  <div className='firstPic'>
    <img src={image1} alt="" />
    <p className='text'>Picnic In Wild-Life Park</p>
  </div>
  <div className='firstPic'>
    <img src={image2} alt="" />
    <p className='text'>Baking Lesson</p>
  </div>
  <div className='firstPic'>
    <img src={image3} alt="" />
    <p className='text'>Picnic In Wild-Life Park</p>
  </div>
   </div>
   <div className='setOfThree'>
  <div className='firstPic' id='secondLine'>
    <img src={image4} alt=""  />
    <p className='text'>Baking Lesson</p>
  </div>
  <div className='firstPic'>
    <img src={image5} alt="" />
    <p className='text'>Baking Lesson</p>
  </div>
  <div className='firstPic' id='secondLine'>
    <img src={image8} alt="" />
    <p className='text'> Wild-Life Park</p>
  </div>
   </div>
   <div className='setOfThree'>
  <div className='firstPic'>
    <img src={image6} alt="" id='LongOnes' />
    <p className='text'>Baking Lesson</p>
  </div>
  <div className='firstPic' id='secondLine'>
    <img src={image9} alt="" />
    <p className='text'>Picnic In Wild-Life Park</p>
  </div>
  <div className='firstPic'>
    <img src={image5} alt="" id='LongOnes' />
    <p className='text'>Baking Lesson</p>
  </div>
   </div>
  </div>
  </>  );
}
 
export default Gallery;