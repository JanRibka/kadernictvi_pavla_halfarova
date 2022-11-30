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

    ".description-wrapper": {
      ".description": {
        opacity: 1,
      },
    },

    ".image": {
      filter: "brightness(0.5)",
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

  ".description-wrapper": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",

    ".description": {
      opacity: 0,
      transition: "all 500ms ease",
      color: theme.palette.text.primary,
      width: "60%",
    },
  },
}));

export default ImgWrapperStyled;
