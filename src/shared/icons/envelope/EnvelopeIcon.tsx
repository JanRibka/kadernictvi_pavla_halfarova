import Box from "@mui/material/Box";
import { SxProps, useTheme } from "@mui/material/styles";

import CoverLetter from "../../img/cover-letter.png";
import classes from "./EnvelopeIcon.module.scss";

// https://www.youtube.com/watch?v=4Hm26xcr_dQ
const EnvelopeIcon = () => {
  // Consts
  const theme = useTheme();

  // Styles
  const envelopeStyle: SxProps = {
    width: "300px",
    height: "200px",
    position: "relative",
    background: theme.palette.secondary.main,
    cursor: "pointer",
  };

  const topSideStyle: SxProps = {
    borderBottom: "150px solid " + theme.palette.secondary.main,
    top: "-150px",
    transformOrigin: "bottom",
    transform: "rotateX(180deg)",
    transition: "all 0.8s ease",
    transitionDelay: "0.6s",
  };

  return (
    <Box className={classes.envelope} sx={envelopeStyle}>
      <Box className={classes.topSide} sx={topSideStyle}></Box>
      <Box className={classes.leftSide}></Box>
      <Box className={classes.image}>
        <img src={CoverLetter} alt='cover-letter'></img>
      </Box>
      <Box className={classes.rightSide}></Box>
      <Box className={classes.bottomSide}></Box>
    </Box>
  );
};

export default EnvelopeIcon;

// Styles
