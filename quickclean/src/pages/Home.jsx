import React, {useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import {  Pagination } from 'swiper/modules';


import './home.css';
import bluehero from '../images/bluehero.png'

import qc4 from '../images/qc 4.png'
import herofix from '../images/herofix.png'
import carpet from '../images/carpet.png'
import stain from '../images/stain.png'
import saree from '../images/sareepol.png'
import qc1 from '../images/qc1.png'
import qc3 from '../images/qc3.png'
import qcog from '../images/qcreal.png'
import ogfix from '../images/ogfix.png'
import newhero from '../images/newherofix.png'
import section from '../images/newreal.png'



import pc1 from '../images/testimonials/1.jpeg'
import pc2 from '../images/testimonials/8.jpg'
import pc6 from '../images/testimonials/4.jpg'
import pc7 from '../images/testimonials/3.jpg'
import sam from '../images/testimonials/sam.jpeg'
import aravind from '../images/testimonials/aravind.jpeg'
import arun from '../images/testimonials/arun.jpeg'
import arya from '../images/testimonials/arya.jpeg'


import dryclean from '../images/dryclean.png'
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  


  
  return (
    <div>
      <header>
        <a href='#' className='logo'>
        <img src={qcog} alt="quickclean logo" style={{ width: '35%', height: 'auto' }} />
        
        </a>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} style={{ maxHeight: isMenuOpen ? '230px' : '0' }}>
          <a className="active" href='#home'>Home</a>
          <a href='#about'>About us</a>
          <a href='#services'>Services</a>
          <a href='#contact'>Contact us</a>
        </nav>

        <div className='icons'>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} id="menu-bars" onClick={toggleMenu}></i>
        </div>
      </header>
      <section className='home' id="home">
        <div className='home-slider'>
          <div className="wrapper">
            <div className="slide">
              <div className="content">
              <span className='span-text'>Your Trusted Laundry Partner</span>
                {/* <h3>Quick Clean</h3> */}
                <div className='hero-image'>
                <img src={qcog} alt='card' style={{ width: '100%', height: 'auto' }}/>
                </div>
                  <div className='hero-p'>
              <p> Want us to pick your clothes?</p>
                </div>
                {/* <p>Where Cleanliness Meets Convenience</p> */}
                <div className="btn-adjust">
  <a
    href="https://wa.me/+918129311700?text=Hi, I want to enquire about your service."
    className="rounded-button" // Apply the 'rounded-button' class here
    style={{ marginLeft: '14rem' }}
  >
    <i class="fab fa-whatsapp"></i> 
  </a>
</div>


              </div>
              {/* <div className='time-image'>
<img src={time} className='time' alt="quickclean logo" />
</div> */}

              <div className='image'>
  {/* <img src={newhero} alt="quickclean logo" style={{ width: '100%', height: 'auto' }} /> */}
  <img src={newhero} alt="quickclean logo" style={{ width: '100%', height: 'auto' }} />


</div>

            <div className='time'>
</div>

            </div>
          </div>
        </div>

      </section>


      {/* <div className="responsive-image-section">
      <h3 className="sub-heading">How we work</h3>
        <h1 className="heading">From the root to the leaf</h1>
      <img src={section}  className="responsive-image" alt='test'/>

    </div> */}

<div className="responsive-image-section">
      <h3 className="sub-heading">How we work</h3>
      <h1 className="heading">From the root to the leaf</h1>
      <img src={section}  className="responsive-image" alt='test'/>
    </div>


    


      <section className='services' id='services'>
        <h3 className="sub-heading">Our Services</h3>
        <h1 className="heading">popular services</h1>
        <div className="box-container">
          <div className="box">
            <img src={dryclean} alt='card'/>
            <h3>dry cleaning</h3>
            <p>Experience the epitome of garment care.</p>
            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={qc4} alt='card'/>
            <h3>Laundry</h3>
            <p>Let us handle the chore of laundry for you!</p>
            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={stain} alt='card'/>
            <h3>Expert stain removal</h3>
            <p>Stubborn stains meet their match with us. </p>
            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={carpet} alt='card'/>
            <h3>Premium carpet and curtain wash</h3>
            <p>Revive the beauty of your home.</p>
            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={saree} alt='card'/>
            <h3>Saree polishing</h3>
            <p>Elevate the allure of your exquisite sarees</p>

            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={qc3} alt='card'/>
            <h3>Professional ironing</h3>
            <p>Say bye to wrinkles and hello to perfection.</p>

            <a href='#' className='btn'>schedule now</a>
          </div>
          

        </div>
      </section>



     

      <section className='about' id='about'>
        <h3 className='sub-heading'>about us</h3>
        <h1 className='heading'>why choose us?</h1>
        <div className="row">
          <div className="image">
            <img src={bluehero} alt='test'/>
          </div>
          <div className="content">
            <h3>Because, we offer the best.</h3>
            <p>At QuickClean, we understand the importance of clean, fresh, and well-maintained clothing and fabrics. Our passion for perfection drives us to deliver top-notch laundry and cleaning services tailored to meet your specific needs.</p>
            <p>Our years of experience and a commitment to excellence, QuickClean has become the preferred choice for laundry and cleaning services in Kollam.</p>
            <div className="icons-container">
              <div className="icons">
                <i className='fas fa-shipping-fast'></i>
                <span>Fast process</span>
              </div>
              <div className="icons">
                <i className='fas fa-headset'></i>
                <span>customer friendly</span>
              </div>
              <div className="icons">
              <i className="fa-solid fa-wallet"></i>                
                <span>low cost</span>
              </div>
            </div>
            <a href='#' className='btn'>know more</a>

          </div>
        </div>
      </section>

     
      {/* <section className='review' id='review'> */}
        <h3 className='sub-heading'>customer's review</h3>
        <h1 className='heading'>what they say</h1>
          

        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="review"
      >
        <div className="swiper-container review-slider">
          <div className="swiper-wrapper">
          <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={arun} alt=''/>
              <div className="user-info">
                <h3>Arun Vijay</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
            <p>QuickClean has been a lifesaver for me. Their laundry and dry cleaning services are impeccable. I no longer dread laundry day, knowing that they're just a call away. The staff is friendly and professional, and my clothes have never looked better</p>            {/* </div> */}
            </SwiperSlide>
          <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={pc1} alt=''/>
              <div className="user-info">
                <h3>Robin Vargheese</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
              </div>
              </div>
              <p>I recently had a stubborn stain on my favorite dress. Their stain removal service worked wonders! I was convinced the dress was ruined, but they managed to make it look brand new. I'm beyond impressed.</p>            {/* </div> */}
            </SwiperSlide>

            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={pc2} alt=''/>
              <div className="user-info">
                <h3>Arun Kalesh</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
              <p>As a busy professional, I rely on QuickClean to keep my shirts and suits in perfect condition. Their ironing service is top-notch, and I appreciate their consistency in delivering clean, well-pressed clothes on time. Highly recommended!</p>
                          {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={arya} alt=''/>
              <div className="user-info">
                <h3>Anupama</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
              </div>
              </div>
            <p>  I had some delicate sarees that needed special care, and QuickClean didn't disappoint. The saree polishing service exceeded my expectations. My sarees are now beautifully polished and ready to make a statement at weddings and celebrations. QuickClean is my go-to for all things laundry and cleaning.  </p>         </SwiperSlide>
           
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={aravind} alt=''/>
              <div className="user-info">
                <h3>Aravind</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
              <p>I can't say enough good things about QuickClean! Their premium carpet and curtain wash service breathed new life into my home. I had forgotten how vibrant my carpets and curtains used to be until they worked their magic. Thank you for making my home feel fresh and inviting again</p>            {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={pc6} alt=''/>
              <div className="user-info">
                <h3>Sebastian</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
              <p>Their laundry services are efficient, and my clothes come back looking impeccable. The convenience and quality they offer have made them my go-to for all things laundry and cleaning. </p>            {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={pc7} alt=''/>
              <div className="user-info">
                <h3>Riya Thomas</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
<p>QuickClean saved my favorite silk blouse from a coffee spill disaster! I thought it was ruined, but their stain removal experts worked their magic. I couldn't be happier with the results. I highly recommend their stain removal services to everyone</p>            {/* </div> */}
            </SwiperSlide>

            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={sam} alt=''/>
              <div className="user-info">
                <h3>Sam Kalarikal</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
              </div>
              </div>
<p>I'm a perfectionist when it comes to my clothes, and I've tried various dry cleaners in Kollam. QuickClean, however, is on a whole different level and my clothes smell wonderfully fresh. QuickClean is my newfound laundry obsession; I won't trust anyone else with my garments</p>            {/* </div> */}
          </SwiperSlide>
          </div>
        </div>
      {/* </section> */}
      </Swiper>

      
      <div className="container">
      <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504577.792594507!2d76.11159312433364!3d8.8782875421071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd3dd74caf77%3A0xef9233f4612bf1b7!2sQuick%20Clean%20Dry%20Cleaners!5e0!3m2!1sen!2sin!4v1694357874442!5m2!1sen!2sin" width="600" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div className="contact-details" id ='contact'>
    <h1 className="title">Reach out to us through</h1>
    <div className="location">
    <h2>Mon-Sat (9am-6pm) </h2>
      <h2>Address:</h2>
      <p> Quick Clean dry cleaners,
      Polayathodu, Kollam, Kerala 691011</p>
    </div>
    <div className="contact-info">
      <h2>Contact Information:</h2>
      <p>Phone: +91 8129311700</p>
      <p>Email: oceanickollam@gmail.com</p>
      <div className="copy">
      <p>copyright quickclean 2023</p>
      </div>
    </div>

  </div>
  
</div>




    </div>
  );
};

export default Home;
