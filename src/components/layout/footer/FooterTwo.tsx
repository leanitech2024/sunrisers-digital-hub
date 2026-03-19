import chroma from 'chroma-js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);
const FooterTwo = () => {
  const currentYear = new Date().getFullYear();

  const animatedTextRef = useRef<HTMLAnchorElement | null>(null);
  const [animatedTextContent, setAnimatedTextContent] = useState('');

  useEffect(() => {
    const animatedChars = document.querySelectorAll('.animated-char');

    if (animatedChars.length > 0) {
      const folksBD = gsap.timeline({
        repeat: -1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.animated-text',
          start: 'bottom 100%-=50px',
        },
      });

      const folksGradient = chroma.scale(['#ff7425', '#ffffff']);

      animatedChars.forEach((charElement, index) => {
        const delay = index * 0.04;

        folksBD.to(
          charElement,
          {
            duration: 0.5,
            scaleY: 0.6,
            ease: 'power3.out',
            transformOrigin: 'center bottom',
          },
          delay,
        );

        folksBD.to(
          charElement,
          {
            yPercent: -20,
            ease: 'elastic',
            duration: 0.8,
          },
          delay + 0.5,
        );

        folksBD.to(
          charElement,
          {
            scaleY: 1,
            ease: 'elastic.out(2.5, 0.2)',
            duration: 1.5,
          },
          delay + 0.5,
        );

        folksBD.to(
          charElement,
          {
            color: () => {
              return folksGradient(index / animatedChars.length).hex();
            },
            ease: 'power2.out',
            duration: 0.3,
          },
          delay + 0.5,
        );

        folksBD.to(
          charElement,
          {
            yPercent: 0,
            ease: 'back',
            duration: 0.8,
          },
          delay + 0.7,
        );

        folksBD.to(
          charElement,
          {
            color: '#ffffff',
            duration: 1.4,
          },
          delay + 0.9,
        );
      });
    }
  }, [animatedTextContent]);

  useEffect(() => {
    const animatedText = animatedTextRef.current;
    const textContent = animatedTextRef.current?.textContent;
    if (textContent && animatedText) {
      // eslint-disable-next-line
      setAnimatedTextContent(textContent);
      animatedText.innerHTML = '';
    }
  }, []);

  return (
    <footer className='footer-two section pb-0'>
      <div className='container'>
        <div className='row gaper'>
          <div className='col-12 col-lg-5 col-xl-4'>
            <div className='footer-two__left'>
              <div className='logo'>
                <Link
                  href='/'
                  className='logo'
                  style={{
                    width: '100px',
                    height: '100px',
                  }}>
                  <Image
                    src={'/logo.png'}
                    alt='Image'
                    width={800}
                    height={800}
                    className={'w-full h-full'}
                  />
                </Link>
              </div>
              <div className='paragraph'>
                <p>
                  Welcome to our Sunrisers Digital Hub. We specialize in helping
                  business most like yours succeed online.
                </p>
              </div>
              <div className='section__content-cta'>
                <h4>
                  <Link
                    href='mailto:sunrisersdigitalhub@gmail.com'
                    className='folks-text animated-text'
                    ref={animatedTextRef}>
                    sunrisersdigitalhub@gmail.com
                    {animatedTextContent.split('').map((char, index) => (
                      <span
                        aria-hidden='true'
                        className='animated-char'
                        key={index}>
                        {char}
                      </span>
                    ))}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          {/* // className='col-12 col-lg-7 col-xl-7 offset-xl-1 col-xxl-5 offset-xxl-3' */}
          <div className='col-12 col-lg-7 col-xl-8'>
            <div className='footer-two__right'>
              <div className='social justify-content-start justify-content-lg-start'>
                <Link
                  href='https://www.facebook.com/'
                  target='_blank'
                  className='text-secondary'>
                  <i className='fa-brands fa-facebook-f'></i>
                  <span>Facebook</span>
                </Link>
                <Link
                  href='https://www.twitter.com/'
                  target='_blank'
                  className='text-secondary'>
                  <i className='fa-brands fa-twitter'></i>
                  <span>Twitter</span>
                </Link>
                <Link
                  href='https://www.pinterest.com/'
                  target='_blank'
                  className='text-secondary'>
                  <i className='fa-brands fa-linkedin-in'></i>
                  <span>Linkedin</span>
                </Link>
                <Link
                  href='https://www.instagram.com/'
                  target='_blank'
                  className='text-secondary'>
                  <i className='fa-brands fa-instagram'></i>
                  <span>Instagram</span>
                </Link>
                <Link
                  href='https://www.dribble.com/'
                  target='_blank'
                  className='text-secondary'>
                  <i className='fa-light fa-basketball'></i>
                  <span>Dribble</span>
                </Link>
              </div>
              <div className='footer__single-meta section__content-cta col-12'>
                <Link
                  className='w-100'
                  href='https://www.google.com/maps/place/2nd,+3603,+13th+G+Main+Rd,+Channakesahava+Nagar,+HAL+2nd+Stage,+Doopanahalli,+Indiranagar,+Bengaluru,+Karnataka+560008/@12.9659752,77.636534,808m/data=!3m2!1e3!4b1!4m5!3m4!1s0x3bae141c5724aff7:0xe8f34656d69a44cc!8m2!3d12.96597!4d77.6391089?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D'
                  target='_blank'>
                  <i className='fa-sharp fa-solid fa-location-dot'></i>
                  2nd, 3603, 13 G Main, 5th Cross, HAL 2nd Stage, Indiranagar,
                  Bengaluru (Bangalore) Urban, Karnataka, 560038
                </Link>
                <Link
                  href='mailto:sunrisersdigitalhub@gmail.com'>
                  <i className='fa-sharp fa-solid fa-envelope'></i>
                  sunrisersdigitalhub@gmail.com
                </Link>
                <Link href='tel:+919845732329'>
                  <i className='fa-sharp fa-solid fa-phone-volume'></i>
                  +919845 732329
                </Link>
                <Link href='tel:+919739932329'>
                  <i className='fa-sharp fa-solid fa-phone-volume'></i>
                  +9197399 32329
                </Link>
                {/* <Link href='tel:406-555-0120'>
                  <i className='fa-sharp fa-solid fa-phone-volume'></i>
                  (406) 555-0120
                </Link>
                <Link href='mailto:info@xpovio.com'>
                  <i className='fa-sharp fa-solid fa-envelope'></i>
                  info@xpovio.com
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
        <div className='container'>
          <div className='row align-items-center gaper'>
            <div className='col-12 col-xl-6'>
              <div className='footer__copyright-text text-center text-xl-start'>
                <p>
                  Copyright &copy;
                  <span id='copyYear'>{currentYear}</span> Sunrisers Digital
                  Hub. All Rights Reserved
                </p>
              </div>
            </div>
            <div className='col-12 col-xl-6'>
              <ul className='justify-content-center justify-content-xl-end'>
                <li>
                  <Link href='#home'>Home</Link>
                </li>
                <li>
                  <Link href='#about'>About</Link>
                </li>
                <li>
                  <Link href='#services'>Services</Link>
                </li>
                <li>
                  <Link href='#blogs'>Blog</Link>
                </li>
                <li>
                  <Link href='#contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
