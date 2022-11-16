import { SwiperSlide } from 'swiper/react';

import { styled } from '@mui/material/styles';

const SwiperStyledStyled = styled(SwiperSlide)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    display: "block",
    width: "90%",
    height: "90%",
    // objectFit: "cover",
    // transform: "scale(1.15) rotate(0.0deg)",
    // transition: "all 10s linear",
  },

  // "&.swiper-slide-active, &.swiper-slide-duplicate-active": {
  //   "& img": {
  //     transform: "scale(1) rotate(0.0deg)",
  //   },
  // },
}));

export default SwiperStyledStyled;
