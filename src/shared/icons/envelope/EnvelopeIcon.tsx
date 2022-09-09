import Box from '@mui/material/Box';
import { SxProps, useTheme } from '@mui/material/styles';

import CoverLetter from '../../img/cover-letter.png';
import classes from './EnvelopeIcon.module.scss';

// Ikona musí být v rozlišení 3/2
// TODO: Předělat scss na styled a odjebat z ptojektu scss ataky spackage.json
const EnvelopeIcon = () => {
  // Consts
  const theme = useTheme();

  // Styles
  const envelopeStyle: SxProps = {
    background: theme.palette.secondary.main,
  };

  const topSideStyle: SxProps = {
    borderBottom: "24px solid " + theme.palette.secondary.main,
  };

  const bottomSideStyle: SxProps = {
    borderBottom: "24px solid " + theme.palette.secondary.dark,
  };

  const leftSideStyle: SxProps = {
    borderLeft: "20px solid " + theme.palette.secondary.dark,
  };

  const rightSideStyle: SxProps = {
    borderRight: "20px solid " + theme.palette.secondary.dark,
  };

  return (
    <Box className={classes.envelope} sx={envelopeStyle}>
      <Box className={classes.topSide + " top-side"} sx={topSideStyle}></Box>
      <Box className={classes.leftSide} sx={leftSideStyle}></Box>
      <Box className={classes.image + " image"}>
        <img src={CoverLetter} alt='cover-letter'></img>
      </Box>
      <Box className={classes.rightSide} sx={rightSideStyle}></Box>
      <Box className={classes.bottomSide} sx={bottomSideStyle}></Box>
    </Box>
  );
};

export default EnvelopeIcon;
