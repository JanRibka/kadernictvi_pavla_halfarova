import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ImageStyled = styled(Box)(({ theme }) => ({
  width: "90%",
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 3,
  transition: "all 1s ease",
  img: {
    width: "100%",
  },
}));

export default ImageStyled;
