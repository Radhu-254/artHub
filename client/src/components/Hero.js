import React from 'react';
// import components
import CategoryNav from '../components/CategoryNav';
import MainSlider from '../components/MainSlider';
// images
import Img1 from '../img/img_1.jpg';
import Img2 from '../img/img_2.jpg';
//link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='mb-[30px] pt-36 lg:pt-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]'>
          {/* sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* main slider */}
          <div className='w-full max-w-lg lg:max-w-[734px] mx-auto'>
            <MainSlider />
          </div>
          {/* promos */}
          <div className='flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]'>
            {/* promo 1 */}
            <Link to={'products/2'}>
            <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
              {/* text */}
              <div className='flex flex-col max-w-[144px] h-full justify-center'>
                <div className='text-[20px] uppercase font-medium text-black leading-tight mb-4'>
                  Save 25% on <b>Limited Edition </b> <br></br>Paintings
                </div>
              </div>
              {/* img */}
              <img
                className='absolute z-20 lg:left-[160px] left-[220px] top-[20px]  md:top-[50px] md:left-[160px] lg:top-[50px] rounded-2xl  w-[250px] h-[200px] lg:w-[150px] lg:h-[150px]'
                src={Img1}
                alt='img1'
              />
            </div>
            </Link>
            {/* promo 2 */}
            <Link to={'products/3'}>
            <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
              {/* text */}
              <div className='flex flex-col max-w-[144px] h-full justify-center'>
                <div className='text-[20px] uppercase font-medium  text-black leading-tight mb-4'>
                  Save 30% on <b>limited Edition</b><br></br> Prints
                </div>
              </div>
              {/* img */}
              <img
                className='absolute z-20 lg:left-[160px] left-[220px] top-[20px] lg:top-[50px] rounded-2xl  w-[250px] h-[200px] lg:w-[150px] lg:h-[150px]'
                src={Img2}
                alt='img2'
              />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
