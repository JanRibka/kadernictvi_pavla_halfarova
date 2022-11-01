import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';

const ToggleButtonStyled = styled(ToggleButton)(({ theme }) => ({
  border: "0",
  position: "relative",
  transition: "all 200ms ease-in-out",

  "&:after": {
    position: "absolute",
    content: "''",
    bottom: "0px",
    left: "15px",
    width: "calc(100% - 30px)",
    height: "2px",
    backgroundColor: "white",
    transform: "scaleX(0)",
    transformOrigin: "center",
    transition: "transform 300ms ease-in-out",
  },

  "&:active": {
    backgroundColor: "transparent",
  },

  "&:hover": {
    paddingBottom: "20px",
    paddingTop: "10px",
    backgroundColor: "transparent",
  },

  "&.Mui-selected": {
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor: "transparent",
    },

    "&:after": {
      transform: "scaleX(1)",
      transformOrigin: "center",
    },
  },
  span: {
    display: "none",
  },
  img: {
    height: "3rem",
    borderRadius: "3px",
  },
}));

export default ToggleButtonStyled;
