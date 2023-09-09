import React, {useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import {  EffectCube,Pagination } from 'swiper/modules';


import './home.css';
import bluehero from '../images/bluehero.svg'

import qc4 from '../images/qc 4.png'
import qc5 from '../images/qc5.png'
import qc1 from '../images/qc1.png'
import qc3 from '../images/qc 3.png'
import qcog from '../images/qcreal.png'
import user from '../images/user.jpeg'
import ogfix from '../images/ogfix.png'
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const slidesPerViewMobile = window.innerWidth >= 768 ? 3 : 1;


  
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
                {/* <p>Where Cleanliness Meets Convenience</p> */}
                <div className="btn-adjust">
  <a href='#' className='btn' style={{ marginLeft: '14rem' }}>Contact now</a>
</div>

              </div>
              <div className='image'>
  <img src={ogfix} alt="quickclean logo" style={{ width: '100%', height: 'auto' }} />
</div>

            </div>
          </div>
        </div>

      </section>

      <section className='services' id='services'>
        <h3 className="sub-heading">Our Services</h3>
        <h1 className="heading">popular services</h1>
        <div className="box-container">
          <div className="box">
            <img src={qc1} alt='card'/>
            <h3>dry cleaning</h3>
            <p>We do Professional Ironing</p>
            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={qc3} alt='card'/>
            <h3>Laundry</h3>
            <p>We do Professional Ironing</p>
            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={qc1} alt='card'/>
            <h3>Expert stain removal</h3>
            <p>We do Professional Ironing</p>
            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={qc3} alt='card'/>
            <h3>Premium carpet and curtain wash</h3>
            <p>We do Professional Ironing</p>
            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={qc1} alt='card'/>
            <h3>Saree polishing</h3>
            <p>We do Professional Ironing</p>

            <a href='#' className='btn'>schedule now</a>
          </div>
          <div className="box">
            <img src={qc3} alt='card'/>
            <h3>Professional ironing</h3>
            <p>We do Professional Ironing</p>

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
            <h3>best laundary service in kollam</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in perferendis velit, porro veniam ipsam cupiditate omnis eaque ut. Nemo </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in perferendis velit, porro veniam ipsam cupiditate omnis eaque ut. Nemo </p>
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
                <i className='fas fa-dollar-sign'></i>
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
              <img src={user} alt=''/>
              <div className="user-info">
                <h3>xoom</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptate nisi quam fugiat temporibus blanditiis deserunt atque dolorum consequatur aliquid, magni animi</p>
            {/* </div> */}
            </SwiperSlide>

            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={user} alt=''/>
              <div className="user-info">
                <h3>xoom</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptate nisi quam fugiat temporibus blanditiis deserunt atque dolorum consequatur aliquid, magni animi</p>
            {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={user} alt=''/>
              <div className="user-info">
                <h3>xoom</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptate nisi quam fugiat temporibus blanditiis deserunt atque dolorum consequatur aliquid, magni animi</p>
            {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={user} alt=''/>
              <div className="user-info">
                <h3>xoom</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptate nisi quam fugiat temporibus blanditiis deserunt atque dolorum consequatur aliquid, magni animi</p>
            {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={user} alt=''/>
              <div className="user-info">
                <h3>xoom</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptate nisi quam fugiat temporibus blanditiis deserunt atque dolorum consequatur aliquid, magni animi</p>
            {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={user} alt=''/>
              <div className="user-info">
                <h3>xoom</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptate nisi quam fugiat temporibus blanditiis deserunt atque dolorum consequatur aliquid, magni animi</p>
            {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={user} alt=''/>
              <div className="user-info">
                <h3>xoom</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptate nisi quam fugiat temporibus blanditiis deserunt atque dolorum consequatur aliquid, magni animi</p>
            {/* </div> */}
            </SwiperSlide>

            <SwiperSlide className="slide">
            {/* <div className="swiper-slide slide"> */}
              <i className='fas fa-quote-right'></i>
              <div className="user">
              <img src={user} alt=''/>
              <div className="user-info">
                <h3>xoom</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptate nisi quam fugiat temporibus blanditiis deserunt atque dolorum consequatur aliquid, magni animi</p>
            {/* </div> */}
          </SwiperSlide>
          </div>
        </div>
      {/* </section> */}
      </Swiper>
    </div>
  );
};

export default Home;
