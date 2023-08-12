import churchLogo from '../assets/fa-solid_church.svg'
import '../App.css'
import React, { useState, useEffect } from 'react'
import kidsImage from '../assets/destine.svg'
import teacher from '../assets/teacher.svg'
import emma from '../assets/emma.png'
import facebook from '../assets/Facebook.png'
import instagram from '../assets/instagram.png'
import aboutUsImg from '../assets/about us image.png'
import youtube from '../assets/youtube.svg'
import auntyPeace from '../assets/aunty Peace.png'
import Iconincisaac from '../assets/isaac.svg'
import favouredFavor from '../assets/favoured favour.svg'
import 'swiper/css';
import 'swiper/css/effect-fade';
import destine from '../assets/destine.png'
import edehAndAda from '../assets/edeh and ada.jpg'
import maavyon from '../assets/HomeMav.png'
import "mdb-react-ui-kit/dist/css/mdb.min.css"
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const About = () => {
  return ( 
    <>
       <div className='containerForImage'>
    <MDBCarousel  fade >
    <MDBCarouselItem
     id='kidImage'
     className='d-block'
     itemId={1}
    src={maavyon} />
    <MDBCarouselItem
    id='kidImage'
    className=' d-block'
    itemId={2}
    src={edehAndAda} />
    <MDBCarouselItem
    id='kidImage'
    className=' d-block'
    itemId={3}
    src={destine} />
    </MDBCarousel>
    </div>
  <div className='welcomeRemark'>
    <h1>
     About us
    </h1>
      <p >
      Welcome to bethel teens club - Where faith meets fun.
      We are a vibrant and inclusive community specifically designed for teenagers. Whether you're just starting to explore your faith or have been on this journey for a while, we have a place for you here.
      </p>
  </div>
  <div className='MeetUs'>
  <h2>Meet us</h2>
  <div className='allUsers'>
    <h3>Teachers</h3>
    <section>
  <div className='Teachers'>
   <div className='teacherProfile'>
   <img src={auntyPeace} alt="" />
     <div className='textAboutTeacher'>
     <h4> Peaceful Peace(Leader)</h4>
      <p>Aunty Peace, gracefully imparts timeless wisdom with kindness, fostering harmony and unity, while guiding others to embrace love, compassion, and understanding in their lives.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={teacher} alt="" />
     <div className='textAboutTeacher'>
     <h4> Daring Diana</h4>
      <p>Diana Samson is a 21year old devoted Christian and worshipper who finds it as a passion to teach and guide youths as well as teenagers according to the alignment of God.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={teacher} alt="" />
     <div className='textAboutTeacher'>
      <h4> Daring Diana</h4>
      <p>Diana Samson is a 21year old devoted Christian and worshipper who finds it as a passion to teach and guide youths as well as teenagers according to the alignment of God.</p>
     </div>
   </div>
  </div>
    </section>
    <h3>Teens</h3>
   <section>
  <div className='Teens'>
  <div className='teacherProfile'>
   <img src={favouredFavor} alt="" />
     <div className='textAboutTeacher'>
     <h4>Favoured Favour (Vice. President)</h4>
      <p>Favoured Favour, a spirited teen, radiates positivity and kindness. Empowering others with a contagious smile, she embraces challenges, spreading joy and inspiring those around her with her incredible resilience and empathy.</p>
     </div>
     
   </div>
   <div className='teacherProfile'>
   <img src={favouredFavor} alt="" />
     <div className='textAboutTeacher'>
     <h4>Favoured Favour (Vice. President)</h4>
      <p>Favoured Favour, a spirited teen, radiates positivity and kindness. Empowering others with a contagious smile, she embraces challenges, spreading joy and inspiring those around her with her incredible resilience and empathy.</p>
     </div>
     
   </div>
  <div className='teacherProfile'>
   <img src={emma} alt="" />
     <div className='textAboutTeacher'>
     <h4>Extravagant Emma(Music direct.)</h4>
      <p>Extravagant Emma, a spirited Christian teen, radiates faith through his exuberance. His vibrant devotion and compassionate heart inspire all to embrace love and grace..</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={Iconincisaac} alt="" />
     <div className='textAboutTeacher'>
     <h4>Iconic Isaac</h4>
      <p>Iconic Isaac, a Christian teen, exemplifies unwavering faith, compassion, and leadership. His dedication to serving others shines through his actions, inspiring peers and making a positive impact.</p>
     </div>
   </div>
  </div>
   </section>
  </div>
  </div>
  <div className='contactUsHeader'>
  <h2>Join us</h2>
 
  </div>
   <footer className='footerNav'>
    <div>
    <div className='footerNameAndLogo'>
    {/* <img src="https://res.cloudinary.com/dba1aezsn/image/upload/v1690495972/chapel_logo_cph2jz.png" className='footerLogo' alt="" /> */}
    <p className='footerName'>The Chapel of Faith</p>
    </div>
    <div className='icons'>
    <a href="https://web.facebook.com/ChapelofFaithUJ/?_rdc=1&_rdr"><img src={facebook} alt="" /></a>
    <a href="https://instagram.com/chapeloffaithunijos?igshid=MzRlODBiNWFlZA=="><img src={instagram} alt="" className='microphone' /></a> 
    <a href="https://www.youtube.com/@ChapelofFaithUJ"><img src={youtube} alt="" className='youtube' /></a> 
    </div>
    </div>
   </footer>
  </>
   );
}
 
export default About;