import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/bundle";

import { forwardRef, Ref } from "react";
import { useTranslation } from "react-i18next";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import Box from "@mui/material/Box";

import Intro1 from "./img/Intro_1.jpg";
import SwiperStyled from "./swiper/styledComponents/SwiperStyled";
import SwiperSlideEvenStyled from "./swiper/swiperSlide/styledComponents/SwiperSlideEvenStyled";
import SwiperSlideOddStyled from "./swiper/swiperSlide/styledComponents/SwiperSlideOddStyled";
import SwiperText1OddStyled from "./swiper/swiperText/styledComponents/SwiperText1OddStyled";
import SwiperText2OddStyled from "./swiper/swiperText/styledComponents/SwiperText2OddStyled";
import SwiperTextWrapperOddStyled from "./swiper/swiperText/styledComponents/SwiperTextWrapperOddStyled";

interface IProps {}

const Intro = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\intro\\intro"]);

  return (
    <Box ref={ref} sx={{ position: "relative" }} data-index={0}>
      {/* Swiper */}
      <SwiperStyled
        navigation
        // loop
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        slidesPerView={1}
        speed={1000}
        effect='fade'
        fadeEffect={{
          crossFade: true,
        }}
        height={100}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
      >
        {/* Slide 1 */}
        <SwiperSlideOddStyled>
          <SwiperTextWrapperOddStyled className='slide-text'>
            <SwiperText1OddStyled variant='h2'>
              {t("hairdressers")}
            </SwiperText1OddStyled>
            <SwiperText2OddStyled variant='h2'>
              {t("pavlaHalfarova")
                .split("")
                .map((letter, i) => (
                  <span key={"menu-btn-letter_" + i}>{letter}</span>
                ))}
            </SwiperText2OddStyled>
          </SwiperTextWrapperOddStyled>
          <img
            src={Intro1}
            alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 1'
            loading='lazy'
          />
        </SwiperSlideOddStyled>
        {/* Slide 2 */}
        {/* <SwiperSlideEvenStyled>
          <img
            src={Intro2}
            alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 2'
            loading='lazy'
          />
        </SwiperSlideEvenStyled> */}
        {/* Slide 3 */}
        {/* <SwiperSlideOddStyled>
          <img
            src={Intro3}
            alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 3'
            loading='lazy'
          />
        </SwiperSlideOddStyled> */}
        {/* Slide 4 */}
        {/* <SwiperSlideEvenStyled>
          <img
            src={Intro4}
            alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 4'
            loading='lazy'
          />
        </SwiperSlideEvenStyled> */}
        {/* Slide 5 */}
        {/* <SwiperSlideOddStyled>
          <img
            src={Intro5}
            alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 5'
            loading='lazy'
          />
        </SwiperSlideOddStyled> */}
      </SwiperStyled>
    </Box>
  );
});

export default Intro;
