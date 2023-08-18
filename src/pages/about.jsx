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
import favouredFavor from '../assets/favoured favour.png'
import 'swiper/css';
import hands from '../assets/open hands.png'
import 'swiper/css/effect-fade';
import destine from '../assets/destine.png'
import johnny from '../assets/johnny.png'
import jonah from '../assets/jonathan.png'
import michael from '../assets/michael.png'
import vicTor from '../assets/victor.png'
import miracle from '../assets/miracle.png'
import Abah from '../assets/isaacAbah.png'
import twins from '../assets/twins.png'
import tosan from'../assets/tosan.png'
import ada from'../assets/ada.png'
import elsha from '../assets/elsha.png'
import godwin from '../assets/Godwin.png'
import destine2 from '../assets/destine2.png'
import pedi from '../assets/pedi.png'
import peret from '../assets/peret.png'
import dora from '../assets/dora.png'
import uche from '../assets/uche.png'
import Unclgyang from '../assets/unclegyang.png'
import yobi from '../assets/unclegyang.png'
import Unclgyang from '../assets/unclegyang.png'
import Unclgyang from '../assets/unclegyang.png'
import Unclgyang from '../assets/unclegyang.png'

import isaacAndMiracle from '../assets/isaacAndMiracle.png'
import account from '../assets/Account.png'
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
    src={vicTor} />
    <MDBCarouselItem
    id='kidImage'
    className=' d-block'
    itemId={2}
    src={twins} />
    <MDBCarouselItem
    id='kidImage'
    className=' d-block'
    itemId={3}
    src={Abah} />
    <MDBCarouselItem
    id='kidImage'
    className='d-block'
    itemId={4}
    src={isaacAndMiracle}
    />
       <MDBCarouselItem
    id='kidImage'
    className='d-block'
    itemId={5}
    src={destine2}
    />
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
     <h4> Prosperous Peace</h4>
      <p>Aunty Peace, gracefully imparts timeless wisdom with kindness, fostering harmony and unity, while guiding others to embrace love, compassion, and understanding in their lives.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={tosan} alt="" />
     <div className='textAboutTeacher'>
     <h4>Tenacious Tosan</h4>
      <p>Devoted and steadfast, Tenacious Tosan exemplifies faith with each class. Guiding with compassion, fostering growth, and embodying values of love and kindness.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={Unclgyang} alt="" />
     <div className='textAboutTeacher'>
      <h4> Gainful Gyang</h4>
      <p>Uncle  Gyang epitomizes dedication and wisdom. With a passion for education, he fosters a love for learning about God in teens, nurturing their growth into informed and empowered individuals."</p>
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
     <h4>Favoured Favour </h4>
      <p>Favoured Favour, a spirited teen, radiates positivity and kindness. Empowering others with a contagious smile, she embraces challenges, spreading joy and inspiring those around her with her incredible resilience and empathy.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={elsha} alt="" />
     <div className='textAboutTeacher'>
     <h4>Emphatic Elshaddai</h4>
      <p>Empathetic Elshaddaih possesses an incredible ability to connect with others on a deep emotional level. With genuine care and understanding, he provides comfort and solace, fostering a sense of belonging and support.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={uche} alt="" />
     <div className='textAboutTeacher'>
     <h4>Understanding Uche</h4>
      <p>Understanding Uche possesses empathy and insight. Her ability to comprehend emotions and perspectives fosters harmonious connections, making her a valuable confidante and friend.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={godwin} alt="" />
     <div className='textAboutTeacher'>
     <h4>Gentle Godwin</h4>
      <p>Gentle Godwin embodies kindness and compassion. His soothing demeanor and considerate actions create a serene presence, bringing comfort and understanding to those around him.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={pedi} alt="" />
     <div className='textAboutTeacher'>
     <h4>Peaceful Pedi</h4>
      <p>Peaceful Pedi radiates tranquility and serenity. With a calm presence and gentle demeanor, they create an atmosphere of harmony, making others feel at ease in their presence.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={miracle} alt="" />
     <div className='textAboutTeacher'>
     <h4>Mirthful Miracle</h4>
      <p> Miracle, radiates infectious joy wherever she goes. Her presence seems to turn ordinary moments into extraordinary ones, leaving a trail of laughter and happiness behind.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={peret} alt="" />
     <div className='textAboutTeacher'>
     <h4>Patient Peret</h4>
      <p>Patient Peret exemplifies unwavering calmness. With a composed demeanor and understanding nature, they navigate challenges with tranquility, inspiring others through their remarkable composure and empathy.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={ada} alt="" />
     <div className='textAboutTeacher'>
     <h4>Ambitious Ada</h4>
      <p>Ambitious Ada is a force of determination. With unwavering focus and relentless drive, she sets her sights on lofty goals, breaking barriers and inspiring others with her unyielding pursuit of excellence.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={jonah} alt="" />
     <div className='textAboutTeacher'>
     <h4>Jocular Jonathan</h4>
      <p>Jocular Jonathan infuses every moment with his playful spirit. His witty remarks and infectious laughter create a joyful atmosphere, making him the life of any gathering and a true source of mirth.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={johnny} alt="" />
     <div className='textAboutTeacher'>
     <h4>Jaunty John</h4>
      <p>Jaunty John epitomizes vibrant charisma in every step. On and off the court, his confident demeanor and stylish flair illuminate the atmosphere, inspiring positivity and capturing hearts effortlessly.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={michael} alt="" />
     <div className='textAboutTeacher'>
     <h4>Meritorious Michael</h4>
      <p>Meritocratic Michael stands out through his exceptional achievements. His dedication, intelligence, and hard work consistently propel him toward success, earning admiration and inspiring others to reach for excellence.</p>
     </div>
   </div>
  <div className='teacherProfile'>
   <img src={emma} alt="" />
     <div className='textAboutTeacher'>
     <h4>Extravagant Emma</h4>
      <p>Extravagant Emmanuel embodies creativity and opulence. With an aura of elegance, he crafts art that transports souls to realms of lavish imagination, leaving an indelible mark.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={Iconincisaac} alt="" />
     <div className='textAboutTeacher'>
     <h4>Iconic Isaac</h4>
      <p>Iconic Isaac, a Christian teen, exemplifies unwavering faith, compassion, and leadership. His dedication to serving others shines through his actions, inspiring peers and making a positive impact.</p>
     </div>
   </div>
   <div className='teacherProfile'>
   <img src={dora} alt="" />
     <div className='textAboutTeacher'>
     <h4>Dynamic Dora</h4>
      <p>Dynamic Dora embodies boundless energy and adaptability. Her vivacious nature and proactive approach make her a catalyst for positive change and innovation in every endeavor.</p>
     </div>
   </div>
  </div>
   </section>
  </div>
  </div>
    <div className='JoinUs'>
  <h2>Join us</h2>
  <div id='img'>
  <img src={hands} alt="" className='joinUsImg'  />
  <p>Embark on a transformative journey with our Christian team. Experience fellowship, spiritual growth, and impactful outreach as we unite in faith to make a positive difference in the world. Join us today!</p>
  </div>
  
    </div>
    <div className='supportUs'>
    <h2>Support the Developers</h2>
  <img src={account} alt="" />
    </div>
   <footer className='footerNav'>
    <div>
    <div className='footerNameAndLogo'>
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