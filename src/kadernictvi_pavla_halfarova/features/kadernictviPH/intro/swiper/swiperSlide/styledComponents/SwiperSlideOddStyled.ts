import { SwiperSlide } from "swiper/react";

import { styled } from "@mui/material/styles";

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
      "& .MuiTypography-root:nth-of-type(1)": {
        visibility: "visible",

        [theme.breakpoints.down("md")]: {
          fontSize: "3rem",
        },
      },
      "& .MuiTypography-root:nth-of-type(2)": {
        span: {
          opacity: 1,
        },
      },
    },
  },
}));

export default SwiperStyledOddStyled;
