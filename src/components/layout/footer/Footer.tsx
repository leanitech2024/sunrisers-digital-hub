import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className='footer section pb-0'
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}>
      <div className='container'>
        <div className='row gaper'>
          <div className='col-12 col-lg-5 col-xl-6'>
            <div className='footer__single'>
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
              <div className='footer__single-meta'>
                <Link
                  href='https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17'
                  target='_blank'>
                  <i className='fa-sharp fa-solid fa-location-dot'></i>
                  Bangalore, India
                </Link>
                <Link href='tel:+919845732329'>
                  <i className='fa-sharp fa-solid fa-phone-volume'></i>
                  +919845 732329
                </Link>
                <Link href='tel:+919739932329'>
                  <i className='fa-sharp fa-solid fa-phone-volume'></i>
                  +9197399 32329
                </Link>
                <Link href='mailto:sunrisersdigitalhub@gmail.com'>
                  <i className='fa-sharp fa-solid fa-envelope'></i>
                  sunrisersdigitalhub@gmail.com
                </Link>
              </div>
              <div className='footer__cta text-start'>
                <Link href='tel:+919845732329' className='btn btn--secondary'>
                  book a call now
                </Link>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-2 col-xl-2'>
            <div className='footer__single'>
              <div className='footer__single-intro'>
                <h5>discover</h5>
              </div>
              <div className='footer__single-content'>
                <ul>
                  <li>
                    <Link href='#'>About Us</Link>
                  </li>
                  <li>
                    <Link href='#'>Award Winning</Link>
                  </li>
                  <li>
                    <Link href='#'>News & Blog</Link>
                  </li>
                  <li>
                    <Link href='#'>careers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-5 col-xl-4'>
            <div className='footer__single'>
              <div className='footer__single-intro'>
                <h5>Subscribe our newsletter</h5>
              </div>
              <div className='footer__single-content'>
                <p>
                  Welcome to our Sunrisers Digital Hub. We specialize in helping
                  business most like yours succeed online.
                </p>
                <div className='footer__single-form'>
                  <form action='#' method='post'>
                    <div className='input-email'>
                      <input
                        type='email'
                        name='subscribe-news'
                        id='subscribeNews'
                        placeholder='Enter Your Email'
                        required
                      />
                      <button type='submit' className='subscribe'>
                        <span className='visually-hidden'>Send </span>
                        <i className='fa-sharp fa-solid fa-paper-plane'></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='footer__copyright'>
              <div className='row align-items-center gaper'>
                <div className='col-12 col-lg-8'>
                  <div className='footer__copyright-text text-center text-lg-start'>
                    <p>
                      Copyright &copy;
                      <span id='copyYear'>{currentYear}</span>{' '}
                      <Link href='#' target='_blank'>
                        Sunrisers Digital Hub{' '}
                      </Link>
                      . All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <div className='social justify-content-center justify-content-lg-end'>
                    <Link href='https://www.facebook.com/' target='_blank'>
                      <i className='fa-brands fa-facebook-f'></i>
                    </Link>
                    <Link href='https://www.twitter.com/' target='_blank'>
                      <i className='fa-brands fa-twitter'></i>
                    </Link>
                    <Link href='https://www.pinterest.com/' target='_blank'>
                      <i className='fa-brands fa-linkedin-in'></i>
                    </Link>
                    <Link href='https://www.instagram.com/' target='_blank'>
                      <i className='fa-brands fa-instagram'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
