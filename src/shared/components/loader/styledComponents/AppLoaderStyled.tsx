import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const AppLoaderStyled = styled(Box)(
  ({ theme }) => `
    width: 175px;
    height:60px;
    position: relative;
    // position: absolute;
    // left:50%;
    // top:50%;
    // transform: translate(-50%, -50%);
`
);

export default AppLoaderStyled;
