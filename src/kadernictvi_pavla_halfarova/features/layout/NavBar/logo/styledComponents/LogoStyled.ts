import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const LogoStyled = styled(IconButton)(({ theme }) => ({
  width: "110px",
  height: "110px",
  borderRadius: "50%",
  position: "absolute",
  top: "40px",
  left: "50px",
  transition: "all 300ms ease-out",
  boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.75)",

  "&.mobile-menu-opened": {
    top: "10px",
    left: "10px",
  },

  img: {
    borderRadius: "50%",
  },
}));

export default LogoStyled;
