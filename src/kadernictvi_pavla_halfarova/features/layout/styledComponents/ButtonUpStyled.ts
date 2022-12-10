import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const ButtonUpStyled = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  right: "40px",
  bottom: "40px",
  borderRadius: "5px",
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.common.third.main,
  zIndex: 1,
  transform: "translateY(100px)",
  transition: "transform 450ms ease-in-out",

  "&.to-top-active": {
    transform: "translateY(0)",
  },

  [theme.breakpoints.down("sm")]: {
    right: "15px",
    bottom: "15px",
  },

  ":hover": {
    backgroundColor: theme.palette.common.third.dark,
  },
}));

export default ButtonUpStyled;
