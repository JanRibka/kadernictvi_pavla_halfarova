import { forwardRef, Ref } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import Intro1 from './img/Intro_1.jpg';
import SwiperSlideOddStyled from './swiper/swiperSlide/styledComponents/SwiperSlideOddStyled';
import SwiperText1OddStyled from './swiper/swiperText/styledComponents/SwiperText1OddStyled';
import SwiperTextWrapperOddStyled from './swiper/swiperText/styledComponents/SwiperTextWrapperOddStyled';

interface IProps {}

const Intro = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\intro\\intro"]);

  return (
    <Box
      ref={ref}
      component='section'
      sx={{ position: "relative" }}
      data-index={0}
    >
      <SwiperSlideOddStyled>
        <SwiperTextWrapperOddStyled className='slide-text'>
          <SwiperText1OddStyled variant='h1' className='title-main'>
            {t("titleText")}
          </SwiperText1OddStyled>
        </SwiperTextWrapperOddStyled>
        <img src={Intro1} alt={t("photo1Alt") as string} loading='lazy' />
      </SwiperSlideOddStyled>
    </Box>
  );
});

export default Intro;
