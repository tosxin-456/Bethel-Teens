import churchLogo from '../../assets/fa-solid_church.svg'
import '../../App.css'
import React, { useState, useEffect } from 'react'
import kidsImage from '../../assets/image.png'
import teacher from '../../assets/teacher.svg'

const About = () => {
  return ( 
    <>
    <img src={kidsImage} loading='lazy' className='kidImage' alt="" />
  <div className='welcomeRemark'>
    <h1>
     About us
    </h1>
      <p >
      Welcome to bethel teens club - Where faith meets fun.
      We are a vibrant and inclusive community specifically designed for teenagers. Whether you're just starting to explore your faith or have been on this journey for a while, we have a place for you here.
      </p>
  </div>
  <div className='aboutUsHeaderAndText'>
  <h2>Meet us</h2>
  <div className='aboutUsTextAndImage'>
    <header>Teachers</header>
    <p>We as teachers believe in empowering teenagers to take on leadership roles, fostering skills that will serve them well throughout their lives.</p>
  <img src={teacher} alt="" loading='lazy' />
  <div>
    <h3>Diana</h3>
  <p>Diana Samson is a 21year old devoted Christian and worshipper who finds it as a passion to teach and guide youths as well as teenagers according to the alignment of God.</p> 
  <p>Our teachings are relevant, relatable, and designed to address the real-life challenges and questions that teenagers face in today's world.</p>
  <p>We believe in empowering teenagers to take on leadership roles, fostering skills that will serve them well throughout their lives.</p>
 </div>
  </div>

  </div>
  <div className='contactUsHeader'>
  <h2>Join us</h2>
 
  </div>
   <footer className='footerNav'>
    <div>
    <div className='footerNameAndLogo'>
    <img src="https://res.cloudinary.com/dba1aezsn/image/upload/v1690495972/chapel_logo_cph2jz.png" className='footerLogo' alt="" />
    <p className='footerName'>The Chapel of Faith</p>
    </div>
    <div className='icons'>
    {/* <a href="https://web.facebook.com/ChapelofFaithUJ/?_rdc=1&_rdr"><img src={facebook} alt="" /></a>
    <a href="https://the-chapel-of-faith-unijos.mixlr.com/"><img src={recorder} alt="" className='microphone' /></a> 
    <a href="https://www.youtube.com/@ChapelofFaithUJ"><img src={youtube} alt="" className='youtube' /></a>  */}
    </div>
    </div>
   </footer>
  </>
   );
}
 
export default About;