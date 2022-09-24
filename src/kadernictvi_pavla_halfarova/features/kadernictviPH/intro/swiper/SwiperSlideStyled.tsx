import { SwiperSlide } from 'swiper/react';

import { styled } from '@mui/material/styles';

const SwiperStyledStyled = styled(SwiperSlide)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",

  "& :first-child": {
    position: "absolute",
  },

  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export default SwiperStyledStyled;
