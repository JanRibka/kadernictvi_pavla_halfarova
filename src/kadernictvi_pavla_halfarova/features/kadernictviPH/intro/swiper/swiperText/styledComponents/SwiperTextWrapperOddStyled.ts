import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const SwiperTextWrapperOddSlide = styled(Box)(({ theme }) => ({
  zIndex: 1,
  left: "5rem",
  position: "absolute",
  transition: "all 1ms linear 1000ms",

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    left: 0,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  "& .title-main": {
    lineHeight: "0.7",
  },
}));

export default SwiperTextWrapperOddSlide;
