import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const SwiperTextSlide = styled(Box)(({ theme }) => ({
  zIndex: 1,
  left: "5rem",
  position: "absolute",
  opacity: 0,
}));

export default SwiperTextSlide;
