import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ImageWrapperStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: "0 20px 20px 10px",
  width: "100%",
  height: "auto",
  maxWidth: "483px",

  "&:before": {
    content: "''",
    position: "absolute",
    top: "30px",
    right: "0px",
    bottom: "0",
    left: "45px",
    border: "1px solid " + theme.palette.common.third.main,
    zIndex: "-1",
    width: "auto",
    height: "auto",
  },

  img: {
    width: "inherit",
    height: "inherit",
  },
}));

export default ImageWrapperStyled;
