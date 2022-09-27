import { SwiperSlide } from 'swiper/react';

import { styled } from '@mui/material/styles';

const SwiperStyledStyled = styled(SwiperSlide)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",

  "& > :first-child": {
    position: "absolute",
  },

  "& .slide-text": {
    transition: "all 1ms linear 1000ms",
    "& .MuiTypography-root:nth-child(1)": {
      lineHeight: "0.7"
    },
  },

  "&:nth-child(odd)": {
    "& img": {
      transform: "scale(1.15) rotate(0.0deg)",
    },
    "&.swiper-slide-active, &.swiper-slide-duplicate-active": {
      "& .slide-text": {
        opacity: 1,

        "& .MuiTypography-root:nth-child(1)": {
          fontSize: "6rem"
        },
        "& .MuiTypography-root:nth-child(2)": {
          // display: "block",
          // color: theme.palette.common.text.pink,
        }
      },
      "& img": {
        transform: "scale(1.0) rotate(-0.0deg)",
      },
    },
  },

  "&:nth-child(even)": {
    "& img": {
      transform: "scale(1.0) rotate(-0.0deg)",
    },
    "&.swiper-slide-active, &.swiper-slide-duplicate-active": {
      "& .slide-text": {
        opacity: 1,

        "& .MuiTypography-root:nth-child(1)": {
          fontSize: "6rem"
        },
        "& .MuiTypography-root:nth-child(2)": {
          // display: "block",
          // color: theme.palette.common.text.pink,
        }
      },

      "& img": {
        transform: "scale(1.15) rotate(0.0deg)",
      },
    },
  },

  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "all 9s linear",
  },
}));

export default SwiperStyledStyled;
