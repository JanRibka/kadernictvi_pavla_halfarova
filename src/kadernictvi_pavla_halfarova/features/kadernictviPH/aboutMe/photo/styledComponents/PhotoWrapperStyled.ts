import GridItem from 'shared/components/gridItem/GridItem';

import { styled } from '@mui/material/styles';

const PhotoWrapperStyled = styled(GridItem)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    marginTop: "50px",
  },
}));

export default PhotoWrapperStyled;
