import GridItem from 'shared/components/gridItem/GridItem';

import { styled } from '@mui/material/styles';

const PhotoWrapperStyled = styled(GridItem)(({ theme }) => ({
  justifyContent: "end",
  padding: "0 40px",

  [theme.breakpoints.down("md")]: {
    justifyContent: "cenger",
    marginTop: "50px",
  },

  [theme.breakpoints.up("xl")]: {
    padding: "0 100px 0 0",
  },
}));

export default PhotoWrapperStyled;
