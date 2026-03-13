'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import dot from '../../../../public/images/portfolio/dot.png';
import five from '../../../../public/images/portfolio/five.png';
import four from '../../../../public/images/portfolio/four.png';
import one from '../../../../public/images/portfolio/one.png';
import seven from '../../../../public/images/portfolio/seven.png';
import six from '../../../../public/images/portfolio/six.png';
import three from '../../../../public/images/portfolio/three.png';
import two from '../../../../public/images/portfolio/two.png';

const PortfolioText = () => {
  const [hover, setHover] = useState(0);
  return (
    <section className='section portfolio pb-0 fade-wrapper position-relative'>
      <div className='portfolio__text-slider-w'>
        <Swiper
          slidesPerView='auto'
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className='portfolio__text-slider'>
          <SwiperSlide>
            <div className='portfolio__text-slider-single'>
              <h2 className='h1'>
                <Link href='portfolio'>
                  Social Media Marketing
                  <i className='fa-sharp fa-solid fa-arrow-down-right'></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__text-slider-single'>
              <h2 className='h1 str'>
                <Link href='portfolio'>
                  Website Design & Development
                  <i className='fa-sharp fa-solid fa-arrow-down-right'></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__text-slider-single'>
              <h2 className='h1'>
                <Link href='portfolio'>
                  Search Engine Optimization (SEO)
                  <i className='fa-sharp fa-solid fa-arrow-down-right'></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__text-slider-single'>
              <h2 className='h1 str'>
                <Link href='portfolio'>
                  Branding & Graphic Design
                  <i className='fa-sharp fa-solid fa-arrow-down-right'></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__text-slider-single'>
              <h2 className='h1'>
                <Link href='portfolio'>
                  Online Advertising
                  <i className='fa-sharp fa-solid fa-arrow-down-right'></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__text-slider-single'>
              <h2 className='h1 str'>
                <Link href='portfolio'>
                  Content Creation
                  <i className='fa-sharp fa-solid fa-arrow-down-right'></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__text-slider-single'>
              <h2 className='h1'>
                <Link href='portfolio'>
                  digital portfolio
                  <i className='fa-sharp fa-solid fa-arrow-down-right'></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='container-fluid'>
        <div className='row gaper'>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 0 ? ' portfolio__single-active' : ' ')
              }
              onMouseEnter={() => setHover(0)}>
              <Link href='#'>
                <Image src={one} alt='Image' />
              </Link>
              <div className='portfolio__single-content'>
                <Link href='#'>
                  <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                </Link>
                <h4>
                  <Link href='#'>Social Media Marketing</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 1 ? ' portfolio__single-active' : ' ')
              }
              onMouseEnter={() => setHover(1)}>
              <Link href='#'>
                <Image src={two} alt='Image' />
              </Link>
              <div className='portfolio__single-content'>
                <Link href='#'>
                  <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                </Link>
                <h4>
                  <Link href='#'>Website Design & Development</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 2 ? ' portfolio__single-active' : ' ')
              }
              onMouseEnter={() => setHover(2)}>
              <Link href='#'>
                <Image src={three} alt='Image' />
              </Link>
              <div className='portfolio__single-content'>
                <Link href='#'>
                  <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                </Link>
                <h4>
                  <Link href='#'>Search Engine Optimization (SEO)</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 3 ? ' portfolio__single-active' : ' ')
              }
              onMouseEnter={() => setHover(3)}>
              <Link href='#'>
                <Image src={four} alt='Image' />
              </Link>
              <div className='portfolio__single-content'>
                <Link href='#'>
                  <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                </Link>
                <h4>
                  <Link href='#'>Branding & Graphic Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 4 ? ' portfolio__single-active' : ' ')
              }
              onMouseEnter={() => setHover(4)}>
              <Link href='#'>
                <Image src={five} alt='Image' />
              </Link>
              <div className='portfolio__single-content'>
                <Link href='#'>
                  <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                </Link>
                <h4>
                  <Link href='#'>Online Advertising</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 5 ? ' portfolio__single-active' : ' ')
              }
              onMouseEnter={() => setHover(5)}>
              <Link href='#'>
                <Image src={six} alt='Image' />
              </Link>
              <div className='portfolio__single-content'>
                <Link href='#'>
                  <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                </Link>
                <h4>
                  <Link href='#'>Content Creation</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div className='portfolio__single-alt-wrapper fade-top'>
              <div className='portfolio__single-alt topy-tilt'>
                <h4>
                  <Link href='#'>view all work</Link>
                </h4>
                <Link href='#' className='arr'>
                  <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                </Link>
                <Image src={dot} alt='Image' className='dot-one' />
                <Image src={dot} alt='Image' className='dot-two' />
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 6 ? ' portfolio__single-active' : ' ')
              }
              onMouseEnter={() => setHover(6)}>
              <Link href='#'>
                <Image src={seven} alt='Image' />
              </Link>
              <div className='portfolio__single-content'>
                <Link href='#'>
                  <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                </Link>
                <h4>
                  <Link href='#'>Digital Portfolio</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lines d-none d-lg-flex'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </section>
  );
};

export default PortfolioText;
