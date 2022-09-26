// import 'react-responsive-carousel/lib/styles/carousel.min.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/bundle';

import { forwardRef, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Intro1 from '../../../../shared/img/Intro_1.jpg';
import Intro2 from '../../../../shared/img/Intro_2.jpg';
import Intro3 from '../../../../shared/img/Intro_3.jpg';
import Intro4 from '../../../../shared/img/Intro_4.jpg';
import Intro5 from '../../../../shared/img/Intro_5.jpg';
import SwiperSlideStyled from './swiper/SwiperSlideStyled';
import SwiperStyled from './swiper/SwiperStyled';
import SwiperTextSlide from './swiper/SwiperTextStyled';
import SwiperText2Styled from './swiper/swiperText/SwiperText2Styled';

interface IProps {}

const Intro = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\intro\\intro"]);

  return (
    <Box ref={ref} sx={{ position: "relative" }}>
      {/* <Box // TODO: Udelat styled komponentu
        sx={{
          position: "absolute",
          top: "calc(50% - 4.5rem)",
          left: "5rem", // TODO: pokud bude mensi nez MD zmensi se pismo
          zIndex: "1", // TODO: Prodat animation delay podle belava makeup
        }}
      >
        <Typography variant='h1' sx={{ fontSize: "4rem" }}>
          {t("hairArtist")}
        </Typography>
        <Typography variant='h2' sx={{ fontSize: "3rem" }}>
          {t("pavlaHalfarova")}
        </Typography>
      </Box> */}
      {/* Swiper */}
      <SwiperStyled
        navigation
        loop
        // autoplay={{ delay: 8000, disableOnInteraction: false }}
        slidesPerView={1}
        speed={1000}
        effect='fade'
        fadeEffect={{
          crossFade: true,
        }}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
      >
        <SwiperSlideStyled>
          <SwiperTextSlide className='slide-text'>
            <Typography variant='h1' sx={{ fontSize: "5rem", fontFamily: "'Teko', sans-serif", color: "white", transition: "all 100ms linear 1000ms" }}>
              {t("hairArtist")}
            </Typography>            
              <SwiperText2Styled variant='h2'>
                {t("pavlaHalfarova")}
              </SwiperText2Styled>            
          </SwiperTextSlide>
          <img src={Intro1} alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 1' />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <Typography>bbb</Typography>
          <img src={Intro2} alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 2' />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <Typography>ccc</Typography>
          <img src={Intro3} alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 3' />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <Typography>ddd</Typography>
          <img src={Intro4} alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 4' />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <Typography>eee</Typography>
          <img src={Intro5} alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 5' />
        </SwiperSlideStyled>
      </SwiperStyled>
    </Box>
  );
});

export default Intro;
