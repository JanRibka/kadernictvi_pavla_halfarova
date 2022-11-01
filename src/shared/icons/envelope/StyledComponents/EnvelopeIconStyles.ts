import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const EnvelopeIconStyled = styled(Box)(({ theme }) => ({
  width: "48px",
  height: "32px",
  position: "relative",
  background: theme.palette.text.primary,
  cursor: "pointer",

  "&:hover": {
    // ".top-side": {
    //   transform: "rotateX(0deg)",
    //   zIndex: 3,
    //   transitionDelay: "0.3s",
    // },
    // ".image": {
    //   top: "-70%",
    //   zIndex: 3,
    //   transitionDelay: "0.6s",
    // },
  },
}));

export default EnvelopeIconStyled;
