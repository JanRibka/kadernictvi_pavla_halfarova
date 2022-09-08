import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const AppContactIconWrapperStyled = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  height: "48px",
  width: "48px",
  svg: {
    fontSize: "xxx-large",
  },
}));

export default AppContactIconWrapperStyled;
