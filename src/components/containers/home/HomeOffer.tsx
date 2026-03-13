'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import blogthumb from '../../../../public/images/offer/blog-thumb.png';
import star from '../../../../public/images/offer/star.png';
import three from '../../../../public/images/offer/three.png';
import two from '../../../../public/images/offer/two.png';

const HomeOffer = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll('.offer__cta-single');
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className='section offer fade-wrapper light'>
      <div className='container'>
        <div className='row gaper'>
          <div className='col-12 col-lg-5'>
            <div className='offer__content section__content'>
              <span className='sub-title'>
                Why Choose
                <i className='fa-solid fa-arrow-right'></i>
              </span>
              <h2 className='title title-anim'>Sunrisers Digital Hub</h2>
              <div className='paragraph'>
                <p>
                  We are a team of passionate digital marketers, designers, and
                  developers who are dedicated to helping businesses succeed in
                  the digital world. We offer a wide range of services,
                  including web design and development, search engine
                  optimization, social media marketing, and more. Our goal is to
                  help our clients achieve their business objectives by
                  providing them with innovative and effective digital
                  solutions.
                </p>
              </div>
              <div className='section__content-cta'>
                <Link href='#' className='btn btn--secondary'>
                  view all services
                </Link>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-7 col-xl-6 offset-xl-1'>
            <div className='offer__cta'>
              <div className='offer__cta-single fade-top'>
                <span className='sub-title'>
                  01
                  <i className='fa-solid fa-arrow-right'></i>
                </span>
                <h2>
                  <Link href='service-single'>
                    3+ Years of Digital Marketing Experience
                    <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                  </Link>
                </h2>
                <div className='offer-thumb-hover d-none d-md-block'>
                  <Image src={blogthumb} alt='Image' />
                </div>
              </div>
              <div className='offer__cta-single fade-top'>
                <span className='sub-title'>
                  02
                  <i className='fa-solid fa-arrow-right'></i>
                </span>
                <h2>
                  <Link href='service-single'>
                    Creative & Result-Oriented Strategies
                    <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                  </Link>
                </h2>
                <div className='offer-thumb-hover d-none d-md-block'>
                  <Image src={two} alt='Image' />
                </div>
              </div>
              <div className='offer__cta-single fade-top'>
                <span className='sub-title'>
                  03
                  <i className='fa-solid fa-arrow-right'></i>
                </span>
                <h2>
                  <Link href='service-single'>
                    Affordable Services for Businesses of All Sizes
                    <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                  </Link>
                </h2>
                <div className='offer-thumb-hover d-none d-md-block'>
                  <Image src={three} alt='Image' />
                </div>
              </div>
              <div className='offer__cta-single fade-top'>
                <span className='sub-title'>
                  04
                  <i className='fa-solid fa-arrow-right'></i>
                </span>
                <h2>
                  <Link href='service-single'>
                    Dedicated Support for Clients
                    <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                  </Link>
                </h2>
                <div className='offer-thumb-hover d-none d-md-block'>
                  <Image src={blogthumb} alt='Image' />
                </div>
              </div>
              <div className='offer__cta-single fade-top'>
                <span className='sub-title'>
                  05
                  <i className='fa-solid fa-arrow-right'></i>
                </span>
                <h2>
                  <Link href='service-single'>
                    Innovative Marketing Solutions
                    <i className='fa-sharp fa-solid fa-arrow-up-right'></i>
                  </Link>
                </h2>
                <div className='offer-thumb-hover d-none d-md-block'>
                  <Image src={blogthumb} alt='Image' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt='Image' className='star' />
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

export default HomeOffer;
