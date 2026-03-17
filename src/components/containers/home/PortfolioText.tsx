'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import dot from '../../../../public/images/portfolio/dot.png';

const PortfolioText = () => {
  const [hover, setHover] = useState(0);
  return (
    <section
      id='services'
      className='section portfolio fade-wrapper position-relative'>
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
                <Image
                  src={
                    'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.846cfd2c.png&w=1080&q=75'
                  }
                  alt='Image'
                  width={1080}
                  height={1080}
                />
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
                <Image
                  src={
                    'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.d1347166.png&w=1080&q=75'
                  }
                  alt='Image'
                  width={1080}
                  height={1080}
                />
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
                <Image
                  src={
                    'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.4de2ab0d.png&w=1080&q=75'
                  }
                  alt='Image'
                  width={1080}
                  height={1080}
                />
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
                <Image
                  src={
                    'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.d6f4ddea.png&w=1080&q=75'
                  }
                  alt='Image'
                  width={1080}
                  height={1080}
                />
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
                <Image
                  src={
                    'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.26015241.png&w=1080&q=75'
                  }
                  alt='Image'
                  width={1080}
                  height={1080}
                />
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
                <Image
                  src={
                    'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.2830873e.png&w=1080&q=75'
                  }
                  alt='Image'
                  width={1080}
                  height={1080}
                />
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
                <Image
                  src={
                    'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseven.af1b6fc2.png&w=1080&q=75'
                  }
                  alt='Image'
                  width={1080}
                  height={1080}
                />
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
