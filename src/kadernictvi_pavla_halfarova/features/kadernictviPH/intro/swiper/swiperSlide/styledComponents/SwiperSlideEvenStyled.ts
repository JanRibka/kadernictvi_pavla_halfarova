import { SwiperSlide } from "swiper/react";

import { styled } from "@mui/material/styles";

const SwiperStyledEvenStyled = styled(SwiperSlide)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",

  "& img": {
    display: "block",
    width: "100%",
    height: "100vh",
    objectFit: "cover",
  },
}));

export default SwiperStyledEvenStyled;
