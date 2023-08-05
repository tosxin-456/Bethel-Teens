import churchLogo from '../../assets/fa-solid_church.svg'
import '../../App.css'
import facebook from '../../assets/Facebook.png'
import recorder from '../../assets/microphone.svg'
import aboutUsImg from '../../assets/about us image.png'
import React, { useState, useEffect } from 'react'
import youtube from '../../assets/youtube.svg'


const About = () => {
  return ( 
    <>
 <footer className='footerNav'>
  <div>
  <div className='footerNameAndLogo'>
  <img src="https://res.cloudinary.com/dba1aezsn/image/upload/v1690495972/chapel_logo_cph2jz.png" className='footerLogo' alt="" />
  <p className='footerName'>The Chapel of Faith</p>
  </div>
  <div className='icons'>
  <a href="https://web.facebook.com/ChapelofFaithUJ/?_rdc=1&_rdr"><img src={facebook} alt="" /></a>
  <a href="https://the-chapel-of-faith-unijos.mixlr.com/"><img src={recorder} alt="" className='microphone' /></a> 
  <a href="https://www.youtube.com/@ChapelofFaithUJ"><img src={youtube} alt="" className='youtube' /></a> 
  </div>
  </div>
 </footer>
  </>
   );
}
 
export default About;