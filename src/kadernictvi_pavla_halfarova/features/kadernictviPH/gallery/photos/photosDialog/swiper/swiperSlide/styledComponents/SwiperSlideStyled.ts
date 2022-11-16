import { SwiperSlide } from 'swiper/react';

import { styled } from '@mui/material/styles';

const SwiperStyledStyled = styled(SwiperSlide)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",

  "& div": {
    alignItems: "baseline",

    "& img": {
      display: "block",
      height: "94%",
      width: "auto",
    },
  },
}));

export default SwiperStyledStyled;
