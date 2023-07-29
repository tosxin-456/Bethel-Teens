import churchLogo from '../../assets/fa-solid_church.svg'
import kidsImage from '../../assets/image.png'
import '../../App.css'
import facebook from '../../assets/Facebook.png'
import instagram from '../../assets/Linkedin.png'
import aboutUsImg from '../../assets/about us image.png'

const Home = () => {
  return (
    <>
      <img src={kidsImage} className='kidImage' alt="" />
  <div className='welcomeRemark'>
    <h1>
      Bethel <br /> Teens Club
    </h1>
      <p >
      Welcome to bethel teens club - Where faith meets fun.
      We are a vibrant and inclusive community specifically designed for teenagers. Whether you're just starting to explore your faith or have been on this journey for a while, we have a place for you here.
      </p>
  </div>
  <div className='aboutUsHeaderAndText'>
  <h2>A bit about us</h2>
  <div className='aboutUsTextAndImage'>
  <img src={aboutUsImg} alt="" />
  <div>
  <p>Our church is designed with teenagers in mind! We aim to create a space where you feel heard, understood, and valued.</p> 
  <p>Our teachings are relevant, relatable, and designed to address the real-life challenges and questions that teenagers face in today's world.</p>
  <p>We believe in empowering teenagers to take on leadership roles, fostering skills that will serve them well throughout their lives.</p>
 </div>
  </div>

  </div>
  <div className='contactUsHeader'>
  <h2>Contact us</h2>
  <div className='map'>
        <div className='iframeBackground'>
          <div>
            <p className='header'>Address</p>
            <p className='detailS'>Barakin Naraguta</p>
          </div>
          <div>
            <p className='header'>Email Address</p>
            <p className='detailS'>bethelteensclubchapeloffaith@gmail.com</p>
          </div>
          <div>
            <p className='header'>Telephone</p> 
             <p className='detailS'>Barakin Naraguta</p>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.556488623754!2d8.877645174537282!3d9.970808673537343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10536d787f8e05b7%3A0x45b487a9eb402c71!2sChapel%20of%20Faith%20Unijos!5e0!3m2!1sen!2sng!4v1690499830999!5m2!1sen!2sng" width="100%" height="130" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  </div>
   <form action="submit">
    <div className='contactDetails'>
    <input type="text" placeholder='Your Full Name' />
    <input type="text" placeholder='Your Phone Number' />
    </div>
    <input type="text" className='message' placeholder='Enter Your Message Here...' />
   </form>
   <button>Send message</button>
   <footer>
    <div className='footerNav'>
    <img src="https://res.cloudinary.com/dba1aezsn/image/upload/v1690495972/chapel_logo_cph2jz.png" alt="" />
    <div className='nameAndIconsDiv'>
    <p className='footerName'>The Chapel of Faith</p>
    <div className='icons'>
    <a href="https://web.facebook.com/ChapelofFaithUJ/?_rdc=1&_rdr"><img src={facebook} alt="" /></a>
    <img src={instagram} alt="" />
    </div>
    </div>
    </div>
   </footer>
    </>
    );
}
 
export default Home;
 
