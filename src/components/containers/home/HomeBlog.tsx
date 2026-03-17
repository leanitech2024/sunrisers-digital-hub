import { allBlogs } from 'content-collections';
import Image from 'next/image';
import Link from 'next/link';

const HomeBlog = () => {
  return (
    <section id='blogs' className='section blog fade-wrapper'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-8'>
            <div className='section__header text-center'>
              <span className='sub-title'>
                news & Blog
                <i className='fa-solid fa-arrow-right'></i>
              </span>
              <h2 className='title title-anim'>what&apos;s new in blog</h2>
            </div>
          </div>
        </div>
        <div className='row gaper'>
          <div className='col-12 col-md-6'>
            <div className='blog__single fade-top'>
              <div className='blog__single-thumb topy-tilt'>
                <Link href='blog-single'>
                  <Image
                    src={
                      'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.59300acb.png&w=1920&q=75'
                    }
                    alt='Image'
                    width={1920}
                    height={1080}
                  />
                </Link>
              </div>
              <div className='blog__single-content'>
                <h4>
                  <Link href='#'>
                    A Simple Social Media Marketing Checklist
                  </Link>
                </h4>
                <div className='blog__single-meta'>
                  <Link href='#' className='sub-title'>
                    creative
                    <i className='fa-solid fa-arrow-right'></i>
                  </Link>
                  <p>MARCH 23, 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='blog__single fade-top'>
              <div className='blog__single-thumb topy-tilt'>
                <Link href='blog-single'>
                  <Image
                    src={
                      'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.67d336f9.png&w=1920&q=75'
                    }
                    alt='Image'
                    width={1920}
                    height={1080}
                  />
                </Link>
              </div>
              <div className='blog__single-content'>
                <h4>
                  <Link href='#'>
                    Transforming Challenges into Opportunities
                  </Link>
                </h4>
                <div className='blog__single-meta'>
                  <Link href='#' className='sub-title'>
                    creative
                    <i className='fa-solid fa-arrow-right'></i>
                  </Link>
                  <p>MARCH 23, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul>
        {allBlogs.map((post) => (
          <li key={post._meta.path}>
            <a href={`/blogs/${post._meta.path}`}>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <p>
                Last modified:{' '}
                {new Date(post.lastModified).toLocaleDateString()}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <ul>
        {allBlogs.map((post) => (
          <li key={post._meta.path}>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeBlog;
