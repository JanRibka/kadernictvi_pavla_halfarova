import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ImageWrapperStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "auto",
  maxWidth: "483px",

  "&:hover": {
    img: {
      transform: "scale(0.95)",
      transformOrigin: "50% 50% initial",
    },
  },

  "&:before": {
    content: "''",
    position: "absolute",
    top: "30px",
    right: "-30px",
    bottom: "-30px",
    left: "30px",
    border: "1px solid " + theme.palette.common.third.main,
    zIndex: "-1",
    width: "auto",
    height: "auto",
  },

  img: {
    width: "inherit",
    height: "inherit",
    transition: "all 500ms ease",
  },
}));

export default ImageWrapperStyled;
