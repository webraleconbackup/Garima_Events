import React from 'react';
import { Link } from 'react-router-dom';
import { ourGalleryData, stats } from '../data';
import { Helmet } from 'react-helmet';

function Ourgallery() {
  return (
    <>
      <div>
        <Helmet>
          <title>
            Our Gallery | Garima Decoration – Event & Party Decoration Experts
          </title>
          <meta
            name='description'
            content='Explore the stunning gallery of Garima Decoration, showcasing our expertise in event and party decorations. From weddings to corporate events, see how we transform spaces into unforgettable experiences.'
          />
          <meta
            name='keywords'
            content="Kids Birthday Decoration Gallery Gurgaon, Birthday Party Photos for Kids, Children's Birthday Celebration Ideas, Garima Decoration Kids Birthday Gallery, Fun Birthday Setup Pictures"
          />

          <meta
            property='og:title'
            content='Kids Birthday Decoration Gallery | Garima Decoration – Fun & Colorful Birthday Setups in Gurgaon'
          />

          <meta
            property='og:description'
            content='Explore Garima Decoration’s Kids Birthday Gallery! Fun and colorful birthday setups, themed décor, and exciting party styling ideas in Gurgaon.'
          />

          <meta
            property='og:url'
            content='https://www.garimadecoration.in/our-gallery'
          />
          <meta property='og:type' content='website' />
          <meta name='site_name' content='Garima Decoration' />
          <meta name='robots' content='index, follow' />
          <link
            rel='canonical'
            href='https://www.garimadecoration.in/our-gallery'
          />
        </Helmet>
        <hero>
          <div
            className='w-full h-[265px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center'
            style={{
              backgroundImage: "url('/ourgallery/ourgalleryhero.jpg')",
            }}
          >
            <div className='relative z-10 text-center text-white'>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                Our Gallery
              </h1>
              <p className='text-sm md:text-base'>
                <span className='hover:underline cursor-pointer mr-6 font-bold'>
                  <Link to='/'>Home</Link>
                </span>
                <span className='mx-2 font-bold'>Our Gallery</span>
              </p>
            </div>
          </div>
        </hero>

        {/* ************       Section 1        *********** */}

        <section className='w-full px-4 py-8 bg-white'>
          <h2 className='text-4xl font-semibold text-center my-16'>
            Our{' '}
            <span className='text-orange-500 border-b-2 border-orange-500'>
              Gallery
            </span>
          </h2>

          <div className='flex justify-center flex-wrap gap-8'>
            {ourGalleryData.map((item) => (
              <div
                key={item.id}
                className='w-[350px] md:w-[300px] h-[400px] overflow-hidden rounded-md shadow-md transition-transform duration-1000 hover:scale-110'
              >
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </section>

        {/* *************      2nd Section       ************* */}

        <section className='bg-gray-50 pt-10 mt-10 pb-16 flex w-full justify-center'>
          <div className='max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-y-20  text-center w-full'>
            {stats.map((stat, index) => (
              <div key={index} className='relative'>
                {/* Line + Dot */}
                <div className='flex flex-col items-center'>
                  <div className='w-1 h-16 bg-[#ED52DA] mb-1'></div>
                  <div className='w-3 h-3 bg-[#ED52DA] rounded-full mb-4'></div>
                </div>

                {/* Number */}
                <h2 className='text-[#ED52DA] text-4xl font-bold relative inline-block'>
                  {stat.value}
                </h2>

                {/* Label */}
                <p className='text-sm md:text-lg mt-3 text-black font-bold'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Ourgallery;
