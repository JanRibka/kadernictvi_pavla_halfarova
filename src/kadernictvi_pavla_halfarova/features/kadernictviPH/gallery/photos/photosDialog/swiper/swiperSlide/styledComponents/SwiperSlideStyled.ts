import { SwiperSlide } from 'swiper/react';

import { styled } from '@mui/material/styles';

const SwiperStyledStyled = styled(SwiperSlide)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& div": {
    alignItems: "center",

    "& img": {
      display: "block",
      height: "94%",
      width: "auto",
    },
  },
}));

export default SwiperStyledStyled;
