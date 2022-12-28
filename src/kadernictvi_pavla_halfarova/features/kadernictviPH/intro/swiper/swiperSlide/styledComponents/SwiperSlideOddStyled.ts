import { SwiperSlide } from 'swiper/react';

import { styled } from '@mui/material/styles';

const SwiperStyledOddStyled = styled(SwiperSlide)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",

  "& img": {
    display: "block",
    width: "100%",
    height: "100vh",
    objectFit: "cover",
  },

  "&.swiper-slide-active, &.swiper-slide-duplicate-active": {
    "& .slide-text": {
      "& .title-main": {
        visibility: "visible",
        fontSize: "5rem",
        lineHeight: "0.7",

        [theme.breakpoints.down("md")]: {
          fontSize: "3rem",
          height: "2.2rem",
        },
      },
      "& .title-secondary": {
        span: {
          opacity: 1,
        },
      },
    },
  },
}));

export default SwiperStyledOddStyled;
