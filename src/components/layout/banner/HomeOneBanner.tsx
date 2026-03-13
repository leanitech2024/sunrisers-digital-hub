'use client';
import YoutubeEmbed from '@/components/youtube/YoutubeEmbed';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import star from '../../../../public/images/star.png';
import videoframe from '../../../../public/images/video-frame.png';

gsap.registerPlugin(ScrollTrigger);
const HomeOneBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll('.g-ban-one').length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.banner',
            start: 'center center',
            end: '+=100%',
            scrub: true,
            pin: false,
          },
        });

        tl.set('.g-ban-one', {
          y: '-10%',
        });

        tl.to('.g-ban-one', {
          opacity: 0,
          scale: 2,
          y: '100%',
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='banner__content'>
                <h1 className='text-uppercase text-start fw-9 mb-0 title-anim'>
                  Rise Your Brand <span className='text-stroke'>in the</span>
                  <span className='interval'>
                    <i className='icon-arrow-top-right'></i> Digital World
                  </span>
                </h1>
                <div className='banner__content-inner'>
                  <p>
                    Sunrisers Digital Hub is a Bangalore-based digital marketing
                    company dedicated to helping businesses grow and succeed in
                    the online world.
                  </p>
                  <div className='cta section__content-cta'>
                    <div className='single'>
                      <h5 className='fw-7'>3+</h5>
                      <p className='fw-5'>years of experience</p>
                    </div>
                    <div className='single'>
                      <h5 className='fw-7'>1k</h5>
                      <p className='fw-5'>completed projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={
            'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-one-thumb.b80d3675.png&w=1080&q=75'
          }
          alt='Image'
          width={1080}
          height={1080}
          className='banner-one-thumb d-none d-sm-block g-ban-one'
        />
        <Image src={star} alt='Image' className='star' />
        <div className='banner-left-text banner-social-text d-none d-md-flex'>
          <Link href='mailto:sunrisersdigitalhub@gmail.com'>
            mail : sunrisersdigitalhub@gmail.com
          </Link>
          <Link href='tel:+919845732329'>Call : +91 98457 32329</Link>
          <Link href='tel:+919739932329'>Call : +91 97399 32329</Link>
        </div>
        <div className='banner-right-text banner-social-text d-none d-md-flex'>
          <Link href='https://www.instagram.com/' target='_blank'>
            instagram
          </Link>
          <Link href='https://www.pinterest.com/' target='_blank'>
            Linkedin
          </Link>
          <Link href='https://www.facebook.com/' target='_blank'>
            facebook
          </Link>
        </div>
        <button
          className='video-frame video-btn'
          onClick={() => setVideoActive(true)}>
          <Image src={videoframe} alt='Image' priority />
          <i className='fa-sharp fa-solid fa-play'></i>
        </button>
        <div className='lines d-none d-lg-flex'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </section>
      <div
        className={(videoActive ? ' video-zoom-in' : ' ') + ' video-backdrop'}
        onClick={() => setVideoActive(false)}>
        <div className='video-inner'>
          <div
            className='video-container'
            onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            {videoActive && <YoutubeEmbed embedId='fSv6UgCkuTU' />}
            <button
              aria-label='close video popup'
              className='close-video-popup'
              onClick={() => setVideoActive(false)}>
              <i className='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneBanner;
