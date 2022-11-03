import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const SwiperTextWrapperOddSlide = styled(Box)(({ theme }) => ({
  zIndex: 1,
  left: "5rem",
  position: "absolute",
  transition: "all 1ms linear 1000ms",

  "& .MuiTypography-root:nth-of-type(1)": {
    lineHeight: "0.7",
  },
}));

export default SwiperTextWrapperOddSlide;
