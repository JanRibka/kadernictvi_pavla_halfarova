import GridItem from 'shared/components/gridItem/GridItem';

import { styled } from '@mui/material/styles';

const ImgWrapperStyled = styled(GridItem)(({ theme }) => ({
  padding: "20px 40px",
  maxWidth: "400px",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },

  [theme.breakpoints.between("md", "xl")]: {
    padding: "10px 40px",
  },

  // margin: "0",

  // [theme.breakpoints.up("xl")]: {
  //   margin: "0 5px",
  //   maxWidth: "400px",

  //   "&:first-of-type": {
  //     margin: "0 5px 0 0 ",
  //   },

  //   "&:last-of-type": {
  //     margin: "0 0 0 5px",
  //   },
  // },

  [theme.breakpoints.up("xxl")]: {
    margin: "0 40px",
    maxWidth: "400px",

    "&:first-of-type": {
      margin: "0 40px 0 0 ",
    },

    "&:last-of-type": {
      margin: "0 0 0 40px",
    },
  },
}));

export default ImgWrapperStyled;
