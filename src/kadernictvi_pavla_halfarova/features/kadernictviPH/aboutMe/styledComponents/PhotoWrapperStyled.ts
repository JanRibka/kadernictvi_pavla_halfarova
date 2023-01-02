import GridItem from 'shared/components/gridItem/GridItem';

import { styled } from '@mui/material/styles';

const PhotoWrapperStyled = styled(GridItem)(({ theme }) => ({
  justifyContent: "end",
  padding: "0 40px",

  [theme.breakpoints.down("md")]: {
    justifyContent: "cenger",
    marginTop: "80px",
  },

  [theme.breakpoints.up("xl")]: {
    padding: "0 100px 0 0",
  },

  ".photo-wrapper": {
    width: "100%",
    height: "auto",
    maxWidth: "483px",
  },
}));

export default PhotoWrapperStyled;
