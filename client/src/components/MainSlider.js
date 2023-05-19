import React from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
// import required modules
import { Pagination } from 'swiper';
// img
import Img1 from '../img/img_1.webp';
import Img2 from '../img/img_2.webp';
import Img3 from '../img/img_3.webp';
//Link
import { Link } from 'react-router-dom';

// data
const sliderData = [
  {
    img: Img1,
    pretitle: 'Special offer',
    titlePart1: ' 10% Off',
    titlePart2: 'On Silk Scarves',
    titlePart3: 'Collection',
    btnText: 'Shop now',
    link:'/products/8'
  },
  {
    img: Img2,
    pretitle: 'Special offer',
    titlePart1: '15% Off',
    titlePart2: 'On Cotton Scarves',
    titlePart3: 'Collection',
    btnText: 'Shop now',
    link:'/products/7'
  },
  {
    img: Img3,
    pretitle: 'Special offer',
    titlePart1: '12% Off',
    titlePart2: ' On Digital Prints',
    titlePart3: 'Collection',
    btnText: 'Shop now',
    link:'/products/4'
  },
];

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className='mainSlider h-full bg-white xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl '
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]'>
                {/* text */}
                <div className='w-full lg:flex-1'>
                  <div className='uppercase mb-1 text-center lg:text-left text-primary font-bold'>
                    {slide.pretitle}
                  </div>
                  <div className='text-3xl md:text-[46px] text-slate-500 font-semibold captalize leading-none text-center lg:text-left mb-8 xl:mb-20'>
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3}
                  </div>
                  <Link to={slide.link}>
                  <button className='btn bg-slate-400 text-white hover:slate-200 mx-auto lg:mx-0'>
                    Shop now
                  </button>
                  </Link>
                </div>
                {/* img */}
                <div className='flex-1'>
                  <img
                    className='xl:absolute xl:-right-0 xl:-top-50'
                    src={slide.img}
                    alt=''
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
