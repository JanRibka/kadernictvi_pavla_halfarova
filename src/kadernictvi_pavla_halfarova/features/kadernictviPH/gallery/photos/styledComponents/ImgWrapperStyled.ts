import GridItem from 'shared/components/gridItem/GridItem';

import { styled } from '@mui/material/styles';

const ImgWrapperStyled = styled(GridItem)(({ theme }) => ({
  transition: "all 300ms ease",
  position: "relative",

  "&:hover": {
    "& .top": {
      left: "10%",
      width: "80%",
      height: "1px",
    },

    "& .right": {
      top: "10%",
      height: "80%",
      width: "1px",
    },

    "& .bottom": {
      left: "10%",
      width: "80%",
      height: "1px",
    },

    "& .left": {
      top: "10%",
      height: "80%",
      width: "1px",
    },
  },

  ".line": {
    position: "absolute",
    width: "0px",
    height: "0px",
    transition: "all 500ms ease",
    background: "white",
  },

  ".top": {
    top: "10%",
    left: "50%",
  },

  ".right": {
    top: "50%",
    right: "10%",
  },

  ".bottom": {
    bottom: "10%",
    left: "50%",
  },

  ".left": {
    left: "10%",
    top: "50%",
  },
}));

export default ImgWrapperStyled;
