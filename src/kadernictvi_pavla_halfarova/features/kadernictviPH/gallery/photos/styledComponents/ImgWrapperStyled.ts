import GridItem from 'shared/components/gridItem/GridItem';

import { styled } from '@mui/material/styles';

const ImgWrapperStyled = styled(GridItem)(({ theme }) => ({
  padding: "20px 40px",
  maxWidth: "400px",
  transform: "scale(1)",
  transition: "all 300ms ease",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },

  [theme.breakpoints.between("md", "xl")]: {
    padding: "10px 40px",
  },

  [`@media (min-width: 1921px)`]: {
    margin: "0 30px",
    maxWidth: "440px",

    "&:first-of-type": {
      margin: "0 30px 0 0 ",
    },

    "&:last-of-type": {
      margin: "0 0 0 30px",
    },
  },
}));

export default ImgWrapperStyled;
