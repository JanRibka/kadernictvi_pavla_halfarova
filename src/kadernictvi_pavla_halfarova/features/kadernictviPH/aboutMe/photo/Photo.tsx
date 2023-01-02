// Import Swiper styles
import 'swiper/css';
import 'swiper/css/lazy';

// import required modules
import { Autoplay, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import pavlaHalfarova from './img/pavlaHalfarova.jpg';
import ImageWrapperStyled from './styledComponents/ImageWrapperStyled';

const Photo = () => {
  return (
    <ImageWrapperStyled>
      <Swiper lazy autoplay loop modules={[Autoplay, Lazy]}>
        <SwiperSlide>
          <img
            src={pavlaHalfarova}
            alt='Pavla Halfarová'
            loading='lazy'
            // className='swiper-lazy'
          />
          {/* <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pavlaHalfarova}
            alt='Pavla Halfarová'
            loading='lazy'
            // loading='lazy'
          />
          {/* <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pavlaHalfarova}
            alt='Pavla Halfarová'
            loading='lazy'
            // className='swiper-lazy'
          />
          {/* <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pavlaHalfarova}
            alt='Pavla Halfarová'
            loading='lazy'
            // className='swiper-lazy'
          />
          {/* <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div> */}
        </SwiperSlide>
      </Swiper>
    </ImageWrapperStyled>
  );
};

export default Photo;
