import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const SocialIconStyled = styled(Box)(({ theme }) => ({
  marginTop: "30px",
  marginBottom: "50px",
  display: "flex",
  justifyContent: "center",
  "& .MuiBox-root": {
    textDecoration: "none",
    margin: "0 20px",
    cursor: "pointer",
    color: "white",
    height: "60px",
    width: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    transition: `border-top-left-radius 0.1s linear 0s,
      border-top-right-radius 0.1s linear 0.1s,
      border-bottom-right-radius 0.1s linear 0.2s,
      border-bottom-left-radius 0.1s linear 0.3s`,
    "&:hover": {
      borderRadius: "50%",
    },
    svg: {
      fontSize: "xx-large",
    },
  },
}));

export default SocialIconStyled;
